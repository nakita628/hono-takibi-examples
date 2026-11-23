import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnyOfWithTypeKey() {
  return ['any-of-with-type'] as const
}

export function getAnythingKey() {
  return ['anything'] as const
}

export function getOneOfComplexKey() {
  return ['one-of-complex'] as const
}

export function getOneOfWithTypeKey() {
  return ['one-of-with-type'] as const
}

export function getPetsKey() {
  return ['pets'] as const
}

export function getPatchPetsKey() {
  return ['pets', '/pets', 'PATCH'] as const
}

export function usePatchPets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.pets.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pets.$patch> }) =>
        parseResponse(client.pets.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingAllOfObjectKey() {
  return ['anything', '/anything/all-of-object', 'POST'] as const
}

export function usePostAnythingAllOfObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['all-of-object']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['all-of-object']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingAllOfObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)['all-of-object']['$post']> },
      ) => parseResponse(client.anything['all-of-object'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingAnyOfObjectKey() {
  return ['anything', '/anything/any-of-object', 'POST'] as const
}

export function usePostAnythingAnyOfObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['any-of-object']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['any-of-object']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingAnyOfObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)['any-of-object']['$post']> },
      ) => parseResponse(client.anything['any-of-object'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingAnyOfPrimitiveKey() {
  return ['anything', '/anything/any-of-primitive', 'POST'] as const
}

export function usePostAnythingAnyOfPrimitive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['any-of-primitive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['any-of-primitive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingAnyOfPrimitiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)['any-of-primitive']['$post']> },
      ) => parseResponse(client.anything['any-of-primitive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnyOfWithTypeKey() {
  return ['any-of-with-type', '/any-of-with-type', 'POST'] as const
}

export function usePostAnyOfWithType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['any-of-with-type']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['any-of-with-type']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnyOfWithTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['any-of-with-type']['$post']> },
      ) => parseResponse(client['any-of-with-type'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingOneOfObjectKey() {
  return ['anything', '/anything/one-of-object', 'POST'] as const
}

export function usePostAnythingOneOfObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['one-of-object']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['one-of-object']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingOneOfObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)['one-of-object']['$post']> },
      ) => parseResponse(client.anything['one-of-object'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingOneOfPrimitiveKey() {
  return ['anything', '/anything/one-of-primitive', 'POST'] as const
}

export function usePostAnythingOneOfPrimitive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['one-of-primitive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['one-of-primitive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingOneOfPrimitiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)['one-of-primitive']['$post']> },
      ) => parseResponse(client.anything['one-of-primitive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingOneOfObjectRefKey() {
  return ['anything', '/anything/one-of-object-ref', 'POST'] as const
}

export function usePostAnythingOneOfObjectRef<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['one-of-object-ref']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['one-of-object-ref']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingOneOfObjectRefKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)['one-of-object-ref']['$post']> },
      ) => parseResponse(client.anything['one-of-object-ref'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOneOfComplexKey() {
  return ['one-of-complex', '/one-of-complex', 'POST'] as const
}

export function usePostOneOfComplex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['one-of-complex']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['one-of-complex']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOneOfComplexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['one-of-complex']['$post']> },
      ) => parseResponse(client['one-of-complex'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingNestedOneOfObjectRefKey() {
  return ['anything', '/anything/nested-one-of-object-ref', 'POST'] as const
}

export function usePostAnythingNestedOneOfObjectRef<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['nested-one-of-object-ref']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['nested-one-of-object-ref']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingNestedOneOfObjectRefKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.anything)['nested-one-of-object-ref']['$post']> },
      ) => parseResponse(client.anything['nested-one-of-object-ref'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingNestedOneOfRefKey() {
  return ['anything', '/anything/nested-one-of-ref', 'POST'] as const
}

export function usePostAnythingNestedOneOfRef<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['nested-one-of-ref']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['nested-one-of-ref']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingNestedOneOfRefKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)['nested-one-of-ref']['$post']> },
      ) => parseResponse(client.anything['nested-one-of-ref'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingNestedOneOfObjectWithNestedOneOfKey() {
  return ['anything', '/anything/nested-one-of-object-with-nested-one-of', 'POST'] as const
}

export function usePostAnythingNestedOneOfObjectWithNestedOneOf<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.anything)['nested-one-of-object-with-nested-one-of']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['nested-one-of-object-with-nested-one-of']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingNestedOneOfObjectWithNestedOneOfKey()
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
            (typeof client.anything)['nested-one-of-object-with-nested-one-of']['$post']
          >
        },
      ) =>
        parseResponse(
          client.anything['nested-one-of-object-with-nested-one-of'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOneOfWithTypeKey() {
  return ['one-of-with-type', '/one-of-with-type', 'POST'] as const
}

export function usePostOneOfWithType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['one-of-with-type']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['one-of-with-type']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOneOfWithTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['one-of-with-type']['$post']> },
      ) => parseResponse(client['one-of-with-type'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
