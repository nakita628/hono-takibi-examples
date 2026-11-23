import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAbortKey() {
  return ['abort'] as const
}

export function getAdminKey() {
  return ['admin'] as const
}

export function getBalanceinquiryKey() {
  return ['balanceinquiry'] as const
}

export function getCardacquisitionKey() {
  return ['cardacquisition'] as const
}

export function getDiagnosisKey() {
  return ['diagnosis'] as const
}

export function getDisplayKey() {
  return ['display'] as const
}

export function getEnableserviceKey() {
  return ['enableservice'] as const
}

export function getGettotalsKey() {
  return ['gettotals'] as const
}

export function getInputKey() {
  return ['input'] as const
}

export function getLoginKey() {
  return ['login'] as const
}

export function getLogoutKey() {
  return ['logout'] as const
}

export function getPaymentKey() {
  return ['payment'] as const
}

export function getPrintKey() {
  return ['print'] as const
}

export function getReconciliationKey() {
  return ['reconciliation'] as const
}

export function getReversalKey() {
  return ['reversal'] as const
}

export function getStoredvalueKey() {
  return ['storedvalue'] as const
}

export function getTransactionstatusKey() {
  return ['transactionstatus'] as const
}

export function getPostLoginMutationKey() {
  return ['login', '/login', 'POST'] as const
}

export function getPostLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.login.$post>) {
      return parseResponse(client.login.$post(args, options))
    },
  })
}

export function usePostLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
        TError,
        InferRequestType<typeof client.login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLogoutMutationKey() {
  return ['logout', '/logout', 'POST'] as const
}

export function getPostLogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$post>>>>>,
    TError,
    InferRequestType<typeof client.logout.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLogoutMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.logout.$post>) {
      return parseResponse(client.logout.$post(args, options))
    },
  })
}

export function usePostLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$post>>>>>,
        TError,
        InferRequestType<typeof client.logout.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEnableserviceMutationKey() {
  return ['enableservice', '/enableservice', 'POST'] as const
}

export function getPostEnableserviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enableservice.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.enableservice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEnableserviceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.enableservice.$post>) {
      return parseResponse(client.enableservice.$post(args, options))
    },
  })
}

export function usePostEnableservice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enableservice.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.enableservice.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEnableserviceMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminMutationKey() {
  return ['admin', '/admin', 'POST'] as const
}

export function getPostAdminMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$post>>>>>,
    TError,
    InferRequestType<typeof client.admin.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.$post>) {
      return parseResponse(client.admin.$post(args, options))
    },
  })
}

export function usePostAdmin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$post>>>>>,
        TError,
        InferRequestType<typeof client.admin.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPaymentMutationKey() {
  return ['payment', '/payment', 'POST'] as const
}

export function getPostPaymentMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$post>>>>>,
    TError,
    InferRequestType<typeof client.payment.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payment.$post>) {
      return parseResponse(client.payment.$post(args, options))
    },
  })
}

export function usePostPayment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$post>>>>>,
        TError,
        InferRequestType<typeof client.payment.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCardacquisitionMutationKey() {
  return ['cardacquisition', '/cardacquisition', 'POST'] as const
}

export function getPostCardacquisitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardacquisition.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cardacquisition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCardacquisitionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cardacquisition.$post>) {
      return parseResponse(client.cardacquisition.$post(args, options))
    },
  })
}

export function usePostCardacquisition<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardacquisition.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.cardacquisition.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardacquisitionMutationOptions<TError, TOnMutateResult>(
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

export function getPostStoredvalueMutationKey() {
  return ['storedvalue', '/storedvalue', 'POST'] as const
}

export function getPostStoredvalueMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storedvalue.$post>>>>>,
    TError,
    InferRequestType<typeof client.storedvalue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStoredvalueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.storedvalue.$post>) {
      return parseResponse(client.storedvalue.$post(args, options))
    },
  })
}

export function usePostStoredvalue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storedvalue.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.storedvalue.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoredvalueMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostReversalMutationKey() {
  return ['reversal', '/reversal', 'POST'] as const
}

