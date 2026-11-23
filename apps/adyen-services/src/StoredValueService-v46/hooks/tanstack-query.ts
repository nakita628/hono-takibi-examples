import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getChangeStatusKey() {
  return ['changeStatus'] as const
}

export function getCheckBalanceKey() {
  return ['checkBalance'] as const
}

export function getIssueKey() {
  return ['issue'] as const
}

export function getLoadKey() {
  return ['load'] as const
}

export function getMergeBalanceKey() {
  return ['mergeBalance'] as const
}

export function getVoidTransactionKey() {
  return ['voidTransaction'] as const
}

export function getPostChangeStatusMutationKey() {
  return ['changeStatus', '/changeStatus', 'POST'] as const
}

export function getPostChangeStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changeStatus.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.changeStatus.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChangeStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.changeStatus.$post>) {
      return parseResponse(client.changeStatus.$post(args, options))
    },
  })
}

export function usePostChangeStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changeStatus.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.changeStatus.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChangeStatusMutationOptions<TError, TOnMutateResult>(
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

export function getPostCheckBalanceMutationKey() {
  return ['checkBalance', '/checkBalance', 'POST'] as const
}

export function getPostCheckBalanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkBalance.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.checkBalance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCheckBalanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.checkBalance.$post>) {
      return parseResponse(client.checkBalance.$post(args, options))
    },
  })
}

export function usePostCheckBalance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkBalance.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.checkBalance.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCheckBalanceMutationOptions<TError, TOnMutateResult>(
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

export function getPostIssueMutationKey() {
  return ['issue', '/issue', 'POST'] as const
}

export function getPostIssueMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$post>>>>>,
    TError,
    InferRequestType<typeof client.issue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIssueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.issue.$post>) {
      return parseResponse(client.issue.$post(args, options))
    },
  })
}

export function usePostIssue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$post>>>>>,
        TError,
        InferRequestType<typeof client.issue.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIssueMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLoadMutationKey() {
  return ['load', '/load', 'POST'] as const
}

export function getPostLoadMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load.$post>>>>>,
    TError,
    InferRequestType<typeof client.load.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLoadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.load.$post>) {
      return parseResponse(client.load.$post(args, options))
    },
  })
}

export function usePostLoad<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load.$post>>>>>,
        TError,
        InferRequestType<typeof client.load.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLoadMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMergeBalanceMutationKey() {
  return ['mergeBalance', '/mergeBalance', 'POST'] as const
}

export function getPostMergeBalanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mergeBalance.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.mergeBalance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMergeBalanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mergeBalance.$post>) {
      return parseResponse(client.mergeBalance.$post(args, options))
    },
  })
}

export function usePostMergeBalance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mergeBalance.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.mergeBalance.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMergeBalanceMutationOptions<TError, TOnMutateResult>(
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

export function getPostVoidTransactionMutationKey() {
  return ['voidTransaction', '/voidTransaction', 'POST'] as const
}

export function getPostVoidTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voidTransaction.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.voidTransaction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVoidTransactionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.voidTransaction.$post>) {
      return parseResponse(client.voidTransaction.$post(args, options))
    },
  })
}

export function usePostVoidTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voidTransaction.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.voidTransaction.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVoidTransactionMutationOptions<TError, TOnMutateResult>(
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
