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

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV1CertificatesMutationKey() {
  return ['v1', '/v1/certificates', 'POST'] as const
}

export function getPostV1CertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.certificates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CertificatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.certificates.$post>) {
      return parseResponse(client.v1.certificates.$post(args, options))
    },
  })
}

export function usePostV1Certificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.certificates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CertificatesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1CertificatesValidateMutationKey() {
  return ['v1', '/v1/certificates/validate', 'POST'] as const
}

export function getPostV1CertificatesValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.validate.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.certificates.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CertificatesValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.certificates.validate.$post>) {
      return parseResponse(client.v1.certificates.validate.$post(args, options))
    },
  })
}

export function usePostV1CertificatesValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.certificates.validate.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v1.certificates.validate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CertificatesValidateMutationOptions<TError, TOnMutateResult>(
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

export function getV1CertificatesCertificateIdQueryKey(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['$get']>,
) {
  return ['v1', '/v1/certificates/:certificateId', args] as const
}

export function getV1CertificatesCertificateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CertificatesCertificateIdQueryKey>
  >({
    queryKey: getV1CertificatesCertificateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.certificates[':certificateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CertificatesCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CertificatesCertificateIdQueryKey>
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
      ...getV1CertificatesCertificateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CertificatesCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CertificatesCertificateIdQueryKey>
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
      ...getV1CertificatesCertificateIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1CertificatesCertificateIdActionsQueryKey(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>,
) {
  return ['v1', '/v1/certificates/:certificateId/actions', args] as const
}

export function getV1CertificatesCertificateIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CertificatesCertificateIdActionsQueryKey>
  >({
    queryKey: getV1CertificatesCertificateIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.certificates[':certificateId'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CertificatesCertificateIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CertificatesCertificateIdActionsQueryKey>
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
      ...getV1CertificatesCertificateIdActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CertificatesCertificateIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CertificatesCertificateIdActionsQueryKey>
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
      ...getV1CertificatesCertificateIdActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1CertificatesCertificateIdCallbackQueryKey(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>,
) {
  return ['v1', '/v1/certificates/:certificateId/callback', args] as const
}

export function getV1CertificatesCertificateIdCallbackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CertificatesCertificateIdCallbackQueryKey>
  >({
    queryKey: getV1CertificatesCertificateIdCallbackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.certificates[':certificateId'].callback.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CertificatesCertificateIdCallback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CertificatesCertificateIdCallbackQueryKey>
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
      ...getV1CertificatesCertificateIdCallbackQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CertificatesCertificateIdCallback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CertificatesCertificateIdCallbackQueryKey>
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
      ...getV1CertificatesCertificateIdCallbackQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1CertificatesCertificateIdCallbackMutationKey() {
  return ['v1', '/v1/certificates/:certificateId/callback', 'PUT'] as const
}

export function getPutV1CertificatesCertificateIdCallbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['callback']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1CertificatesCertificateIdCallbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$put']>,
    ) {
      return parseResponse(client.v1.certificates[':certificateId'].callback.$put(args, options))
    },
  })
}

export function usePutV1CertificatesCertificateIdCallback<
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
                  ReturnType<(typeof client.v1.certificates)[':certificateId']['callback']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1CertificatesCertificateIdCallbackMutationOptions<
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

export function getDeleteV1CertificatesCertificateIdCallbackMutationKey() {
  return ['v1', '/v1/certificates/:certificateId/callback', 'DELETE'] as const
}

export function getDeleteV1CertificatesCertificateIdCallbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['callback']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CertificatesCertificateIdCallbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.certificates)[':certificateId']['callback']['$delete']
      >,
    ) {
      return parseResponse(client.v1.certificates[':certificateId'].callback.$delete(args, options))
    },
  })
}

export function useDeleteV1CertificatesCertificateIdCallback<
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
                    (typeof client.v1.certificates)[':certificateId']['callback']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1CertificatesCertificateIdCallbackMutationOptions<
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

export function getPostV1CertificatesCertificateIdCancelMutationKey() {
  return ['v1', '/v1/certificates/:certificateId/cancel', 'POST'] as const
}

