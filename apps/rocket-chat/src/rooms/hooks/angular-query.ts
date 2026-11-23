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

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiV1ChannelsCreateMutationKey() {
  return ['api', '/api/v1/channels.create', 'POST'] as const
}

export function getPostApiV1ChannelsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.create']['$post']>) {
      return parseResponse(client.api.v1['channels.create'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.create']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1ChannelsAddAllMutationKey() {
  return ['api', '/api/v1/channels.addAll', 'POST'] as const
}

export function getPostApiV1ChannelsAddAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.addAll']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.addAll']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsAddAllMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.addAll']['$post']>) {
      return parseResponse(client.api.v1['channels.addAll'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsAddAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.addAll']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.addAll']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsAddAllMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1ChannelsAddLeaderMutationKey() {
  return ['api', '/api/v1/channels.addLeader', 'POST'] as const
}

export function getPostApiV1ChannelsAddLeaderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.addLeader']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.addLeader']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsAddLeaderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.addLeader']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.addLeader'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsAddLeader<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.addLeader']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.addLeader']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsAddLeaderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1ChannelsAddModeratorMutationKey() {
  return ['api', '/api/v1/channels.addModerator', 'POST'] as const
}

export function getPostApiV1ChannelsAddModeratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.addModerator']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.addModerator']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsAddModeratorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.addModerator']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.addModerator'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsAddModerator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.addModerator']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.addModerator']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsAddModeratorMutationOptions<
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

export function getPostApiV1ChannelsAddOwnerMutationKey() {
  return ['api', '/api/v1/channels.addOwner', 'POST'] as const
}

