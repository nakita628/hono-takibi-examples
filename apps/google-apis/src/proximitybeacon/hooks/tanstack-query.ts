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

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getPostV1beta1BeaconinfoGetforobservedMutationKey() {
  return ['v1beta1', '/v1beta1/beaconinfo:getforobserved', 'POST'] as const
}

export function getPostV1beta1BeaconinfoGetforobservedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)['beaconinfo:getforobserved']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)['beaconinfo:getforobserved']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1BeaconinfoGetforobservedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)['beaconinfo:getforobserved']['$post']>,
    ) {
      return parseResponse(client.v1beta1['beaconinfo:getforobserved'].$post(args, options))
    },
  })
}

export function usePostV1beta1BeaconinfoGetforobserved<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)['beaconinfo:getforobserved']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)['beaconinfo:getforobserved']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1BeaconinfoGetforobservedMutationOptions<
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

export function getV1beta1BeaconsQueryKey(
  args: InferRequestType<typeof client.v1beta1.beacons.$get>,
) {
  return ['v1beta1', '/v1beta1/beacons', args] as const
}

export function getV1beta1BeaconsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.beacons.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1beta1.beacons.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.beacons.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1BeaconsQueryKey>
  >({
    queryKey: getV1beta1BeaconsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.beacons.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1beta1Beacons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.beacons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1beta1.beacons.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.beacons.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1BeaconsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1beta1BeaconsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1beta1Beacons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.beacons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1beta1.beacons.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.beacons.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1BeaconsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1beta1BeaconsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1beta1BeaconsRegisterMutationKey() {
  return ['v1beta1', '/v1beta1/beacons:register', 'POST'] as const
}

export function getPostV1beta1BeaconsRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)['beacons:register']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)['beacons:register']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1BeaconsRegisterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)['beacons:register']['$post']>) {
      return parseResponse(client.v1beta1['beacons:register'].$post(args, options))
    },
  })
}

export function usePostV1beta1BeaconsRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)['beacons:register']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)['beacons:register']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1BeaconsRegisterMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1EidparamsQueryKey(
  args: InferRequestType<typeof client.v1beta1.eidparams.$get>,
) {
  return ['v1beta1', '/v1beta1/eidparams', args] as const
}

export function getV1beta1EidparamsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.eidparams.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1beta1.eidparams.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.eidparams.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1EidparamsQueryKey>
  >({
    queryKey: getV1beta1EidparamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.eidparams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1beta1Eidparams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.eidparams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1beta1.eidparams.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.eidparams.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1EidparamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1beta1EidparamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1beta1Eidparams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.eidparams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1beta1.eidparams.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.eidparams.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1EidparamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1beta1EidparamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1beta1NamespacesQueryKey(
  args: InferRequestType<typeof client.v1beta1.namespaces.$get>,
) {
  return ['v1beta1', '/v1beta1/namespaces', args] as const
}

export function getV1beta1NamespacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1beta1.namespaces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.namespaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NamespacesQueryKey>
  >({
    queryKey: getV1beta1NamespacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.namespaces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1beta1Namespaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1beta1.namespaces.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.namespaces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1NamespacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1beta1NamespacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1beta1Namespaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1beta1.namespaces.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.namespaces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1NamespacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1beta1NamespacesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1beta1AttachmentNameMutationKey() {
  return ['v1beta1', '/v1beta1/:attachmentName', 'DELETE'] as const
}

export function getDeleteV1beta1AttachmentNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':attachmentName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':attachmentName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta1AttachmentNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':attachmentName']['$delete']>,
    ) {
      return parseResponse(client.v1beta1[':attachmentName'].$delete(args, options))
    },
  })
}

export function useDeleteV1beta1AttachmentName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':attachmentName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':attachmentName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1beta1AttachmentNameMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1BeaconNameQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:beaconName', args] as const
}

export function getV1beta1BeaconNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1BeaconNameQueryKey>
  >({
    queryKey: getV1beta1BeaconNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':beaconName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1BeaconName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1BeaconNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1beta1BeaconNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1beta1BeaconName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1BeaconNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1beta1BeaconNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1beta1BeaconNameMutationKey() {
  return ['v1beta1', '/v1beta1/:beaconName', 'PUT'] as const
}

export function getPutV1beta1BeaconNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':beaconName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1beta1BeaconNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':beaconName']['$put']>) {
      return parseResponse(client.v1beta1[':beaconName'].$put(args, options))
    },
  })
}

export function usePutV1beta1BeaconName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':beaconName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1beta1BeaconNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1beta1BeaconNameMutationKey() {
  return ['v1beta1', '/v1beta1/:beaconName', 'DELETE'] as const
}

export function getDeleteV1beta1BeaconNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':beaconName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta1BeaconNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':beaconName']['$delete']>) {
      return parseResponse(client.v1beta1[':beaconName'].$delete(args, options))
    },
  })
}

