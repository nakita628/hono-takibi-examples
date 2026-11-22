import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getParameterExamplesKey() {
  return ['parameterExamples'] as const
}

export function getRequestBodyKey() {
  return ['requestBody'] as const
}

export function getRequestBodyFormDataExampleKey() {
  return ['requestBody-form-data-example'] as const
}

export function getRequestBodyMultiMediaTypesKey() {
  return ['requestBody-multi-media-types'] as const
}

export function getRequestBodyPrimitiveExampleKey() {
  return ['requestBody-primitive-example'] as const
}

export function getGetParameterExamplesParam1Param2Key(
  args: InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$get']>,
) {
  return ['parameterExamples', '/parameterExamples/:param1/:param2', args] as const
}

export function useGetParameterExamplesParam1Param2<TError = unknown>(
  args: InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.parameterExamples)[':param1'][':param2']['$get']>>
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
        ? getGetParameterExamplesParam1Param2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.parameterExamples)[':param1'][':param2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.parameterExamples[':param1'][':param2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetParameterExamplesParam1Param2<TError = unknown>(
  args: InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.parameterExamples)[':param1'][':param2']['$get']>>
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
        ? getGetParameterExamplesParam1Param2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.parameterExamples)[':param1'][':param2']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.parameterExamples[':param1'][':param2'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutParameterExamplesParam1Param2Key() {
  return ['parameterExamples', '/parameterExamples/:param1/:param2', 'PUT'] as const
}

export function usePutParameterExamplesParam1Param2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.parameterExamples)[':param1'][':param2']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutParameterExamplesParam1Param2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$put']>
        },
      ) => parseResponse(client.parameterExamples[':param1'][':param2'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchParameterExamplesParam1Param2Key() {
  return ['parameterExamples', '/parameterExamples/:param1/:param2', 'PATCH'] as const
}

export function usePatchParameterExamplesParam1Param2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.parameterExamples)[':param1'][':param2']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchParameterExamplesParam1Param2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.parameterExamples)[':param1'][':param2']['$patch']>
        },
      ) => parseResponse(client.parameterExamples[':param1'][':param2'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRequestBodyKey() {
  return ['requestBody', '/requestBody', 'PUT'] as const
}

export function usePutRequestBody<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requestBody.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.requestBody.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRequestBodyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.requestBody.$put> }) =>
        parseResponse(client.requestBody.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRequestBodyKey() {
  return ['requestBody', '/requestBody', 'POST'] as const
}

export function usePostRequestBody<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requestBody.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.requestBody.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRequestBodyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.requestBody.$post> }) =>
        parseResponse(client.requestBody.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRequestBodyKey() {
  return ['requestBody', '/requestBody', 'PATCH'] as const
}

export function usePatchRequestBody<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requestBody.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.requestBody.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRequestBodyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.requestBody.$patch> }) =>
        parseResponse(client.requestBody.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRequestBodyPrimitiveExampleKey() {
  return ['requestBody-primitive-example', '/requestBody-primitive-example', 'PUT'] as const
}

export function usePutRequestBodyPrimitiveExample<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['requestBody-primitive-example']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['requestBody-primitive-example']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRequestBodyPrimitiveExampleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['requestBody-primitive-example']['$put']> },
      ) => parseResponse(client['requestBody-primitive-example'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRequestBodyPrimitiveExampleKey() {
  return ['requestBody-primitive-example', '/requestBody-primitive-example', 'POST'] as const
}

export function usePostRequestBodyPrimitiveExample<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['requestBody-primitive-example']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['requestBody-primitive-example']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRequestBodyPrimitiveExampleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['requestBody-primitive-example']['$post']> },
      ) => parseResponse(client['requestBody-primitive-example'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRequestBodyPrimitiveExampleKey() {
  return ['requestBody-primitive-example', '/requestBody-primitive-example', 'PATCH'] as const
}

export function usePatchRequestBodyPrimitiveExample<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['requestBody-primitive-example']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['requestBody-primitive-example']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRequestBodyPrimitiveExampleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['requestBody-primitive-example']['$patch']> },
      ) => parseResponse(client['requestBody-primitive-example'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRequestBodyMultiMediaTypesKey() {
  return ['requestBody-multi-media-types', '/requestBody-multi-media-types', 'POST'] as const
}

export function usePostRequestBodyMultiMediaTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['requestBody-multi-media-types']['$post']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRequestBodyMultiMediaTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client['requestBody-multi-media-types'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRequestBodyFormDataExampleKey() {
  return ['requestBody-form-data-example', '/requestBody-form-data-example', 'POST'] as const
}

export function usePostRequestBodyFormDataExample<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['requestBody-form-data-example']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['requestBody-form-data-example']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRequestBodyFormDataExampleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['requestBody-form-data-example']['$post']> },
      ) => parseResponse(client['requestBody-form-data-example'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
