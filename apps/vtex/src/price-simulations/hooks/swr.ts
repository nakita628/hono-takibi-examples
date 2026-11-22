import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVKey() {
  return ['_v'] as const
}

export function getSessionsKey() {
  return ['sessions'] as const
}

export function getPostVCustomPricesRulesKey() {
  return ['_v', '/_v/custom-prices/rules', 'POST'] as const
}

export function usePostVCustomPricesRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client._v)['custom-prices']['rules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client._v)['custom-prices']['rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVCustomPricesRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client._v)['custom-prices']['rules']['$post']> },
      ) => parseResponse(client._v['custom-prices'].rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVCustomPricesRulesPriceAssociationIdKey(
  args: InferRequestType<
    (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['_v', '/_v/custom-prices/rules/:priceAssociationId', keyArgs] as const
}

export function useGetVCustomPricesRulesPriceAssociationId<TError = unknown>(
  args: InferRequestType<
    (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$get']
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
        ? getGetVCustomPricesRulesPriceAssociationIdKey(args)
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
                (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$get']
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
          client._v['custom-prices'].rules[':priceAssociationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVCustomPricesRulesPriceAssociationId<TError = unknown>(
  args: InferRequestType<
    (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$get']
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
        ? getGetVCustomPricesRulesPriceAssociationIdKey(args)
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
                (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$get']
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
          client._v['custom-prices'].rules[':priceAssociationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutVCustomPricesRulesPriceAssociationIdKey() {
  return ['_v', '/_v/custom-prices/rules/:priceAssociationId', 'PUT'] as const
}

export function usePutVCustomPricesRulesPriceAssociationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVCustomPricesRulesPriceAssociationIdKey()
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
            (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$put']
          >
        },
      ) =>
        parseResponse(
          client._v['custom-prices'].rules[':priceAssociationId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteVCustomPricesRulesPriceAssociationIdKey() {
  return ['_v', '/_v/custom-prices/rules/:priceAssociationId', 'DELETE'] as const
}

export function useDeleteVCustomPricesRulesPriceAssociationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVCustomPricesRulesPriceAssociationIdKey()
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
            (typeof client._v)['custom-prices']['rules'][':priceAssociationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client._v['custom-prices'].rules[':priceAssociationId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVCustomPricesSessionSchemaKey(
  args: InferRequestType<(typeof client._v)['custom-prices']['session']['schema']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['_v', '/_v/custom-prices/session/schema', keyArgs] as const
}

export function useGetVCustomPricesSessionSchema<TError = unknown>(
  args: InferRequestType<(typeof client._v)['custom-prices']['session']['schema']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client._v)['custom-prices']['session']['schema']['$get']>>
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
        ? getGetVCustomPricesSessionSchemaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client._v)['custom-prices']['session']['schema']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client._v['custom-prices'].session.schema.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVCustomPricesSessionSchema<TError = unknown>(
  args: InferRequestType<(typeof client._v)['custom-prices']['session']['schema']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client._v)['custom-prices']['session']['schema']['$get']>>
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
        ? getGetVCustomPricesSessionSchemaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client._v)['custom-prices']['session']['schema']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client._v['custom-prices'].session.schema.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVCustomPricesSessionSchemaKey() {
  return ['_v', '/_v/custom-prices/session/schema', 'POST'] as const
}

export function usePostVCustomPricesSessionSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client._v)['custom-prices']['session']['schema']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client._v)['custom-prices']['session']['schema']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVCustomPricesSessionSchemaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client._v)['custom-prices']['session']['schema']['$post']>
        },
      ) => parseResponse(client._v['custom-prices'].session.schema.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsIndexKey() {
  return ['sessions', '/sessions/', 'POST'] as const
}

export function usePostSessionsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sessions.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sessions.index.$post> }) =>
        parseResponse(client.sessions.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
