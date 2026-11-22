import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMultipleTypesMultipleExamplesKey() {
  return ['multiple-types-multiple-examples'] as const
}

export function getMultipleTypesSingleExampleKey() {
  return ['multiple-types-single-example'] as const
}

export function getSingleTypeMultipleExamplesKey() {
  return ['single-type-multiple-examples'] as const
}

export function getSingleTypeSingleExampleKey() {
  return ['single-type-single-example'] as const
}

export function getPostMultipleTypesMultipleExamplesKey() {
  return ['multiple-types-multiple-examples', '/multiple-types-multiple-examples', 'POST'] as const
}

export function usePostMultipleTypesMultipleExamples<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['multiple-types-multiple-examples']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['multiple-types-multiple-examples']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMultipleTypesMultipleExamplesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['multiple-types-multiple-examples']['$post']> },
      ) => parseResponse(client['multiple-types-multiple-examples'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMultipleTypesSingleExampleKey() {
  return ['multiple-types-single-example', '/multiple-types-single-example', 'POST'] as const
}

export function usePostMultipleTypesSingleExample<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['multiple-types-single-example']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['multiple-types-single-example']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMultipleTypesSingleExampleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['multiple-types-single-example']['$post']> },
      ) => parseResponse(client['multiple-types-single-example'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSingleTypeMultipleExamplesKey() {
  return ['single-type-multiple-examples', '/single-type-multiple-examples'] as const
}

export function useGetSingleTypeMultipleExamples<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['single-type-multiple-examples']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSingleTypeMultipleExamplesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['single-type-multiple-examples']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['single-type-multiple-examples'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSingleTypeMultipleExamples<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['single-type-multiple-examples']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSingleTypeMultipleExamplesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['single-type-multiple-examples']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['single-type-multiple-examples'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSingleTypeSingleExampleKey() {
  return ['single-type-single-example', '/single-type-single-example'] as const
}

export function useGetSingleTypeSingleExample<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['single-type-single-example']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSingleTypeSingleExampleKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['single-type-single-example']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['single-type-single-example'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSingleTypeSingleExample<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['single-type-single-example']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSingleTypeSingleExampleKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['single-type-single-example']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['single-type-single-example'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