export function getPostReversalMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reversal.$post>>>>>,
    TError,
    InferRequestType<typeof client.reversal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReversalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reversal.$post>) {
      return parseResponse(client.reversal.$post(args, options))
    },
  })
}

export function usePostReversal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reversal.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.reversal.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReversalMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostReconciliationMutationKey() {
  return ['reconciliation', '/reconciliation', 'POST'] as const
}

export function getPostReconciliationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reconciliation.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reconciliation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReconciliationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reconciliation.$post>) {
      return parseResponse(client.reconciliation.$post(args, options))
    },
  })
}

export function usePostReconciliation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reconciliation.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.reconciliation.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReconciliationMutationOptions<TError, TOnMutateResult>(
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

export function getPostGettotalsMutationKey() {
  return ['gettotals', '/gettotals', 'POST'] as const
}

export function getPostGettotalsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gettotals.$post>>>>>,
    TError,
    InferRequestType<typeof client.gettotals.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGettotalsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gettotals.$post>) {
      return parseResponse(client.gettotals.$post(args, options))
    },
  })
}

export function usePostGettotals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gettotals.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.gettotals.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGettotalsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBalanceinquiryMutationKey() {
  return ['balanceinquiry', '/balanceinquiry', 'POST'] as const
}

export function getPostBalanceinquiryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balanceinquiry.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.balanceinquiry.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBalanceinquiryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.balanceinquiry.$post>) {
      return parseResponse(client.balanceinquiry.$post(args, options))
    },
  })
}

export function usePostBalanceinquiry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balanceinquiry.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.balanceinquiry.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBalanceinquiryMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransactionstatusMutationKey() {
  return ['transactionstatus', '/transactionstatus', 'POST'] as const
}

export function getPostTransactionstatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactionstatus.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transactionstatus.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionstatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactionstatus.$post>) {
      return parseResponse(client.transactionstatus.$post(args, options))
    },
  })
}

export function usePostTransactionstatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.transactionstatus.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.transactionstatus.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionstatusMutationOptions<TError, TOnMutateResult>(
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

export function getPostAbortMutationKey() {
  return ['abort', '/abort', 'POST'] as const
}

export function getPostAbortMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.abort.$post>>>>>,
    TError,
    InferRequestType<typeof client.abort.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAbortMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.abort.$post>) {
      return parseResponse(client.abort.$post(args, options))
    },
  })
}

export function usePostAbort<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.abort.$post>>>>>,
        TError,
        InferRequestType<typeof client.abort.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAbortMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDiagnosisMutationKey() {
  return ['diagnosis', '/diagnosis', 'POST'] as const
}

export function getPostDiagnosisMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.diagnosis.$post>>>>>,
    TError,
    InferRequestType<typeof client.diagnosis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDiagnosisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.diagnosis.$post>) {
      return parseResponse(client.diagnosis.$post(args, options))
    },
  })
}

export function usePostDiagnosis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.diagnosis.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.diagnosis.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDiagnosisMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDisplayMutationKey() {
  return ['display', '/display', 'POST'] as const
}

export function getPostDisplayMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.display.$post>>>>>,
    TError,
    InferRequestType<typeof client.display.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDisplayMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.display.$post>) {
      return parseResponse(client.display.$post(args, options))
    },
  })
}

export function usePostDisplay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.display.$post>>>>>,
        TError,
        InferRequestType<typeof client.display.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDisplayMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInputMutationKey() {
  return ['input', '/input', 'POST'] as const
}

export function getPostInputMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.input.$post>>>>>,
    TError,
    InferRequestType<typeof client.input.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInputMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.input.$post>) {
      return parseResponse(client.input.$post(args, options))
    },
  })
}

export function usePostInput<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.input.$post>>>>>,
        TError,
        InferRequestType<typeof client.input.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInputMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPrintMutationKey() {
  return ['print', '/print', 'POST'] as const
}

export function getPostPrintMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.print.$post>>>>>,
    TError,
    InferRequestType<typeof client.print.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPrintMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.print.$post>) {
      return parseResponse(client.print.$post(args, options))
    },
  })
}

export function usePostPrint<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.print.$post>>>>>,
        TError,
        InferRequestType<typeof client.print.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPrintMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
