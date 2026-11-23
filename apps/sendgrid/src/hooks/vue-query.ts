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

export function getV3Key() {
  return ['v3'] as const
}

export function getPostV3MailBatchMutationKey() {
  return ['v3', '/v3/mail/batch', 'POST'] as const
}

export function getPostV3MailBatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.mail.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v3.mail.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3MailBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.mail.batch.$post>) {
      return parseResponse(client.v3.mail.batch.$post(args, options))
    },
  })
}

export function usePostV3MailBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.mail.batch.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v3.mail.batch.$post>,
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
  const mutationDefaults = getPostV3MailBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV3MailBatchBatchIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.mail.batch)[':batch_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v3', '/v3/mail/batch/:batch_id', keyArgs] as const
}

export function getV3MailBatchBatchIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.mail.batch)[':batch_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3MailBatchBatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.mail.batch[':batch_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3MailBatchBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.mail.batch)[':batch_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.mail.batch)[':batch_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.mail.batch)[':batch_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.mail.batch)[':batch_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3MailBatchBatchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.mail.batch)[':batch_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3MailBatchBatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3MailBatchBatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.mail.batch[':batch_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3MailSendMutationKey() {
  return ['v3', '/v3/mail/send', 'POST'] as const
}

export function getPostV3MailSendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.mail.send.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v3.mail.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3MailSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.mail.send.$post>) {
      return parseResponse(client.v3.mail.send.$post(args, options))
    },
  })
}

export function usePostV3MailSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.mail.send.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v3.mail.send.$post>,
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
  const mutationDefaults = getPostV3MailSendMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
