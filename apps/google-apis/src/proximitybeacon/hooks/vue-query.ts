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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.beacons.$get>>,
) {
  return ['v1beta1', '/v1beta1/beacons', toValue(args)] as const
}

export function getV1beta1BeaconsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.beacons.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1BeaconsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.beacons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1Beacons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.beacons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.beacons.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.beacons.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.beacons.$get>>>
            >
          >,
          ReturnType<typeof getV1beta1BeaconsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.beacons.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1BeaconsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1BeaconsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.beacons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.eidparams.$get>>,
) {
  return ['v1beta1', '/v1beta1/eidparams', toValue(args)] as const
}

export function getV1beta1EidparamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.eidparams.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1EidparamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.eidparams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1Eidparams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.eidparams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.eidparams.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.eidparams.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.eidparams.$get>>>
            >
          >,
          ReturnType<typeof getV1beta1EidparamsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.eidparams.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1EidparamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1EidparamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.eidparams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1NamespacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.namespaces.$get>>,
) {
  return ['v1beta1', '/v1beta1/namespaces', toValue(args)] as const
}

export function getV1beta1NamespacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.namespaces.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1NamespacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.namespaces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1Namespaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.namespaces.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.namespaces.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.namespaces.$get>>>
            >
          >,
          ReturnType<typeof getV1beta1NamespacesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.namespaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NamespacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1NamespacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.namespaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':beaconName']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:beaconName', toValue(args)] as const
}

export function getV1beta1BeaconNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':beaconName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1BeaconNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':beaconName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1BeaconName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':beaconName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1BeaconNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1BeaconNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1BeaconNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':beaconName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:beaconName/attachments', toValue(args)] as const
}

export function getV1beta1BeaconNameAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1BeaconNameAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':beaconName'].attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1BeaconNameAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1BeaconNameAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1BeaconNameAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':beaconName'].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:beaconName/diagnostics', toValue(args)] as const
}

export function getV1beta1BeaconNameDiagnosticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1BeaconNameDiagnosticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':beaconName'].diagnostics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1BeaconNameDiagnosticsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':beaconName']['diagnostics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1BeaconNameDiagnosticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1BeaconNameDiagnosticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':beaconName'].diagnostics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
