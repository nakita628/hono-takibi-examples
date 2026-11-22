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

export function getV2Key() {
  return ['v2'] as const
}

export function getV1AccountHoldersQueryKey(
  args: InferRequestType<typeof client.v1.account_holders.$get>,
) {
  return ['v1', '/v1/account_holders', args] as const
}

export function getV1AccountHoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_holders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.account_holders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_holders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountHoldersQueryKey>
  >({
    queryKey: getV1AccountHoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.account_holders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1AccountHolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_holders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.account_holders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_holders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountHoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountHoldersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1AccountHolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_holders.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.account_holders.$post>,
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
    const mutationDefaults = getPostV1AccountHoldersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AccountHoldersAccountHolderTokenQueryKey(
  args: InferRequestType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>,
) {
  return ['v1', '/v1/account_holders/:account_holder_token', args] as const
}

export function getV1AccountHoldersAccountHolderTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AccountHoldersAccountHolderTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.account_holders[':account_holder_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountHoldersAccountHolderToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.account_holders)[':account_holder_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1AccountHoldersAccountHolderTokenQueryKey>
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
      ...getV1AccountHoldersAccountHolderTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1AccountHoldersAccountHolderToken<
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
                ReturnType<(typeof client.v1.account_holders)[':account_holder_token']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.account_holders)[':account_holder_token']['$patch']>,
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
    const mutationDefaults = getPatchV1AccountHoldersAccountHolderTokenMutationOptions<
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

export function getV1AccountHoldersAccountHolderTokenDocumentsQueryKey(
  args: InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
  >,
) {
  return ['v1', '/v1/account_holders/:account_holder_token/documents', args] as const
}

export function getV1AccountHoldersAccountHolderTokenDocumentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AccountHoldersAccountHolderTokenDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.account_holders[':account_holder_token'].documents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountHoldersAccountHolderTokenDocuments<
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
  args: () => InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['documents']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AccountHoldersAccountHolderTokenDocumentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1AccountHoldersAccountHolderTokenDocuments<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountHoldersAccountHolderTokenDocumentsMutationOptions<
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

export function getV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenQueryKey(
  args: InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
  >,
) {
  return [
    'v1',
    '/v1/account_holders/:account_holder_token/documents/:document_token',
    args,
  ] as const
}

export function getV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.account_holders[':account_holder_token'].documents[':document_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountHoldersAccountHolderTokenDocumentsDocumentToken<
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
  args: () => InferRequestType<
    (typeof client.v1.account_holders)[':account_holder_token']['documents'][':document_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AccountHoldersAccountHolderTokenDocumentsDocumentTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1AccountHoldersAccountHolderTokenEntities<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AccountHoldersAccountHolderTokenEntitiesMutationOptions<
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

export function createDeleteV1AccountHoldersAccountHolderTokenEntitiesEntityToken<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1AccountHoldersAccountHolderTokenEntitiesEntityTokenMutationOptions<
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

export function getV1AccountsQueryKey(args: InferRequestType<typeof client.v1.accounts.$get>) {
  return ['v1', '/v1/accounts', args] as const
}

export function getV1AccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AccountsQueryKey>
  >({
    queryKey: getV1AccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1AccountsAccountTokenQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_token', args] as const
}

export function getV1AccountsAccountTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AccountsAccountTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountsAccountToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.accounts)[':account_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AccountsAccountTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1AccountsAccountToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1AccountsAccountTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AccountsAccountTokenSpendLimitsQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_token/spend_limits', args] as const
}

export function getV1AccountsAccountTokenSpendLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AccountsAccountTokenSpendLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_token'].spend_limits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountsAccountTokenSpendLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['spend_limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.accounts)[':account_token']['spend_limits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1AccountsAccountTokenSpendLimitsQueryKey>
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
      ...getV1AccountsAccountTokenSpendLimitsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2AuthRulesQueryKey(args: InferRequestType<typeof client.v2.auth_rules.$get>) {
  return ['v2', '/v2/auth_rules', args] as const
}

export function getV2AuthRulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.auth_rules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AuthRulesQueryKey>
  >({
    queryKey: getV2AuthRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.auth_rules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2AuthRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.auth_rules.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AuthRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AuthRulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2AuthRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.auth_rules.$post>,
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
    const mutationDefaults = getPostV2AuthRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2AuthRulesAuthRuleTokenQueryKey(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>,
) {
  return ['v2', '/v2/auth_rules/:auth_rule_token', args] as const
}

export function getV2AuthRulesAuthRuleTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AuthRulesAuthRuleTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.auth_rules[':auth_rule_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AuthRulesAuthRuleToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AuthRulesAuthRuleTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV2AuthRulesAuthRuleToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2AuthRulesAuthRuleTokenMutationOptions<
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

export function createPatchV2AuthRulesAuthRuleToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2AuthRulesAuthRuleTokenMutationOptions<
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

export function createPatchV2AuthRulesAuthRuleTokenEntities<
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
                ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['entities']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['entities']['$patch']>,
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
    const mutationDefaults = getPatchV2AuthRulesAuthRuleTokenEntitiesMutationOptions<
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

export function createPostV2AuthRulesAuthRuleTokenDraft<
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
                ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['draft']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['draft']['$post']>,
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
    const mutationDefaults = getPostV2AuthRulesAuthRuleTokenDraftMutationOptions<
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

export function getV2AuthRulesAuthRuleTokenFeaturesQueryKey(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>,
) {
  return ['v2', '/v2/auth_rules/:auth_rule_token/features', args] as const
}

export function getV2AuthRulesAuthRuleTokenFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AuthRulesAuthRuleTokenFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.auth_rules[':auth_rule_token'].features.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AuthRulesAuthRuleTokenFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.auth_rules)[':auth_rule_token']['features']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2AuthRulesAuthRuleTokenFeaturesQueryKey>
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
      ...getV2AuthRulesAuthRuleTokenFeaturesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2AuthRulesAuthRuleTokenPromote<
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
                ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['promote']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['promote']['$post']>,
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
    const mutationDefaults = getPostV2AuthRulesAuthRuleTokenPromoteMutationOptions<
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

export function getV2AuthRulesAuthRuleTokenVersionsQueryKey(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>,
) {
  return ['v2', '/v2/auth_rules/:auth_rule_token/versions', args] as const
}

export function getV2AuthRulesAuthRuleTokenVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AuthRulesAuthRuleTokenVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.auth_rules[':auth_rule_token'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AuthRulesAuthRuleTokenVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.auth_rules)[':auth_rule_token']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2AuthRulesAuthRuleTokenVersionsQueryKey>
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
      ...getV2AuthRulesAuthRuleTokenVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2AuthRulesAuthRuleTokenReportQueryKey(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>,
) {
  return ['v2', '/v2/auth_rules/:auth_rule_token/report', args] as const
}

export function getV2AuthRulesAuthRuleTokenReportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AuthRulesAuthRuleTokenReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.auth_rules[':auth_rule_token'].report.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AuthRulesAuthRuleTokenReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['report']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2AuthRulesAuthRuleTokenReportQueryKey>
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
      ...getV2AuthRulesAuthRuleTokenReportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2AuthRulesAuthRuleTokenBacktestsQueryKey(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>,
) {
  return ['v2', '/v2/auth_rules/:auth_rule_token/backtests', args] as const
}

export function getV2AuthRulesAuthRuleTokenBacktestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AuthRulesAuthRuleTokenBacktestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.auth_rules[':auth_rule_token'].backtests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AuthRulesAuthRuleTokenBacktests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AuthRulesAuthRuleTokenBacktestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2AuthRulesAuthRuleTokenBacktests<
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
                ReturnType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.auth_rules)[':auth_rule_token']['backtests']['$post']>,
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
    const mutationDefaults = getPostV2AuthRulesAuthRuleTokenBacktestsMutationOptions<
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

export function getV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestTokenQueryKey(
  args: InferRequestType<
    (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
  >,
) {
  return [
    'v2',
    '/v2/auth_rules/:auth_rule_token/backtests/:auth_rule_backtest_token',
    args,
  ] as const
}

export function getV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestTokenQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.auth_rules[':auth_rule_token'].backtests[':auth_rule_backtest_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestToken<
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
  args: () => InferRequestType<
    (typeof client.v2.auth_rules)[':auth_rule_token']['backtests'][':auth_rule_backtest_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AuthRulesAuthRuleTokenBacktestsAuthRuleBacktestTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2AuthRulesResultsQueryKey(
  args: InferRequestType<typeof client.v2.auth_rules.results.$get>,
) {
  return ['v2', '/v2/auth_rules/results', args] as const
}

export function getV2AuthRulesResultsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.results.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.auth_rules.results.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.results.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AuthRulesResultsQueryKey>
  >({
    queryKey: getV2AuthRulesResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.auth_rules.results.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2AuthRulesResults<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.results.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.auth_rules.results.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.auth_rules.results.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AuthRulesResultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AuthRulesResultsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1CardsCardTokenSignalsQueryKey(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['signals']['$get']>,
) {
  return ['v1', '/v1/cards/:card_token/signals', args] as const
}

export function getV1CardsCardTokenSignalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['signals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['signals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CardsCardTokenSignalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cards[':card_token'].signals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CardsCardTokenSignals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['signals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.cards)[':card_token']['signals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CardsCardTokenSignalsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1AccountsAccountTokenSignalsQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>,
) {
  return ['v1', '/v1/accounts/:account_token/signals', args] as const
}

export function getV1AccountsAccountTokenSignalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AccountsAccountTokenSignalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account_token'].signals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountsAccountTokenSignals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.accounts)[':account_token']['signals']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AccountsAccountTokenSignalsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1AuthStreamSecretQueryKey() {
  return ['v1', '/v1/auth_stream/secret'] as const
}

export function getV1AuthStreamSecretQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth_stream.secret.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth_stream.secret.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AuthStreamSecretQueryKey>
  >({
    queryKey: getV1AuthStreamSecretQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.auth_stream.secret.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AuthStreamSecret<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth_stream.secret.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.auth_stream.secret.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AuthStreamSecretQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AuthStreamSecretQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostV1AuthStreamSecretRotate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AuthStreamSecretRotateMutationOptions<
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

export function getV1BalancesQueryKey(args: InferRequestType<typeof client.v1.balances.$get>) {
  return ['v1', '/v1/balances', args] as const
}

export function getV1BalancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.balances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balances.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1BalancesQueryKey>
  >({
    queryKey: getV1BalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.balances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Balances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.balances.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BalancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BalancesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1CardProgramsQueryKey(
  args: InferRequestType<typeof client.v1.card_programs.$get>,
) {
  return ['v1', '/v1/card_programs', args] as const
}

export function getV1CardProgramsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_programs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.card_programs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_programs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CardProgramsQueryKey>
  >({
    queryKey: getV1CardProgramsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.card_programs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CardPrograms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_programs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.card_programs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_programs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1CardProgramsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CardProgramsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1CardProgramsCardProgramTokenQueryKey(
  args: InferRequestType<(typeof client.v1.card_programs)[':card_program_token']['$get']>,
) {
  return ['v1', '/v1/card_programs/:card_program_token', args] as const
}

export function getV1CardProgramsCardProgramTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.card_programs)[':card_program_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.card_programs)[':card_program_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CardProgramsCardProgramTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.card_programs[':card_program_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CardProgramsCardProgramToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.card_programs)[':card_program_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.card_programs)[':card_program_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CardProgramsCardProgramTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CardsQueryKey(args: InferRequestType<typeof client.v1.cards.$get>) {
  return ['v1', '/v1/cards', args] as const
}

export function getV1CardsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.cards.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1CardsQueryKey>
  >({
    queryKey: getV1CardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Cards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.cards.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1CardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1Cards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.cards.$post>,
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
    const mutationDefaults = getPostV1CardsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1CardsSearchByPan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.cards.search_by_pan.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.cards.search_by_pan.$post>,
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
    const mutationDefaults = getPostV1CardsSearchByPanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CardsCardTokenQueryKey(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['$get']>,
) {
  return ['v1', '/v1/cards/:card_token', args] as const
}

export function getV1CardsCardTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CardsCardTokenQueryKey>
  >({
    queryKey: getV1CardsCardTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cards[':card_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CardsCardToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.cards)[':card_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CardsCardTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CardsCardTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPatchV1CardsCardToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1CardsCardTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CardsCardTokenBalancesQueryKey(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['balances']['$get']>,
) {
  return ['v1', '/v1/cards/:card_token/balances', args] as const
}

export function getV1CardsCardTokenBalancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CardsCardTokenBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cards[':card_token'].balances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CardsCardTokenBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.cards)[':card_token']['balances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CardsCardTokenBalancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CardsCardTokenFinancialTransactionsQueryKey(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['financial_transactions']['$get']>,
) {
  return ['v1', '/v1/cards/:card_token/financial_transactions', args] as const
}

export function getV1CardsCardTokenFinancialTransactionsQueryOptions<
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
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['financial_transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CardsCardTokenFinancialTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cards[':card_token'].financial_transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CardsCardTokenFinancialTransactions<
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
  args: () => InferRequestType<
    (typeof client.v1.cards)[':card_token']['financial_transactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1CardsCardTokenFinancialTransactionsQueryKey>
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
      ...getV1CardsCardTokenFinancialTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenQueryKey(
  args: InferRequestType<
    (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
  >,
) {
  return [
    'v1',
    '/v1/cards/:card_token/financial_transactions/:financial_transaction_token',
    args,
  ] as const
}

export function getV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cards[':card_token'].financial_transactions[':financial_transaction_token'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1CardsCardTokenFinancialTransactionsFinancialTransactionToken<
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
  args: () => InferRequestType<
    (typeof client.v1.cards)[':card_token']['financial_transactions'][':financial_transaction_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CardsCardTokenFinancialTransactionsFinancialTransactionTokenQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1CardsCardTokenProvision<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CardsCardTokenProvisionMutationOptions<
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

export function createPostV1CardsCardTokenWebProvision<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CardsCardTokenWebProvisionMutationOptions<
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

export function createPostV1CardsCardTokenReissue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CardsCardTokenReissueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1CardsCardTokenRenew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CardsCardTokenRenewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1CardsCardTokenReassignAccount<
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
                ReturnType<(typeof client.v1.cards)[':card_token']['reassign_account']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.cards)[':card_token']['reassign_account']['$post']>,
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
    const mutationDefaults = getPostV1CardsCardTokenReassignAccountMutationOptions<
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

export function createPostV1CardsCardTokenConvertPhysical<
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
                ReturnType<(typeof client.v1.cards)[':card_token']['convert_physical']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.cards)[':card_token']['convert_physical']['$post']>,
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
    const mutationDefaults = getPostV1CardsCardTokenConvertPhysicalMutationOptions<
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

export function getV1CardsCardTokenSpendLimitsQueryKey(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>,
) {
  return ['v1', '/v1/cards/:card_token/spend_limits', args] as const
}

export function getV1CardsCardTokenSpendLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CardsCardTokenSpendLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cards[':card_token'].spend_limits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CardsCardTokenSpendLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.cards)[':card_token']['spend_limits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CardsCardTokenSpendLimitsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1CardsCardTokenEmbed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CardsCardTokenEmbedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1CardAuthorizationsEventTokenChallengeResponse<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CardAuthorizationsEventTokenChallengeResponseMutationOptions<
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

export function getV1CardBulkOrdersQueryKey(
  args: InferRequestType<typeof client.v1.card_bulk_orders.$get>,
) {
  return ['v1', '/v1/card_bulk_orders', args] as const
}

export function getV1CardBulkOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_bulk_orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.card_bulk_orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_bulk_orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CardBulkOrdersQueryKey>
  >({
    queryKey: getV1CardBulkOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.card_bulk_orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1CardBulkOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_bulk_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.card_bulk_orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_bulk_orders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CardBulkOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CardBulkOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1CardBulkOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.card_bulk_orders.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.card_bulk_orders.$post>,
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
    const mutationDefaults = getPostV1CardBulkOrdersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CardBulkOrdersBulkOrderTokenQueryKey(
  args: InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>,
) {
  return ['v1', '/v1/card_bulk_orders/:bulk_order_token', args] as const
}

export function getV1CardBulkOrdersBulkOrderTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CardBulkOrdersBulkOrderTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.card_bulk_orders[':bulk_order_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CardBulkOrdersBulkOrderToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CardBulkOrdersBulkOrderTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1CardBulkOrdersBulkOrderToken<
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
                ReturnType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.card_bulk_orders)[':bulk_order_token']['$patch']>,
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
    const mutationDefaults = getPatchV1CardBulkOrdersBulkOrderTokenMutationOptions<
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

export function getV1DigitalCardArtQueryKey(
  args: InferRequestType<typeof client.v1.digital_card_art.$get>,
) {
  return ['v1', '/v1/digital_card_art', args] as const
}

export function getV1DigitalCardArtQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.digital_card_art.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.digital_card_art.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.digital_card_art.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DigitalCardArtQueryKey>
  >({
    queryKey: getV1DigitalCardArtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.digital_card_art.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1DigitalCardArt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.digital_card_art.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.digital_card_art.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.digital_card_art.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DigitalCardArtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DigitalCardArtQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1DigitalCardArtDigitalCardArtTokenQueryKey(
  args: InferRequestType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>,
) {
  return ['v1', '/v1/digital_card_art/:digital_card_art_token', args] as const
}

export function getV1DigitalCardArtDigitalCardArtTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DigitalCardArtDigitalCardArtTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.digital_card_art[':digital_card_art_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DigitalCardArtDigitalCardArtToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.digital_card_art)[':digital_card_art_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DigitalCardArtDigitalCardArtTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1DisputesQueryKey(args: InferRequestType<typeof client.v1.disputes.$get>) {
  return ['v1', '/v1/disputes', args] as const
}

export function getV1DisputesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.disputes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1DisputesQueryKey>
  >({
    queryKey: getV1DisputesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.disputes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Disputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.disputes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1DisputesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DisputesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1Disputes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.disputes.$post>,
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
    const mutationDefaults = getPostV1DisputesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1DisputesDisputeTokenQueryKey(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$get']>,
) {
  return ['v1', '/v1/disputes/:dispute_token', args] as const
}

export function getV1DisputesDisputeTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DisputesDisputeTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.disputes[':dispute_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DisputesDisputeToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.disputes)[':dispute_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DisputesDisputeTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1DisputesDisputeToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1DisputesDisputeTokenMutationOptions<
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

export function createPatchV1DisputesDisputeToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1DisputesDisputeTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1DisputesDisputeTokenEvidencesQueryKey(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>,
) {
  return ['v1', '/v1/disputes/:dispute_token/evidences', args] as const
}

export function getV1DisputesDisputeTokenEvidencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DisputesDisputeTokenEvidencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.disputes[':dispute_token'].evidences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DisputesDisputeTokenEvidences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1DisputesDisputeTokenEvidencesQueryKey>
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
      ...getV1DisputesDisputeTokenEvidencesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1DisputesDisputeTokenEvidences<
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
                ReturnType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.disputes)[':dispute_token']['evidences']['$post']>,
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
    const mutationDefaults = getPostV1DisputesDisputeTokenEvidencesMutationOptions<
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

export function getV1DisputesDisputeTokenEvidencesEvidenceTokenQueryKey(
  args: InferRequestType<
    (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
  >,
) {
  return ['v1', '/v1/disputes/:dispute_token/evidences/:evidence_token', args] as const
}

export function getV1DisputesDisputeTokenEvidencesEvidenceTokenQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1DisputesDisputeTokenEvidencesEvidenceTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.disputes[':dispute_token'].evidences[':evidence_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1DisputesDisputeTokenEvidencesEvidenceToken<
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
  args: () => InferRequestType<
    (typeof client.v1.disputes)[':dispute_token']['evidences'][':evidence_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1DisputesDisputeTokenEvidencesEvidenceTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1DisputesDisputeTokenEvidencesEvidenceToken<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1DisputesDisputeTokenEvidencesEvidenceTokenMutationOptions<
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

export function getV1EmbedCardQueryKey(args: InferRequestType<typeof client.v1.embed.card.$get>) {
  return ['v1', '/v1/embed/card', args] as const
}

export function getV1EmbedCardQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.card.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.embed.card.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.card.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmbedCardQueryKey>
  >({
    queryKey: getV1EmbedCardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.embed.card.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1EmbedCard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.card.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.embed.card.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.card.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmbedCardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EmbedCardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1EmbedQueryKey(args: InferRequestType<typeof client.v1.embed.$get>) {
  return ['v1', '/v1/embed', args] as const
}

export function getV1EmbedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.embed.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1EmbedQueryKey>
  >({
    queryKey: getV1EmbedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.embed.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Embed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.embed.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1EmbedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EmbedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1FraudTransactionsTransactionTokenQueryKey(
  args: InferRequestType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>,
) {
  return ['v1', '/v1/fraud/transactions/:transaction_token', args] as const
}

export function getV1FraudTransactionsTransactionTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FraudTransactionsTransactionTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.fraud.transactions[':transaction_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FraudTransactionsTransactionToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.fraud.transactions)[':transaction_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1FraudTransactionsTransactionTokenQueryKey>
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
      ...getV1FraudTransactionsTransactionTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1FraudTransactionsTransactionToken<
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
                ReturnType<(typeof client.v1.fraud.transactions)[':transaction_token']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.fraud.transactions)[':transaction_token']['$post']>,
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
    const mutationDefaults = getPostV1FraudTransactionsTransactionTokenMutationOptions<
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

export function getV1TransactionsTransactionTokenEnhancedCommercialDataQueryKey(
  args: InferRequestType<
    (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
  >,
) {
  return ['v1', '/v1/transactions/:transaction_token/enhanced_commercial_data', args] as const
}

export function getV1TransactionsTransactionTokenEnhancedCommercialDataQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TransactionsTransactionTokenEnhancedCommercialDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transactions[':transaction_token'].enhanced_commercial_data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionsTransactionTokenEnhancedCommercialData<
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
  args: () => InferRequestType<
    (typeof client.v1.transactions)[':transaction_token']['enhanced_commercial_data']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1TransactionsTransactionTokenEnhancedCommercialDataQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1TransactionsTransactionTokenExpireAuthorization<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1TransactionsTransactionTokenExpireAuthorizationMutationOptions<
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

export function createPostV1TransactionsTransactionTokenRoute<
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
                ReturnType<(typeof client.v1.transactions)[':transaction_token']['route']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.transactions)[':transaction_token']['route']['$post']>,
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
    const mutationDefaults = getPostV1TransactionsTransactionTokenRouteMutationOptions<
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

export function getV1TransactionsEventsEventTokenEnhancedCommercialDataQueryKey(
  args: InferRequestType<
    (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
  >,
) {
  return ['v1', '/v1/transactions/events/:event_token/enhanced_commercial_data', args] as const
}

export function getV1TransactionsEventsEventTokenEnhancedCommercialDataQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TransactionsEventsEventTokenEnhancedCommercialDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transactions.events[':event_token'].enhanced_commercial_data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionsEventsEventTokenEnhancedCommercialData<
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
  args: () => InferRequestType<
    (typeof client.v1.transactions.events)[':event_token']['enhanced_commercial_data']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1TransactionsEventsEventTokenEnhancedCommercialDataQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1EventSubscriptionsQueryKey(
  args: InferRequestType<typeof client.v1.event_subscriptions.$get>,
) {
  return ['v1', '/v1/event_subscriptions', args] as const
}

export function getV1EventSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.event_subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.event_subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.event_subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventSubscriptionsQueryKey>
  >({
    queryKey: getV1EventSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.event_subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EventSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.event_subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.event_subscriptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.event_subscriptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EventSubscriptionsQueryKey>
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
      ...getV1EventSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1EventSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.event_subscriptions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.event_subscriptions.$post>,
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
    const mutationDefaults = getPostV1EventSubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1EventSubscriptionsEventSubscriptionTokenQueryKey(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']
  >,
) {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token', args] as const
}

export function getV1EventSubscriptionsEventSubscriptionTokenQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EventSubscriptionsEventSubscriptionTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.event_subscriptions[':event_subscription_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EventSubscriptionsEventSubscriptionToken<
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
  args: () => InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1EventSubscriptionsEventSubscriptionTokenQueryKey>
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
      ...getV1EventSubscriptionsEventSubscriptionTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1EventSubscriptionsEventSubscriptionToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1EventSubscriptionsEventSubscriptionTokenMutationOptions<
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

export function createPatchV1EventSubscriptionsEventSubscriptionToken<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1EventSubscriptionsEventSubscriptionTokenMutationOptions<
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

export function getV1EventSubscriptionsEventSubscriptionTokenAttemptsQueryKey(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
  >,
) {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token/attempts', args] as const
}

export function getV1EventSubscriptionsEventSubscriptionTokenAttemptsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EventSubscriptionsEventSubscriptionTokenAttemptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.event_subscriptions[':event_subscription_token'].attempts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EventSubscriptionsEventSubscriptionTokenAttempts<
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
  args: () => InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['attempts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1EventSubscriptionsEventSubscriptionTokenAttemptsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1EventSubscriptionsEventSubscriptionTokenRecover<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1EventSubscriptionsEventSubscriptionTokenRecoverMutationOptions<
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

export function createPostV1EventSubscriptionsEventSubscriptionTokenReplayMissing<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1EventSubscriptionsEventSubscriptionTokenReplayMissingMutationOptions<
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

export function getV1EventSubscriptionsEventSubscriptionTokenSecretQueryKey(
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
  >,
) {
  return ['v1', '/v1/event_subscriptions/:event_subscription_token/secret', args] as const
}

export function getV1EventSubscriptionsEventSubscriptionTokenSecretQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EventSubscriptionsEventSubscriptionTokenSecretQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.event_subscriptions[':event_subscription_token'].secret.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EventSubscriptionsEventSubscriptionTokenSecret<
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
  args: () => InferRequestType<
    (typeof client.v1.event_subscriptions)[':event_subscription_token']['secret']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1EventSubscriptionsEventSubscriptionTokenSecretQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1EventSubscriptionsEventSubscriptionTokenSecretRotate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1EventSubscriptionsEventSubscriptionTokenSecretRotateMutationOptions<
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

export function getV1EventsQueryKey(args: InferRequestType<typeof client.v1.events.$get>) {
  return ['v1', '/v1/events', args] as const
}

export function getV1EventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1EventsQueryKey>
  >({
    queryKey: getV1EventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1EventsEventTokenQueryKey(
  args: InferRequestType<(typeof client.v1.events)[':event_token']['$get']>,
) {
  return ['v1', '/v1/events/:event_token', args] as const
}

export function getV1EventsEventTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':event_token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.events)[':event_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':event_token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventsEventTokenQueryKey>
  >({
    queryKey: getV1EventsEventTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.events[':event_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EventsEventToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':event_token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.events)[':event_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.events)[':event_token']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EventsEventTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EventsEventTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1EventsEventTokenAttemptsQueryKey(
  args: InferRequestType<(typeof client.v1.events)[':event_token']['attempts']['$get']>,
) {
  return ['v1', '/v1/events/:event_token/attempts', args] as const
}

export function getV1EventsEventTokenAttemptsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.events)[':event_token']['attempts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.events)[':event_token']['attempts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1EventsEventTokenAttemptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.events[':event_token'].attempts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EventsEventTokenAttempts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.events)[':event_token']['attempts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.events)[':event_token']['attempts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1EventsEventTokenAttemptsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1EventsEventTokenEventSubscriptionsEventSubscriptionTokenResend<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1EventsEventTokenEventSubscriptionsEventSubscriptionTokenResendMutationOptions<
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

export function createPostV1BlockchainRecipients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.blockchain_recipients.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.blockchain_recipients.$post>,
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
    const mutationDefaults = getPostV1BlockchainRecipientsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1BlockchainRecipientsBlockchainRecipientTokenQueryKey(
  args: InferRequestType<
    (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
  >,
) {
  return ['v1', '/v1/blockchain_recipients/:blockchain_recipient_token', args] as const
}

export function getV1BlockchainRecipientsBlockchainRecipientTokenQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1BlockchainRecipientsBlockchainRecipientTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.blockchain_recipients[':blockchain_recipient_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BlockchainRecipientsBlockchainRecipientToken<
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
  args: () => InferRequestType<
    (typeof client.v1.blockchain_recipients)[':blockchain_recipient_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1BlockchainRecipientsBlockchainRecipientTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1ExternalBankAccountsQueryKey(
  args: InferRequestType<typeof client.v1.external_bank_accounts.$get>,
) {
  return ['v1', '/v1/external_bank_accounts', args] as const
}

export function getV1ExternalBankAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_bank_accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.external_bank_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_bank_accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ExternalBankAccountsQueryKey>
  >({
    queryKey: getV1ExternalBankAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.external_bank_accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ExternalBankAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_bank_accounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.external_bank_accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_bank_accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ExternalBankAccountsQueryKey>
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
      ...getV1ExternalBankAccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1ExternalBankAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_bank_accounts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.external_bank_accounts.$post>,
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
    const mutationDefaults = getPostV1ExternalBankAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ExternalBankAccountsExternalBankAccountTokenQueryKey(
  args: InferRequestType<
    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
  >,
) {
  return ['v1', '/v1/external_bank_accounts/:external_bank_account_token', args] as const
}

export function getV1ExternalBankAccountsExternalBankAccountTokenQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ExternalBankAccountsExternalBankAccountTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.external_bank_accounts[':external_bank_account_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ExternalBankAccountsExternalBankAccountToken<
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
  args: () => InferRequestType<
    (typeof client.v1.external_bank_accounts)[':external_bank_account_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ExternalBankAccountsExternalBankAccountTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1ExternalBankAccountsExternalBankAccountToken<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1ExternalBankAccountsExternalBankAccountTokenMutationOptions<
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

export function createPostV1ExternalBankAccountsExternalBankAccountTokenMicroDeposits<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ExternalBankAccountsExternalBankAccountTokenMicroDepositsMutationOptions<
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

export function createPostV1ExternalBankAccountsExternalBankAccountTokenPause<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ExternalBankAccountsExternalBankAccountTokenPauseMutationOptions<
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

export function createPostV1ExternalBankAccountsExternalBankAccountTokenRetryMicroDeposits<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ExternalBankAccountsExternalBankAccountTokenRetryMicroDepositsMutationOptions<
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

export function createPostV1ExternalBankAccountsExternalBankAccountTokenRetryPrenote<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ExternalBankAccountsExternalBankAccountTokenRetryPrenoteMutationOptions<
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

export function createPostV1ExternalBankAccountsExternalBankAccountTokenSetVerificationMethod<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ExternalBankAccountsExternalBankAccountTokenSetVerificationMethodMutationOptions<
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

export function createPostV1ExternalBankAccountsExternalBankAccountTokenUnpause<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ExternalBankAccountsExternalBankAccountTokenUnpauseMutationOptions<
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

export function getV1CreditProductsCreditProductTokenExtendedCreditQueryKey(
  args: InferRequestType<
    (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
  >,
) {
  return ['v1', '/v1/credit_products/:credit_product_token/extended_credit', args] as const
}

export function getV1CreditProductsCreditProductTokenExtendedCreditQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CreditProductsCreditProductTokenExtendedCreditQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.credit_products[':credit_product_token'].extended_credit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CreditProductsCreditProductTokenExtendedCredit<
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
  args: () => InferRequestType<
    (typeof client.v1.credit_products)[':credit_product_token']['extended_credit']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CreditProductsCreditProductTokenExtendedCreditQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1CreditProductsCreditProductTokenPrimeRatesQueryKey(
  args: InferRequestType<
    (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
  >,
) {
  return ['v1', '/v1/credit_products/:credit_product_token/prime_rates', args] as const
}

export function getV1CreditProductsCreditProductTokenPrimeRatesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CreditProductsCreditProductTokenPrimeRatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.credit_products[':credit_product_token'].prime_rates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CreditProductsCreditProductTokenPrimeRates<
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
  args: () => InferRequestType<
    (typeof client.v1.credit_products)[':credit_product_token']['prime_rates']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1CreditProductsCreditProductTokenPrimeRatesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1CreditProductsCreditProductTokenPrimeRates<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CreditProductsCreditProductTokenPrimeRatesMutationOptions<
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

export function getV1FinancialAccountsQueryKey(
  args: InferRequestType<typeof client.v1.financial_accounts.$get>,
) {
  return ['v1', '/v1/financial_accounts', args] as const
}

export function getV1FinancialAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.financial_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.financial_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.financial_accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinancialAccountsQueryKey>
  >({
    queryKey: getV1FinancialAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1FinancialAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.financial_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.financial_accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.financial_accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FinancialAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FinancialAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1FinancialAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.financial_accounts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.financial_accounts.$post>,
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
    const mutationDefaults = getPostV1FinancialAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1FinancialAccountsFinancialAccountTokenQueryKey(
  args: InferRequestType<(typeof client.v1.financial_accounts)[':financial_account_token']['$get']>,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token', args] as const
}

export function getV1FinancialAccountsFinancialAccountTokenQueryOptions<
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
  args: InferRequestType<(typeof client.v1.financial_accounts)[':financial_account_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FinancialAccountsFinancialAccountTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountToken<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1FinancialAccountsFinancialAccountTokenQueryKey>
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
      ...getV1FinancialAccountsFinancialAccountTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1FinancialAccountsFinancialAccountToken<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1FinancialAccountsFinancialAccountTokenMutationOptions<
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

export function getV1FinancialAccountsFinancialAccountTokenBalancesQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
  >,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token/balances', args] as const
}

export function getV1FinancialAccountsFinancialAccountTokenBalancesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FinancialAccountsFinancialAccountTokenBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].balances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenBalances<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['balances']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenBalancesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1FinancialAccountsFinancialAccountTokenOpenToBuyQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
  >,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token/open_to_buy', args] as const
}

export function getV1FinancialAccountsFinancialAccountTokenOpenToBuyQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FinancialAccountsFinancialAccountTokenOpenToBuyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].open_to_buy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenOpenToBuy<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['open_to_buy']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenOpenToBuyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1FinancialAccountsFinancialAccountTokenCreditConfigurationQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/credit_configuration',
    args,
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenCreditConfigurationQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FinancialAccountsFinancialAccountTokenCreditConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].credit_configuration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenCreditConfiguration<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['credit_configuration']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenCreditConfigurationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1FinancialAccountsFinancialAccountTokenCreditConfiguration<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchV1FinancialAccountsFinancialAccountTokenCreditConfigurationMutationOptions<
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

export function getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/financial_transactions',
    args,
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].financial_transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenFinancialTransactions<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/financial_transactions/:financial_transaction_token',
    args,
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].financial_transactions[
          ':financial_transaction_token'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionToken<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['financial_transactions'][':financial_transaction_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenFinancialTransactionsFinancialTransactionTokenQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1FinancialAccountsFinancialAccountTokenRegisterAccountNumber<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1FinancialAccountsFinancialAccountTokenRegisterAccountNumberMutationOptions<
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

export function getV1FinancialAccountsFinancialAccountTokenHoldsQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
  >,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token/holds', args] as const
}

export function getV1FinancialAccountsFinancialAccountTokenHoldsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FinancialAccountsFinancialAccountTokenHoldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].holds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenHolds<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['holds']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenHoldsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1FinancialAccountsFinancialAccountTokenHolds<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1FinancialAccountsFinancialAccountTokenHoldsMutationOptions<
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

export function getV1HoldsHoldTokenQueryKey(
  args: InferRequestType<(typeof client.v1.holds)[':hold_token']['$get']>,
) {
  return ['v1', '/v1/holds/:hold_token', args] as const
}

export function getV1HoldsHoldTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.holds)[':hold_token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.holds)[':hold_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.holds)[':hold_token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1HoldsHoldTokenQueryKey>
  >({
    queryKey: getV1HoldsHoldTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.holds[':hold_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1HoldsHoldToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.holds)[':hold_token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.holds)[':hold_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.holds)[':hold_token']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1HoldsHoldTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1HoldsHoldTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1HoldsHoldTokenVoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1HoldsHoldTokenVoidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1FinancialAccountsFinancialAccountTokenStatementsQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
  >,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token/statements', args] as const
}

export function getV1FinancialAccountsFinancialAccountTokenStatementsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FinancialAccountsFinancialAccountTokenStatementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].statements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenStatements<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenStatementsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/statements/:statement_token',
    args,
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].statements[
          ':statement_token'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenStatementsStatementToken<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenQueryKey
        >
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
      ...getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/statements/:statement_token/line_items',
    args,
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].statements[
          ':statement_token'
        ].line_items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItems<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['statements'][':statement_token']['line_items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenStatementsStatementTokenLineItemsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1FinancialAccountsFinancialAccountTokenLoanTapesQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
  >,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token/loan_tapes', args] as const
}

export function getV1FinancialAccountsFinancialAccountTokenLoanTapesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FinancialAccountsFinancialAccountTokenLoanTapesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].loan_tapes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenLoanTapes<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenLoanTapesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/loan_tapes/:loan_tape_token',
    args,
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].loan_tapes[
          ':loan_tape_token'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeToken<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tapes'][':loan_tape_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenLoanTapesLoanTapeTokenQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/loan_tape_configuration',
    args,
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].loan_tape_configuration.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenLoanTapeConfiguration<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['loan_tape_configuration']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenLoanTapeConfigurationQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
  >,
) {
  return ['v1', '/v1/financial_accounts/:financial_account_token/installment_plans', args] as const
}

export function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FinancialAccountsFinancialAccountTokenInstallmentPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].installment_plans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenInstallmentPlans<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenInstallmentPlansQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/installment_plans/:installment_plan_token',
    args,
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].installment_plans[
          ':installment_plan_token'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanToken<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/installment_plans/:installment_plan_token/statements',
    args,
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].installment_plans[
          ':installment_plan_token'
        ].statements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatements<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/installment_plans/:installment_plan_token/statements/:statement_token',
    args,
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].installment_plans[
          ':installment_plan_token'
        ].statements[':statement_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementToken<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['installment_plans'][':installment_plan_token']['statements'][':statement_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenInstallmentPlansInstallmentPlanTokenStatementsStatementTokenQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/interest_tier_schedule',
    args,
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenInterestTierSchedule<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1FinancialAccountsFinancialAccountTokenInterestTierSchedule<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1FinancialAccountsFinancialAccountTokenInterestTierScheduleMutationOptions<
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

export function getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
  >,
) {
  return [
    'v1',
    '/v1/financial_accounts/:financial_account_token/interest_tier_schedule/:effective_date',
    args,
  ] as const
}

export function getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.financial_accounts[':financial_account_token'].interest_tier_schedule[
          ':effective_date'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDate<
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
  args: () => InferRequestType<
    (typeof client.v1.financial_accounts)[':financial_account_token']['interest_tier_schedule'][':effective_date']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateMutationOptions<
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

export function createDeleteV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1FinancialAccountsFinancialAccountTokenInterestTierScheduleEffectiveDateMutationOptions<
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

export function createPostV1FinancialAccountsFinancialAccountTokenUpdateStatus<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1FinancialAccountsFinancialAccountTokenUpdateStatusMutationOptions<
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

export function getV1AccountActivityQueryKey(
  args: InferRequestType<typeof client.v1.account_activity.$get>,
) {
  return ['v1', '/v1/account_activity', args] as const
}

export function getV1AccountActivityQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_activity.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.account_activity.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_activity.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountActivityQueryKey>
  >({
    queryKey: getV1AccountActivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.account_activity.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1AccountActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.account_activity.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_activity.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AccountActivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountActivityQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1AccountActivityTransactionTokenQueryKey(
  args: InferRequestType<(typeof client.v1.account_activity)[':transaction_token']['$get']>,
) {
  return ['v1', '/v1/account_activity/:transaction_token', args] as const
}

export function getV1AccountActivityTransactionTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.account_activity)[':transaction_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.account_activity)[':transaction_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AccountActivityTransactionTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.account_activity[':transaction_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountActivityTransactionToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.account_activity)[':transaction_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.account_activity)[':transaction_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1AccountActivityTransactionTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1PaymentsQueryKey(args: InferRequestType<typeof client.v1.payments.$get>) {
  return ['v1', '/v1/payments', args] as const
}

export function getV1PaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.payments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsQueryKey>
  >({
    queryKey: getV1PaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Payments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.payments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1Payments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.payments.$post>,
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
    const mutationDefaults = getPostV1PaymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1PaymentsStablecoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.stablecoin.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.payments.stablecoin.$post>,
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
    const mutationDefaults = getPostV1PaymentsStablecoinMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PaymentsPaymentTokenQueryKey(
  args: InferRequestType<(typeof client.v1.payments)[':payment_token']['$get']>,
) {
  return ['v1', '/v1/payments/:payment_token', args] as const
}

export function getV1PaymentsPaymentTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.payments)[':payment_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.payments)[':payment_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PaymentsPaymentTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payments[':payment_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentsPaymentToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.payments)[':payment_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.payments)[':payment_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1PaymentsPaymentTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1PaymentsPaymentTokenRetry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PaymentsPaymentTokenRetryMutationOptions<
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

export function createPostV1PaymentsPaymentTokenReturn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PaymentsPaymentTokenReturnMutationOptions<
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

export function getV1ReportsSettlementDetailsReportDateQueryKey(
  args: InferRequestType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>,
) {
  return ['v1', '/v1/reports/settlement/details/:report_date', args] as const
}

export function getV1ReportsSettlementDetailsReportDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ReportsSettlementDetailsReportDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reports.settlement.details[':report_date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReportsSettlementDetailsReportDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reports.settlement.details)[':report_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.reports.settlement.details)[':report_date']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ReportsSettlementDetailsReportDateQueryKey>
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
      ...getV1ReportsSettlementDetailsReportDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ReportsSettlementSummaryReportDateQueryKey(
  args: InferRequestType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>,
) {
  return ['v1', '/v1/reports/settlement/summary/:report_date', args] as const
}

export function getV1ReportsSettlementSummaryReportDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ReportsSettlementSummaryReportDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reports.settlement.summary[':report_date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReportsSettlementSummaryReportDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reports.settlement.summary)[':report_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.reports.settlement.summary)[':report_date']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1ReportsSettlementSummaryReportDateQueryKey>
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
      ...getV1ReportsSettlementSummaryReportDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ReportsSettlementNetworkTotalsQueryKey(
  args: InferRequestType<typeof client.v1.reports.settlement.network_totals.$get>,
) {
  return ['v1', '/v1/reports/settlement/network_totals', args] as const
}

export function getV1ReportsSettlementNetworkTotalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.reports.settlement.network_totals.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.reports.settlement.network_totals.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ReportsSettlementNetworkTotalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reports.settlement.network_totals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReportsSettlementNetworkTotals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.reports.settlement.network_totals.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.reports.settlement.network_totals.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ReportsSettlementNetworkTotalsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ReportsSettlementNetworkTotalsTokenQueryKey(
  args: InferRequestType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>,
) {
  return ['v1', '/v1/reports/settlement/network_totals/:token', args] as const
}

export function getV1ReportsSettlementNetworkTotalsTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ReportsSettlementNetworkTotalsTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reports.settlement.network_totals[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ReportsSettlementNetworkTotalsToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reports.settlement.network_totals)[':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.reports.settlement.network_totals)[':token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ReportsSettlementNetworkTotalsTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ResponderEndpointsQueryKey(
  args: InferRequestType<typeof client.v1.responder_endpoints.$get>,
) {
  return ['v1', '/v1/responder_endpoints', args] as const
}

export function getV1ResponderEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.responder_endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ResponderEndpointsQueryKey>
  >({
    queryKey: getV1ResponderEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.responder_endpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ResponderEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.responder_endpoints.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ResponderEndpointsQueryKey>
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
      ...getV1ResponderEndpointsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1ResponderEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.responder_endpoints.$post>,
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
    const mutationDefaults = getPostV1ResponderEndpointsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV1ResponderEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.responder_endpoints.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.responder_endpoints.$delete>,
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
    const mutationDefaults = getDeleteV1ResponderEndpointsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1IpRangesQueryKey() {
  return ['v1', '/v1/ip_ranges'] as const
}

export function getV1IpRangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip_ranges.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip_ranges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1IpRangesQueryKey>
  >({
    queryKey: getV1IpRangesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.ip_ranges.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1IpRanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip_ranges.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ip_ranges.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1IpRangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1IpRangesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostV1SimulateAuthorizationAdvice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SimulateAuthorizationAdviceMutationOptions<
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

export function createPostV1SimulateAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.authorize.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.simulate.authorize.$post>,
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
    const mutationDefaults = getPostV1SimulateAuthorizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1SimulateClearing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.clearing.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.simulate.clearing.$post>,
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
    const mutationDefaults = getPostV1SimulateClearingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1SimulateCreditAuthorizationAdvice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SimulateCreditAuthorizationAdviceMutationOptions<
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

export function createPostV1SimulateEventSubscriptionsEventSubscriptionTokenSendExample<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1SimulateEventSubscriptionsEventSubscriptionTokenSendExampleMutationOptions<
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

export function createPostV1SimulatePaymentsReceipt<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SimulatePaymentsReceiptMutationOptions<
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

export function createPostV1SimulatePaymentsRelease<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SimulatePaymentsReleaseMutationOptions<
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

export function createPostV1SimulatePaymentsReturn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SimulatePaymentsReturnMutationOptions<
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

export function createPostV1SimulatePaymentsPaymentTokenAction<
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
                  (typeof client.v1.simulate.payments)[':payment_token']['action']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.simulate.payments)[':payment_token']['action']['$post']>,
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
    const mutationDefaults = getPostV1SimulatePaymentsPaymentTokenActionMutationOptions<
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

export function createPostV1SimulateReturn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.return.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.simulate.return.$post>,
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
    const mutationDefaults = getPostV1SimulateReturnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1SimulateReturnReversal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SimulateReturnReversalMutationOptions<
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

export function createPostV1SimulateTokenizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.tokenizations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.simulate.tokenizations.$post>,
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
    const mutationDefaults = getPostV1SimulateTokenizationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1SimulateVoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.simulate.void.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.simulate.void.$post>,
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
    const mutationDefaults = getPostV1SimulateVoidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1SimulateAccountHoldersEnrollmentReview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SimulateAccountHoldersEnrollmentReviewMutationOptions<
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

export function createPostV1SimulateAccountHoldersEnrollmentDocumentReview<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SimulateAccountHoldersEnrollmentDocumentReviewMutationOptions<
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

export function getV1StatusQueryKey() {
  return ['v1', '/v1/status'] as const
}

export function getV1StatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1StatusQueryKey>
  >({
    queryKey: getV1StatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Status<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1StatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostV1ThreeDsAuthenticationSimulate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ThreeDsAuthenticationSimulateMutationOptions<
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

export function createPostV1ThreeDsDecisioningSimulateEnterOtp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ThreeDsDecisioningSimulateEnterOtpMutationOptions<
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

export function getV1ThreeDsAuthenticationThreeDsAuthenticationTokenQueryKey(
  args: InferRequestType<
    (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
  >,
) {
  return ['v1', '/v1/three_ds_authentication/:three_ds_authentication_token', args] as const
}

export function getV1ThreeDsAuthenticationThreeDsAuthenticationTokenQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ThreeDsAuthenticationThreeDsAuthenticationTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.three_ds_authentication[':three_ds_authentication_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ThreeDsAuthenticationThreeDsAuthenticationToken<
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
  args: () => InferRequestType<
    (typeof client.v1.three_ds_authentication)[':three_ds_authentication_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ThreeDsAuthenticationThreeDsAuthenticationTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1ThreeDsDecisioningSecretQueryKey() {
  return ['v1', '/v1/three_ds_decisioning/secret'] as const
}

export function getV1ThreeDsDecisioningSecretQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.three_ds_decisioning.secret.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.three_ds_decisioning.secret.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ThreeDsDecisioningSecretQueryKey>
  >({
    queryKey: getV1ThreeDsDecisioningSecretQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.three_ds_decisioning.secret.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ThreeDsDecisioningSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.three_ds_decisioning.secret.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.three_ds_decisioning.secret.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ThreeDsDecisioningSecretQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ThreeDsDecisioningSecretQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostV1ThreeDsDecisioningSecretRotate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ThreeDsDecisioningSecretRotateMutationOptions<
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

export function createPostV1ThreeDsDecisioningChallengeResponse<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ThreeDsDecisioningChallengeResponseMutationOptions<
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

export function getV1TokenizationDecisioningSecretQueryKey() {
  return ['v1', '/v1/tokenization_decisioning/secret'] as const
}

export function getV1TokenizationDecisioningSecretQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.tokenization_decisioning.secret.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getV1TokenizationDecisioningSecretQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tokenization_decisioning.secret.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TokenizationDecisioningSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1.tokenization_decisioning.secret.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1TokenizationDecisioningSecretQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1TokenizationDecisioningSecretRotate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TokenizationDecisioningSecretRotateMutationOptions<
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

export function createPostV1CardsCardTokenTokenizations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CardsCardTokenTokenizationsMutationOptions<
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

export function createPostV1TokenizationsTokenizationTokenSelectTfaMethod<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TokenizationsTokenizationTokenSelectTfaMethodMutationOptions<
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

export function createPostV1TokenizationsTokenizationTokenSubmitTfa<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TokenizationsTokenizationTokenSubmitTfaMutationOptions<
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

export function createPostV1TokenizationsTokenizationTokenPaymentCredentials<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1TokenizationsTokenizationTokenPaymentCredentialsMutationOptions<
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

export function getV1TokenizationsQueryKey(
  args: InferRequestType<typeof client.v1.tokenizations.$get>,
) {
  return ['v1', '/v1/tokenizations', args] as const
}

export function getV1TokenizationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokenizations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.tokenizations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokenizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TokenizationsQueryKey>
  >({
    queryKey: getV1TokenizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tokenizations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Tokenizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokenizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.tokenizations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokenizations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TokenizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TokenizationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1TokenizationsTokenizationTokenQueryKey(
  args: InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>,
) {
  return ['v1', '/v1/tokenizations/:tokenization_token', args] as const
}

export function getV1TokenizationsTokenizationTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TokenizationsTokenizationTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tokenizations[':tokenization_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TokenizationsTokenizationToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1TokenizationsTokenizationTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1TokenizationsTokenizationTokenPause<
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
                  (typeof client.v1.tokenizations)[':tokenization_token']['pause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.tokenizations)[':tokenization_token']['pause']['$post']>,
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
    const mutationDefaults = getPostV1TokenizationsTokenizationTokenPauseMutationOptions<
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

export function createPostV1TokenizationsTokenizationTokenUnpause<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TokenizationsTokenizationTokenUnpauseMutationOptions<
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

export function createPostV1TokenizationsTokenizationTokenDeactivate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TokenizationsTokenizationTokenDeactivateMutationOptions<
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

export function createPostV1TokenizationsTokenizationTokenActivate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TokenizationsTokenizationTokenActivateMutationOptions<
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

export function createPostV1TokenizationsTokenizationTokenResendActivationCode<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1TokenizationsTokenizationTokenResendActivationCodeMutationOptions<
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

export function createPostV1TokenizationsTokenizationTokenUpdateDigitalCardArt<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1TokenizationsTokenizationTokenUpdateDigitalCardArtMutationOptions<
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

export function getV1TransactionsQueryKey(
  args: InferRequestType<typeof client.v1.transactions.$get>,
) {
  return ['v1', '/v1/transactions', args] as const
}

export function getV1TransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.transactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransactionsQueryKey>
  >({
    queryKey: getV1TransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Transactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.transactions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transactions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1TransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TransactionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1TransactionsTransactionTokenQueryKey(
  args: InferRequestType<(typeof client.v1.transactions)[':transaction_token']['$get']>,
) {
  return ['v1', '/v1/transactions/:transaction_token', args] as const
}

export function getV1TransactionsTransactionTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.transactions)[':transaction_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.transactions)[':transaction_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TransactionsTransactionTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transactions[':transaction_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionsTransactionToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.transactions)[':transaction_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.transactions)[':transaction_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1TransactionsTransactionTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1TransactionMonitoringCasesQueryKey(
  args: InferRequestType<typeof client.v1.transaction_monitoring.cases.$get>,
) {
  return ['v1', '/v1/transaction_monitoring/cases', args] as const
}

export function getV1TransactionMonitoringCasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.transaction_monitoring.cases.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.transaction_monitoring.cases.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TransactionMonitoringCasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transaction_monitoring.cases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionMonitoringCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.transaction_monitoring.cases.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.transaction_monitoring.cases.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1TransactionMonitoringCasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1TransactionMonitoringCasesCaseTokenQueryKey(
  args: InferRequestType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token', args] as const
}

export function getV1TransactionMonitoringCasesCaseTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TransactionMonitoringCasesCaseTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionMonitoringCasesCaseToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1TransactionMonitoringCasesCaseTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1TransactionMonitoringCasesCaseToken<
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
                ReturnType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.transaction_monitoring.cases)[':case_token']['$patch']>,
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
    const mutationDefaults = getPatchV1TransactionMonitoringCasesCaseTokenMutationOptions<
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

export function getV1TransactionMonitoringCasesCaseTokenActivityQueryKey(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
  >,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/activity', args] as const
}

export function getV1TransactionMonitoringCasesCaseTokenActivityQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TransactionMonitoringCasesCaseTokenActivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].activity.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionMonitoringCasesCaseTokenActivity<
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
  args: () => InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['activity']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1TransactionMonitoringCasesCaseTokenActivityQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1TransactionMonitoringCasesCaseTokenTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
  >,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/transactions', args] as const
}

export function getV1TransactionMonitoringCasesCaseTokenTransactionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TransactionMonitoringCasesCaseTokenTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionMonitoringCasesCaseTokenTransactions<
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
  args: () => InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['transactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1TransactionMonitoringCasesCaseTokenTransactionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1TransactionMonitoringCasesCaseTokenCardsQueryKey(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
  >,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/cards', args] as const
}

export function getV1TransactionMonitoringCasesCaseTokenCardsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TransactionMonitoringCasesCaseTokenCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].cards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionMonitoringCasesCaseTokenCards<
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
  args: () => InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['cards']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1TransactionMonitoringCasesCaseTokenCardsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1TransactionMonitoringCasesCaseTokenComments<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TransactionMonitoringCasesCaseTokenCommentsMutationOptions<
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

export function createDeleteV1TransactionMonitoringCasesCaseTokenCommentsCommentToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenMutationOptions<
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

export function createPatchV1TransactionMonitoringCasesCaseTokenCommentsCommentToken<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchV1TransactionMonitoringCasesCaseTokenCommentsCommentTokenMutationOptions<
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

export function getV1TransactionMonitoringCasesCaseTokenFilesQueryKey(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
  >,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/files', args] as const
}

export function getV1TransactionMonitoringCasesCaseTokenFilesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TransactionMonitoringCasesCaseTokenFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionMonitoringCasesCaseTokenFiles<
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
  args: () => InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1TransactionMonitoringCasesCaseTokenFilesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1TransactionMonitoringCasesCaseTokenFiles<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TransactionMonitoringCasesCaseTokenFilesMutationOptions<
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

export function getV1TransactionMonitoringCasesCaseTokenFilesFileTokenQueryKey(
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
  >,
) {
  return ['v1', '/v1/transaction_monitoring/cases/:case_token/files/:file_token', args] as const
}

export function getV1TransactionMonitoringCasesCaseTokenFilesFileTokenQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TransactionMonitoringCasesCaseTokenFilesFileTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transaction_monitoring.cases[':case_token'].files[':file_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionMonitoringCasesCaseTokenFilesFileToken<
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
  args: () => InferRequestType<
    (typeof client.v1.transaction_monitoring.cases)[':case_token']['files'][':file_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1TransactionMonitoringCasesCaseTokenFilesFileTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1TransactionMonitoringCasesCaseTokenFilesFileToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1TransactionMonitoringCasesCaseTokenFilesFileTokenMutationOptions<
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

export function getV1TransactionMonitoringQueuesQueryKey(
  args: InferRequestType<typeof client.v1.transaction_monitoring.queues.$get>,
) {
  return ['v1', '/v1/transaction_monitoring/queues', args] as const
}

export function getV1TransactionMonitoringQueuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.transaction_monitoring.queues.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.transaction_monitoring.queues.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TransactionMonitoringQueuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transaction_monitoring.queues.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionMonitoringQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.transaction_monitoring.queues.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.transaction_monitoring.queues.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1TransactionMonitoringQueuesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1TransactionMonitoringQueues<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1TransactionMonitoringQueuesMutationOptions<
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

export function getV1TransactionMonitoringQueuesQueueTokenQueryKey(
  args: InferRequestType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']>,
) {
  return ['v1', '/v1/transaction_monitoring/queues/:queue_token', args] as const
}

export function getV1TransactionMonitoringQueuesQueueTokenQueryOptions<
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
  args: InferRequestType<(typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1TransactionMonitoringQueuesQueueTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transaction_monitoring.queues[':queue_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1TransactionMonitoringQueuesQueueToken<
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
  args: () => InferRequestType<
    (typeof client.v1.transaction_monitoring.queues)[':queue_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1TransactionMonitoringQueuesQueueTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1TransactionMonitoringQueuesQueueToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1TransactionMonitoringQueuesQueueTokenMutationOptions<
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

export function createPatchV1TransactionMonitoringQueuesQueueToken<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1TransactionMonitoringQueuesQueueTokenMutationOptions<
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

export function createPostV1Transfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfer.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.transfer.$post>,
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
    const mutationDefaults = getPostV1TransferMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TransferLimitsQueryKey(
  args: InferRequestType<typeof client.v1.transfer_limits.$get>,
) {
  return ['v1', '/v1/transfer_limits', args] as const
}

export function getV1TransferLimitsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfer_limits.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.transfer_limits.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfer_limits.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1TransferLimitsQueryKey>
  >({
    queryKey: getV1TransferLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.transfer_limits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1TransferLimits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfer_limits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.transfer_limits.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfer_limits.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TransferLimitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TransferLimitsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1BookTransfersQueryKey(
  args: InferRequestType<typeof client.v1.book_transfers.$get>,
) {
  return ['v1', '/v1/book_transfers', args] as const
}

export function getV1BookTransfersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.book_transfers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.book_transfers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.book_transfers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BookTransfersQueryKey>
  >({
    queryKey: getV1BookTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.book_transfers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1BookTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.book_transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.book_transfers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.book_transfers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BookTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1BookTransfersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1BookTransfers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.book_transfers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.book_transfers.$post>,
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
    const mutationDefaults = getPostV1BookTransfersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1BookTransfersBookTransferTokenQueryKey(
  args: InferRequestType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>,
) {
  return ['v1', '/v1/book_transfers/:book_transfer_token', args] as const
}

export function getV1BookTransfersBookTransferTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1BookTransfersBookTransferTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.book_transfers[':book_transfer_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1BookTransfersBookTransferToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.book_transfers)[':book_transfer_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1BookTransfersBookTransferTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1BookTransfersBookTransferTokenRetry<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1BookTransfersBookTransferTokenRetryMutationOptions<
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

export function createPostV1BookTransfersBookTransferTokenReverse<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1BookTransfersBookTransferTokenReverseMutationOptions<
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

export function getV1ExternalPaymentsQueryKey(
  args: InferRequestType<typeof client.v1.external_payments.$get>,
) {
  return ['v1', '/v1/external_payments', args] as const
}

export function getV1ExternalPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_payments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.external_payments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_payments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ExternalPaymentsQueryKey>
  >({
    queryKey: getV1ExternalPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.external_payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ExternalPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.external_payments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_payments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ExternalPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ExternalPaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1ExternalPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.external_payments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.external_payments.$post>,
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
    const mutationDefaults = getPostV1ExternalPaymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ExternalPaymentsExternalPaymentTokenQueryKey(
  args: InferRequestType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>,
) {
  return ['v1', '/v1/external_payments/:external_payment_token', args] as const
}

export function getV1ExternalPaymentsExternalPaymentTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ExternalPaymentsExternalPaymentTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.external_payments[':external_payment_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ExternalPaymentsExternalPaymentToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.external_payments)[':external_payment_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.external_payments)[':external_payment_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ExternalPaymentsExternalPaymentTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1ExternalPaymentsExternalPaymentTokenSettle<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ExternalPaymentsExternalPaymentTokenSettleMutationOptions<
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

export function createPostV1ExternalPaymentsExternalPaymentTokenRelease<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ExternalPaymentsExternalPaymentTokenReleaseMutationOptions<
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

export function createPostV1ExternalPaymentsExternalPaymentTokenCancel<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ExternalPaymentsExternalPaymentTokenCancelMutationOptions<
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

export function createPostV1ExternalPaymentsExternalPaymentTokenReverse<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ExternalPaymentsExternalPaymentTokenReverseMutationOptions<
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

export function getV1ManagementOperationsQueryKey(
  args: InferRequestType<typeof client.v1.management_operations.$get>,
) {
  return ['v1', '/v1/management_operations', args] as const
}

export function getV1ManagementOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.management_operations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.management_operations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.management_operations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ManagementOperationsQueryKey>
  >({
    queryKey: getV1ManagementOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.management_operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ManagementOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.management_operations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.management_operations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.management_operations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ManagementOperationsQueryKey>
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
      ...getV1ManagementOperationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1ManagementOperations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.management_operations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.management_operations.$post>,
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
    const mutationDefaults = getPostV1ManagementOperationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ManagementOperationsManagementOperationTokenQueryKey(
  args: InferRequestType<
    (typeof client.v1.management_operations)[':management_operation_token']['$get']
  >,
) {
  return ['v1', '/v1/management_operations/:management_operation_token', args] as const
}

export function getV1ManagementOperationsManagementOperationTokenQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.management_operations)[':management_operation_token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ManagementOperationsManagementOperationTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.management_operations[':management_operation_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ManagementOperationsManagementOperationToken<
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
  args: () => InferRequestType<
    (typeof client.v1.management_operations)[':management_operation_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1ManagementOperationsManagementOperationTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1ManagementOperationsManagementOperationTokenReverse<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ManagementOperationsManagementOperationTokenReverseMutationOptions<
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

export function getV1NetworkProgramsQueryKey(
  args: InferRequestType<typeof client.v1.network_programs.$get>,
) {
  return ['v1', '/v1/network_programs', args] as const
}

export function getV1NetworkProgramsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.network_programs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.network_programs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.network_programs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NetworkProgramsQueryKey>
  >({
    queryKey: getV1NetworkProgramsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.network_programs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1NetworkPrograms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.network_programs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.network_programs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.network_programs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NetworkProgramsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NetworkProgramsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1NetworkProgramsNetworkProgramTokenQueryKey(
  args: InferRequestType<(typeof client.v1.network_programs)[':network_program_token']['$get']>,
) {
  return ['v1', '/v1/network_programs/:network_program_token', args] as const
}

export function getV1NetworkProgramsNetworkProgramTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.network_programs)[':network_program_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.network_programs)[':network_program_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1NetworkProgramsNetworkProgramTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.network_programs[':network_program_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NetworkProgramsNetworkProgramToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.network_programs)[':network_program_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.network_programs)[':network_program_token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1NetworkProgramsNetworkProgramTokenQueryKey>
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
      ...getV1NetworkProgramsNetworkProgramTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1FundingEventsQueryKey(
  args: InferRequestType<typeof client.v1.funding_events.$get>,
) {
  return ['v1', '/v1/funding_events', args] as const
}

export function getV1FundingEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.funding_events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.funding_events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.funding_events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1FundingEventsQueryKey>
  >({
    queryKey: getV1FundingEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.funding_events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1FundingEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.funding_events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.funding_events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.funding_events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FundingEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FundingEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1FundingEventsFundingEventTokenQueryKey(
  args: InferRequestType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>,
) {
  return ['v1', '/v1/funding_events/:funding_event_token', args] as const
}

export function getV1FundingEventsFundingEventTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FundingEventsFundingEventTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.funding_events[':funding_event_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FundingEventsFundingEventToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.funding_events)[':funding_event_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1FundingEventsFundingEventTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1FundingEventsFundingEventTokenDetailsQueryKey(
  args: InferRequestType<
    (typeof client.v1.funding_events)[':funding_event_token']['details']['$get']
  >,
) {
  return ['v1', '/v1/funding_events/:funding_event_token/details', args] as const
}

export function getV1FundingEventsFundingEventTokenDetailsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.funding_events)[':funding_event_token']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1FundingEventsFundingEventTokenDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.funding_events[':funding_event_token'].details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FundingEventsFundingEventTokenDetails<
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
  args: () => InferRequestType<
    (typeof client.v1.funding_events)[':funding_event_token']['details']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1FundingEventsFundingEventTokenDetailsQueryKey>
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
      ...getV1FundingEventsFundingEventTokenDetailsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2DisputesQueryKey(args: InferRequestType<typeof client.v2.disputes.$get>) {
  return ['v2', '/v2/disputes', args] as const
}

export function getV2DisputesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.disputes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2DisputesQueryKey>
  >({
    queryKey: getV2DisputesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.disputes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Disputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.disputes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.disputes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2DisputesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2DisputesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2DisputesDisputeTokenQueryKey(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_token']['$get']>,
) {
  return ['v2', '/v2/disputes/:dispute_token', args] as const
}

export function getV2DisputesDisputeTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2DisputesDisputeTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.disputes[':dispute_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2DisputesDisputeToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.disputes)[':dispute_token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.disputes)[':dispute_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2DisputesDisputeTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
