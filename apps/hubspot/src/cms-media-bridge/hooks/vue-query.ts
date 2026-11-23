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

export function getMediaBridgeKey() {
  return ['media-bridge'] as const
}

export function getPostMediaBridge202609EventsAttentionSpanMutationKey() {
  return ['media-bridge', '/media-bridge/2026-09/events/attention-span', 'POST'] as const
}

export function getPostMediaBridge202609EventsAttentionSpanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09']['events']['attention-span']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09']['events']['attention-span']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMediaBridge202609EventsAttentionSpanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09']['events']['attention-span']['$post']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'].events['attention-span'].$post(args, options),
      )
    },
  })
}

export function usePostMediaBridge202609EventsAttentionSpan<
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
                    (typeof client)['media-bridge']['2026-09']['events']['attention-span']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09']['events']['attention-span']['$post']
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
  const mutationDefaults = getPostMediaBridge202609EventsAttentionSpanMutationOptions<
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

export function getPostMediaBridge202609EventsMediaPlayedMutationKey() {
  return ['media-bridge', '/media-bridge/2026-09/events/media-played', 'POST'] as const
}

export function getPostMediaBridge202609EventsMediaPlayedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09']['events']['media-played']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['media-bridge']['2026-09']['events']['media-played']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMediaBridge202609EventsMediaPlayedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09']['events']['media-played']['$post']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'].events['media-played'].$post(args, options),
      )
    },
  })
}

export function usePostMediaBridge202609EventsMediaPlayed<
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
                    (typeof client)['media-bridge']['2026-09']['events']['media-played']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09']['events']['media-played']['$post']
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
  const mutationDefaults = getPostMediaBridge202609EventsMediaPlayedMutationOptions<
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

export function getPostMediaBridge202609EventsMediaPlayedPercentMutationKey() {
  return ['media-bridge', '/media-bridge/2026-09/events/media-played-percent', 'POST'] as const
}

export function getPostMediaBridge202609EventsMediaPlayedPercentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09']['events']['media-played-percent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09']['events']['media-played-percent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMediaBridge202609EventsMediaPlayedPercentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09']['events']['media-played-percent']['$post']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'].events['media-played-percent'].$post(args, options),
      )
    },
  })
}

export function usePostMediaBridge202609EventsMediaPlayedPercent<
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
                    (typeof client)['media-bridge']['2026-09']['events']['media-played-percent']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09']['events']['media-played-percent']['$post']
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
  const mutationDefaults = getPostMediaBridge202609EventsMediaPlayedPercentMutationOptions<
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

export function getMediaBridge202609AppIdPropertiesObjectTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
    >
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType',
    toValue(args),
  ] as const
}

export function getMediaBridge202609AppIdPropertiesObjectTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaBridge202609AppIdPropertiesObjectTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMediaBridge202609AppIdPropertiesObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMediaBridge202609AppIdPropertiesObjectTypeQueryKey>
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
              (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaBridge202609AppIdPropertiesObjectTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaBridge202609AppIdPropertiesObjectTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostMediaBridge202609AppIdPropertiesObjectTypeMutationKey() {
  return ['media-bridge', '/media-bridge/2026-09/:appId/properties/:objectType', 'POST'] as const
}

export function getPostMediaBridge202609AppIdPropertiesObjectTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMediaBridge202609AppIdPropertiesObjectTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$post']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'].$post(args, options),
      )
    },
  })
}

export function usePostMediaBridge202609AppIdPropertiesObjectType<
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$post']
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
  const mutationDefaults = getPostMediaBridge202609AppIdPropertiesObjectTypeMutationOptions<
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

export function getPostMediaBridge202609AppIdPropertiesObjectTypeBatchArchiveMutationKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/batch/archive',
    'POST',
  ] as const
}

export function getPostMediaBridge202609AppIdPropertiesObjectTypeBatchArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMediaBridge202609AppIdPropertiesObjectTypeBatchArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['archive']['$post']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'].batch.archive.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMediaBridge202609AppIdPropertiesObjectTypeBatchArchive<
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
                      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['archive']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['archive']['$post']
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
    getPostMediaBridge202609AppIdPropertiesObjectTypeBatchArchiveMutationOptions<
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

export function getPostMediaBridge202609AppIdPropertiesObjectTypeBatchCreateMutationKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/batch/create',
    'POST',
  ] as const
}

export function getPostMediaBridge202609AppIdPropertiesObjectTypeBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMediaBridge202609AppIdPropertiesObjectTypeBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'].batch.create.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMediaBridge202609AppIdPropertiesObjectTypeBatchCreate<
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['create']['$post']
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
    getPostMediaBridge202609AppIdPropertiesObjectTypeBatchCreateMutationOptions<
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

