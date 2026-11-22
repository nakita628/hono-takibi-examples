import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBotKey() {
  return ['bot'] as const
}

export function getPostBotBotNameAliasBotAliasUserUserIdSessionKey() {
  return ['bot', '/bot/:botName/alias/:botAlias/user/:userId/session', 'POST'] as const
}

export function usePostBotBotNameAliasBotAliasUserUserIdSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBotBotNameAliasBotAliasUserUserIdSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['$post']
          >
        },
      ) =>
        parseResponse(
          client.bot[':botName'].alias[':botAlias'].user[':userId'].session.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBotBotNameAliasBotAliasUserUserIdSessionKey() {
  return ['bot', '/bot/:botName/alias/:botAlias/user/:userId/session', 'DELETE'] as const
}

export function useDeleteBotBotNameAliasBotAliasUserUserIdSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBotBotNameAliasBotAliasUserUserIdSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.bot[':botName'].alias[':botAlias'].user[':userId'].session.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBotBotNameAliasBotAliasUserUserIdSessionIndexKey(
  args: InferRequestType<
    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['bot', '/bot/:botName/alias/:botAlias/user/:userId/session/', keyArgs] as const
}

export function useGetBotBotNameAliasBotAliasUserUserIdSessionIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBotBotNameAliasBotAliasUserUserIdSessionIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.bot[':botName'].alias[':botAlias'].user[':userId'].session.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotBotNameAliasBotAliasUserUserIdSessionIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBotBotNameAliasBotAliasUserUserIdSessionIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.bot[':botName'].alias[':botAlias'].user[':userId'].session.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBotBotNameAliasBotAliasUserUserIdContentContentTypeKey() {
  return ['bot', '/bot/:botName/alias/:botAlias/user/:userId/content#Content-Type', 'POST'] as const
}

export function usePostBotBotNameAliasBotAliasUserUserIdContentContentType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['content#Content-Type']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBotBotNameAliasBotAliasUserUserIdContentContentTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['content#Content-Type']['$post']
          >
        },
      ) =>
        parseResponse(
          client.bot[':botName'].alias[':botAlias'].user[':userId']['content#Content-Type'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBotBotNameAliasBotAliasUserUserIdTextKey() {
  return ['bot', '/bot/:botName/alias/:botAlias/user/:userId/text', 'POST'] as const
}

export function usePostBotBotNameAliasBotAliasUserUserIdText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['text']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBotBotNameAliasBotAliasUserUserIdTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['text']['$post']
          >
        },
      ) =>
        parseResponse(
          client.bot[':botName'].alias[':botAlias'].user[':userId'].text.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
