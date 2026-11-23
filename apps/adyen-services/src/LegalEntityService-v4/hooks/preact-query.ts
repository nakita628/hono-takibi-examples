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

export function getBusinessLinesKey() {
  return ['businessLines'] as const
}

export function getDocumentsKey() {
  return ['documents'] as const
}

export function getLegalEntitiesKey() {
  return ['legalEntities'] as const
}

export function getThemesKey() {
  return ['themes'] as const
}

export function getTransferInstrumentsKey() {
  return ['transferInstruments'] as const
}

export function getPostBusinessLinesMutationKey() {
  return ['businessLines', '/businessLines', 'POST'] as const
}

export function getPostBusinessLinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businessLines.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.businessLines.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBusinessLinesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.businessLines.$post>) {
      return parseResponse(client.businessLines.$post(args, options))
    },
  })
}

export function usePostBusinessLines<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businessLines.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.businessLines.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBusinessLinesMutationOptions<TError, TOnMutateResult>(
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

export function getBusinessLinesIdQueryKey(
  args: InferRequestType<(typeof client.businessLines)[':id']['$get']>,
) {
  return ['businessLines', '/businessLines/:id', args] as const
}

export function getBusinessLinesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.businessLines)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.businessLines)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.businessLines)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessLinesIdQueryKey>
  >({
    queryKey: getBusinessLinesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.businessLines[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBusinessLinesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.businessLines)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.businessLines)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.businessLines)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessLinesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBusinessLinesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBusinessLinesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.businessLines)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.businessLines)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.businessLines)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBusinessLinesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBusinessLinesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteBusinessLinesIdMutationKey() {
  return ['businessLines', '/businessLines/:id', 'DELETE'] as const
}

export function getDeleteBusinessLinesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.businessLines)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.businessLines)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBusinessLinesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.businessLines)[':id']['$delete']>) {
      return parseResponse(client.businessLines[':id'].$delete(args, options))
    },
  })
}

export function useDeleteBusinessLinesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.businessLines)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.businessLines)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBusinessLinesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchBusinessLinesIdMutationKey() {
  return ['businessLines', '/businessLines/:id', 'PATCH'] as const
}

export function getPatchBusinessLinesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.businessLines)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.businessLines)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBusinessLinesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.businessLines)[':id']['$patch']>) {
      return parseResponse(client.businessLines[':id'].$patch(args, options))
    },
  })
}

export function usePatchBusinessLinesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.businessLines)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.businessLines)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBusinessLinesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostDocumentsMutationKey() {
  return ['documents', '/documents', 'POST'] as const
}

export function getPostDocumentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$post>>>>>,
    TError,
    InferRequestType<typeof client.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.documents.$post>) {
      return parseResponse(client.documents.$post(args, options))
    },
  })
}

export function usePostDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.documents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDocumentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDocumentsIdQueryKey(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
) {
  return ['documents', '/documents/:id', args] as const
}

export function getDocumentsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsIdQueryKey>
  >({
    queryKey: getDocumentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.documents[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDocumentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocumentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocumentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocumentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteDocumentsIdMutationKey() {
  return ['documents', '/documents/:id', 'DELETE'] as const
}

export function getDeleteDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.documents)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDocumentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.documents)[':id']['$delete']>) {
      return parseResponse(client.documents[':id'].$delete(args, options))
    },
  })
}

export function useDeleteDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.documents)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDocumentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchDocumentsIdMutationKey() {
  return ['documents', '/documents/:id', 'PATCH'] as const
}

export function getPatchDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDocumentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.documents)[':id']['$patch']>) {
      return parseResponse(client.documents[':id'].$patch(args, options))
    },
  })
}

export function usePatchDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.documents)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDocumentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostLegalEntitiesMutationKey() {
  return ['legalEntities', '/legalEntities', 'POST'] as const
}

export function getPostLegalEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legalEntities.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.legalEntities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLegalEntitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.legalEntities.$post>) {
      return parseResponse(client.legalEntities.$post(args, options))
    },
  })
}

