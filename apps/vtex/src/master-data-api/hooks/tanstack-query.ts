import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiDataentitiesAddressDocumentsMutationKey() {
  return ['api', '/api/dataentities/Address/documents', 'POST'] as const
}

export function getPostApiDataentitiesAddressDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.dataentities.Address.documents.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.dataentities.Address.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDataentitiesAddressDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.dataentities.Address.documents.$post>,
    ) {
      return parseResponse(client.api.dataentities.Address.documents.$post(args, options))
    },
  })
}

export function usePostApiDataentitiesAddressDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.dataentities.Address.documents.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.dataentities.Address.documents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiDataentitiesAddressDocumentsMutationOptions<
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

export function getDeleteApiDataentitiesAddressDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/Address/documents/:id', 'DELETE'] as const
}

export function getDeleteApiDataentitiesAddressDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities.Address.documents)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDataentitiesAddressDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.dataentities.Address.documents[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiDataentitiesAddressDocumentsId<
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
                ReturnType<(typeof client.api.dataentities.Address.documents)[':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiDataentitiesAddressDocumentsIdMutationOptions<
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

export function getPatchApiDataentitiesAddressDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/Address/documents/:id', 'PATCH'] as const
}

export function getPatchApiDataentitiesAddressDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities.Address.documents)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiDataentitiesAddressDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.dataentities.Address.documents[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiDataentitiesAddressDocumentsId<
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
                ReturnType<(typeof client.api.dataentities.Address.documents)[':id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiDataentitiesAddressDocumentsIdMutationOptions<
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

export function getPostApiDataentitiesClientDocumentsMutationKey() {
  return ['api', '/api/dataentities/Client/documents', 'POST'] as const
}

export function getPostApiDataentitiesClientDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.dataentities.Client.documents.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.dataentities.Client.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDataentitiesClientDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.dataentities.Client.documents.$post>,
    ) {
      return parseResponse(client.api.dataentities.Client.documents.$post(args, options))
    },
  })
}

export function usePostApiDataentitiesClientDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.dataentities.Client.documents.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.dataentities.Client.documents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiDataentitiesClientDocumentsMutationOptions<
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

export function getDeleteApiDataentitiesClientDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/Client/documents/:id', 'DELETE'] as const
}

export function getDeleteApiDataentitiesClientDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities.Client.documents)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDataentitiesClientDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.dataentities.Client.documents[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiDataentitiesClientDocumentsId<
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
                ReturnType<(typeof client.api.dataentities.Client.documents)[':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiDataentitiesClientDocumentsIdMutationOptions<
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

export function getPatchApiDataentitiesClientDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/Client/documents/:id', 'PATCH'] as const
}

export function getPatchApiDataentitiesClientDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities.Client.documents)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiDataentitiesClientDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.dataentities.Client.documents[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiDataentitiesClientDocumentsId<
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
                ReturnType<(typeof client.api.dataentities.Client.documents)[':id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiDataentitiesClientDocumentsIdMutationOptions<
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

export function getPostApiDataentitiesDataEntityNameDocumentsMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents', 'POST'] as const
}

export function getPostApiDataentitiesDataEntityNameDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':dataEntityName']['documents']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDataentitiesDataEntityNameDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['documents']['$post']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents.$post(args, options),
      )
    },
  })
}

export function usePostApiDataentitiesDataEntityNameDocuments<
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
                  (typeof client.api.dataentities)[':dataEntityName']['documents']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['documents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiDataentitiesDataEntityNameDocumentsMutationOptions<
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

export function getPatchApiDataentitiesDataEntityNameDocumentsMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents', 'PATCH'] as const
}

export function getPatchApiDataentitiesDataEntityNameDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':dataEntityName']['documents']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['documents']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiDataentitiesDataEntityNameDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['documents']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents.$patch(args, options),
      )
    },
  })
}

export function usePatchApiDataentitiesDataEntityNameDocuments<
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
                  (typeof client.api.dataentities)[':dataEntityName']['documents']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['documents']['$patch']
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
  const mutationDefaults = getPatchApiDataentitiesDataEntityNameDocumentsMutationOptions<
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

export function getApiDataentitiesDataEntityNameDocumentsIdQueryKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/documents/:id', keyArgs] as const
}

export function getApiDataentitiesDataEntityNameDocumentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameDocumentsIdQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameDocumentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDataentitiesDataEntityNameDocumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameDocumentsIdQueryKey>
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
      ...getApiDataentitiesDataEntityNameDocumentsIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDataentitiesDataEntityNameDocumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameDocumentsIdQueryKey>
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
      ...getApiDataentitiesDataEntityNameDocumentsIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiDataentitiesDataEntityNameDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents/:id', 'PUT'] as const
}

export function getPutApiDataentitiesDataEntityNameDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesDataEntityNameDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents[':id'].$put(args, options),
      )
    },
  })
}

export function usePutApiDataentitiesDataEntityNameDocumentsId<
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
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$put']
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
  const mutationDefaults = getPutApiDataentitiesDataEntityNameDocumentsIdMutationOptions<
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

export function getDeleteApiDataentitiesDataEntityNameDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents/:id', 'DELETE'] as const
}

export function getDeleteApiDataentitiesDataEntityNameDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDataentitiesDataEntityNameDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiDataentitiesDataEntityNameDocumentsId<
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
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$delete']
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
  const mutationDefaults = getDeleteApiDataentitiesDataEntityNameDocumentsIdMutationOptions<
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

export function getPatchApiDataentitiesDataEntityNameDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents/:id', 'PATCH'] as const
}

export function getPatchApiDataentitiesDataEntityNameDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiDataentitiesDataEntityNameDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiDataentitiesDataEntityNameDocumentsId<
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
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$patch']
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
  const mutationDefaults = getPatchApiDataentitiesDataEntityNameDocumentsIdMutationOptions<
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

export function getPostApiDataentitiesDataEntityNameDocumentsIdClustersMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents/:id/clusters', 'POST'] as const
}

export function getPostApiDataentitiesDataEntityNameDocumentsIdClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['clusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['clusters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiDataentitiesDataEntityNameDocumentsIdClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['clusters']['$post']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents[':id'].clusters.$post(args, options),
      )
    },
  })
}

export function usePostApiDataentitiesDataEntityNameDocumentsIdClusters<
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
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['clusters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['clusters']['$post']
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
  const mutationDefaults = getPostApiDataentitiesDataEntityNameDocumentsIdClustersMutationOptions<
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

export function getApiDataentitiesDataEntityNameDocumentsIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/documents/:id/versions', keyArgs] as const
}

export function getApiDataentitiesDataEntityNameDocumentsIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameDocumentsIdVersionsQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameDocumentsIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents[':id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDataentitiesDataEntityNameDocumentsIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameDocumentsIdVersionsQueryKey>
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
      ...getApiDataentitiesDataEntityNameDocumentsIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDataentitiesDataEntityNameDocumentsIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameDocumentsIdVersionsQueryKey>
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
      ...getApiDataentitiesDataEntityNameDocumentsIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/dataentities/:dataEntityName/documents/:id/versions/:versionId',
    keyArgs,
  ] as const
}

export function getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents[':id'].versions[':versionId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApiDataentitiesDataEntityNameDocumentsIdVersionsVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdQueryKey>
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
      ...getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDataentitiesDataEntityNameDocumentsIdVersionsVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdQueryKey>
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
      ...getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdMutationKey() {
  return [
    'api',
    '/api/dataentities/:dataEntityName/documents/:id/versions/:versionId',
    'PUT',
  ] as const
}

export function getPutApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].documents[':id'].versions[':versionId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApiDataentitiesDataEntityNameDocumentsIdVersionsVersionId<
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
                  (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$put']
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
    getPutApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdMutationOptions<
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

export function getApiDataentitiesDataEntityNameIndicesQueryKey(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/indices', keyArgs] as const
}

export function getApiDataentitiesDataEntityNameIndicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameIndicesQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameIndicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].indices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDataentitiesDataEntityNameIndices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameIndicesQueryKey>
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
      ...getApiDataentitiesDataEntityNameIndicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDataentitiesDataEntityNameIndices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameIndicesQueryKey>
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
      ...getApiDataentitiesDataEntityNameIndicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiDataentitiesDataEntityNameIndicesMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/indices', 'PUT'] as const
}

export function getPutApiDataentitiesDataEntityNameIndicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesDataEntityNameIndicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['indices']['$put']
      >,
    ) {
      return parseResponse(client.api.dataentities[':dataEntityName'].indices.$put(args, options))
    },
  })
}

export function usePutApiDataentitiesDataEntityNameIndices<
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
                ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiDataentitiesDataEntityNameIndicesMutationOptions<
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

