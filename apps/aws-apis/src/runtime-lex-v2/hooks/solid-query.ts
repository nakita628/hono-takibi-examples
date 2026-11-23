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

export function createBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionId<
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
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionId<
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
      getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdMutationOptions<
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

export function createDeleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionId<
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
      getDeleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdMutationOptions<
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

export function createPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdText<
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
      getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdTextMutationOptions<
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

export function createPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentType<
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
      getPostBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentTypeMutationOptions<
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