export function getPostApiV1ChannelsAddOwnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.addOwner']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.addOwner']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsAddOwnerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.addOwner']['$post']>) {
      return parseResponse(client.api.v1['channels.addOwner'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsAddOwner<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.addOwner']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.addOwner']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsAddOwnerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1ChannelsAnonymousreadQueryKey(
  args: InferRequestType<(typeof client.api.v1)['channels.anonymousread']['$get']>,
) {
  return ['api', '/api/v1/channels.anonymousread', args] as const
}

export function getApiV1ChannelsAnonymousreadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['channels.anonymousread']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['channels.anonymousread']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.anonymousread']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsAnonymousreadQueryKey>
  >({
    queryKey: getApiV1ChannelsAnonymousreadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['channels.anonymousread'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChannelsAnonymousread<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['channels.anonymousread']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['channels.anonymousread']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.anonymousread']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChannelsAnonymousreadQueryKey>
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
      ...getApiV1ChannelsAnonymousreadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1ChannelsArchiveMutationKey() {
  return ['api', '/api/v1/channels.archive', 'POST'] as const
}

export function getPostApiV1ChannelsArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.archive']['$post']>) {
      return parseResponse(client.api.v1['channels.archive'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.archive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.archive']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsArchiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1ChannelsCloseMutationKey() {
  return ['api', '/api/v1/channels.close', 'POST'] as const
}

export function getPostApiV1ChannelsCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.close']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.close']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsCloseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.close']['$post']>) {
      return parseResponse(client.api.v1['channels.close'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.close']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.close']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsCloseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1ChannelsCountersQueryKey(
  args: InferRequestType<(typeof client.api.v1)['channels.counters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.counters', keyArgs] as const
}

export function getApiV1ChannelsCountersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.counters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['channels.counters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.counters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsCountersQueryKey>
  >({
    queryKey: getApiV1ChannelsCountersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['channels.counters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChannelsCounters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.counters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['channels.counters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.counters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChannelsCountersQueryKey>
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
      ...getApiV1ChannelsCountersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1ChannelsDeleteMutationKey() {
  return ['api', '/api/v1/channels.delete', 'POST'] as const
}

export function getPostApiV1ChannelsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.delete']['$post']>) {
      return parseResponse(client.api.v1['channels.delete'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.delete']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1ChannelsFilesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['channels.files']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.files', keyArgs] as const
}

export function getApiV1ChannelsFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['channels.files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.files']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsFilesQueryKey>
  >({
    queryKey: getApiV1ChannelsFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['channels.files'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChannelsFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['channels.files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.files']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChannelsFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ChannelsFilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1ChannelsHistoryQueryKey(
  args: InferRequestType<(typeof client.api.v1)['channels.history']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.history', keyArgs] as const
}

export function getApiV1ChannelsHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['channels.history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsHistoryQueryKey>
  >({
    queryKey: getApiV1ChannelsHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['channels.history'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChannelsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['channels.history']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.history']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChannelsHistoryQueryKey>
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
      ...getApiV1ChannelsHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ChannelsInfoQueryKey(
  args: InferRequestType<(typeof client.api.v1)['channels.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.info', keyArgs] as const
}

export function getApiV1ChannelsInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['channels.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsInfoQueryKey>
  >({
    queryKey: getApiV1ChannelsInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['channels.info'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChannelsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['channels.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChannelsInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ChannelsInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1ChannelsInviteMutationKey() {
  return ['api', '/api/v1/channels.invite', 'POST'] as const
}

export function getPostApiV1ChannelsInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.invite']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsInviteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.invite']['$post']>) {
      return parseResponse(client.api.v1['channels.invite'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.invite']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.invite']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1ChannelsJoinMutationKey() {
  return ['api', '/api/v1/channels.join', 'POST'] as const
}

export function getPostApiV1ChannelsJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.join']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.join']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsJoinMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.join']['$post']>) {
      return parseResponse(client.api.v1['channels.join'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.join']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.join']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsJoinMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1ChannelsKickMutationKey() {
  return ['api', '/api/v1/channels.kick', 'POST'] as const
}

export function getPostApiV1ChannelsKickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.kick']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.kick']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsKickMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.kick']['$post']>) {
      return parseResponse(client.api.v1['channels.kick'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsKick<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.kick']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.kick']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsKickMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1ChannelsLeaveMutationKey() {
  return ['api', '/api/v1/channels.leave', 'POST'] as const
}

export function getPostApiV1ChannelsLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.leave']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsLeaveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.leave']['$post']>) {
      return parseResponse(client.api.v1['channels.leave'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.leave']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.leave']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsLeaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1ChannelsListJoinedQueryKey(
  args: InferRequestType<(typeof client.api.v1)['channels.list.joined']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.list.joined', keyArgs] as const
}

export function getApiV1ChannelsListJoinedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['channels.list.joined']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['channels.list.joined']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.list.joined']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsListJoinedQueryKey>
  >({
    queryKey: getApiV1ChannelsListJoinedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['channels.list.joined'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChannelsListJoined<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['channels.list.joined']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['channels.list.joined']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.list.joined']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChannelsListJoinedQueryKey>
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
      ...getApiV1ChannelsListJoinedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ChannelsListQueryKey(
  args: InferRequestType<(typeof client.api.v1)['channels.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.list', keyArgs] as const
}

export function getApiV1ChannelsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['channels.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsListQueryKey>
  >({
    queryKey: getApiV1ChannelsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['channels.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChannelsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['channels.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChannelsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ChannelsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1ChannelsMembersQueryKey(
  args: InferRequestType<(typeof client.api.v1)['channels.members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.members', keyArgs] as const
}

export function getApiV1ChannelsMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['channels.members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsMembersQueryKey>
  >({
    queryKey: getApiV1ChannelsMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['channels.members'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChannelsMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['channels.members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChannelsMembersQueryKey>
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
      ...getApiV1ChannelsMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ChannelsMessagesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['channels.messages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.messages', keyArgs] as const
}

export function getApiV1ChannelsMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['channels.messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsMessagesQueryKey>
  >({
    queryKey: getApiV1ChannelsMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['channels.messages'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChannelsMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['channels.messages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.messages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChannelsMessagesQueryKey>
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
      ...getApiV1ChannelsMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ChannelsModeratorsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['channels.moderators']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.moderators', keyArgs] as const
}

export function getApiV1ChannelsModeratorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['channels.moderators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['channels.moderators']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.moderators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsModeratorsQueryKey>
  >({
    queryKey: getApiV1ChannelsModeratorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['channels.moderators'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChannelsModerators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['channels.moderators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['channels.moderators']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.moderators']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChannelsModeratorsQueryKey>
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
      ...getApiV1ChannelsModeratorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ChannelsOnlineQueryKey(
  args: InferRequestType<(typeof client.api.v1)['channels.online']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.online', keyArgs] as const
}

export function getApiV1ChannelsOnlineQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.online']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['channels.online']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.online']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsOnlineQueryKey>
  >({
    queryKey: getApiV1ChannelsOnlineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['channels.online'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChannelsOnline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.online']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['channels.online']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.online']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChannelsOnlineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ChannelsOnlineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1ChannelsOpenMutationKey() {
  return ['api', '/api/v1/channels.open', 'POST'] as const
}

export function getPostApiV1ChannelsOpenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.open']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.open']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsOpenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.open']['$post']>) {
      return parseResponse(client.api.v1['channels.open'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsOpen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.open']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.open']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsOpenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1ChannelsRemoveLeaderMutationKey() {
  return ['api', '/api/v1/channels.removeLeader', 'POST'] as const
}

export function getPostApiV1ChannelsRemoveLeaderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.removeLeader']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.removeLeader']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsRemoveLeaderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.removeLeader']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.removeLeader'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsRemoveLeader<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.removeLeader']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.removeLeader']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsRemoveLeaderMutationOptions<
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

export function getPostApiV1ChannelsRemoveModeratorMutationKey() {
  return ['api', '/api/v1/channels.removeModerator', 'POST'] as const
}

export function getPostApiV1ChannelsRemoveModeratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.removeModerator']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.removeModerator']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsRemoveModeratorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.removeModerator']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.removeModerator'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsRemoveModerator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.removeModerator']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.removeModerator']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsRemoveModeratorMutationOptions<
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

export function getPostApiV1ChannelsRemoveOwnerMutationKey() {
  return ['api', '/api/v1/channels.removeOwner', 'POST'] as const
}

export function getPostApiV1ChannelsRemoveOwnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.removeOwner']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.removeOwner']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsRemoveOwnerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.removeOwner']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.removeOwner'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsRemoveOwner<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.removeOwner']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.removeOwner']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsRemoveOwnerMutationOptions<
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

export function getPostApiV1ChannelsRenameMutationKey() {
  return ['api', '/api/v1/channels.rename', 'POST'] as const
}

export function getPostApiV1ChannelsRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.rename']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.rename']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsRenameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.rename']['$post']>) {
      return parseResponse(client.api.v1['channels.rename'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.rename']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.rename']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsRenameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1ChannelsRolesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['channels.roles']['$get']>,
) {
  return ['api', '/api/v1/channels.roles', args] as const
}

export function getApiV1ChannelsRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['channels.roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.roles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsRolesQueryKey>
  >({
    queryKey: getApiV1ChannelsRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['channels.roles'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChannelsRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['channels.roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['channels.roles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.roles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChannelsRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ChannelsRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1ChannelsSetAnnouncementMutationKey() {
  return ['api', '/api/v1/channels.setAnnouncement', 'POST'] as const
}

export function getPostApiV1ChannelsSetAnnouncementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setAnnouncement']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setAnnouncement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetAnnouncementMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.setAnnouncement']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.setAnnouncement'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsSetAnnouncement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.setAnnouncement']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.setAnnouncement']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsSetAnnouncementMutationOptions<
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

export function getPostApiV1ChannelsSetCustomFieldsMutationKey() {
  return ['api', '/api/v1/channels.setCustomFields', 'POST'] as const
}

export function getPostApiV1ChannelsSetCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setCustomFields']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setCustomFields']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetCustomFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.setCustomFields']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.setCustomFields'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsSetCustomFields<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.setCustomFields']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.setCustomFields']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsSetCustomFieldsMutationOptions<
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

export function getPostApiV1ChannelsSetDefaultMutationKey() {
  return ['api', '/api/v1/channels.setDefault', 'POST'] as const
}

export function getPostApiV1ChannelsSetDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setDefault']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setDefault']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.setDefault']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.setDefault'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsSetDefault<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.setDefault']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.setDefault']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsSetDefaultMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1ChannelsSetDescriptionMutationKey() {
  return ['api', '/api/v1/channels.setDescription', 'POST'] as const
}

export function getPostApiV1ChannelsSetDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setDescription']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setDescription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.setDescription']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.setDescription'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsSetDescription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.setDescription']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.setDescription']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsSetDescriptionMutationOptions<
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

export function getPostApiV1ChannelsSetJoinCodeMutationKey() {
  return ['api', '/api/v1/channels.setJoinCode', 'POST'] as const
}

export function getPostApiV1ChannelsSetJoinCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setJoinCode']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setJoinCode']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetJoinCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.setJoinCode']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.setJoinCode'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsSetJoinCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.setJoinCode']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.setJoinCode']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsSetJoinCodeMutationOptions<
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

export function getPostApiV1ChannelsSetPurposeMutationKey() {
  return ['api', '/api/v1/channels.setPurpose', 'POST'] as const
}

export function getPostApiV1ChannelsSetPurposeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setPurpose']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setPurpose']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetPurposeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.setPurpose']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.setPurpose'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsSetPurpose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.setPurpose']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.setPurpose']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsSetPurposeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1ChannelsSetReadOnlyMutationKey() {
  return ['api', '/api/v1/channels.setReadOnly', 'POST'] as const
}

export function getPostApiV1ChannelsSetReadOnlyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setReadOnly']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setReadOnly']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetReadOnlyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.setReadOnly']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.setReadOnly'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsSetReadOnly<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.setReadOnly']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.setReadOnly']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsSetReadOnlyMutationOptions<
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

export function getPostApiV1ChannelsSetTopicMutationKey() {
  return ['api', '/api/v1/channels.setTopic', 'POST'] as const
}

export function getPostApiV1ChannelsSetTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setTopic']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setTopic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetTopicMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.setTopic']['$post']>) {
      return parseResponse(client.api.v1['channels.setTopic'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsSetTopic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.setTopic']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.setTopic']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsSetTopicMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1ChannelsSetTypeMutationKey() {
  return ['api', '/api/v1/channels.setType', 'POST'] as const
}

export function getPostApiV1ChannelsSetTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.setType']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.setType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsSetTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['channels.setType']['$post']>) {
      return parseResponse(client.api.v1['channels.setType'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsSetType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.setType']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.setType']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsSetTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1ChannelsUnarchiveMutationKey() {
  return ['api', '/api/v1/channels.unarchive', 'POST'] as const
}

export function getPostApiV1ChannelsUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.unarchive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.unarchive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsUnarchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.unarchive']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.unarchive'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsUnarchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.unarchive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.unarchive']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsUnarchiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1ChannelsGetAllUserMentionsByChannelQueryKey(
  args: InferRequestType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.getAllUserMentionsByChannel', keyArgs] as const
}

export function getApiV1ChannelsGetAllUserMentionsByChannelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsGetAllUserMentionsByChannelQueryKey>
  >({
    queryKey: getApiV1ChannelsGetAllUserMentionsByChannelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['channels.getAllUserMentionsByChannel'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChannelsGetAllUserMentionsByChannel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1)['channels.getAllUserMentionsByChannel']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChannelsGetAllUserMentionsByChannelQueryKey>
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
      ...getApiV1ChannelsGetAllUserMentionsByChannelQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ChannelsGetIntegrationsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['channels.getIntegrations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/channels.getIntegrations', keyArgs] as const
}

export function getApiV1ChannelsGetIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['channels.getIntegrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['channels.getIntegrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.getIntegrations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChannelsGetIntegrationsQueryKey>
  >({
    queryKey: getApiV1ChannelsGetIntegrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['channels.getIntegrations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ChannelsGetIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['channels.getIntegrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['channels.getIntegrations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.getIntegrations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChannelsGetIntegrationsQueryKey>
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
      ...getApiV1ChannelsGetIntegrationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1ChannelsConvertToTeamMutationKey() {
  return ['api', '/api/v1/channels.convertToTeam', 'POST'] as const
}

export function getPostApiV1ChannelsConvertToTeamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['channels.convertToTeam']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['channels.convertToTeam']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChannelsConvertToTeamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['channels.convertToTeam']['$post']>,
    ) {
      return parseResponse(client.api.v1['channels.convertToTeam'].$post(args, options))
    },
  })
}

export function injectPostApiV1ChannelsConvertToTeam<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['channels.convertToTeam']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['channels.convertToTeam']['$post']>,
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
    const mutationDefaults = getPostApiV1ChannelsConvertToTeamMutationOptions<
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

export function getPostApiV1RoomsSaveNotificationMutationKey() {
  return ['api', '/api/v1/rooms.saveNotification', 'POST'] as const
}

export function getPostApiV1RoomsSaveNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.saveNotification']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.saveNotification']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsSaveNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['rooms.saveNotification']['$post']>,
    ) {
      return parseResponse(client.api.v1['rooms.saveNotification'].$post(args, options))
    },
  })
}

export function injectPostApiV1RoomsSaveNotification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.saveNotification']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.saveNotification']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsSaveNotificationMutationOptions<
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

export function getPostApiV1RoomsSaveDraftMutationKey() {
  return ['api', '/api/v1/rooms.saveDraft', 'POST'] as const
}

export function getPostApiV1RoomsSaveDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.saveDraft']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.saveDraft']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsSaveDraftMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.saveDraft']['$post']>) {
      return parseResponse(client.api.v1['rooms.saveDraft'].$post(args, options))
    },
  })
}

export function injectPostApiV1RoomsSaveDraft<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.saveDraft']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.saveDraft']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsSaveDraftMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1RoomsAdminRoomsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.adminRooms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.adminRooms', keyArgs] as const
}

export function getApiV1RoomsAdminRoomsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['rooms.adminRooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsAdminRoomsQueryKey>
  >({
    queryKey: getApiV1RoomsAdminRoomsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['rooms.adminRooms'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1RoomsAdminRooms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['rooms.adminRooms']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RoomsAdminRoomsQueryKey>
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
      ...getApiV1RoomsAdminRoomsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1RoomsCleanHistoryMutationKey() {
  return ['api', '/api/v1/rooms.cleanHistory', 'POST'] as const
}

export function getPostApiV1RoomsCleanHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.cleanHistory']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.cleanHistory']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsCleanHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['rooms.cleanHistory']['$post']>,
    ) {
      return parseResponse(client.api.v1['rooms.cleanHistory'].$post(args, options))
    },
  })
}

export function injectPostApiV1RoomsCleanHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.cleanHistory']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.cleanHistory']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsCleanHistoryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1RoomsHistoryQueryKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.history']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.history', keyArgs] as const
}

export function getApiV1RoomsHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['rooms.history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.history']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsHistoryQueryKey>
  >({
    queryKey: getApiV1RoomsHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['rooms.history'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1RoomsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['rooms.history']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.history']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RoomsHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1RoomsHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1RoomsInfoQueryKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.info', keyArgs] as const
}

export function getApiV1RoomsInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['rooms.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsInfoQueryKey>
  >({
    queryKey: getApiV1RoomsInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['rooms.info'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1RoomsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['rooms.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RoomsInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1RoomsInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1RoomsGetDiscussionsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.getDiscussions', keyArgs] as const
}

export function getApiV1RoomsGetDiscussionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsGetDiscussionsQueryKey>
  >({
    queryKey: getApiV1RoomsGetDiscussionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['rooms.getDiscussions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1RoomsGetDiscussions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.getDiscussions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RoomsGetDiscussionsQueryKey>
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
      ...getApiV1RoomsGetDiscussionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1RoomsGetQueryKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.get']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.get', keyArgs] as const
}

export function getApiV1RoomsGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['rooms.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.get']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsGetQueryKey>
  >({
    queryKey: getApiV1RoomsGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['rooms.get'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1RoomsGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['rooms.get']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.get']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RoomsGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1RoomsGetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1RoomsJoinMutationKey() {
  return ['api', '/api/v1/rooms.join', 'POST'] as const
}

export function getPostApiV1RoomsJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.join']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.join']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsJoinMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.join']['$post']>) {
      return parseResponse(client.api.v1['rooms.join'].$post(args, options))
    },
  })
}

export function injectPostApiV1RoomsJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.join']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.join']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsJoinMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1RoomsLeaveMutationKey() {
  return ['api', '/api/v1/rooms.leave', 'POST'] as const
}

export function getPostApiV1RoomsLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.leave']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsLeaveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.leave']['$post']>) {
      return parseResponse(client.api.v1['rooms.leave'].$post(args, options))
    },
  })
}

export function injectPostApiV1RoomsLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.leave']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.leave']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsLeaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1RoomsDeleteMutationKey() {
  return ['api', '/api/v1/rooms.delete', 'POST'] as const
}

export function getPostApiV1RoomsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.delete']['$post']>) {
      return parseResponse(client.api.v1['rooms.delete'].$post(args, options))
    },
  })
}

