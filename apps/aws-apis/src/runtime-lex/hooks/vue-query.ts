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

export function getBotKey() {
  return ['bot'] as const
}

export function getPostBotBotNameAliasBotAliasUserUserIdSessionMutationKey() {
  return ['bot', '/bot/:botName/alias/:botAlias/user/:userId/session', 'POST'] as const
}

export function getPostBotBotNameAliasBotAliasUserUserIdSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBotBotNameAliasBotAliasUserUserIdSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['$post']
      >,
    ) {
      return parseResponse(
        client.bot[':botName'].alias[':botAlias'].user[':userId'].session.$post(args, options),
      )
    },
  })
}

export function usePostBotBotNameAliasBotAliasUserUserIdSession<
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
                    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['$post']
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
  const mutationDefaults = getPostBotBotNameAliasBotAliasUserUserIdSessionMutationOptions<
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

export function getDeleteBotBotNameAliasBotAliasUserUserIdSessionMutationKey() {
  return ['bot', '/bot/:botName/alias/:botAlias/user/:userId/session', 'DELETE'] as const
}

export function getDeleteBotBotNameAliasBotAliasUserUserIdSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBotBotNameAliasBotAliasUserUserIdSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['$delete']
      >,
    ) {
      return parseResponse(
        client.bot[':botName'].alias[':botAlias'].user[':userId'].session.$delete(args, options),
      )
    },
  })
}

export function useDeleteBotBotNameAliasBotAliasUserUserIdSession<
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
                    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['$delete']
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
  const mutationDefaults = getDeleteBotBotNameAliasBotAliasUserUserIdSessionMutationOptions<
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

export function getBotBotNameAliasBotAliasUserUserIdSessionIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bot', '/bot/:botName/alias/:botAlias/user/:userId/session/', keyArgs] as const
}

export function getBotBotNameAliasBotAliasUserUserIdSessionIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBotBotNameAliasBotAliasUserUserIdSessionIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bot[':botName'].alias[':botAlias'].user[':userId'].session.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useBotBotNameAliasBotAliasUserUserIdSessionIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['index']['$get']
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
                    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['index']['$get']
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
                    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBotBotNameAliasBotAliasUserUserIdSessionIndexQueryKey>
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
              (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBotBotNameAliasBotAliasUserUserIdSessionIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBotBotNameAliasBotAliasUserUserIdSessionIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bot[':botName'].alias[':botAlias'].user[':userId'].session.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostBotBotNameAliasBotAliasUserUserIdContentContentTypeMutationKey() {
  return ['bot', '/bot/:botName/alias/:botAlias/user/:userId/content#Content-Type', 'POST'] as const
}

export function getPostBotBotNameAliasBotAliasUserUserIdContentContentTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['content#Content-Type']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['content#Content-Type']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBotBotNameAliasBotAliasUserUserIdContentContentTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['content#Content-Type']['$post']
      >,
    ) {
      return parseResponse(
        client.bot[':botName'].alias[':botAlias'].user[':userId']['content#Content-Type'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostBotBotNameAliasBotAliasUserUserIdContentContentType<
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
                    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['content#Content-Type']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['content#Content-Type']['$post']
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
    getPostBotBotNameAliasBotAliasUserUserIdContentContentTypeMutationOptions<
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

export function getPostBotBotNameAliasBotAliasUserUserIdTextMutationKey() {
  return ['bot', '/bot/:botName/alias/:botAlias/user/:userId/text', 'POST'] as const
}

export function getPostBotBotNameAliasBotAliasUserUserIdTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['text']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['text']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBotBotNameAliasBotAliasUserUserIdTextMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['text']['$post']
      >,
    ) {
      return parseResponse(
        client.bot[':botName'].alias[':botAlias'].user[':userId'].text.$post(args, options),
      )
    },
  })
}

export function usePostBotBotNameAliasBotAliasUserUserIdText<
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
                    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['text']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['text']['$post']
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
  const mutationDefaults = getPostBotBotNameAliasBotAliasUserUserIdTextMutationOptions<
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