export function usePostLegalEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legalEntities.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.legalEntities.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLegalEntitiesMutationOptions<TError, TOnMutateResult>(
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

export function getLegalEntitiesIdQueryKey(
  args: InferRequestType<(typeof client.legalEntities)[':id']['$get']>,
) {
  return ['legalEntities', '/legalEntities/:id', args] as const
}

export function getLegalEntitiesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.legalEntities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.legalEntities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalEntitiesIdQueryKey>
  >({
    queryKey: getLegalEntitiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.legalEntities[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLegalEntitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.legalEntities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.legalEntities)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalEntitiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLegalEntitiesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLegalEntitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.legalEntities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.legalEntities)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalEntitiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLegalEntitiesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchLegalEntitiesIdMutationKey() {
  return ['legalEntities', '/legalEntities/:id', 'PATCH'] as const
}

export function getPatchLegalEntitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.legalEntities)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.legalEntities)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLegalEntitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.legalEntities)[':id']['$patch']>) {
      return parseResponse(client.legalEntities[':id'].$patch(args, options))
    },
  })
}

export function usePatchLegalEntitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.legalEntities)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.legalEntities)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchLegalEntitiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceQueryKey(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
  >,
) {
  return [
    'legalEntities',
    '/legalEntities/:id/acceptedTermsOfServiceDocument/:termsofserviceacceptancereference',
    args,
  ] as const
}

export function getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceQueryKey
    >
  >({
    queryKey:
      getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.legalEntities[':id'].acceptedTermsOfServiceDocument[
          ':termsofserviceacceptancereference'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceQueryKey
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
      ...getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceQueryKey
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
      ...getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLegalEntitiesIdBusinessLinesQueryKey(
  args: InferRequestType<(typeof client.legalEntities)[':id']['businessLines']['$get']>,
) {
  return ['legalEntities', '/legalEntities/:id/businessLines', args] as const
}

export function getLegalEntitiesIdBusinessLinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.legalEntities)[':id']['businessLines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['businessLines']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.legalEntities)[':id']['businessLines']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalEntitiesIdBusinessLinesQueryKey>
  >({
    queryKey: getLegalEntitiesIdBusinessLinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.legalEntities[':id'].businessLines.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLegalEntitiesIdBusinessLines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.legalEntities)[':id']['businessLines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['businessLines']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.legalEntities)[':id']['businessLines']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalEntitiesIdBusinessLinesQueryKey>
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
      ...getLegalEntitiesIdBusinessLinesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLegalEntitiesIdBusinessLines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.legalEntities)[':id']['businessLines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['businessLines']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.legalEntities)[':id']['businessLines']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalEntitiesIdBusinessLinesQueryKey>
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
      ...getLegalEntitiesIdBusinessLinesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLegalEntitiesIdCheckTaxElectronicDeliveryConsentMutationKey() {
  return ['legalEntities', '/legalEntities/:id/checkTaxElectronicDeliveryConsent', 'POST'] as const
}

export function getPostLegalEntitiesIdCheckTaxElectronicDeliveryConsentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legalEntities)[':id']['checkTaxElectronicDeliveryConsent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.legalEntities)[':id']['checkTaxElectronicDeliveryConsent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLegalEntitiesIdCheckTaxElectronicDeliveryConsentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legalEntities)[':id']['checkTaxElectronicDeliveryConsent']['$post']
      >,
    ) {
      return parseResponse(
        client.legalEntities[':id'].checkTaxElectronicDeliveryConsent.$post(args, options),
      )
    },
  })
}

export function usePostLegalEntitiesIdCheckTaxElectronicDeliveryConsent<
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
                  (typeof client.legalEntities)[':id']['checkTaxElectronicDeliveryConsent']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.legalEntities)[':id']['checkTaxElectronicDeliveryConsent']['$post']
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
  const mutationDefaults = getPostLegalEntitiesIdCheckTaxElectronicDeliveryConsentMutationOptions<
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

export function getPostLegalEntitiesIdCheckVerificationErrorsMutationKey() {
  return ['legalEntities', '/legalEntities/:id/checkVerificationErrors', 'POST'] as const
}