export function useDeleteV1beta1BeaconName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':beaconName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1beta1BeaconNameMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1BeaconNameAttachmentsQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:beaconName/attachments', args] as const
}

export function getV1beta1BeaconNameAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1BeaconNameAttachmentsQueryKey>
  >({
    queryKey: getV1beta1BeaconNameAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':beaconName'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1BeaconNameAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1BeaconNameAttachmentsQueryKey>
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
      ...getV1beta1BeaconNameAttachmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1beta1BeaconNameAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1BeaconNameAttachmentsQueryKey>
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
      ...getV1beta1BeaconNameAttachmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1beta1BeaconNameAttachmentsMutationKey() {
  return ['v1beta1', '/v1beta1/:beaconName/attachments', 'POST'] as const
}

export function getPostV1beta1BeaconNameAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['attachments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1BeaconNameAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':beaconName'].attachments.$post(args, options))
    },
  })
}

export function usePostV1beta1BeaconNameAttachments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['attachments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1BeaconNameAttachmentsMutationOptions<
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

export function getPostV1beta1BeaconNameAttachmentsBatchDeleteMutationKey() {
  return ['v1beta1', '/v1beta1/:beaconName/attachments:batchDelete', 'POST'] as const
}

export function getPostV1beta1BeaconNameAttachmentsBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta1)[':beaconName']['attachments:batchDelete']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments:batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1BeaconNameAttachmentsBatchDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1)[':beaconName']['attachments:batchDelete']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1[':beaconName']['attachments:batchDelete'].$post(args, options),
      )
    },
  })
}

export function usePostV1beta1BeaconNameAttachmentsBatchDelete<
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
                  (typeof client.v1beta1)[':beaconName']['attachments:batchDelete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1)[':beaconName']['attachments:batchDelete']['$post']
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
  const mutationDefaults = getPostV1beta1BeaconNameAttachmentsBatchDeleteMutationOptions<
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

export function getV1beta1BeaconNameDiagnosticsQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:beaconName/diagnostics', args] as const
}

export function getV1beta1BeaconNameDiagnosticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1BeaconNameDiagnosticsQueryKey>
  >({
    queryKey: getV1beta1BeaconNameDiagnosticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':beaconName'].diagnostics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1BeaconNameDiagnostics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1BeaconNameDiagnosticsQueryKey>
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
      ...getV1beta1BeaconNameDiagnosticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1beta1BeaconNameDiagnostics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1BeaconNameDiagnosticsQueryKey>
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
      ...getV1beta1BeaconNameDiagnosticsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1beta1BeaconNameActivateMutationKey() {
  return ['v1beta1', '/v1beta1/:beaconName:activate', 'POST'] as const
}

export function getPostV1beta1BeaconNameActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':beaconName:activate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':beaconName:activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1BeaconNameActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':beaconName:activate']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':beaconName:activate'].$post(args, options))
    },
  })
}

export function usePostV1beta1BeaconNameActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':beaconName:activate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':beaconName:activate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1BeaconNameActivateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1beta1BeaconNameDeactivateMutationKey() {
  return ['v1beta1', '/v1beta1/:beaconName:deactivate', 'POST'] as const
}

export function getPostV1beta1BeaconNameDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':beaconName:deactivate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':beaconName:deactivate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1BeaconNameDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':beaconName:deactivate']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':beaconName:deactivate'].$post(args, options))
    },
  })
}

export function usePostV1beta1BeaconNameDeactivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':beaconName:deactivate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':beaconName:deactivate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1BeaconNameDeactivateMutationOptions<
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

export function getPostV1beta1BeaconNameDecommissionMutationKey() {
  return ['v1beta1', '/v1beta1/:beaconName:decommission', 'POST'] as const
}

export function getPostV1beta1BeaconNameDecommissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':beaconName:decommission']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':beaconName:decommission']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1BeaconNameDecommissionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':beaconName:decommission']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':beaconName:decommission'].$post(args, options))
    },
  })
}

export function usePostV1beta1BeaconNameDecommission<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':beaconName:decommission']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':beaconName:decommission']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1BeaconNameDecommissionMutationOptions<
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

export function getPutV1beta1NamespaceNameMutationKey() {
  return ['v1beta1', '/v1beta1/:namespaceName', 'PUT'] as const
}

export function getPutV1beta1NamespaceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':namespaceName']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':namespaceName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1beta1NamespaceNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':namespaceName']['$put']>) {
      return parseResponse(client.v1beta1[':namespaceName'].$put(args, options))
    },
  })
}

export function usePutV1beta1NamespaceName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':namespaceName']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':namespaceName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1beta1NamespaceNameMutationOptions<TError, TOnMutateResult>(
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