export function getApiDataentitiesDataEntityNameIndicesIndexNameQueryKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/indices/:index_name', keyArgs] as const
}

export function getApiDataentitiesDataEntityNameIndicesIndexNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameIndicesIndexNameQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameIndicesIndexNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].indices[':index_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDataentitiesDataEntityNameIndicesIndexName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameIndicesIndexNameQueryKey>
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
      ...getApiDataentitiesDataEntityNameIndicesIndexNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDataentitiesDataEntityNameIndicesIndexName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameIndicesIndexNameQueryKey>
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
      ...getApiDataentitiesDataEntityNameIndicesIndexNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiDataentitiesDataEntityNameIndicesIndexNameMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/indices/:index_name', 'DELETE'] as const
}

export function getDeleteApiDataentitiesDataEntityNameIndicesIndexNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDataentitiesDataEntityNameIndicesIndexNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].indices[':index_name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiDataentitiesDataEntityNameIndicesIndexName<
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
                  (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$delete']
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
  const mutationDefaults = getDeleteApiDataentitiesDataEntityNameIndicesIndexNameMutationOptions<
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

export function getApiDataentitiesDataEntityNameSchemasQueryKey(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/schemas', keyArgs] as const
}

export function getApiDataentitiesDataEntityNameSchemasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameSchemasQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameSchemasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].schemas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDataentitiesDataEntityNameSchemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameSchemasQueryKey>
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
      ...getApiDataentitiesDataEntityNameSchemasQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDataentitiesDataEntityNameSchemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameSchemasQueryKey>
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
      ...getApiDataentitiesDataEntityNameSchemasQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiDataentitiesDataEntityNameSchemasSchemaNameQueryKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/schemas/:schemaName', keyArgs] as const
}

export function getApiDataentitiesDataEntityNameSchemasSchemaNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameSchemasSchemaNameQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameSchemasSchemaNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].schemas[':schemaName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDataentitiesDataEntityNameSchemasSchemaName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameSchemasSchemaNameQueryKey>
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
      ...getApiDataentitiesDataEntityNameSchemasSchemaNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDataentitiesDataEntityNameSchemasSchemaName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameSchemasSchemaNameQueryKey>
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
      ...getApiDataentitiesDataEntityNameSchemasSchemaNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiDataentitiesDataEntityNameSchemasSchemaNameMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/schemas/:schemaName', 'PUT'] as const
}

export function getPutApiDataentitiesDataEntityNameSchemasSchemaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesDataEntityNameSchemasSchemaNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$put']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].schemas[':schemaName'].$put(args, options),
      )
    },
  })
}

export function usePutApiDataentitiesDataEntityNameSchemasSchemaName<
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
                  (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$put']
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
  const mutationDefaults = getPutApiDataentitiesDataEntityNameSchemasSchemaNameMutationOptions<
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

export function getDeleteApiDataentitiesDataEntityNameSchemasSchemaNameMutationKey() {
  return ['api', '/api/dataentities/:dataEntityName/schemas/:schemaName', 'DELETE'] as const
}

export function getDeleteApiDataentitiesDataEntityNameSchemasSchemaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDataentitiesDataEntityNameSchemasSchemaNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].schemas[':schemaName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiDataentitiesDataEntityNameSchemasSchemaName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$delete']
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
  const mutationDefaults = getDeleteApiDataentitiesDataEntityNameSchemasSchemaNameMutationOptions<
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

export function getApiDataentitiesDataEntityNameScrollQueryKey(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/scroll', keyArgs] as const
}

export function getApiDataentitiesDataEntityNameScrollQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameScrollQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameScrollQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].scroll.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDataentitiesDataEntityNameScroll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameScrollQueryKey>
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
      ...getApiDataentitiesDataEntityNameScrollQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDataentitiesDataEntityNameScroll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameScrollQueryKey>
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
      ...getApiDataentitiesDataEntityNameScrollQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiDataentitiesDataEntityNameSearchQueryKey(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/search', keyArgs] as const
}

export function getApiDataentitiesDataEntityNameSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesDataEntityNameSearchQueryKey>
  >({
    queryKey: getApiDataentitiesDataEntityNameSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':dataEntityName'].search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDataentitiesDataEntityNameSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameSearchQueryKey>
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
      ...getApiDataentitiesDataEntityNameSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDataentitiesDataEntityNameSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesDataEntityNameSearchQueryKey>
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
      ...getApiDataentitiesDataEntityNameSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