export function getPostMediaBridge202609AppIdPropertiesObjectTypeBatchReadMutationKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/batch/read',
    'POST',
  ] as const
}

export function getPostMediaBridge202609AppIdPropertiesObjectTypeBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMediaBridge202609AppIdPropertiesObjectTypeBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'].batch.read.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMediaBridge202609AppIdPropertiesObjectTypeBatchRead<
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['read']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['read']['$post']
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
    getPostMediaBridge202609AppIdPropertiesObjectTypeBatchReadMutationOptions<
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

export function getMediaBridge202609AppIdPropertiesObjectTypeGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
    >
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/groups',
    toValue(args),
  ] as const
}

export function getMediaBridge202609AppIdPropertiesObjectTypeGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaBridge202609AppIdPropertiesObjectTypeGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMediaBridge202609AppIdPropertiesObjectTypeGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMediaBridge202609AppIdPropertiesObjectTypeGroupsQueryKey>
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
              (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaBridge202609AppIdPropertiesObjectTypeGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaBridge202609AppIdPropertiesObjectTypeGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostMediaBridge202609AppIdPropertiesObjectTypeGroupsMutationKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/groups',
    'POST',
  ] as const
}

export function getPostMediaBridge202609AppIdPropertiesObjectTypeGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMediaBridge202609AppIdPropertiesObjectTypeGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$post']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMediaBridge202609AppIdPropertiesObjectTypeGroups<
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$post']
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
  const mutationDefaults = getPostMediaBridge202609AppIdPropertiesObjectTypeGroupsMutationOptions<
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

export function getMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
    >
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/groups/:groupName',
    toValue(args),
  ] as const
}

export function getMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups[
          ':groupName'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameQueryKey>
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
              (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups[
            ':groupName'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameMutationKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/groups/:groupName',
    'DELETE',
  ] as const
}

export function getDeleteMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$delete']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups[
          ':groupName'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupName<
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
                      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$delete']
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
    getDeleteMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameMutationOptions<
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

export function getPatchMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameMutationKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/groups/:groupName',
    'PATCH',
  ] as const
}

export function getPatchMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$patch']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups[
          ':groupName'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupName<
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$patch']
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
    getPatchMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameMutationOptions<
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

export function getMediaBridge202609AppIdPropertiesObjectTypePropertyNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
    >
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/:propertyName',
    toValue(args),
  ] as const
}

export function getMediaBridge202609AppIdPropertiesObjectTypePropertyNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMediaBridge202609AppIdPropertiesObjectTypePropertyNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'][':propertyName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMediaBridge202609AppIdPropertiesObjectTypePropertyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMediaBridge202609AppIdPropertiesObjectTypePropertyNameQueryKey>
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
              (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaBridge202609AppIdPropertiesObjectTypePropertyNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMediaBridge202609AppIdPropertiesObjectTypePropertyNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['media-bridge']['2026-09'][':appId'].properties[':objectType'][
            ':propertyName'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMediaBridge202609AppIdPropertiesObjectTypePropertyNameMutationKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/:propertyName',
    'DELETE',
  ] as const
}

export function getDeleteMediaBridge202609AppIdPropertiesObjectTypePropertyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMediaBridge202609AppIdPropertiesObjectTypePropertyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$delete']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'][
          ':propertyName'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteMediaBridge202609AppIdPropertiesObjectTypePropertyName<
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
                      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$delete']
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
    getDeleteMediaBridge202609AppIdPropertiesObjectTypePropertyNameMutationOptions<
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

export function getPatchMediaBridge202609AppIdPropertiesObjectTypePropertyNameMutationKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/:propertyName',
    'PATCH',
  ] as const
}

export function getPatchMediaBridge202609AppIdPropertiesObjectTypePropertyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMediaBridge202609AppIdPropertiesObjectTypePropertyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$patch']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'][
          ':propertyName'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchMediaBridge202609AppIdPropertiesObjectTypePropertyName<
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$patch']
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
    getPatchMediaBridge202609AppIdPropertiesObjectTypePropertyNameMutationOptions<
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

export function getMediaBridge202609AppIdSchemasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>
  >,
) {
  return ['media-bridge', '/media-bridge/2026-09/:appId/schemas', toValue(args)] as const
}

export function getMediaBridge202609AppIdSchemasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaBridge202609AppIdSchemasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].schemas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMediaBridge202609AppIdSchemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMediaBridge202609AppIdSchemasQueryKey>
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
            ReturnType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaBridge202609AppIdSchemasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaBridge202609AppIdSchemasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['media-bridge']['2026-09'][':appId'].schemas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMediaBridge202609AppIdSchemasObjectTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
    >
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/schemas/:objectType',
    toValue(args),
  ] as const
}

