import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountVerificationKey() {
  return ['accountVerification'] as const
}

export function getAccountVerificationReportsCodeQueryKey(
  args: InferRequestType<(typeof client.accountVerification.reports)[':code']['$get']>,
) {
  return ['accountVerification', '/accountVerification/reports/:code', args] as const
}

export function getAccountVerificationReportsCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountVerification.reports)[':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accountVerification.reports)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accountVerification.reports)[':code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountVerificationReportsCodeQueryKey>
  >({
    queryKey: getAccountVerificationReportsCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accountVerification.reports[':code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountVerificationReportsCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountVerification.reports)[':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accountVerification.reports)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accountVerification.reports)[':code']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountVerificationReportsCodeQueryKey>
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
      ...getAccountVerificationReportsCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountVerificationRoutesMutationKey() {
  return ['accountVerification', '/accountVerification/routes', 'POST'] as const
}

export function getPostAccountVerificationRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accountVerification.routes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.accountVerification.routes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountVerificationRoutesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accountVerification.routes.$post>) {
      return parseResponse(client.accountVerification.routes.$post(args, options))
    },
  })
}

export function createPostAccountVerificationRoutes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.accountVerification.routes.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.accountVerification.routes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountVerificationRoutesMutationOptions<
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
