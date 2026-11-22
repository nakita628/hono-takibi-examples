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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1EmojiCustomAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['emoji-custom.all']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/emoji-custom.all', keyArgs] as const
}

export function getApiV1EmojiCustomAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['emoji-custom.all']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmojiCustomAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['emoji-custom.all'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmojiCustomAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['emoji-custom.all']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['emoji-custom.all']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['emoji-custom.all']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['emoji-custom.all']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1EmojiCustomAllQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['emoji-custom.all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmojiCustomAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmojiCustomAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['emoji-custom.all'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1EmojiCustomCreateMutationKey() {
  return ['api', '/api/v1/emoji-custom.create', 'POST'] as const
}

export function getPostApiV1EmojiCustomCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['emoji-custom.create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['emoji-custom.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EmojiCustomCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['emoji-custom.create']['$post']>,
    ) {
      return parseResponse(client.api.v1['emoji-custom.create'].$post(args, options))
    },
  })
}

export function usePostApiV1EmojiCustomCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['emoji-custom.create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['emoji-custom.create']['$post']>,
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
  const mutationDefaults = getPostApiV1EmojiCustomCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1EmojiCustomDeleteMutationKey() {
  return ['api', '/api/v1/emoji-custom.delete', 'POST'] as const
}

export function getPostApiV1EmojiCustomDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['emoji-custom.delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['emoji-custom.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EmojiCustomDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['emoji-custom.delete']['$post']>,
    ) {
      return parseResponse(client.api.v1['emoji-custom.delete'].$post(args, options))
    },
  })
}

export function usePostApiV1EmojiCustomDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['emoji-custom.delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['emoji-custom.delete']['$post']>,
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
  const mutationDefaults = getPostApiV1EmojiCustomDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1EmojiCustomListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['emoji-custom.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/emoji-custom.list', keyArgs] as const
}

export function getApiV1EmojiCustomListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['emoji-custom.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmojiCustomListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['emoji-custom.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EmojiCustomList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['emoji-custom.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['emoji-custom.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['emoji-custom.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['emoji-custom.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1EmojiCustomListQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['emoji-custom.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmojiCustomListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmojiCustomListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['emoji-custom.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1EmojiCustomUpdateMutationKey() {
  return ['api', '/api/v1/emoji-custom.update', 'POST'] as const
}

export function getPostApiV1EmojiCustomUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['emoji-custom.update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['emoji-custom.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EmojiCustomUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['emoji-custom.update']['$post']>,
    ) {
      return parseResponse(client.api.v1['emoji-custom.update'].$post(args, options))
    },
  })
}

export function usePostApiV1EmojiCustomUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['emoji-custom.update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['emoji-custom.update']['$post']>,
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
  const mutationDefaults = getPostApiV1EmojiCustomUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CustomSoundsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['custom-sounds.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/custom-sounds.list', keyArgs] as const
}

export function getApiV1CustomSoundsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['custom-sounds.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CustomSoundsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['custom-sounds.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CustomSoundsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['custom-sounds.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['custom-sounds.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['custom-sounds.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['custom-sounds.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CustomSoundsListQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['custom-sounds.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomSoundsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CustomSoundsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['custom-sounds.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CustomSoundsCreateMutationKey() {
  return ['api', '/api/v1/custom-sounds.create', 'POST'] as const
}

export function getPostApiV1CustomSoundsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['custom-sounds.create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['custom-sounds.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CustomSoundsCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['custom-sounds.create']['$post']>,
    ) {
      return parseResponse(client.api.v1['custom-sounds.create'].$post(args, options))
    },
  })
}

export function usePostApiV1CustomSoundsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['custom-sounds.create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['custom-sounds.create']['$post']>,
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
  const mutationDefaults = getPostApiV1CustomSoundsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1CustomSoundsUpdateMutationKey() {
  return ['api', '/api/v1/custom-sounds.update', 'POST'] as const
}

export function getPostApiV1CustomSoundsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['custom-sounds.update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['custom-sounds.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CustomSoundsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['custom-sounds.update']['$post']>,
    ) {
      return parseResponse(client.api.v1['custom-sounds.update'].$post(args, options))
    },
  })
}

export function usePostApiV1CustomSoundsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['custom-sounds.update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['custom-sounds.update']['$post']>,
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
  const mutationDefaults = getPostApiV1CustomSoundsUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CustomUserStatusListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['custom-user-status.list']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/custom-user-status.list', keyArgs] as const
}

