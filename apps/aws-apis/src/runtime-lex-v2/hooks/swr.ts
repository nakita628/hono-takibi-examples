import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBotsKey() {
  return ['bots'] as const
}

export function getGetBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdKey(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'bots',
    '/bots/:botId/botAliases/:botAliasId/botLocales/:localeId/sessions/:sessionId',
    keyArgs,
  ] as const
}

export function useGetBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$get']
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
        ? getGetBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdKey(args)
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
                (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$get']
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
          client.bots[':botId'].botAliases[':botAliasId'].botLocales[':localeId'].sessions[
            ':sessionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$get']
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
        ? getGetBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdKey(args)
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
                (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$get']
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
          client.bots[':botId'].botAliases[':botAliasId'].botLocales[':localeId'].sessions[
            ':sessionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdKey() {
  return [
    'bots',
    '/bots/:botId/botAliases/:botAliasId/botLocales/:localeId/sessions/:sessionId',
    'POST',
  ] as const
}

export function usePostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdKey()
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
            (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botAliases[':botAliasId'].botLocales[':localeId'].sessions[
            ':sessionId'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdKey() {
  return [
    'bots',
    '/bots/:botId/botAliases/:botAliasId/botLocales/:localeId/sessions/:sessionId',
    'DELETE',
  ] as const
}

export function useDeleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdKey()
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
            (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botAliases[':botAliasId'].botLocales[':localeId'].sessions[
            ':sessionId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdTextKey() {
  return [
    'bots',
    '/bots/:botId/botAliases/:botAliasId/botLocales/:localeId/sessions/:sessionId/text',
    'POST',
  ] as const
}

export function usePostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdText<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['text']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['text']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdTextKey()
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
            (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['text']['$post']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botAliases[':botAliasId'].botLocales[':localeId'].sessions[
            ':sessionId'
          ].text.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentTypeKey() {
  return [
    'bots',
    '/bots/:botId/botAliases/:botAliasId/botLocales/:localeId/sessions/:sessionId/utterance#Content-Type',
    'POST',
  ] as const
}

export function usePostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['utterance#Content-Type']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['utterance#Content-Type']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentTypeKey()
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
            (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['utterance#Content-Type']['$post']
          >
        },
      ) =>
        parseResponse(
          client.bots[':botId'].botAliases[':botAliasId'].botLocales[':localeId'].sessions[
            ':sessionId'
          ]['utterance#Content-Type'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