export function getPostLegalEntitiesIdCheckVerificationErrorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.legalEntities)[':id']['checkVerificationErrors']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.legalEntities)[':id']['checkVerificationErrors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLegalEntitiesIdCheckVerificationErrorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legalEntities)[':id']['checkVerificationErrors']['$post']
      >,
    ) {
      return parseResponse(client.legalEntities[':id'].checkVerificationErrors.$post(args, options))
    },
  })
}

export function usePostLegalEntitiesIdCheckVerificationErrors<
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
                ReturnType<(typeof client.legalEntities)[':id']['checkVerificationErrors']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.legalEntities)[':id']['checkVerificationErrors']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLegalEntitiesIdCheckVerificationErrorsMutationOptions<
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

export function getPostLegalEntitiesIdConfirmDataReviewMutationKey() {
  return ['legalEntities', '/legalEntities/:id/confirmDataReview', 'POST'] as const
}

export function getPostLegalEntitiesIdConfirmDataReviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.legalEntities)[':id']['confirmDataReview']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.legalEntities)[':id']['confirmDataReview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLegalEntitiesIdConfirmDataReviewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.legalEntities)[':id']['confirmDataReview']['$post']>,
    ) {
      return parseResponse(client.legalEntities[':id'].confirmDataReview.$post(args, options))
    },
  })
}

export function usePostLegalEntitiesIdConfirmDataReview<
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
                ReturnType<(typeof client.legalEntities)[':id']['confirmDataReview']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.legalEntities)[':id']['confirmDataReview']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLegalEntitiesIdConfirmDataReviewMutationOptions<
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

export function getPostLegalEntitiesIdOnboardingLinksMutationKey() {
  return ['legalEntities', '/legalEntities/:id/onboardingLinks', 'POST'] as const
}

export function getPostLegalEntitiesIdOnboardingLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.legalEntities)[':id']['onboardingLinks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.legalEntities)[':id']['onboardingLinks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLegalEntitiesIdOnboardingLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.legalEntities)[':id']['onboardingLinks']['$post']>,
    ) {
      return parseResponse(client.legalEntities[':id'].onboardingLinks.$post(args, options))
    },
  })
}

export function usePostLegalEntitiesIdOnboardingLinks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.legalEntities)[':id']['onboardingLinks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.legalEntities)[':id']['onboardingLinks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLegalEntitiesIdOnboardingLinksMutationOptions<
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

export function getLegalEntitiesIdPciQuestionnairesQueryKey(
  args: InferRequestType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>,
) {
  return ['legalEntities', '/legalEntities/:id/pciQuestionnaires', args] as const
}

export function getLegalEntitiesIdPciQuestionnairesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalEntitiesIdPciQuestionnairesQueryKey>
  >({
    queryKey: getLegalEntitiesIdPciQuestionnairesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.legalEntities[':id'].pciQuestionnaires.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLegalEntitiesIdPciQuestionnaires<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalEntitiesIdPciQuestionnairesQueryKey>
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
      ...getLegalEntitiesIdPciQuestionnairesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLegalEntitiesIdPciQuestionnaires<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalEntitiesIdPciQuestionnairesQueryKey>
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
      ...getLegalEntitiesIdPciQuestionnairesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesMutationKey() {
  return [
    'legalEntities',
    '/legalEntities/:id/pciQuestionnaires/generatePciTemplates',
    'POST',
  ] as const
}

export function getPostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legalEntities)[':id']['pciQuestionnaires']['generatePciTemplates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.legalEntities)[':id']['pciQuestionnaires']['generatePciTemplates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legalEntities)[':id']['pciQuestionnaires']['generatePciTemplates']['$post']
      >,
    ) {
      return parseResponse(
        client.legalEntities[':id'].pciQuestionnaires.generatePciTemplates.$post(args, options),
      )
    },
  })
}