export function injectPostApiV1RoomsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.delete']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1RoomsFavoriteMutationKey() {
  return ['api', '/api/v1/rooms.favorite', 'POST'] as const
}

export function getPostApiV1RoomsFavoriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.favorite']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.favorite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsFavoriteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.favorite']['$post']>) {
      return parseResponse(client.api.v1['rooms.favorite'].$post(args, options))
    },
  })
}

export function injectPostApiV1RoomsFavorite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.favorite']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.favorite']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsFavoriteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1RoomsAutocompleteAvailableForTeamsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.autocomplete.availableForTeams', keyArgs] as const
}

export function getApiV1RoomsAutocompleteAvailableForTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsAutocompleteAvailableForTeamsQueryKey>
  >({
    queryKey: getApiV1RoomsAutocompleteAvailableForTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['rooms.autocomplete.availableForTeams'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1RoomsAutocompleteAvailableForTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1)['rooms.autocomplete.availableForTeams']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RoomsAutocompleteAvailableForTeamsQueryKey>
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
      ...getApiV1RoomsAutocompleteAvailableForTeamsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1RoomsAutocompleteChannelAndPrivateQueryKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.autocomplete.channelAndPrivate', keyArgs] as const
}

export function getApiV1RoomsAutocompleteChannelAndPrivateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsAutocompleteChannelAndPrivateQueryKey>
  >({
    queryKey: getApiV1RoomsAutocompleteChannelAndPrivateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['rooms.autocomplete.channelAndPrivate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1RoomsAutocompleteChannelAndPrivate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1)['rooms.autocomplete.channelAndPrivate']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RoomsAutocompleteChannelAndPrivateQueryKey>
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
      ...getApiV1RoomsAutocompleteChannelAndPrivateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1RoomsAutocompleteAdminRoomsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.autocomplete.adminRooms', keyArgs] as const
}

export function getApiV1RoomsAutocompleteAdminRoomsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsAutocompleteAdminRoomsQueryKey>
  >({
    queryKey: getApiV1RoomsAutocompleteAdminRoomsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['rooms.autocomplete.adminRooms'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1RoomsAutocompleteAdminRooms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.autocomplete.adminRooms']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RoomsAutocompleteAdminRoomsQueryKey>
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
      ...getApiV1RoomsAutocompleteAdminRoomsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1RoomsAdminRoomsGetRoomQueryKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.adminRooms.getRoom', keyArgs] as const
}

export function getApiV1RoomsAdminRoomsGetRoomQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsAdminRoomsGetRoomQueryKey>
  >({
    queryKey: getApiV1RoomsAdminRoomsGetRoomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['rooms.adminRooms.getRoom'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1RoomsAdminRoomsGetRoom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.adminRooms.getRoom']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RoomsAdminRoomsGetRoomQueryKey>
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
      ...getApiV1RoomsAdminRoomsGetRoomQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1RoomsSaveRoomSettingsMutationKey() {
  return ['api', '/api/v1/rooms.saveRoomSettings', 'POST'] as const
}

export function getPostApiV1RoomsSaveRoomSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.saveRoomSettings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.saveRoomSettings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsSaveRoomSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['rooms.saveRoomSettings']['$post']>,
    ) {
      return parseResponse(client.api.v1['rooms.saveRoomSettings'].$post(args, options))
    },
  })
}

export function injectPostApiV1RoomsSaveRoomSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.saveRoomSettings']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.saveRoomSettings']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsSaveRoomSettingsMutationOptions<
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

export function getApiV1RoomsNameExistsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.nameExists']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.nameExists', keyArgs] as const
}

export function getApiV1RoomsNameExistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.nameExists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['rooms.nameExists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.nameExists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsNameExistsQueryKey>
  >({
    queryKey: getApiV1RoomsNameExistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['rooms.nameExists'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1RoomsNameExists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.nameExists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['rooms.nameExists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.nameExists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RoomsNameExistsQueryKey>
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
      ...getApiV1RoomsNameExistsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1RoomsChangeArchivationStateMutationKey() {
  return ['api', '/api/v1/rooms.changeArchivationState', 'POST'] as const
}

export function getPostApiV1RoomsChangeArchivationStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.changeArchivationState']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.changeArchivationState']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsChangeArchivationStateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['rooms.changeArchivationState']['$post']>,
    ) {
      return parseResponse(client.api.v1['rooms.changeArchivationState'].$post(args, options))
    },
  })
}

export function injectPostApiV1RoomsChangeArchivationState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.changeArchivationState']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.changeArchivationState']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsChangeArchivationStateMutationOptions<
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

export function getPostApiV1RoomsExportMutationKey() {
  return ['api', '/api/v1/rooms.export', 'POST'] as const
}

export function getPostApiV1RoomsExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.export']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsExportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.export']['$post']>) {
      return parseResponse(client.api.v1['rooms.export'].$post(args, options))
    },
  })
}

export function injectPostApiV1RoomsExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.export']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1RoomsMuteUserMutationKey() {
  return ['api', '/api/v1/rooms.muteUser', 'POST'] as const
}

export function getPostApiV1RoomsMuteUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.muteUser']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.muteUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsMuteUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.muteUser']['$post']>) {
      return parseResponse(client.api.v1['rooms.muteUser'].$post(args, options))
    },
  })
}

