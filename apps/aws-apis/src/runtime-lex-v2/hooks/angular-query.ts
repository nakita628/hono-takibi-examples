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

export function getBotsKey() {
  return ['bots'] as const
}

export function getBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdQueryKey(
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

export function getBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdQueryKey>
  >({
    queryKey: getBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':botId'].botAliases[':botAliasId'].botLocales[':localeId'].sessions[
          ':sessionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof getBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdQueryKey
        >
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
      ...getBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdMutationKey() {
  return [
    'bots',
    '/bots/:botId/botAliases/:botAliasId/botLocales/:localeId/sessions/:sessionId',
    'POST',
  ] as const
}

export function getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$post']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botAliases[':botAliasId'].botLocales[':localeId'].sessions[
          ':sessionId'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionId<
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
                  (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$post']
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
      getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdMutationOptions<
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

export function getDeleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdMutationKey() {
  return [
    'bots',
    '/bots/:botId/botAliases/:botAliasId/botLocales/:localeId/sessions/:sessionId',
    'DELETE',
  ] as const
}

export function getDeleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botAliases[':botAliasId'].botLocales[':localeId'].sessions[
          ':sessionId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionId<
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
                  (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$delete']
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
      getDeleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdMutationOptions<
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

export function getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdTextMutationKey() {
  return [
    'bots',
    '/bots/:botId/botAliases/:botAliasId/botLocales/:localeId/sessions/:sessionId/text',
    'POST',
  ] as const
}

export function getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['text']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdTextMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['text']['$post']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botAliases[':botAliasId'].botLocales[':localeId'].sessions[
          ':sessionId'
        ].text.$post(args, options),
      )
    },
  })
}

export function injectPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdText<
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
                  (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['text']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['text']['$post']
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
      getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdTextMutationOptions<
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

export function getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentTypeMutationKey() {
  return [
    'bots',
    '/bots/:botId/botAliases/:botAliasId/botLocales/:localeId/sessions/:sessionId/utterance#Content-Type',
    'POST',
  ] as const
}

export function getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['utterance#Content-Type']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['utterance#Content-Type']['$post']
      >,
    ) {
      return parseResponse(
        client.bots[':botId'].botAliases[':botAliasId'].botLocales[':localeId'].sessions[
          ':sessionId'
        ]['utterance#Content-Type'].$post(args, options),
      )
    },
  })
}

export function injectPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentType<
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
                  (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['utterance#Content-Type']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['utterance#Content-Type']['$post']
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
      getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentTypeMutationOptions<
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