export function getPostV1CertificatesCertificateIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['cancel']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.certificates)[':certificateId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CertificatesCertificateIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['cancel']['$post']>,
    ) {
      return parseResponse(client.v1.certificates[':certificateId'].cancel.$post(args, options))
    },
  })
}

export function usePostV1CertificatesCertificateIdCancel<
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
                  ReturnType<(typeof client.v1.certificates)[':certificateId']['cancel']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.certificates)[':certificateId']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CertificatesCertificateIdCancelMutationOptions<
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

export function getV1CertificatesCertificateIdDownloadQueryKey(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>,
) {
  return ['v1', '/v1/certificates/:certificateId/download', args] as const
}

export function getV1CertificatesCertificateIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CertificatesCertificateIdDownloadQueryKey>
  >({
    queryKey: getV1CertificatesCertificateIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.certificates[':certificateId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CertificatesCertificateIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CertificatesCertificateIdDownloadQueryKey>
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
      ...getV1CertificatesCertificateIdDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CertificatesCertificateIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CertificatesCertificateIdDownloadQueryKey>
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
      ...getV1CertificatesCertificateIdDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1CertificatesCertificateIdEmailHistoryQueryKey(
  args: InferRequestType<
    (typeof client.v1.certificates)[':certificateId']['email']['history']['$get']
  >,
) {
  return ['v1', '/v1/certificates/:certificateId/email/history', args] as const
}

export function getV1CertificatesCertificateIdEmailHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.certificates)[':certificateId']['email']['history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.certificates)[':certificateId']['email']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.certificates)[':certificateId']['email']['history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CertificatesCertificateIdEmailHistoryQueryKey>
  >({
    queryKey: getV1CertificatesCertificateIdEmailHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.certificates[':certificateId'].email.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CertificatesCertificateIdEmailHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.certificates)[':certificateId']['email']['history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.certificates)[':certificateId']['email']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.certificates)[':certificateId']['email']['history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CertificatesCertificateIdEmailHistoryQueryKey>
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
      ...getV1CertificatesCertificateIdEmailHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CertificatesCertificateIdEmailHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.certificates)[':certificateId']['email']['history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.certificates)[':certificateId']['email']['history']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.certificates)[':certificateId']['email']['history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CertificatesCertificateIdEmailHistoryQueryKey>
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
      ...getV1CertificatesCertificateIdEmailHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1CertificatesCertificateIdEmailResendEmailAddressMutationKey() {
  return ['v1', '/v1/certificates/:certificateId/email/resend/:emailAddress', 'POST'] as const
}

export function getPostV1CertificatesCertificateIdEmailResendEmailAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.certificates)[':certificateId']['email']['resend'][':emailAddress']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.certificates)[':certificateId']['email']['resend'][':emailAddress']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CertificatesCertificateIdEmailResendEmailAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.certificates)[':certificateId']['email']['resend'][':emailAddress']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.certificates[':certificateId'].email.resend[':emailAddress'].$post(args, options),
      )
    },
  })
}

export function usePostV1CertificatesCertificateIdEmailResendEmailAddress<
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
                  (typeof client.v1.certificates)[':certificateId']['email']['resend'][':emailAddress']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.certificates)[':certificateId']['email']['resend'][':emailAddress']['$post']
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
  const mutationDefaults = getPostV1CertificatesCertificateIdEmailResendEmailAddressMutationOptions<
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

export function getPostV1CertificatesCertificateIdEmailEmailIdResendMutationKey() {
  return ['v1', '/v1/certificates/:certificateId/email/:emailId/resend', 'POST'] as const
}

export function getPostV1CertificatesCertificateIdEmailEmailIdResendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CertificatesCertificateIdEmailEmailIdResendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.certificates[':certificateId'].email[':emailId'].resend.$post(args, options),
      )
    },
  })
}