export function injectPostApiV1RoomsMuteUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.muteUser']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.muteUser']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsMuteUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1RoomsUnmuteUserMutationKey() {
  return ['api', '/api/v1/rooms.unmuteUser', 'POST'] as const
}

export function getPostApiV1RoomsUnmuteUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.unmuteUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.unmuteUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsUnmuteUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.unmuteUser']['$post']>) {
      return parseResponse(client.api.v1['rooms.unmuteUser'].$post(args, options))
    },
  })
}

export function injectPostApiV1RoomsUnmuteUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.unmuteUser']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.unmuteUser']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsUnmuteUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1RoomsCreateDiscussionMutationKey() {
  return ['api', '/api/v1/rooms.createDiscussion', 'POST'] as const
}

export function getPostApiV1RoomsCreateDiscussionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.createDiscussion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.createDiscussion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsCreateDiscussionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['rooms.createDiscussion']['$post']>,
    ) {
      return parseResponse(client.api.v1['rooms.createDiscussion'].$post(args, options))
    },
  })
}

export function injectPostApiV1RoomsCreateDiscussion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.createDiscussion']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.createDiscussion']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsCreateDiscussionMutationOptions<
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

export function getApiV1RoomsImagesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.images']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.images', keyArgs] as const
}

export function getApiV1RoomsImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.images']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['rooms.images']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.images']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsImagesQueryKey>
  >({
    queryKey: getApiV1RoomsImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['rooms.images'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1RoomsImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.images']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['rooms.images']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.images']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RoomsImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1RoomsImagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1AuditRoomsMembersQueryKey(
  args: InferRequestType<(typeof client.api.v1.audit)['rooms.members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/audit/rooms.members', keyArgs] as const
}

export function getApiV1AuditRoomsMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.audit)['rooms.members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.audit)['rooms.members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.audit)['rooms.members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AuditRoomsMembersQueryKey>
  >({
    queryKey: getApiV1AuditRoomsMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.audit['rooms.members'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1AuditRoomsMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.audit)['rooms.members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.audit)['rooms.members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.audit)['rooms.members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AuditRoomsMembersQueryKey>
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
      ...getApiV1AuditRoomsMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1RoomsMembersOrderedByRoleQueryKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.membersOrderedByRole', keyArgs] as const
}

export function getApiV1RoomsMembersOrderedByRoleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsMembersOrderedByRoleQueryKey>
  >({
    queryKey: getApiV1RoomsMembersOrderedByRoleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['rooms.membersOrderedByRole'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1RoomsMembersOrderedByRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.membersOrderedByRole']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RoomsMembersOrderedByRoleQueryKey>
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
      ...getApiV1RoomsMembersOrderedByRoleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1TeamsCreateMutationKey() {
  return ['api', '/api/v1/teams.create', 'POST'] as const
}

export function getPostApiV1TeamsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['teams.create']['$post']>) {
      return parseResponse(client.api.v1['teams.create'].$post(args, options))
    },
  })
}

export function injectPostApiV1TeamsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['teams.create']['$post']>,
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
    const mutationDefaults = getPostApiV1TeamsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1TeamsListAllQueryKey(
  args: InferRequestType<(typeof client.api.v1)['teams.listAll']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/teams.listAll', keyArgs] as const
}

export function getApiV1TeamsListAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.listAll']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['teams.listAll']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.listAll']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsListAllQueryKey>
  >({
    queryKey: getApiV1TeamsListAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['teams.listAll'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1TeamsListAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.listAll']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['teams.listAll']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.listAll']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TeamsListAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1TeamsListAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1TeamsListQueryKey(
  args: InferRequestType<(typeof client.api.v1)['teams.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/teams.list', keyArgs] as const
}

export function getApiV1TeamsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['teams.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsListQueryKey>
  >({
    queryKey: getApiV1TeamsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['teams.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1TeamsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['teams.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TeamsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1TeamsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1TeamsInfoQueryKey(
  args: InferRequestType<(typeof client.api.v1)['teams.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/teams.info', keyArgs] as const
}

export function getApiV1TeamsInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['teams.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsInfoQueryKey>
  >({
    queryKey: getApiV1TeamsInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['teams.info'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1TeamsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['teams.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TeamsInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1TeamsInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1TeamsUpdateMutationKey() {
  return ['api', '/api/v1/teams.update', 'POST'] as const
}

export function getPostApiV1TeamsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['teams.update']['$post']>) {
      return parseResponse(client.api.v1['teams.update'].$post(args, options))
    },
  })
}

export function injectPostApiV1TeamsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.update']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['teams.update']['$post']>,
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
    const mutationDefaults = getPostApiV1TeamsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1TeamsAddMembersMutationKey() {
  return ['api', '/api/v1/teams.addMembers', 'POST'] as const
}

export function getPostApiV1TeamsAddMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.addMembers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.addMembers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsAddMembersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['teams.addMembers']['$post']>) {
      return parseResponse(client.api.v1['teams.addMembers'].$post(args, options))
    },
  })
}

export function injectPostApiV1TeamsAddMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.addMembers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['teams.addMembers']['$post']>,
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
    const mutationDefaults = getPostApiV1TeamsAddMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1TeamsUpdateMemberMutationKey() {
  return ['api', '/api/v1/teams.updateMember', 'POST'] as const
}

export function getPostApiV1TeamsUpdateMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.updateMember']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.updateMember']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsUpdateMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['teams.updateMember']['$post']>,
    ) {
      return parseResponse(client.api.v1['teams.updateMember'].$post(args, options))
    },
  })
}

export function injectPostApiV1TeamsUpdateMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.updateMember']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['teams.updateMember']['$post']>,
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
    const mutationDefaults = getPostApiV1TeamsUpdateMemberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1TeamsMembersQueryKey(
  args: InferRequestType<(typeof client.api.v1)['teams.members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/teams.members', keyArgs] as const
}

export function getApiV1TeamsMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['teams.members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsMembersQueryKey>
  >({
    queryKey: getApiV1TeamsMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['teams.members'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1TeamsMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['teams.members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TeamsMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1TeamsMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1TeamsLeaveMutationKey() {
  return ['api', '/api/v1/teams.leave', 'POST'] as const
}

export function getPostApiV1TeamsLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.leave']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsLeaveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['teams.leave']['$post']>) {
      return parseResponse(client.api.v1['teams.leave'].$post(args, options))
    },
  })
}

export function injectPostApiV1TeamsLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.leave']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['teams.leave']['$post']>,
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
    const mutationDefaults = getPostApiV1TeamsLeaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1TeamsRemoveMemberMutationKey() {
  return ['api', '/api/v1/teams.removeMember', 'POST'] as const
}

export function getPostApiV1TeamsRemoveMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.removeMember']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.removeMember']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsRemoveMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['teams.removeMember']['$post']>,
    ) {
      return parseResponse(client.api.v1['teams.removeMember'].$post(args, options))
    },
  })
}

export function injectPostApiV1TeamsRemoveMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.removeMember']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['teams.removeMember']['$post']>,
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
    const mutationDefaults = getPostApiV1TeamsRemoveMemberMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1TeamsDeleteMutationKey() {
  return ['api', '/api/v1/teams.delete', 'POST'] as const
}

export function getPostApiV1TeamsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['teams.delete']['$post']>) {
      return parseResponse(client.api.v1['teams.delete'].$post(args, options))
    },
  })
}

export function injectPostApiV1TeamsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['teams.delete']['$post']>,
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
    const mutationDefaults = getPostApiV1TeamsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1TeamsAutocompleteQueryKey(
  args: InferRequestType<(typeof client.api.v1)['teams.autocomplete']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/teams.autocomplete', keyArgs] as const
}

export function getApiV1TeamsAutocompleteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['teams.autocomplete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['teams.autocomplete']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.autocomplete']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsAutocompleteQueryKey>
  >({
    queryKey: getApiV1TeamsAutocompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['teams.autocomplete'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1TeamsAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['teams.autocomplete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['teams.autocomplete']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.autocomplete']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TeamsAutocompleteQueryKey>
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
      ...getApiV1TeamsAutocompleteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1TeamsConvertToChannelMutationKey() {
  return ['api', '/api/v1/teams.convertToChannel', 'POST'] as const
}

export function getPostApiV1TeamsConvertToChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.convertToChannel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.convertToChannel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsConvertToChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['teams.convertToChannel']['$post']>,
    ) {
      return parseResponse(client.api.v1['teams.convertToChannel'].$post(args, options))
    },
  })
}

export function injectPostApiV1TeamsConvertToChannel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.convertToChannel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['teams.convertToChannel']['$post']>,
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
    const mutationDefaults = getPostApiV1TeamsConvertToChannelMutationOptions<
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

export function getPostApiV1TeamsAddRoomsMutationKey() {
  return ['api', '/api/v1/teams.addRooms', 'POST'] as const
}

