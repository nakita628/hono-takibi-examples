import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostV3MailBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.mail.batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v3.mail.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3MailBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV3MailBatchBatchIdQueryKey(
  args: InferRequestType<(typeof client.v3.mail.batch)[':batch_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v3', '/v3/mail/batch/:batch_id', keyArgs] as const
}

export function getV3MailBatchBatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.mail.batch)[':batch_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.mail.batch)[':batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3MailBatchBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.mail.batch[':batch_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV3MailBatchBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.mail.batch)[':batch_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.mail.batch)[':batch_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3MailBatchBatchIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV3MailSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.mail.send.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v3.mail.send.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3MailSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
