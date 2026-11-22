import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountVerificationKey() {
  return ['accountVerification'] as const
}

export function getAccountVerificationReportsCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accountVerification.reports)[':code']['$get']>
  >,
) {
  return ['accountVerification', '/accountVerification/reports/:code', toValue(args)] as const
}

export function getAccountVerificationReportsCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accountVerification.reports)[':code']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountVerificationReportsCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accountVerification.reports[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountVerificationReportsCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountVerification.reports)[':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accountVerification.reports)[':code']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accountVerification.reports)[':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accountVerification.reports)[':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountVerificationReportsCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountVerificationReportsCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accountVerification.reports[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountVerificationRoutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountVerificationRoutesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