export function getPostApiV1TeamsAddRoomsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.addRooms']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.addRooms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsAddRoomsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['teams.addRooms']['$post']>) {
      return parseResponse(client.api.v1['teams.addRooms'].$post(args, options))
    },
  })
}

export function injectPostApiV1TeamsAddRooms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.addRooms']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['teams.addRooms']['$post']>,
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
    const mutationDefaults = getPostApiV1TeamsAddRoomsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1TeamsRemoveRoomMutationKey() {
  return ['api', '/api/v1/teams.removeRoom', 'POST'] as const
}

export function getPostApiV1TeamsRemoveRoomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.removeRoom']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.removeRoom']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsRemoveRoomMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['teams.removeRoom']['$post']>) {
      return parseResponse(client.api.v1['teams.removeRoom'].$post(args, options))
    },
  })
}

export function injectPostApiV1TeamsRemoveRoom<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.removeRoom']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['teams.removeRoom']['$post']>,
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
    const mutationDefaults = getPostApiV1TeamsRemoveRoomMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1TeamsUpdateRoomMutationKey() {
  return ['api', '/api/v1/teams.updateRoom', 'POST'] as const
}

export function getPostApiV1TeamsUpdateRoomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.updateRoom']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['teams.updateRoom']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TeamsUpdateRoomMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['teams.updateRoom']['$post']>) {
      return parseResponse(client.api.v1['teams.updateRoom'].$post(args, options))
    },
  })
}

export function injectPostApiV1TeamsUpdateRoom<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.updateRoom']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['teams.updateRoom']['$post']>,
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
    const mutationDefaults = getPostApiV1TeamsUpdateRoomMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1TeamsListRoomsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['teams.listRooms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/teams.listRooms', keyArgs] as const
}