export function usePostLegalEntitiesIdPciQuestionnairesGeneratePciTemplates<
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
                  (typeof client.legalEntities)[':id']['pciQuestionnaires']['generatePciTemplates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.legalEntities)[':id']['pciQuestionnaires']['generatePciTemplates']['$post']
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
    getPostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesMutationOptions<
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

export function getPostLegalEntitiesIdPciQuestionnairesSignPciTemplatesMutationKey() {
  return ['legalEntities', '/legalEntities/:id/pciQuestionnaires/signPciTemplates', 'POST'] as const
}

export function getPostLegalEntitiesIdPciQuestionnairesSignPciTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legalEntities)[':id']['pciQuestionnaires']['signPciTemplates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.legalEntities)[':id']['pciQuestionnaires']['signPciTemplates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLegalEntitiesIdPciQuestionnairesSignPciTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legalEntities)[':id']['pciQuestionnaires']['signPciTemplates']['$post']
      >,
    ) {
      return parseResponse(
        client.legalEntities[':id'].pciQuestionnaires.signPciTemplates.$post(args, options),
      )
    },
  })
}

export function usePostLegalEntitiesIdPciQuestionnairesSignPciTemplates<
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
                  (typeof client.legalEntities)[':id']['pciQuestionnaires']['signPciTemplates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.legalEntities)[':id']['pciQuestionnaires']['signPciTemplates']['$post']
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
  const mutationDefaults = getPostLegalEntitiesIdPciQuestionnairesSignPciTemplatesMutationOptions<
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

export function getPostLegalEntitiesIdPciQuestionnairesSigningRequiredMutationKey() {
  return ['legalEntities', '/legalEntities/:id/pciQuestionnaires/signingRequired', 'POST'] as const
}

export function getPostLegalEntitiesIdPciQuestionnairesSigningRequiredMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legalEntities)[':id']['pciQuestionnaires']['signingRequired']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.legalEntities)[':id']['pciQuestionnaires']['signingRequired']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLegalEntitiesIdPciQuestionnairesSigningRequiredMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legalEntities)[':id']['pciQuestionnaires']['signingRequired']['$post']
      >,
    ) {
      return parseResponse(
        client.legalEntities[':id'].pciQuestionnaires.signingRequired.$post(args, options),
      )
    },
  })
}

export function usePostLegalEntitiesIdPciQuestionnairesSigningRequired<
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
                  (typeof client.legalEntities)[':id']['pciQuestionnaires']['signingRequired']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.legalEntities)[':id']['pciQuestionnaires']['signingRequired']['$post']
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
  const mutationDefaults = getPostLegalEntitiesIdPciQuestionnairesSigningRequiredMutationOptions<
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

export function getLegalEntitiesIdPciQuestionnairesPciidQueryKey(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']
  >,
) {
  return ['legalEntities', '/legalEntities/:id/pciQuestionnaires/:pciid', args] as const
}

export function getLegalEntitiesIdPciQuestionnairesPciidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalEntitiesIdPciQuestionnairesPciidQueryKey>
  >({
    queryKey: getLegalEntitiesIdPciQuestionnairesPciidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.legalEntities[':id'].pciQuestionnaires[':pciid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLegalEntitiesIdPciQuestionnairesPciid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalEntitiesIdPciQuestionnairesPciidQueryKey>
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
      ...getLegalEntitiesIdPciQuestionnairesPciidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLegalEntitiesIdPciQuestionnairesPciid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalEntitiesIdPciQuestionnairesPciidQueryKey>
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
      ...getLegalEntitiesIdPciQuestionnairesPciidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLegalEntitiesIdSetTaxElectronicDeliveryConsentMutationKey() {
  return ['legalEntities', '/legalEntities/:id/setTaxElectronicDeliveryConsent', 'POST'] as const
}

export function getPostLegalEntitiesIdSetTaxElectronicDeliveryConsentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legalEntities)[':id']['setTaxElectronicDeliveryConsent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.legalEntities)[':id']['setTaxElectronicDeliveryConsent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLegalEntitiesIdSetTaxElectronicDeliveryConsentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legalEntities)[':id']['setTaxElectronicDeliveryConsent']['$post']
      >,
    ) {
      return parseResponse(
        client.legalEntities[':id'].setTaxElectronicDeliveryConsent.$post(args, options),
      )
    },
  })
}