export function getMediaBridge202609AppIdSchemasObjectTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaBridge202609AppIdSchemasObjectTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].schemas[':objectType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMediaBridge202609AppIdSchemasObjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMediaBridge202609AppIdSchemasObjectTypeQueryKey>
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
              (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaBridge202609AppIdSchemasObjectTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaBridge202609AppIdSchemasObjectTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['media-bridge']['2026-09'][':appId'].schemas[':objectType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchMediaBridge202609AppIdSchemasObjectTypeMutationKey() {
  return ['media-bridge', '/media-bridge/2026-09/:appId/schemas/:objectType', 'PATCH'] as const
}

export function getPatchMediaBridge202609AppIdSchemasObjectTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMediaBridge202609AppIdSchemasObjectTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$patch']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].schemas[':objectType'].$patch(args, options),
      )
    },
  })
}

export function usePatchMediaBridge202609AppIdSchemasObjectType<
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$patch']
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
  const mutationDefaults = getPatchMediaBridge202609AppIdSchemasObjectTypeMutationOptions<
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

export function getPostMediaBridge202609AppIdSchemasObjectTypeAssociationsMutationKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/schemas/:objectType/associations',
    'POST',
  ] as const
}

export function getPostMediaBridge202609AppIdSchemasObjectTypeAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMediaBridge202609AppIdSchemasObjectTypeAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations']['$post']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].schemas[':objectType'].associations.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMediaBridge202609AppIdSchemasObjectTypeAssociations<
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations']['$post']
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
    getPostMediaBridge202609AppIdSchemasObjectTypeAssociationsMutationOptions<
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

export function getDeleteMediaBridge202609AppIdSchemasObjectTypeAssociationsAssociationIdMutationKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/schemas/:objectType/associations/:associationId',
    'DELETE',
  ] as const
}

export function getDeleteMediaBridge202609AppIdSchemasObjectTypeAssociationsAssociationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations'][':associationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations'][':associationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteMediaBridge202609AppIdSchemasObjectTypeAssociationsAssociationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations'][':associationId']['$delete']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].schemas[':objectType'].associations[
          ':associationId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteMediaBridge202609AppIdSchemasObjectTypeAssociationsAssociationId<
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
                      (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations'][':associationId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations'][':associationId']['$delete']
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
    getDeleteMediaBridge202609AppIdSchemasObjectTypeAssociationsAssociationIdMutationOptions<
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

export function getPutMediaBridge202609AppIdSettingsMutationKey() {
  return ['media-bridge', '/media-bridge/2026-09/:appId/settings', 'PUT'] as const
}

export function getPutMediaBridge202609AppIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['media-bridge']['2026-09'][':appId']['settings']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['media-bridge']['2026-09'][':appId']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMediaBridge202609AppIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['settings']['$put']
      >,
    ) {
      return parseResponse(client['media-bridge']['2026-09'][':appId'].settings.$put(args, options))
    },
  })
}

export function usePutMediaBridge202609AppIdSettings<
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['$put']
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
  const mutationDefaults = getPutMediaBridge202609AppIdSettingsMutationOptions<
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

export function getMediaBridge202609AppIdSettingsEventVisibilityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
    >
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/settings/event-visibility',
    toValue(args),
  ] as const
}

export function getMediaBridge202609AppIdSettingsEventVisibilityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaBridge202609AppIdSettingsEventVisibilityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].settings['event-visibility'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useMediaBridge202609AppIdSettingsEventVisibility<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMediaBridge202609AppIdSettingsEventVisibilityQueryKey>
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
              (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaBridge202609AppIdSettingsEventVisibilityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaBridge202609AppIdSettingsEventVisibilityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['media-bridge']['2026-09'][':appId'].settings['event-visibility'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPatchMediaBridge202609AppIdSettingsEventVisibilityMutationKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/settings/event-visibility',
    'PATCH',
  ] as const
}

export function getPatchMediaBridge202609AppIdSettingsEventVisibilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMediaBridge202609AppIdSettingsEventVisibilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$patch']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].settings['event-visibility'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchMediaBridge202609AppIdSettingsEventVisibility<
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$patch']
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
  const mutationDefaults = getPatchMediaBridge202609AppIdSettingsEventVisibilityMutationOptions<
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

export function getPostMediaBridge202609AppIdSettingsObjectDefinitionsMutationKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/settings/object-definitions',
    'POST',
  ] as const
}

export function getPostMediaBridge202609AppIdSettingsObjectDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMediaBridge202609AppIdSettingsObjectDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions']['$post']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].settings['object-definitions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMediaBridge202609AppIdSettingsObjectDefinitions<
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions']['$post']
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
  const mutationDefaults = getPostMediaBridge202609AppIdSettingsObjectDefinitionsMutationOptions<
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

