import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPaymentsKey() {
  return ['payments'] as const
}

export function getDeletePaymentsV1AuthorizationsAuthorizationTokenKey() {
  return ['payments', '/payments/v1/authorizations/:authorizationToken', 'DELETE'] as const
}

export function useDeletePaymentsV1AuthorizationsAuthorizationToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.payments.v1.authorizations)[':authorizationToken']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.payments.v1.authorizations)[':authorizationToken']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePaymentsV1AuthorizationsAuthorizationTokenKey()
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
            (typeof client.payments.v1.authorizations)[':authorizationToken']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.payments.v1.authorizations[':authorizationToken'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenKey() {
  return [
    'payments',
    '/payments/v1/authorizations/:authorizationToken/customer-token',
    'POST',
  ] as const
}

export function usePostPaymentsV1AuthorizationsAuthorizationTokenCustomerToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payments.v1.authorizations)[':authorizationToken']['customer-token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.payments.v1.authorizations)[':authorizationToken']['customer-token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenKey()
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
            (typeof client.payments.v1.authorizations)[':authorizationToken']['customer-token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payments.v1.authorizations[':authorizationToken']['customer-token'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsV1AuthorizationsAuthorizationTokenOrderKey() {
  return ['payments', '/payments/v1/authorizations/:authorizationToken/order', 'POST'] as const
}

export function usePostPaymentsV1AuthorizationsAuthorizationTokenOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payments.v1.authorizations)[':authorizationToken']['order']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.payments.v1.authorizations)[':authorizationToken']['order']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsV1AuthorizationsAuthorizationTokenOrderKey()
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
            (typeof client.payments.v1.authorizations)[':authorizationToken']['order']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payments.v1.authorizations[':authorizationToken'].order.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsV1SessionsKey() {
  return ['payments', '/payments/v1/sessions', 'POST'] as const
}

export function usePostPaymentsV1Sessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payments.v1.sessions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payments.v1.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsV1SessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payments.v1.sessions.$post> },
      ) => parseResponse(client.payments.v1.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentsV1SessionsSessionIdKey(
  args: InferRequestType<(typeof client.payments.v1.sessions)[':session_id']['$get']>,
) {
  return ['payments', '/payments/v1/sessions/:session_id', args] as const
}

export function useGetPaymentsV1SessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.payments.v1.sessions)[':session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments.v1.sessions)[':session_id']['$get']>>
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
        ? getGetPaymentsV1SessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments.v1.sessions)[':session_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.payments.v1.sessions[':session_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentsV1SessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.payments.v1.sessions)[':session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments.v1.sessions)[':session_id']['$get']>>
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
        ? getGetPaymentsV1SessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments.v1.sessions)[':session_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.payments.v1.sessions[':session_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentsV1SessionsSessionIdKey() {
  return ['payments', '/payments/v1/sessions/:session_id', 'POST'] as const
}

export function usePostPaymentsV1SessionsSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments.v1.sessions)[':session_id']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.payments.v1.sessions)[':session_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsV1SessionsSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.payments.v1.sessions)[':session_id']['$post']> },
      ) => parseResponse(client.payments.v1.sessions[':session_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