export function usePostLegalEntitiesIdSetTaxElectronicDeliveryConsent<
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
                  (typeof client.legalEntities)[':id']['setTaxElectronicDeliveryConsent']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.legalEntities)[':id']['setTaxElectronicDeliveryConsent']['$post']
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
  const mutationDefaults = getPostLegalEntitiesIdSetTaxElectronicDeliveryConsentMutationOptions<
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

export function getPostLegalEntitiesIdTermsOfServiceMutationKey() {
  return ['legalEntities', '/legalEntities/:id/termsOfService', 'POST'] as const
}

export function getPostLegalEntitiesIdTermsOfServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.legalEntities)[':id']['termsOfService']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.legalEntities)[':id']['termsOfService']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLegalEntitiesIdTermsOfServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.legalEntities)[':id']['termsOfService']['$post']>,
    ) {
      return parseResponse(client.legalEntities[':id'].termsOfService.$post(args, options))
    },
  })
}

export function usePostLegalEntitiesIdTermsOfService<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.legalEntities)[':id']['termsOfService']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.legalEntities)[':id']['termsOfService']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLegalEntitiesIdTermsOfServiceMutationOptions<
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

export function getPatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidMutationKey() {
  return [
    'legalEntities',
    '/legalEntities/:id/termsOfService/:termsofservicedocumentid',
    'PATCH',
  ] as const
}