export function getApiV1TeamsListRoomsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.listRooms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['teams.listRooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.listRooms']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsListRoomsQueryKey>
  >({
    queryKey: getApiV1TeamsListRoomsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['teams.listRooms'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1TeamsListRooms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['teams.listRooms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['teams.listRooms']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.listRooms']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TeamsListRoomsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1TeamsListRoomsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1TeamsListRoomsOfUserQueryKey(
  args: InferRequestType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/teams.listRoomsOfUser', keyArgs] as const
}

export function getApiV1TeamsListRoomsOfUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsListRoomsOfUserQueryKey>
  >({
    queryKey: getApiV1TeamsListRoomsOfUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['teams.listRoomsOfUser'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1TeamsListRoomsOfUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.listRoomsOfUser']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TeamsListRoomsOfUserQueryKey>
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
      ...getApiV1TeamsListRoomsOfUserQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1TeamsListChildrenQueryKey(
  args: InferRequestType<(typeof client.api.v1)['teams.listChildren']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/teams.listChildren', keyArgs] as const
}

export function getApiV1TeamsListChildrenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['teams.listChildren']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['teams.listChildren']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['teams.listChildren']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TeamsListChildrenQueryKey>
  >({
    queryKey: getApiV1TeamsListChildrenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['teams.listChildren'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1TeamsListChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['teams.listChildren']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['teams.listChildren']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['teams.listChildren']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TeamsListChildrenQueryKey>
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
      ...getApiV1TeamsListChildrenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1GroupsOnlineQueryKey(
  args: InferRequestType<(typeof client.api.v1)['groups.online']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.online', keyArgs] as const
}

export function getApiV1GroupsOnlineQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.online']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['groups.online']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.online']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsOnlineQueryKey>
  >({
    queryKey: getApiV1GroupsOnlineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['groups.online'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1GroupsOnline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.online']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['groups.online']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.online']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GroupsOnlineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1GroupsOnlineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1GroupsGetIntegrationsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['groups.getIntegrations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.getIntegrations', keyArgs] as const
}

export function getApiV1GroupsGetIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['groups.getIntegrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['groups.getIntegrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.getIntegrations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsGetIntegrationsQueryKey>
  >({
    queryKey: getApiV1GroupsGetIntegrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['groups.getIntegrations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1GroupsGetIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['groups.getIntegrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['groups.getIntegrations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.getIntegrations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GroupsGetIntegrationsQueryKey>
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
      ...getApiV1GroupsGetIntegrationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsAddAllMutationKey() {
  return ['api', '/api/v1/groups.addAll', 'POST'] as const
}

export function getPostApiV1GroupsAddAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.addAll']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.addAll']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsAddAllMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.addAll']['$post']>) {
      return parseResponse(client.api.v1['groups.addAll'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsAddAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.addAll']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.addAll']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsAddAllMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsAddLeaderMutationKey() {
  return ['api', '/api/v1/groups.addLeader', 'POST'] as const
}

export function getPostApiV1GroupsAddLeaderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.addLeader']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.addLeader']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsAddLeaderMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.addLeader']['$post']>) {
      return parseResponse(client.api.v1['groups.addLeader'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsAddLeader<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.addLeader']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.addLeader']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsAddLeaderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsAddModeratorMutationKey() {
  return ['api', '/api/v1/groups.addModerator', 'POST'] as const
}

export function getPostApiV1GroupsAddModeratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.addModerator']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.addModerator']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsAddModeratorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.addModerator']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.addModerator'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsAddModerator<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.addModerator']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.addModerator']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsAddModeratorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsAddOwnerMutationKey() {
  return ['api', '/api/v1/groups.addOwner', 'POST'] as const
}

export function getPostApiV1GroupsAddOwnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.addOwner']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.addOwner']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsAddOwnerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.addOwner']['$post']>) {
      return parseResponse(client.api.v1['groups.addOwner'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsAddOwner<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.addOwner']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.addOwner']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsAddOwnerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsArchiveMutationKey() {
  return ['api', '/api/v1/groups.archive', 'POST'] as const
}

export function getPostApiV1GroupsArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.archive']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.archive']['$post']>) {
      return parseResponse(client.api.v1['groups.archive'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.archive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.archive']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsArchiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsCloseMutationKey() {
  return ['api', '/api/v1/groups.close', 'POST'] as const
}

export function getPostApiV1GroupsCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.close']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.close']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsCloseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.close']['$post']>) {
      return parseResponse(client.api.v1['groups.close'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.close']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.close']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsCloseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1GroupsCountersQueryKey(
  args: InferRequestType<(typeof client.api.v1)['groups.counters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.counters', keyArgs] as const
}

export function getApiV1GroupsCountersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.counters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['groups.counters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.counters']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsCountersQueryKey>
  >({
    queryKey: getApiV1GroupsCountersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['groups.counters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1GroupsCounters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.counters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['groups.counters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.counters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GroupsCountersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1GroupsCountersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1GroupsCreateMutationKey() {
  return ['api', '/api/v1/groups.create', 'POST'] as const
}

export function getPostApiV1GroupsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.create']['$post']>) {
      return parseResponse(client.api.v1['groups.create'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.create']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsDeleteMutationKey() {
  return ['api', '/api/v1/groups.delete', 'POST'] as const
}

export function getPostApiV1GroupsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.delete']['$post']>) {
      return parseResponse(client.api.v1['groups.delete'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.delete']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1GroupsHistoryQueryKey(
  args: InferRequestType<(typeof client.api.v1)['groups.history']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.history', keyArgs] as const
}

export function getApiV1GroupsHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['groups.history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.history']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsHistoryQueryKey>
  >({
    queryKey: getApiV1GroupsHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['groups.history'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1GroupsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.history']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['groups.history']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.history']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GroupsHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1GroupsHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1GroupsInfoQueryKey(
  args: InferRequestType<(typeof client.api.v1)['groups.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.info', keyArgs] as const
}

export function getApiV1GroupsInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['groups.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsInfoQueryKey>
  >({
    queryKey: getApiV1GroupsInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['groups.info'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1GroupsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['groups.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GroupsInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1GroupsInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1GroupsInviteMutationKey() {
  return ['api', '/api/v1/groups.invite', 'POST'] as const
}

export function getPostApiV1GroupsInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.invite']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsInviteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.invite']['$post']>) {
      return parseResponse(client.api.v1['groups.invite'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.invite']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.invite']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsKickMutationKey() {
  return ['api', '/api/v1/groups.kick', 'POST'] as const
}

export function getPostApiV1GroupsKickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.kick']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.kick']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsKickMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.kick']['$post']>) {
      return parseResponse(client.api.v1['groups.kick'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsKick<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.kick']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.kick']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsKickMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsLeaveMutationKey() {
  return ['api', '/api/v1/groups.leave', 'POST'] as const
}

export function getPostApiV1GroupsLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.leave']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsLeaveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.leave']['$post']>) {
      return parseResponse(client.api.v1['groups.leave'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.leave']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.leave']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsLeaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1GroupsListAllQueryKey(
  args: InferRequestType<(typeof client.api.v1)['groups.listAll']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.listAll', keyArgs] as const
}

export function getApiV1GroupsListAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.listAll']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['groups.listAll']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.listAll']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsListAllQueryKey>
  >({
    queryKey: getApiV1GroupsListAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['groups.listAll'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1GroupsListAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.listAll']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['groups.listAll']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.listAll']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GroupsListAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1GroupsListAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1GroupsListQueryKey(
  args: InferRequestType<(typeof client.api.v1)['groups.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.list', keyArgs] as const
}

export function getApiV1GroupsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['groups.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsListQueryKey>
  >({
    queryKey: getApiV1GroupsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['groups.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1GroupsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['groups.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GroupsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1GroupsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1GroupsMembersQueryKey(
  args: InferRequestType<(typeof client.api.v1)['groups.members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.members', keyArgs] as const
}

export function getApiV1GroupsMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['groups.members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsMembersQueryKey>
  >({
    queryKey: getApiV1GroupsMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['groups.members'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1GroupsMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['groups.members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GroupsMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1GroupsMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1GroupsMessagesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['groups.messages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.messages', keyArgs] as const
}

export function getApiV1GroupsMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['groups.messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.messages']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsMessagesQueryKey>
  >({
    queryKey: getApiV1GroupsMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['groups.messages'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1GroupsMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['groups.messages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.messages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GroupsMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1GroupsMessagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1GroupsModeratorsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['groups.moderators']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.moderators', keyArgs] as const
}

export function getApiV1GroupsModeratorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.moderators']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['groups.moderators']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.moderators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsModeratorsQueryKey>
  >({
    queryKey: getApiV1GroupsModeratorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['groups.moderators'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1GroupsModerators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.moderators']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['groups.moderators']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.moderators']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GroupsModeratorsQueryKey>
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
      ...getApiV1GroupsModeratorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsOpenMutationKey() {
  return ['api', '/api/v1/groups.open', 'POST'] as const
}

export function getPostApiV1GroupsOpenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.open']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.open']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsOpenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.open']['$post']>) {
      return parseResponse(client.api.v1['groups.open'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsOpen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.open']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.open']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsOpenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsRemoveLeaderMutationKey() {
  return ['api', '/api/v1/groups.removeLeader', 'POST'] as const
}

export function getPostApiV1GroupsRemoveLeaderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.removeLeader']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.removeLeader']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsRemoveLeaderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.removeLeader']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.removeLeader'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsRemoveLeader<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.removeLeader']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.removeLeader']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsRemoveLeaderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsRemoveModeratorMutationKey() {
  return ['api', '/api/v1/groups.removeModerator', 'POST'] as const
}

export function getPostApiV1GroupsRemoveModeratorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.removeModerator']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.removeModerator']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsRemoveModeratorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.removeModerator']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.removeModerator'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsRemoveModerator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.removeModerator']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.removeModerator']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsRemoveModeratorMutationOptions<
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

export function getPostApiV1GroupsRemoveOwnerMutationKey() {
  return ['api', '/api/v1/groups.removeOwner', 'POST'] as const
}

export function getPostApiV1GroupsRemoveOwnerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.removeOwner']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.removeOwner']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsRemoveOwnerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.removeOwner']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.removeOwner'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsRemoveOwner<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.removeOwner']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.removeOwner']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsRemoveOwnerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsRenameMutationKey() {
  return ['api', '/api/v1/groups.rename', 'POST'] as const
}

export function getPostApiV1GroupsRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.rename']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.rename']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsRenameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.rename']['$post']>) {
      return parseResponse(client.api.v1['groups.rename'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.rename']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.rename']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsRenameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsSetAnnouncementMutationKey() {
  return ['api', '/api/v1/groups.setAnnouncement', 'POST'] as const
}

export function getPostApiV1GroupsSetAnnouncementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setAnnouncement']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.setAnnouncement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsSetAnnouncementMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.setAnnouncement']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.setAnnouncement'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsSetAnnouncement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.setAnnouncement']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.setAnnouncement']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsSetAnnouncementMutationOptions<
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

export function getPostApiV1GroupsSetCustomFieldsMutationKey() {
  return ['api', '/api/v1/groups.setCustomFields', 'POST'] as const
}

export function getPostApiV1GroupsSetCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setCustomFields']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.setCustomFields']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsSetCustomFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.setCustomFields']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.setCustomFields'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsSetCustomFields<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.setCustomFields']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.setCustomFields']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsSetCustomFieldsMutationOptions<
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

export function getPostApiV1GroupsSetDescriptionMutationKey() {
  return ['api', '/api/v1/groups.setDescription', 'POST'] as const
}

export function getPostApiV1GroupsSetDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setDescription']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.setDescription']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsSetDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.setDescription']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.setDescription'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsSetDescription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.setDescription']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.setDescription']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsSetDescriptionMutationOptions<
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

export function getPostApiV1GroupsSetPurposeMutationKey() {
  return ['api', '/api/v1/groups.setPurpose', 'POST'] as const
}

export function getPostApiV1GroupsSetPurposeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setPurpose']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.setPurpose']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsSetPurposeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.setPurpose']['$post']>) {
      return parseResponse(client.api.v1['groups.setPurpose'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsSetPurpose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.setPurpose']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.setPurpose']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsSetPurposeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsSetReadOnlyMutationKey() {
  return ['api', '/api/v1/groups.setReadOnly', 'POST'] as const
}

export function getPostApiV1GroupsSetReadOnlyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setReadOnly']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.setReadOnly']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsSetReadOnlyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.setReadOnly']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.setReadOnly'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsSetReadOnly<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.setReadOnly']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.setReadOnly']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsSetReadOnlyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsSetTopicMutationKey() {
  return ['api', '/api/v1/groups.setTopic', 'POST'] as const
}

export function getPostApiV1GroupsSetTopicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setTopic']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.setTopic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsSetTopicMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.setTopic']['$post']>) {
      return parseResponse(client.api.v1['groups.setTopic'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsSetTopic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.setTopic']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.setTopic']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsSetTopicMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsSetTypeMutationKey() {
  return ['api', '/api/v1/groups.setType', 'POST'] as const
}

export function getPostApiV1GroupsSetTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.setType']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.setType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsSetTypeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.setType']['$post']>) {
      return parseResponse(client.api.v1['groups.setType'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsSetType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.setType']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.setType']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsSetTypeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsUnarchiveMutationKey() {
  return ['api', '/api/v1/groups.unarchive', 'POST'] as const
}

export function getPostApiV1GroupsUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.unarchive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.unarchive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsUnarchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['groups.unarchive']['$post']>) {
      return parseResponse(client.api.v1['groups.unarchive'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsUnarchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.unarchive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.unarchive']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsUnarchiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1GroupsFilesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['groups.files']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.files', keyArgs] as const
}

export function getApiV1GroupsFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['groups.files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.files']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsFilesQueryKey>
  >({
    queryKey: getApiV1GroupsFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['groups.files'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1GroupsFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['groups.files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.files']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GroupsFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1GroupsFilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1GroupsSetEncryptedMutationKey() {
  return ['api', '/api/v1/groups.setEncrypted', 'POST'] as const
}

export function getPostApiV1GroupsSetEncryptedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.setEncrypted']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.setEncrypted']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsSetEncryptedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.setEncrypted']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.setEncrypted'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsSetEncrypted<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.setEncrypted']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.setEncrypted']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsSetEncryptedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1GroupsConvertToTeamMutationKey() {
  return ['api', '/api/v1/groups.convertToTeam', 'POST'] as const
}

export function getPostApiV1GroupsConvertToTeamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['groups.convertToTeam']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['groups.convertToTeam']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1GroupsConvertToTeamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['groups.convertToTeam']['$post']>,
    ) {
      return parseResponse(client.api.v1['groups.convertToTeam'].$post(args, options))
    },
  })
}

export function injectPostApiV1GroupsConvertToTeam<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.convertToTeam']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['groups.convertToTeam']['$post']>,
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
    const mutationDefaults = getPostApiV1GroupsConvertToTeamMutationOptions<
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

export function getApiV1GroupsRolesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['groups.roles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/groups.roles', keyArgs] as const
}

export function getApiV1GroupsRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['groups.roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.roles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroupsRolesQueryKey>
  >({
    queryKey: getApiV1GroupsRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['groups.roles'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1GroupsRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['groups.roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['groups.roles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['groups.roles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1GroupsRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1GroupsRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1DirectoryQueryKey(
  args: InferRequestType<typeof client.api.v1.directory.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/directory', keyArgs] as const
}

export function getApiV1DirectoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.directory.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DirectoryQueryKey>
  >({
    queryKey: getApiV1DirectoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.directory.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Directory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.directory.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DirectoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1DirectoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1RoomsOpenMutationKey() {
  return ['api', '/api/v1/rooms.open', 'POST'] as const
}

export function getPostApiV1RoomsOpenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.open']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.open']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsOpenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.open']['$post']>) {
      return parseResponse(client.api.v1['rooms.open'].$post(args, options))
    },
  })
}

export function injectPostApiV1RoomsOpen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.open']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.open']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsOpenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1RoomsHideMutationKey() {
  return ['api', '/api/v1/rooms.hide', 'POST'] as const
}

export function getPostApiV1RoomsHideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.hide']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.hide']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsHideMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['rooms.hide']['$post']>) {
      return parseResponse(client.api.v1['rooms.hide'].$post(args, options))
    },
  })
}

export function injectPostApiV1RoomsHide<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.hide']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.hide']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsHideMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1FindOrCreateInviteMutationKey() {
  return ['api', '/api/v1/findOrCreateInvite', 'POST'] as const
}

export function getPostApiV1FindOrCreateInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.findOrCreateInvite.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.findOrCreateInvite.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1FindOrCreateInviteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.findOrCreateInvite.$post>) {
      return parseResponse(client.api.v1.findOrCreateInvite.$post(args, options))
    },
  })
}

export function injectPostApiV1FindOrCreateInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.findOrCreateInvite.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.findOrCreateInvite.$post>,
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
    const mutationDefaults = getPostApiV1FindOrCreateInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1RoomsRolesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.roles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.roles', keyArgs] as const
}

export function getApiV1RoomsRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['rooms.roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.roles']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsRolesQueryKey>
  >({
    queryKey: getApiV1RoomsRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['rooms.roles'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1RoomsRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['rooms.roles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.roles']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RoomsRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1RoomsRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1RoomsIsMemberQueryKey(
  args: InferRequestType<(typeof client.api.v1)['rooms.isMember']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.isMember', keyArgs] as const
}

export function getApiV1RoomsIsMemberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.isMember']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['rooms.isMember']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.isMember']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsIsMemberQueryKey>
  >({
    queryKey: getApiV1RoomsIsMemberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['rooms.isMember'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1RoomsIsMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['rooms.isMember']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['rooms.isMember']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.isMember']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RoomsIsMemberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1RoomsIsMemberQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/rooms.autocomplete.channelAndPrivate.withPagination', keyArgs] as const
}

export function getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationQueryKey>
  >({
    queryKey: getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['rooms.autocomplete.channelAndPrivate.withPagination'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1RoomsAutocompleteChannelAndPrivateWithPagination<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['rooms.autocomplete.channelAndPrivate.withPagination']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationQueryKey>
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
      ...getApiV1RoomsAutocompleteChannelAndPrivateWithPaginationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1RoomsMediaRidMutationKey() {
  return ['api', '/api/v1/rooms.media/:rid', 'POST'] as const
}

export function getPostApiV1RoomsMediaRidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['rooms.media'][':rid']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.media'][':rid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsMediaRidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['rooms.media'][':rid']['$post']>,
    ) {
      return parseResponse(client.api.v1['rooms.media'][':rid'].$post(args, options))
    },
  })
}

export function injectPostApiV1RoomsMediaRid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['rooms.media'][':rid']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.media'][':rid']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsMediaRidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1RoomsMediaConfirmRidFileIdMutationKey() {
  return ['api', '/api/v1/rooms.mediaConfirm/:rid/:fileId', 'POST'] as const
}

export function getPostApiV1RoomsMediaConfirmRidFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['rooms.mediaConfirm'][':rid'][':fileId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['rooms.mediaConfirm'][':rid'][':fileId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RoomsMediaConfirmRidFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['rooms.mediaConfirm'][':rid'][':fileId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['rooms.mediaConfirm'][':rid'][':fileId'].$post(args, options),
      )
    },
  })
}

export function injectPostApiV1RoomsMediaConfirmRidFileId<
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
                ReturnType<(typeof client.api.v1)['rooms.mediaConfirm'][':rid'][':fileId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['rooms.mediaConfirm'][':rid'][':fileId']['$post']>,
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
    const mutationDefaults = getPostApiV1RoomsMediaConfirmRidFileIdMutationOptions<
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

export function getPostApiV1UploadsDeleteMutationKey() {
  return ['api', '/api/v1/uploads.delete', 'POST'] as const
}

export function getPostApiV1UploadsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['uploads.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['uploads.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UploadsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['uploads.delete']['$post']>) {
      return parseResponse(client.api.v1['uploads.delete'].$post(args, options))
    },
  })
}

export function injectPostApiV1UploadsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['uploads.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['uploads.delete']['$post']>,
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
    const mutationDefaults = getPostApiV1UploadsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1ListInvitesQueryKey() {
  return ['api', '/api/v1/listInvites'] as const
}

export function getApiV1ListInvitesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.listInvites.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.listInvites.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ListInvitesQueryKey>
  >({
    queryKey: getApiV1ListInvitesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.listInvites.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ListInvites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.listInvites.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.listInvites.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ListInvitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ListInvitesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteApiV1RemoveInviteIdMutationKey() {
  return ['api', '/api/v1/removeInvite/:_id', 'DELETE'] as const
}

export function getDeleteApiV1RemoveInviteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.removeInvite)[':_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.removeInvite)[':_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1RemoveInviteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.removeInvite)[':_id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.removeInvite[':_id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiV1RemoveInviteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.removeInvite)[':_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.removeInvite)[':_id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1RemoveInviteIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1UseInviteTokenMutationKey() {
  return ['api', '/api/v1/useInviteToken', 'POST'] as const
}

export function getPostApiV1UseInviteTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.useInviteToken.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.useInviteToken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UseInviteTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.useInviteToken.$post>) {
      return parseResponse(client.api.v1.useInviteToken.$post(args, options))
    },
  })
}

export function injectPostApiV1UseInviteToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.useInviteToken.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.useInviteToken.$post>,
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
    const mutationDefaults = getPostApiV1UseInviteTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1AbacRoomsRidAttributesMutationKey() {
  return ['api', '/api/v1/abac/rooms/:rid/attributes', 'POST'] as const
}

export function getPostApiV1AbacRoomsRidAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AbacRoomsRidAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$post']>,
    ) {
      return parseResponse(client.api.v1.abac.rooms[':rid'].attributes.$post(args, options))
    },
  })
}

