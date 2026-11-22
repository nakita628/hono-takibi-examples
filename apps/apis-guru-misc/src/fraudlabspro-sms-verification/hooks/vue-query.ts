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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1VerificationResultQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.verification.result.$get>>,
) {
  return ['v1', '/v1/verification/result', toValue(args)] as const
}

export function getV1VerificationResultQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.verification.result.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1VerificationResultQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.verification.result.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1VerificationResult<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.result.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.verification.result.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.result.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.result.$get>>>
            >
          >,
          ReturnType<typeof getV1VerificationResultQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.result.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VerificationResultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1VerificationResultQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.verification.result.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1VerificationSendMutationKey() {
  return ['v1', '/v1/verification/send', 'POST'] as const
}

export function getPostV1VerificationSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.send.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.verification.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1VerificationSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.verification.send.$post>) {
      return parseResponse(client.v1.verification.send.$post(args, options))
    },
  })
}

export function usePostV1VerificationSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.verification.send.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.verification.send.$post>,
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
  const mutationDefaults = getPostV1VerificationSendMutationOptions<TError, TOnMutateResult>(
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