export function getPatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legalEntities)[':id']['termsOfService'][':termsofservicedocumentid']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.legalEntities)[':id']['termsOfService'][':termsofservicedocumentid']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legalEntities)[':id']['termsOfService'][':termsofservicedocumentid']['$patch']
      >,
    ) {
      return parseResponse(
        client.legalEntities[':id'].termsOfService[':termsofservicedocumentid'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid<
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
                  (typeof client.legalEntities)[':id']['termsOfService'][':termsofservicedocumentid']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.legalEntities)[':id']['termsOfService'][':termsofservicedocumentid']['$patch']
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
    getPatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidMutationOptions<
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

export function getLegalEntitiesIdTermsOfServiceAcceptanceInfosQueryKey(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']
  >,
) {
  return ['legalEntities', '/legalEntities/:id/termsOfServiceAcceptanceInfos', args] as const
}

export function getLegalEntitiesIdTermsOfServiceAcceptanceInfosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalEntitiesIdTermsOfServiceAcceptanceInfosQueryKey>
  >({
    queryKey: getLegalEntitiesIdTermsOfServiceAcceptanceInfosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.legalEntities[':id'].termsOfServiceAcceptanceInfos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLegalEntitiesIdTermsOfServiceAcceptanceInfos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalEntitiesIdTermsOfServiceAcceptanceInfosQueryKey>
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
      ...getLegalEntitiesIdTermsOfServiceAcceptanceInfosQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLegalEntitiesIdTermsOfServiceAcceptanceInfos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalEntitiesIdTermsOfServiceAcceptanceInfosQueryKey>
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
      ...getLegalEntitiesIdTermsOfServiceAcceptanceInfosQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLegalEntitiesIdTermsOfServiceStatusQueryKey(
  args: InferRequestType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>,
) {
  return ['legalEntities', '/legalEntities/:id/termsOfServiceStatus', args] as const
}

export function getLegalEntitiesIdTermsOfServiceStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalEntitiesIdTermsOfServiceStatusQueryKey>
  >({
    queryKey: getLegalEntitiesIdTermsOfServiceStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.legalEntities[':id'].termsOfServiceStatus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLegalEntitiesIdTermsOfServiceStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalEntitiesIdTermsOfServiceStatusQueryKey>
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
      ...getLegalEntitiesIdTermsOfServiceStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLegalEntitiesIdTermsOfServiceStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalEntitiesIdTermsOfServiceStatusQueryKey>
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
      ...getLegalEntitiesIdTermsOfServiceStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getThemesQueryKey() {
  return ['themes', '/themes'] as const
}

export function getThemesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.themes.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.themes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getThemesQueryKey>
  >({
    queryKey: getThemesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.themes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useThemes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.themes.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.themes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getThemesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getThemesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseThemes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.themes.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.themes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getThemesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getThemesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getThemesIdQueryKey(args: InferRequestType<(typeof client.themes)[':id']['$get']>) {
  return ['themes', '/themes/:id', args] as const
}

export function getThemesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.themes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.themes)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.themes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getThemesIdQueryKey>
  >({
    queryKey: getThemesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.themes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useThemesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.themes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.themes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.themes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getThemesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseThemesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.themes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.themes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.themes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getThemesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTransferInstrumentsMutationKey() {
  return ['transferInstruments', '/transferInstruments', 'POST'] as const
}

export function getPostTransferInstrumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transferInstruments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transferInstruments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferInstrumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transferInstruments.$post>) {
      return parseResponse(client.transferInstruments.$post(args, options))
    },
  })
}

export function usePostTransferInstruments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transferInstruments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transferInstruments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransferInstrumentsMutationOptions<TError, TOnMutateResult>(
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

export function getTransferInstrumentsIdQueryKey(
  args: InferRequestType<(typeof client.transferInstruments)[':id']['$get']>,
) {
  return ['transferInstruments', '/transferInstruments/:id', args] as const
}

export function getTransferInstrumentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.transferInstruments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transferInstruments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transferInstruments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransferInstrumentsIdQueryKey>
  >({
    queryKey: getTransferInstrumentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transferInstruments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTransferInstrumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.transferInstruments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transferInstruments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.transferInstruments)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransferInstrumentsIdQueryKey>
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
      ...getTransferInstrumentsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTransferInstrumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.transferInstruments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transferInstruments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.transferInstruments)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransferInstrumentsIdQueryKey>
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
      ...getTransferInstrumentsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteTransferInstrumentsIdMutationKey() {
  return ['transferInstruments', '/transferInstruments/:id', 'DELETE'] as const
}

export function getDeleteTransferInstrumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transferInstruments)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.transferInstruments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTransferInstrumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transferInstruments)[':id']['$delete']>,
    ) {
      return parseResponse(client.transferInstruments[':id'].$delete(args, options))
    },
  })
}

export function useDeleteTransferInstrumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transferInstruments)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.transferInstruments)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTransferInstrumentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchTransferInstrumentsIdMutationKey() {
  return ['transferInstruments', '/transferInstruments/:id', 'PATCH'] as const
}

export function getPatchTransferInstrumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transferInstruments)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transferInstruments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTransferInstrumentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.transferInstruments)[':id']['$patch']>) {
      return parseResponse(client.transferInstruments[':id'].$patch(args, options))
    },
  })
}

export function usePatchTransferInstrumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.transferInstruments)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.transferInstruments)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTransferInstrumentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostLegalEntitiesIdRequestPeriodicReviewMutationKey() {
  return ['legalEntities', '/legalEntities/:id/requestPeriodicReview', 'POST'] as const
}

export function getPostLegalEntitiesIdRequestPeriodicReviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.legalEntities)[':id']['requestPeriodicReview']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.legalEntities)[':id']['requestPeriodicReview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLegalEntitiesIdRequestPeriodicReviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.legalEntities)[':id']['requestPeriodicReview']['$post']
      >,
    ) {
      return parseResponse(client.legalEntities[':id'].requestPeriodicReview.$post(args, options))
    },
  })
}

export function usePostLegalEntitiesIdRequestPeriodicReview<
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
                  ReturnType<(typeof client.legalEntities)[':id']['requestPeriodicReview']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.legalEntities)[':id']['requestPeriodicReview']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLegalEntitiesIdRequestPeriodicReviewMutationOptions<
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