export function injectPostApiV1AbacRoomsRidAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$post']>,
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
    const mutationDefaults = getPostApiV1AbacRoomsRidAttributesMutationOptions<
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

export function getDeleteApiV1AbacRoomsRidAttributesMutationKey() {
  return ['api', '/api/v1/abac/rooms/:rid/attributes', 'DELETE'] as const
}

export function getDeleteApiV1AbacRoomsRidAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AbacRoomsRidAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$delete']>,
    ) {
      return parseResponse(client.api.v1.abac.rooms[':rid'].attributes.$delete(args, options))
    },
  })
}

export function injectDeleteApiV1AbacRoomsRidAttributes<
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
                ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1AbacRoomsRidAttributesMutationOptions<
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

export function getPutApiV1AbacRoomsRidAttributesKeyMutationKey() {
  return ['api', '/api/v1/abac/rooms/:rid/attributes/:key', 'PUT'] as const
}

export function getPutApiV1AbacRoomsRidAttributesKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AbacRoomsRidAttributesKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$put']
      >,
    ) {
      return parseResponse(client.api.v1.abac.rooms[':rid'].attributes[':key'].$put(args, options))
    },
  })
}

export function injectPutApiV1AbacRoomsRidAttributesKey<
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
                ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$put']>,
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
    const mutationDefaults = getPutApiV1AbacRoomsRidAttributesKeyMutationOptions<
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

export function getPostApiV1AbacRoomsRidAttributesKeyMutationKey() {
  return ['api', '/api/v1/abac/rooms/:rid/attributes/:key', 'POST'] as const
}

export function getPostApiV1AbacRoomsRidAttributesKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AbacRoomsRidAttributesKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.abac.rooms[':rid'].attributes[':key'].$post(args, options))
    },
  })
}

export function injectPostApiV1AbacRoomsRidAttributesKey<
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
                ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$post']>,
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
    const mutationDefaults = getPostApiV1AbacRoomsRidAttributesKeyMutationOptions<
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

export function getDeleteApiV1AbacRoomsRidAttributesKeyMutationKey() {
  return ['api', '/api/v1/abac/rooms/:rid/attributes/:key', 'DELETE'] as const
}

