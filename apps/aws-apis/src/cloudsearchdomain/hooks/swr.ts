import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2013_01_01Key() {
  return ['2013-01-01'] as const
}

export function getGet20130101SearchFormatSdkPrettyTrueQKey(
  args: InferRequestType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-01-01', '/2013-01-01/search#format=sdk&pretty=true&q', keyArgs] as const
}

export function useGet20130101SearchFormatSdkPrettyTrueQ<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>
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
        ? getGet20130101SearchFormatSdkPrettyTrueQKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2013-01-01']['search#format=sdk&pretty=true&q'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130101SearchFormatSdkPrettyTrueQ<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>
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
        ? getGet20130101SearchFormatSdkPrettyTrueQKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-01-01']['search#format=sdk&pretty=true&q']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2013-01-01']['search#format=sdk&pretty=true&q'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20130101SuggestFormatSdkPrettyTrueQSuggesterKey(
  args: InferRequestType<
    (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-01-01', '/2013-01-01/suggest#format=sdk&pretty=true&q&suggester', keyArgs] as const
}

export function useGet20130101SuggestFormatSdkPrettyTrueQSuggester<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
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
        ? getGet20130101SuggestFormatSdkPrettyTrueQSuggesterKey(args)
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
                (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
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
          client['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130101SuggestFormatSdkPrettyTrueQSuggester<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
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
        ? getGet20130101SuggestFormatSdkPrettyTrueQSuggesterKey(args)
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
                (typeof client)['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester']['$get']
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
          client['2013-01-01']['suggest#format=sdk&pretty=true&q&suggester'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20130101DocumentsBatchFormatSdkContentTypeKey() {
  return ['2013-01-01', '/2013-01-01/documents/batch#format=sdk&Content-Type', 'POST'] as const
}

export function usePost20130101DocumentsBatchFormatSdkContentType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-01-01']['documents']['batch#format=sdk&Content-Type']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2013-01-01']['documents']['batch#format=sdk&Content-Type']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130101DocumentsBatchFormatSdkContentTypeKey()
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
            (typeof client)['2013-01-01']['documents']['batch#format=sdk&Content-Type']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2013-01-01'].documents['batch#format=sdk&Content-Type'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
