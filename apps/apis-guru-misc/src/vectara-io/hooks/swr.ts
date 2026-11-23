import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1CreateCorpusKey() {
  return ['v1', '/v1/create-corpus', 'POST'] as const
}

export function usePostV1CreateCorpus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['create-corpus']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['create-corpus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreateCorpusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['create-corpus']['$post']> },
      ) => parseResponse(client.v1['create-corpus'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DeleteCorpusKey() {
  return ['v1', '/v1/delete-corpus', 'POST'] as const
}

export function usePostV1DeleteCorpus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['delete-corpus']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['delete-corpus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DeleteCorpusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['delete-corpus']['$post']> },
      ) => parseResponse(client.v1['delete-corpus'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DeleteDocKey() {
  return ['v1', '/v1/delete-doc', 'POST'] as const
}

export function usePostV1DeleteDoc<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['delete-doc']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['delete-doc']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DeleteDocKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['delete-doc']['$post']> },
      ) => parseResponse(client.v1['delete-doc'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1IndexKey() {
  return ['v1', '/v1/index', 'POST'] as const
}

export function usePostV1Index<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.index.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.index.$post> }) =>
        parseResponse(client.v1.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ListCorporaKey() {
  return ['v1', '/v1/list-corpora', 'POST'] as const
}

export function usePostV1ListCorpora<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['list-corpora']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['list-corpora']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ListCorporaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['list-corpora']['$post']> },
      ) => parseResponse(client.v1['list-corpora'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1QueryKey() {
  return ['v1', '/v1/query', 'POST'] as const
}

export function usePostV1Query<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1QueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.query.$post> }) =>
        parseResponse(client.v1.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ResetCorpusKey() {
  return ['v1', '/v1/reset-corpus', 'POST'] as const
}

export function usePostV1ResetCorpus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['reset-corpus']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['reset-corpus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ResetCorpusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['reset-corpus']['$post']> },
      ) => parseResponse(client.v1['reset-corpus'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1StreamQueryKey() {
  return ['v1', '/v1/stream-query', 'POST'] as const
}

export function usePostV1StreamQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['stream-query']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['stream-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1StreamQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['stream-query']['$post']> },
      ) => parseResponse(client.v1['stream-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UploadKey() {
  return ['v1', '/v1/upload', 'POST'] as const
}

export function usePostV1Upload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.upload.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.upload.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.upload.$post> }) =>
        parseResponse(client.v1.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
