import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV0Key() {
  return ['v0'] as const
}

export function getGetV0CustomersCustomerIdCustomColumnsKey(
  args: InferRequestType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>,
) {
  return ['v0', '/v0/customers/:customerId/customColumns', args] as const
}

export function useGetV0CustomersCustomerIdCustomColumns<TError = unknown>(
  args: InferRequestType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>
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
        ? getGetV0CustomersCustomerIdCustomColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v0.customers[':customerId'].customColumns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0CustomersCustomerIdCustomColumns<TError = unknown>(
  args: InferRequestType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>
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
        ? getGetV0CustomersCustomerIdCustomColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v0.customers)[':customerId']['customColumns']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v0.customers[':customerId'].customColumns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV0CustomersCustomerIdSearchAds360SearchKey() {
  return ['v0', '/v0/customers/:customerId/searchAds360:search', 'POST'] as const
}

export function usePostV0CustomersCustomerIdSearchAds360Search<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v0.customers)[':customerId']['searchAds360:search']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0.customers)[':customerId']['searchAds360:search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV0CustomersCustomerIdSearchAds360SearchKey()
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
            (typeof client.v0.customers)[':customerId']['searchAds360:search']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v0.customers[':customerId']['searchAds360:search'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV0CustomersCustomerIdSearchAds360SearchStreamKey() {
  return ['v0', '/v0/customers/:customerId/searchAds360:searchStream', 'POST'] as const
}

export function usePostV0CustomersCustomerIdSearchAds360SearchStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v0.customers)[':customerId']['searchAds360:searchStream']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v0.customers)[':customerId']['searchAds360:searchStream']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV0CustomersCustomerIdSearchAds360SearchStreamKey()
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
            (typeof client.v0.customers)[':customerId']['searchAds360:searchStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v0.customers[':customerId']['searchAds360:searchStream'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV0SearchAds360FieldsSearchKey() {
  return ['v0', '/v0/searchAds360Fields:search', 'POST'] as const
}

export function usePostV0SearchAds360FieldsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v0)['searchAds360Fields:search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v0)['searchAds360Fields:search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV0SearchAds360FieldsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v0)['searchAds360Fields:search']['$post']> },
      ) => parseResponse(client.v0['searchAds360Fields:search'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV0ResourceNameKey(
  args: InferRequestType<(typeof client.v0)[':resourceName']['$get']>,
) {
  return ['v0', '/v0/:resourceName', args] as const
}

export function useGetV0ResourceName<TError = unknown>(
  args: InferRequestType<(typeof client.v0)[':resourceName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0)[':resourceName']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV0ResourceNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0)[':resourceName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0[':resourceName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV0ResourceName<TError = unknown>(
  args: InferRequestType<(typeof client.v0)[':resourceName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0)[':resourceName']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV0ResourceNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v0)[':resourceName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v0[':resourceName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