export function usePostV1CertificatesCertificateIdEmailEmailIdResend<
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
                    (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend']['$post']
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
  const mutationDefaults = getPostV1CertificatesCertificateIdEmailEmailIdResendMutationOptions<
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

export function getPostV1CertificatesCertificateIdEmailEmailIdResendEmailAddressMutationKey() {
  return [
    'v1',
    '/v1/certificates/:certificateId/email/:emailId/resend/:emailAddress',
    'POST',
  ] as const
}

export function getPostV1CertificatesCertificateIdEmailEmailIdResendEmailAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend'][':emailAddress']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend'][':emailAddress']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CertificatesCertificateIdEmailEmailIdResendEmailAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend'][':emailAddress']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.certificates[':certificateId'].email[':emailId'].resend[':emailAddress'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1CertificatesCertificateIdEmailEmailIdResendEmailAddress<
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
                    (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend'][':emailAddress']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend'][':emailAddress']['$post']
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
    getPostV1CertificatesCertificateIdEmailEmailIdResendEmailAddressMutationOptions<
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

export function getPostV1CertificatesCertificateIdReissueMutationKey() {
  return ['v1', '/v1/certificates/:certificateId/reissue', 'POST'] as const
}

export function getPostV1CertificatesCertificateIdReissueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['reissue']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.certificates)[':certificateId']['reissue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CertificatesCertificateIdReissueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['reissue']['$post']>,
    ) {
      return parseResponse(client.v1.certificates[':certificateId'].reissue.$post(args, options))
    },
  })
}

export function usePostV1CertificatesCertificateIdReissue<
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
                ReturnType<(typeof client.v1.certificates)[':certificateId']['reissue']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.certificates)[':certificateId']['reissue']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CertificatesCertificateIdReissueMutationOptions<
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

export function getPostV1CertificatesCertificateIdRenewMutationKey() {
  return ['v1', '/v1/certificates/:certificateId/renew', 'POST'] as const
}

export function getPostV1CertificatesCertificateIdRenewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['renew']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.certificates)[':certificateId']['renew']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CertificatesCertificateIdRenewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['renew']['$post']>,
    ) {
      return parseResponse(client.v1.certificates[':certificateId'].renew.$post(args, options))
    },
  })
}

export function usePostV1CertificatesCertificateIdRenew<
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
                ReturnType<(typeof client.v1.certificates)[':certificateId']['renew']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.certificates)[':certificateId']['renew']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CertificatesCertificateIdRenewMutationOptions<
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

export function getPostV1CertificatesCertificateIdRevokeMutationKey() {
  return ['v1', '/v1/certificates/:certificateId/revoke', 'POST'] as const
}

export function getPostV1CertificatesCertificateIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['revoke']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.certificates)[':certificateId']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CertificatesCertificateIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['revoke']['$post']>,
    ) {
      return parseResponse(client.v1.certificates[':certificateId'].revoke.$post(args, options))
    },
  })
}

export function usePostV1CertificatesCertificateIdRevoke<
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
                  ReturnType<(typeof client.v1.certificates)[':certificateId']['revoke']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.certificates)[':certificateId']['revoke']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CertificatesCertificateIdRevokeMutationOptions<
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

export function getV1CertificatesCertificateIdSiteSealQueryKey(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>,
) {
  return ['v1', '/v1/certificates/:certificateId/siteSeal', args] as const
}

export function getV1CertificatesCertificateIdSiteSealQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CertificatesCertificateIdSiteSealQueryKey>
  >({
    queryKey: getV1CertificatesCertificateIdSiteSealQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.certificates[':certificateId'].siteSeal.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CertificatesCertificateIdSiteSeal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CertificatesCertificateIdSiteSealQueryKey>
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
      ...getV1CertificatesCertificateIdSiteSealQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1CertificatesCertificateIdSiteSeal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CertificatesCertificateIdSiteSealQueryKey>
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
      ...getV1CertificatesCertificateIdSiteSealQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1CertificatesCertificateIdVerifyDomainControlMutationKey() {
  return ['v1', '/v1/certificates/:certificateId/verifyDomainControl', 'POST'] as const
}

export function getPostV1CertificatesCertificateIdVerifyDomainControlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.certificates)[':certificateId']['verifyDomainControl']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.certificates)[':certificateId']['verifyDomainControl']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CertificatesCertificateIdVerifyDomainControlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.certificates)[':certificateId']['verifyDomainControl']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.certificates[':certificateId'].verifyDomainControl.$post(args, options),
      )
    },
  })
}