export function getDeleteApiV1AbacRoomsRidAttributesKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AbacRoomsRidAttributesKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.abac.rooms[':rid'].attributes[':key'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiV1AbacRoomsRidAttributesKey<
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
                  (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.abac.rooms)[':rid']['attributes'][':key']['$delete']
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
    const mutationDefaults = getDeleteApiV1AbacRoomsRidAttributesKeyMutationOptions<
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

export function getApiV1AbacAttributesQueryKey(
  args: InferRequestType<typeof client.api.v1.abac.attributes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/abac/attributes', keyArgs] as const
}

export function getApiV1AbacAttributesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.abac.attributes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbacAttributesQueryKey>
  >({
    queryKey: getApiV1AbacAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.abac.attributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1AbacAttributes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.abac.attributes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AbacAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AbacAttributesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1AbacAttributesMutationKey() {
  return ['api', '/api/v1/abac/attributes', 'POST'] as const
}

export function getPostApiV1AbacAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.abac.attributes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AbacAttributesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.abac.attributes.$post>) {
      return parseResponse(client.api.v1.abac.attributes.$post(args, options))
    },
  })
}

export function injectPostApiV1AbacAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.attributes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.abac.attributes.$post>,
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
    const mutationDefaults = getPostApiV1AbacAttributesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1AbacUsersSyncMutationKey() {
  return ['api', '/api/v1/abac/users/sync', 'POST'] as const
}

export function getPostApiV1AbacUsersSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.users.sync.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.abac.users.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AbacUsersSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.abac.users.sync.$post>) {
      return parseResponse(client.api.v1.abac.users.sync.$post(args, options))
    },
  })
}

export function injectPostApiV1AbacUsersSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.users.sync.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.abac.users.sync.$post>,
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
    const mutationDefaults = getPostApiV1AbacUsersSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1AbacAttributesIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/abac/attributes/:_id', keyArgs] as const
}

export function getApiV1AbacAttributesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbacAttributesIdQueryKey>
  >({
    queryKey: getApiV1AbacAttributesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.abac.attributes[':_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1AbacAttributesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AbacAttributesIdQueryKey>
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
      ...getApiV1AbacAttributesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutApiV1AbacAttributesIdMutationKey() {
  return ['api', '/api/v1/abac/attributes/:_id', 'PUT'] as const
}

export function getPutApiV1AbacAttributesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AbacAttributesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$put']>,
    ) {
      return parseResponse(client.api.v1.abac.attributes[':_id'].$put(args, options))
    },
  })
}

export function injectPutApiV1AbacAttributesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$put']>,
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
    const mutationDefaults = getPutApiV1AbacAttributesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteApiV1AbacAttributesIdMutationKey() {
  return ['api', '/api/v1/abac/attributes/:_id', 'DELETE'] as const
}

export function getDeleteApiV1AbacAttributesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AbacAttributesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.abac.attributes[':_id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiV1AbacAttributesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.abac.attributes)[':_id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1AbacAttributesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1AbacAttributesKeyIsInUseQueryKey(
  args: InferRequestType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/abac/attributes/:key/is-in-use', keyArgs] as const
}

export function getApiV1AbacAttributesKeyIsInUseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbacAttributesKeyIsInUseQueryKey>
  >({
    queryKey: getApiV1AbacAttributesKeyIsInUseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.abac.attributes[':key']['is-in-use'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1AbacAttributesKeyIsInUse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.abac.attributes)[':key']['is-in-use']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AbacAttributesKeyIsInUseQueryKey>
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
      ...getApiV1AbacAttributesKeyIsInUseQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1AbacAttributesListKeysQueryKey(
  args: InferRequestType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/abac/attributes.listKeys', keyArgs] as const
}

export function getApiV1AbacAttributesListKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbacAttributesListKeysQueryKey>
  >({
    queryKey: getApiV1AbacAttributesListKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.abac['attributes.listKeys'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1AbacAttributesListKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listKeys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AbacAttributesListKeysQueryKey>
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
      ...getApiV1AbacAttributesListKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1AbacAttributesListAssignableQueryKey(
  args: InferRequestType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/abac/attributes.listAssignable', keyArgs] as const
}

export function getApiV1AbacAttributesListAssignableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbacAttributesListAssignableQueryKey>
  >({
    queryKey: getApiV1AbacAttributesListAssignableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.abac['attributes.listAssignable'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1AbacAttributesListAssignable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.abac)['attributes.listAssignable']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AbacAttributesListAssignableQueryKey>
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
      ...getApiV1AbacAttributesListAssignableQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1AbacRoomsQueryKey(
  args: InferRequestType<typeof client.api.v1.abac.rooms.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/abac/rooms', keyArgs] as const
}

export function getApiV1AbacRoomsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.rooms.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.abac.rooms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.rooms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbacRoomsQueryKey>
  >({
    queryKey: getApiV1AbacRoomsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.abac.rooms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1AbacRooms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.rooms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.abac.rooms.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.rooms.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AbacRoomsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AbacRoomsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1AbacRoomsEvaluateMembershipMutationKey() {
  return ['api', '/api/v1/abac/rooms.evaluateMembership', 'POST'] as const
}

export function getPostApiV1AbacRoomsEvaluateMembershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.abac)['rooms.evaluateMembership']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.abac)['rooms.evaluateMembership']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AbacRoomsEvaluateMembershipMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.abac)['rooms.evaluateMembership']['$post']>,
    ) {
      return parseResponse(client.api.v1.abac['rooms.evaluateMembership'].$post(args, options))
    },
  })
}

export function injectPostApiV1AbacRoomsEvaluateMembership<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.abac)['rooms.evaluateMembership']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.abac)['rooms.evaluateMembership']['$post']>,
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
    const mutationDefaults = getPostApiV1AbacRoomsEvaluateMembershipMutationOptions<
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

export function getApiV1AbacAuditQueryKey(
  args: InferRequestType<typeof client.api.v1.abac.audit.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/abac/audit', keyArgs] as const
}

export function getApiV1AbacAuditQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.audit.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.abac.audit.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.audit.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbacAuditQueryKey>
  >({
    queryKey: getApiV1AbacAuditQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.abac.audit.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1AbacAudit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.audit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.abac.audit.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.audit.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AbacAuditQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AbacAuditQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1AbacPdpHealthQueryKey(
  args: InferRequestType<typeof client.api.v1.abac.pdp.health.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/abac/pdp/health', keyArgs] as const
}

export function getApiV1AbacPdpHealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.pdp.health.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.abac.pdp.health.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.pdp.health.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AbacPdpHealthQueryKey>
  >({
    queryKey: getApiV1AbacPdpHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.abac.pdp.health.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1AbacPdpHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.pdp.health.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.abac.pdp.health.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.abac.pdp.health.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AbacPdpHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AbacPdpHealthQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1SubscriptionsGetQueryKey(
  args: InferRequestType<(typeof client.api.v1)['subscriptions.get']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/subscriptions.get', keyArgs] as const
}

export function getApiV1SubscriptionsGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['subscriptions.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['subscriptions.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['subscriptions.get']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubscriptionsGetQueryKey>
  >({
    queryKey: getApiV1SubscriptionsGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['subscriptions.get'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1SubscriptionsGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['subscriptions.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['subscriptions.get']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['subscriptions.get']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SubscriptionsGetQueryKey>
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
      ...getApiV1SubscriptionsGetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1SubscriptionsGetOneQueryKey(
  args: InferRequestType<(typeof client.api.v1)['subscriptions.getOne']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/subscriptions.getOne', keyArgs] as const
}

export function getApiV1SubscriptionsGetOneQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['subscriptions.getOne']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['subscriptions.getOne']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['subscriptions.getOne']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubscriptionsGetOneQueryKey>
  >({
    queryKey: getApiV1SubscriptionsGetOneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['subscriptions.getOne'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1SubscriptionsGetOne<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['subscriptions.getOne']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['subscriptions.getOne']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['subscriptions.getOne']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SubscriptionsGetOneQueryKey>
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
      ...getApiV1SubscriptionsGetOneQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1SubscriptionsReadMutationKey() {
  return ['api', '/api/v1/subscriptions.read', 'POST'] as const
}

export function getPostApiV1SubscriptionsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['subscriptions.read']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['subscriptions.read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SubscriptionsReadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['subscriptions.read']['$post']>,
    ) {
      return parseResponse(client.api.v1['subscriptions.read'].$post(args, options))
    },
  })
}

export function injectPostApiV1SubscriptionsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['subscriptions.read']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['subscriptions.read']['$post']>,
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
    const mutationDefaults = getPostApiV1SubscriptionsReadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1SubscriptionsUnreadMutationKey() {
  return ['api', '/api/v1/subscriptions.unread', 'POST'] as const
}

export function getPostApiV1SubscriptionsUnreadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['subscriptions.unread']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['subscriptions.unread']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SubscriptionsUnreadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['subscriptions.unread']['$post']>,
    ) {
      return parseResponse(client.api.v1['subscriptions.unread'].$post(args, options))
    },
  })
}

export function injectPostApiV1SubscriptionsUnread<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['subscriptions.unread']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['subscriptions.unread']['$post']>,
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
    const mutationDefaults = getPostApiV1SubscriptionsUnreadMutationOptions<
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
