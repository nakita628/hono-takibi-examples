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

export function createPostBotBotNameAliasBotAliasUserUserIdSession<
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
    const mutationDefaults = getPostBotBotNameAliasBotAliasUserUserIdSessionMutationOptions<
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

export function createDeleteBotBotNameAliasBotAliasUserUserIdSession<
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
    const mutationDefaults = getDeleteBotBotNameAliasBotAliasUserUserIdSessionMutationOptions<
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

export function getBotBotNameAliasBotAliasUserUserIdSessionIndexQueryKey(
  args: InferRequestType<
    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['bot', '/bot/:botName/alias/:botAlias/user/:userId/session/', keyArgs] as const
}

export function getBotBotNameAliasBotAliasUserUserIdSessionIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBotBotNameAliasBotAliasUserUserIdSessionIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bot[':botName'].alias[':botAlias'].user[':userId'].session.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBotBotNameAliasBotAliasUserUserIdSessionIndex<
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
  args: () => InferRequestType<
    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['index']['$get']
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
                    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['index']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBotBotNameAliasBotAliasUserUserIdSessionIndexQueryKey>
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
      ...getBotBotNameAliasBotAliasUserUserIdSessionIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostBotBotNameAliasBotAliasUserUserIdContentContentType<
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
    const mutationDefaults =
      getPostBotBotNameAliasBotAliasUserUserIdContentContentTypeMutationOptions<
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

export function createPostBotBotNameAliasBotAliasUserUserIdText<
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
    const mutationDefaults = getPostBotBotNameAliasBotAliasUserUserIdTextMutationOptions<
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