export function usePostV1CertificatesCertificateIdVerifyDomainControl<
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
                    (typeof client.v1.certificates)[':certificateId']['verifyDomainControl']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.certificates)[':certificateId']['verifyDomainControl']['$post']
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
  const mutationDefaults = getPostV1CertificatesCertificateIdVerifyDomainControlMutationOptions<
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

export function getV2CertificatesQueryKey(
  args: InferRequestType<typeof client.v2.certificates.$get>,
) {
  return ['v2', '/v2/certificates', args] as const
}

export function getV2CertificatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.certificates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CertificatesQueryKey>
  >({
    queryKey: getV2CertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.certificates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Certificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.certificates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2CertificatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Certificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.certificates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2CertificatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2CertificatesDownloadQueryKey(
  args: InferRequestType<typeof client.v2.certificates.download.$get>,
) {
  return ['v2', '/v2/certificates/download', args] as const
}

export function getV2CertificatesDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.download.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.certificates.download.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.download.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CertificatesDownloadQueryKey>
  >({
    queryKey: getV2CertificatesDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.certificates.download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CertificatesDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.download.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.certificates.download.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.download.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CertificatesDownloadQueryKey>
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
      ...getV2CertificatesDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CertificatesDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.download.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.certificates.download.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.download.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CertificatesDownloadQueryKey>
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
      ...getV2CertificatesDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2CustomersCustomerIdCertificatesQueryKey(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>,
) {
  return ['v2', '/v2/customers/:customerId/certificates', args] as const
}

export function getV2CustomersCustomerIdCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdCertificatesQueryKey>
  >({
    queryKey: getV2CustomersCustomerIdCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers[':customerId'].certificates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CustomersCustomerIdCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdCertificatesQueryKey>
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
      ...getV2CustomersCustomerIdCertificatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CustomersCustomerIdCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdCertificatesQueryKey>
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
      ...getV2CustomersCustomerIdCertificatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingQueryKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
  >,
) {
  return ['v2', '/v2/customers/:customerId/certificates/acme/externalAccountBinding', args] as const
}

export function getV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingQueryKey>
  >({
    queryKey: getV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers[':customerId'].certificates.acme.externalAccountBinding.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CustomersCustomerIdCertificatesAcmeExternalAccountBinding<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingQueryKey>
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
      ...getV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CustomersCustomerIdCertificatesAcmeExternalAccountBinding<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingQueryKey>
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
      ...getV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2CustomersCustomerIdCertificatesCertificateIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
  >,
) {
  return ['v2', '/v2/customers/:customerId/certificates/:certificateId', args] as const
}

export function getV2CustomersCustomerIdCertificatesCertificateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdCertificatesCertificateIdQueryKey>
  >({
    queryKey: getV2CustomersCustomerIdCertificatesCertificateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers[':customerId'].certificates[':certificateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2CustomersCustomerIdCertificatesCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdCertificatesCertificateIdQueryKey>
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
      ...getV2CustomersCustomerIdCertificatesCertificateIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CustomersCustomerIdCertificatesCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersCustomerIdCertificatesCertificateIdQueryKey>
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
      ...getV2CustomersCustomerIdCertificatesCertificateIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsQueryKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
  >,
) {
  return [
    'v2',
    '/v2/customers/:customerId/certificates/:certificateId/domainVerifications',
    args,
  ] as const
}

export function getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsQueryKey>
  >({
    queryKey: getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers[':customerId'].certificates[':certificateId'].domainVerifications.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useV2CustomersCustomerIdCertificatesCertificateIdDomainVerifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsQueryKey
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
      ...getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CustomersCustomerIdCertificatesCertificateIdDomainVerifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsQueryKey
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
      ...getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainQueryKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
  >,
) {
  return [
    'v2',
    '/v2/customers/:customerId/certificates/:certificateId/domainVerifications/:domain',
    args,
  ] as const
}

export function getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainQueryKey
    >
  >({
    queryKey:
      getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers[':customerId'].certificates[':certificateId'].domainVerifications[
          ':domain'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainQueryKey
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
      ...getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainQueryKey
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
      ...getV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
