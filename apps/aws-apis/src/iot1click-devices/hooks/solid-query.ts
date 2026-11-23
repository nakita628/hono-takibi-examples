import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getClaimsKey() {
  return ['claims'] as const
}

export function getDevicesKey() {
  return ['devices'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPutClaimsClaimCodeMutationKey() {
  return ['claims', '/claims/:claimCode', 'PUT'] as const
}

export function getPutClaimsClaimCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.claims)[':claimCode']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.claims)[':claimCode']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutClaimsClaimCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.claims)[':claimCode']['$put']>) {
      return parseResponse(client.claims[':claimCode'].$put(args, options))
    },
  })
}

export function createPutClaimsClaimCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.claims)[':claimCode']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.claims)[':claimCode']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutClaimsClaimCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDevicesDeviceIdQueryKey(
  args: InferRequestType<(typeof client.devices)[':deviceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['devices', '/devices/:deviceId', keyArgs] as const
}

export function getDevicesDeviceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':deviceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':deviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':deviceId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesDeviceIdQueryKey>
  >({
    queryKey: getDevicesDeviceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':deviceId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDevicesDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':deviceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':deviceId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':deviceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDevicesDeviceIdQueryKey>
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
    return { ...getDevicesDeviceIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutDevicesDeviceIdFinalizeClaimMutationKey() {
  return ['devices', '/devices/:deviceId/finalize-claim', 'PUT'] as const
}

export function getPutDevicesDeviceIdFinalizeClaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.devices)[':deviceId']['finalize-claim']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.devices)[':deviceId']['finalize-claim']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDevicesDeviceIdFinalizeClaimMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.devices)[':deviceId']['finalize-claim']['$put']>,
    ) {
      return parseResponse(client.devices[':deviceId']['finalize-claim'].$put(args, options))
    },
  })
}

export function createPutDevicesDeviceIdFinalizeClaim<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':deviceId']['finalize-claim']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.devices)[':deviceId']['finalize-claim']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDevicesDeviceIdFinalizeClaimMutationOptions<
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

export function getDevicesDeviceIdMethodsQueryKey(
  args: InferRequestType<(typeof client.devices)[':deviceId']['methods']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['devices', '/devices/:deviceId/methods', keyArgs] as const
}

export function getDevicesDeviceIdMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':deviceId']['methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.devices)[':deviceId']['methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.devices)[':deviceId']['methods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesDeviceIdMethodsQueryKey>
  >({
    queryKey: getDevicesDeviceIdMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':deviceId'].methods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesDeviceIdMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.devices)[':deviceId']['methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':deviceId']['methods']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':deviceId']['methods']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDevicesDeviceIdMethodsQueryKey>
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
      ...getDevicesDeviceIdMethodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostDevicesDeviceIdMethodsMutationKey() {
  return ['devices', '/devices/:deviceId/methods', 'POST'] as const
}

export function getPostDevicesDeviceIdMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.devices)[':deviceId']['methods']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.devices)[':deviceId']['methods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDevicesDeviceIdMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.devices)[':deviceId']['methods']['$post']>,
    ) {
      return parseResponse(client.devices[':deviceId'].methods.$post(args, options))
    },
  })
}

export function createPostDevicesDeviceIdMethods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':deviceId']['methods']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.devices)[':deviceId']['methods']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDevicesDeviceIdMethodsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutDevicesDeviceIdInitiateClaimMutationKey() {
  return ['devices', '/devices/:deviceId/initiate-claim', 'PUT'] as const
}

export function getPutDevicesDeviceIdInitiateClaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.devices)[':deviceId']['initiate-claim']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.devices)[':deviceId']['initiate-claim']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDevicesDeviceIdInitiateClaimMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.devices)[':deviceId']['initiate-claim']['$put']>,
    ) {
      return parseResponse(client.devices[':deviceId']['initiate-claim'].$put(args, options))
    },
  })
}

export function createPutDevicesDeviceIdInitiateClaim<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':deviceId']['initiate-claim']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.devices)[':deviceId']['initiate-claim']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDevicesDeviceIdInitiateClaimMutationOptions<
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

export function getDevicesDeviceIdEventsFromTimeStampToTimeStampQueryKey(
  args: InferRequestType<
    (typeof client.devices)[':deviceId']['events#fromTimeStamp&toTimeStamp']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['devices', '/devices/:deviceId/events#fromTimeStamp&toTimeStamp', keyArgs] as const
}

export function getDevicesDeviceIdEventsFromTimeStampToTimeStampQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.devices)[':deviceId']['events#fromTimeStamp&toTimeStamp']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.devices)[':deviceId']['events#fromTimeStamp&toTimeStamp']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.devices)[':deviceId']['events#fromTimeStamp&toTimeStamp']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesDeviceIdEventsFromTimeStampToTimeStampQueryKey>
  >({
    queryKey: getDevicesDeviceIdEventsFromTimeStampToTimeStampQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':deviceId']['events#fromTimeStamp&toTimeStamp'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDevicesDeviceIdEventsFromTimeStampToTimeStamp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.devices)[':deviceId']['events#fromTimeStamp&toTimeStamp']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.devices)[':deviceId']['events#fromTimeStamp&toTimeStamp']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.devices)[':deviceId']['events#fromTimeStamp&toTimeStamp']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDevicesDeviceIdEventsFromTimeStampToTimeStampQueryKey>
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
      ...getDevicesDeviceIdEventsFromTimeStampToTimeStampQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDevicesQueryKey(args: InferRequestType<typeof client.devices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['devices', '/devices', keyArgs] as const
}

export function getDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDevicesQueryKey>
  >({
    queryKey: getDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.devices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDevicesQueryKey>
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
    return { ...getDevicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resource-arn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resource-arn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resource-arn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resource-arn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resource-arn']['$post']>) {
      return parseResponse(client.tags[':resource-arn'].$post(args, options))
    },
  })
}

export function createPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':resource-arn']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutDevicesDeviceIdUnclaimMutationKey() {
  return ['devices', '/devices/:deviceId/unclaim', 'PUT'] as const
}

export function getPutDevicesDeviceIdUnclaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.devices)[':deviceId']['unclaim']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.devices)[':deviceId']['unclaim']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDevicesDeviceIdUnclaimMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.devices)[':deviceId']['unclaim']['$put']>,
    ) {
      return parseResponse(client.devices[':deviceId'].unclaim.$put(args, options))
    },
  })
}

export function createPutDevicesDeviceIdUnclaim<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':deviceId']['unclaim']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.devices)[':deviceId']['unclaim']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDevicesDeviceIdUnclaimMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resource-arn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resource-arn#tagKeys'].$delete(args, options))
    },
  })
}

export function createDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
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

export function getPutDevicesDeviceIdStateMutationKey() {
  return ['devices', '/devices/:deviceId/state', 'PUT'] as const
}

export function getPutDevicesDeviceIdStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.devices)[':deviceId']['state']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.devices)[':deviceId']['state']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDevicesDeviceIdStateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.devices)[':deviceId']['state']['$put']>,
    ) {
      return parseResponse(client.devices[':deviceId'].state.$put(args, options))
    },
  })
}

export function createPutDevicesDeviceIdState<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.devices)[':deviceId']['state']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.devices)[':deviceId']['state']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDevicesDeviceIdStateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