export function getApiV1CustomUserStatusListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['custom-user-status.list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CustomUserStatusListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['custom-user-status.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CustomUserStatusList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['custom-user-status.list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['custom-user-status.list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['custom-user-status.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['custom-user-status.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CustomUserStatusListQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['custom-user-status.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomUserStatusListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CustomUserStatusListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['custom-user-status.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1CustomUserStatusCreateMutationKey() {
  return ['api', '/api/v1/custom-user-status.create', 'POST'] as const
}

export function getPostApiV1CustomUserStatusCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['custom-user-status.create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['custom-user-status.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CustomUserStatusCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['custom-user-status.create']['$post']>,
    ) {
      return parseResponse(client.api.v1['custom-user-status.create'].$post(args, options))
    },
  })
}

export function usePostApiV1CustomUserStatusCreate<
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
                Awaited<ReturnType<(typeof client.api.v1)['custom-user-status.create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['custom-user-status.create']['$post']>,
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
  const mutationDefaults = getPostApiV1CustomUserStatusCreateMutationOptions<
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

export function getPostApiV1CustomUserStatusUpdateMutationKey() {
  return ['api', '/api/v1/custom-user-status.update', 'POST'] as const
}

export function getPostApiV1CustomUserStatusUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['custom-user-status.update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['custom-user-status.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CustomUserStatusUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['custom-user-status.update']['$post']>,
    ) {
      return parseResponse(client.api.v1['custom-user-status.update'].$post(args, options))
    },
  })
}

export function usePostApiV1CustomUserStatusUpdate<
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
                Awaited<ReturnType<(typeof client.api.v1)['custom-user-status.update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['custom-user-status.update']['$post']>,
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
  const mutationDefaults = getPostApiV1CustomUserStatusUpdateMutationOptions<
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

export function getPostApiV1CustomUserStatusDeleteMutationKey() {
  return ['api', '/api/v1/custom-user-status.delete', 'POST'] as const
}

export function getPostApiV1CustomUserStatusDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['custom-user-status.delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['custom-user-status.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CustomUserStatusDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['custom-user-status.delete']['$post']>,
    ) {
      return parseResponse(client.api.v1['custom-user-status.delete'].$post(args, options))
    },
  })
}

export function usePostApiV1CustomUserStatusDelete<
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
                Awaited<ReturnType<(typeof client.api.v1)['custom-user-status.delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['custom-user-status.delete']['$post']>,
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
  const mutationDefaults = getPostApiV1CustomUserStatusDeleteMutationOptions<
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

export function getPostApiV1AssetsSetAssetMutationKey() {
  return ['api', '/api/v1/assets.setAsset', 'POST'] as const
}

export function getPostApiV1AssetsSetAssetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['assets.setAsset']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['assets.setAsset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AssetsSetAssetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['assets.setAsset']['$post']>) {
      return parseResponse(client.api.v1['assets.setAsset'].$post(args, options))
    },
  })
}

export function usePostApiV1AssetsSetAsset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['assets.setAsset']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['assets.setAsset']['$post']>,
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
  const mutationDefaults = getPostApiV1AssetsSetAssetMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1AssetsUnsetAssetMutationKey() {
  return ['api', '/api/v1/assets.unsetAsset', 'POST'] as const
}

export function getPostApiV1AssetsUnsetAssetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['assets.unsetAsset']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['assets.unsetAsset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AssetsUnsetAssetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['assets.unsetAsset']['$post']>) {
      return parseResponse(client.api.v1['assets.unsetAsset'].$post(args, options))
    },
  })
}

export function usePostApiV1AssetsUnsetAsset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['assets.unsetAsset']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['assets.unsetAsset']['$post']>,
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
  const mutationDefaults = getPostApiV1AssetsUnsetAssetMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1CustomSoundsDeleteMutationKey() {
  return ['api', '/api/v1/custom-sounds.delete', 'POST'] as const
}

export function getPostApiV1CustomSoundsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['custom-sounds.delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['custom-sounds.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CustomSoundsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['custom-sounds.delete']['$post']>,
    ) {
      return parseResponse(client.api.v1['custom-sounds.delete'].$post(args, options))
    },
  })
}

export function usePostApiV1CustomSoundsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['custom-sounds.delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['custom-sounds.delete']['$post']>,
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
  const mutationDefaults = getPostApiV1CustomSoundsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CustomSoundsGetOneQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['custom-sounds.getOne']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/custom-sounds.getOne', keyArgs] as const
}

export function getApiV1CustomSoundsGetOneQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['custom-sounds.getOne']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CustomSoundsGetOneQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['custom-sounds.getOne'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CustomSoundsGetOne<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['custom-sounds.getOne']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['custom-sounds.getOne']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['custom-sounds.getOne']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['custom-sounds.getOne']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CustomSoundsGetOneQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['custom-sounds.getOne']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomSoundsGetOneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CustomSoundsGetOneQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['custom-sounds.getOne'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
