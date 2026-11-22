import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostMediaBridge202609EventsAttentionSpan<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMediaBridge202609EventsAttentionSpanMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMediaBridge202609EventsMediaPlayed<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMediaBridge202609EventsMediaPlayedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMediaBridge202609EventsMediaPlayedPercent<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMediaBridge202609EventsMediaPlayedPercentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMediaBridge202609AppIdPropertiesObjectTypeQueryKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
  >,
) {
  return ['media-bridge', '/media-bridge/2026-09/:appId/properties/:objectType', args] as const
}

export function getMediaBridge202609AppIdPropertiesObjectTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMediaBridge202609AppIdPropertiesObjectTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMediaBridge202609AppIdPropertiesObjectType<
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
  args: () => InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMediaBridge202609AppIdPropertiesObjectTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMediaBridge202609AppIdPropertiesObjectType<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMediaBridge202609AppIdPropertiesObjectTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMediaBridge202609AppIdPropertiesObjectTypeBatchArchive<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMediaBridge202609AppIdPropertiesObjectTypeBatchArchiveMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMediaBridge202609AppIdPropertiesObjectTypeBatchCreate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMediaBridge202609AppIdPropertiesObjectTypeBatchCreateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMediaBridge202609AppIdPropertiesObjectTypeBatchRead<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMediaBridge202609AppIdPropertiesObjectTypeBatchReadMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMediaBridge202609AppIdPropertiesObjectTypeGroupsQueryKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/groups',
    args,
  ] as const
}

export function getMediaBridge202609AppIdPropertiesObjectTypeGroupsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMediaBridge202609AppIdPropertiesObjectTypeGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMediaBridge202609AppIdPropertiesObjectTypeGroups<
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
  args: () => InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMediaBridge202609AppIdPropertiesObjectTypeGroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMediaBridge202609AppIdPropertiesObjectTypeGroups<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMediaBridge202609AppIdPropertiesObjectTypeGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameQueryKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/groups/:groupName',
    args,
  ] as const
}

export function getMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameQueryOptions<
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
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups[
          ':groupName'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupName<
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
  args: () => InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMediaBridge202609AppIdPropertiesObjectTypePropertyNameQueryKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/properties/:objectType/:propertyName',
    args,
  ] as const
}

export function getMediaBridge202609AppIdPropertiesObjectTypePropertyNameQueryOptions<
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
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMediaBridge202609AppIdPropertiesObjectTypePropertyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].properties[':objectType'][':propertyName'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectMediaBridge202609AppIdPropertiesObjectTypePropertyName<
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
  args: () => InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMediaBridge202609AppIdPropertiesObjectTypePropertyNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteMediaBridge202609AppIdPropertiesObjectTypePropertyName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteMediaBridge202609AppIdPropertiesObjectTypePropertyNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMediaBridge202609AppIdPropertiesObjectTypePropertyName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchMediaBridge202609AppIdPropertiesObjectTypePropertyNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMediaBridge202609AppIdSchemasQueryKey(
  args: InferRequestType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>,
) {
  return ['media-bridge', '/media-bridge/2026-09/:appId/schemas', args] as const
}

export function getMediaBridge202609AppIdSchemasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMediaBridge202609AppIdSchemasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].schemas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMediaBridge202609AppIdSchemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMediaBridge202609AppIdSchemasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMediaBridge202609AppIdSchemasObjectTypeQueryKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
  >,
) {
  return ['media-bridge', '/media-bridge/2026-09/:appId/schemas/:objectType', args] as const
}

export function getMediaBridge202609AppIdSchemasObjectTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMediaBridge202609AppIdSchemasObjectTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].schemas[':objectType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMediaBridge202609AppIdSchemasObjectType<
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
  args: () => InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMediaBridge202609AppIdSchemasObjectTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchMediaBridge202609AppIdSchemasObjectType<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMediaBridge202609AppIdSchemasObjectTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMediaBridge202609AppIdSchemasObjectTypeAssociations<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMediaBridge202609AppIdSchemasObjectTypeAssociationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteMediaBridge202609AppIdSchemasObjectTypeAssociationsAssociationId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteMediaBridge202609AppIdSchemasObjectTypeAssociationsAssociationIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutMediaBridge202609AppIdSettings<
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
                ReturnType<(typeof client)['media-bridge']['2026-09'][':appId']['settings']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['media-bridge']['2026-09'][':appId']['settings']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMediaBridge202609AppIdSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMediaBridge202609AppIdSettingsEventVisibilityQueryKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
  >,
) {
  return ['media-bridge', '/media-bridge/2026-09/:appId/settings/event-visibility', args] as const
}

export function getMediaBridge202609AppIdSettingsEventVisibilityQueryOptions<
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
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMediaBridge202609AppIdSettingsEventVisibilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].settings['event-visibility'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMediaBridge202609AppIdSettingsEventVisibility<
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
  args: () => InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMediaBridge202609AppIdSettingsEventVisibilityQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchMediaBridge202609AppIdSettingsEventVisibility<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMediaBridge202609AppIdSettingsEventVisibilityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMediaBridge202609AppIdSettingsObjectDefinitions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMediaBridge202609AppIdSettingsObjectDefinitionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMediaBridge202609AppIdSettingsObjectDefinitionsMediaTypeQueryKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/settings/object-definitions/:mediaType',
    args,
  ] as const
}

export function getMediaBridge202609AppIdSettingsObjectDefinitionsMediaTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMediaBridge202609AppIdSettingsObjectDefinitionsMediaTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].settings['object-definitions'][
          ':mediaType'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMediaBridge202609AppIdSettingsObjectDefinitionsMediaType<
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
  args: () => InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMediaBridge202609AppIdSettingsObjectDefinitionsMediaTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getMediaBridge202609AppIdSettingsOembedDomainsQueryKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
  >,
) {
  return ['media-bridge', '/media-bridge/2026-09/:appId/settings/oembed-domains', args] as const
}

export function getMediaBridge202609AppIdSettingsOembedDomainsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMediaBridge202609AppIdSettingsOembedDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMediaBridge202609AppIdSettingsOembedDomains<
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
  args: () => InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMediaBridge202609AppIdSettingsOembedDomainsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMediaBridge202609AppIdSettingsOembedDomains<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMediaBridge202609AppIdSettingsOembedDomainsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteMediaBridge202609AppIdSettingsOembedDomains<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMediaBridge202609AppIdSettingsOembedDomainsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdQueryKey(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
  >,
) {
  return [
    'media-bridge',
    '/media-bridge/2026-09/:appId/settings/oembed-domains/:oEmbedDomainId',
    args,
  ] as const
}

export function getMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdQueryOptions<
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
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'][
          ':oEmbedDomainId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainId<
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
  args: () => InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMediaBridge202609AppIdSettingsRegister<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMediaBridge202609AppIdSettingsRegisterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMediaBridge202609AppIdSettingsVideoAssociationDefinition<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostMediaBridge202609AppIdSettingsVideoAssociationDefinitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