export function getMediaBridge202609AppIdSettingsObjectDefinitionsMediaTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
    >
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/settings/object-definitions/:mediaType',
    toValue(args),
  ] as const
}

export function getMediaBridge202609AppIdSettingsObjectDefinitionsMediaTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMediaBridge202609AppIdSettingsObjectDefinitionsMediaTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].settings['object-definitions'][
          ':mediaType'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMediaBridge202609AppIdSettingsObjectDefinitionsMediaType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMediaBridge202609AppIdSettingsObjectDefinitionsMediaTypeQueryKey>
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
              (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaBridge202609AppIdSettingsObjectDefinitionsMediaTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMediaBridge202609AppIdSettingsObjectDefinitionsMediaTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['media-bridge']['2026-09'][':appId'].settings['object-definitions'][
            ':mediaType'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getMediaBridge202609AppIdSettingsOembedDomainsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
    >
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/settings/oembed-domains',
    toValue(args),
  ] as const
}

export function getMediaBridge202609AppIdSettingsOembedDomainsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaBridge202609AppIdSettingsOembedDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMediaBridge202609AppIdSettingsOembedDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMediaBridge202609AppIdSettingsOembedDomainsQueryKey>
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
              (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaBridge202609AppIdSettingsOembedDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaBridge202609AppIdSettingsOembedDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostMediaBridge202609AppIdSettingsOembedDomainsMutationKey() {
  return ['media-bridge', '/media-bridge/2026-09/:appId/settings/oembed-domains', 'POST'] as const
}

export function getPostMediaBridge202609AppIdSettingsOembedDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMediaBridge202609AppIdSettingsOembedDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$post']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'].$post(args, options),
      )
    },
  })
}

export function usePostMediaBridge202609AppIdSettingsOembedDomains<
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$post']
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
  const mutationDefaults = getPostMediaBridge202609AppIdSettingsOembedDomainsMutationOptions<
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

export function getDeleteMediaBridge202609AppIdSettingsOembedDomainsMutationKey() {
  return ['media-bridge', '/media-bridge/2026-09/:appId/settings/oembed-domains', 'DELETE'] as const
}

export function getDeleteMediaBridge202609AppIdSettingsOembedDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMediaBridge202609AppIdSettingsOembedDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$delete']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteMediaBridge202609AppIdSettingsOembedDomains<
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
                      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$delete']
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
  const mutationDefaults = getDeleteMediaBridge202609AppIdSettingsOembedDomainsMutationOptions<
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

export function getMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
    >
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/settings/oembed-domains/:oEmbedDomainId',
    toValue(args),
  ] as const
}

export function getMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'][
          ':oEmbedDomainId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdQueryKey>
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
              (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'][
            ':oEmbedDomainId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdMutationKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/settings/oembed-domains/:oEmbedDomainId',
    'PATCH',
  ] as const
}

export function getPatchMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$patch']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'][
          ':oEmbedDomainId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainId<
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$patch']
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
    getPatchMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdMutationOptions<
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

export function getPostMediaBridge202609AppIdSettingsRegisterMutationKey() {
  return ['media-bridge', '/media-bridge/2026-09/:appId/settings/register', 'POST'] as const
}

export function getPostMediaBridge202609AppIdSettingsRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['settings']['register']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['register']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMediaBridge202609AppIdSettingsRegisterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['settings']['register']['$post']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].settings.register.$post(args, options),
      )
    },
  })
}

export function usePostMediaBridge202609AppIdSettingsRegister<
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['register']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['register']['$post']
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
  const mutationDefaults = getPostMediaBridge202609AppIdSettingsRegisterMutationOptions<
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

export function getPostMediaBridge202609AppIdSettingsVideoAssociationDefinitionMutationKey() {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/settings/video-association-definition',
    'POST',
  ] as const
}

export function getPostMediaBridge202609AppIdSettingsVideoAssociationDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['media-bridge']['2026-09'][':appId']['settings']['video-association-definition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['media-bridge']['2026-09'][':appId']['settings']['video-association-definition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMediaBridge202609AppIdSettingsVideoAssociationDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['media-bridge']['2026-09'][':appId']['settings']['video-association-definition']['$post']
      >,
    ) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].settings['video-association-definition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMediaBridge202609AppIdSettingsVideoAssociationDefinition<
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
                    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['video-association-definition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['media-bridge']['2026-09'][':appId']['settings']['video-association-definition']['$post']
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
    getPostMediaBridge202609AppIdSettingsVideoAssociationDefinitionMutationOptions<
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
