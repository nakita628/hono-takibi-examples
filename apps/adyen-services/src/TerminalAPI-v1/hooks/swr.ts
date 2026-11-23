import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostLoginKey() {
  return ['login', '/login', 'POST'] as const
}

export function usePostLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.login.$post> }) =>
        parseResponse(client.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLogoutKey() {
  return ['logout', '/logout', 'POST'] as const
}

export function usePostLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.logout.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.logout.$post> }) =>
        parseResponse(client.logout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEnableserviceKey() {
  return ['enableservice', '/enableservice', 'POST'] as const
}

export function usePostEnableservice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enableservice.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.enableservice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnableserviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.enableservice.$post> }) =>
        parseResponse(client.enableservice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminKey() {
  return ['admin', '/admin', 'POST'] as const
}

export function usePostAdmin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.admin.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.$post> }) =>
        parseResponse(client.admin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentKey() {
  return ['payment', '/payment', 'POST'] as const
}

export function usePostPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.payment.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payment.$post> }) =>
        parseResponse(client.payment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCardacquisitionKey() {
  return ['cardacquisition', '/cardacquisition', 'POST'] as const
}

export function usePostCardacquisition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardacquisition.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cardacquisition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardacquisitionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cardacquisition.$post> }) =>
        parseResponse(client.cardacquisition.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStoredvalueKey() {
  return ['storedvalue', '/storedvalue', 'POST'] as const
}

export function usePostStoredvalue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storedvalue.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.storedvalue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoredvalueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.storedvalue.$post> }) =>
        parseResponse(client.storedvalue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReversalKey() {
  return ['reversal', '/reversal', 'POST'] as const
}

export function usePostReversal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reversal.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.reversal.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReversalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reversal.$post> }) =>
        parseResponse(client.reversal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReconciliationKey() {
  return ['reconciliation', '/reconciliation', 'POST'] as const
}

export function usePostReconciliation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reconciliation.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.reconciliation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReconciliationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reconciliation.$post> }) =>
        parseResponse(client.reconciliation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGettotalsKey() {
  return ['gettotals', '/gettotals', 'POST'] as const
}

export function usePostGettotals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gettotals.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.gettotals.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGettotalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.gettotals.$post> }) =>
        parseResponse(client.gettotals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBalanceinquiryKey() {
  return ['balanceinquiry', '/balanceinquiry', 'POST'] as const
}

export function usePostBalanceinquiry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balanceinquiry.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.balanceinquiry.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBalanceinquiryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.balanceinquiry.$post> }) =>
        parseResponse(client.balanceinquiry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionstatusKey() {
  return ['transactionstatus', '/transactionstatus', 'POST'] as const
}

export function usePostTransactionstatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactionstatus.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transactionstatus.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionstatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transactionstatus.$post> }) =>
        parseResponse(client.transactionstatus.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAbortKey() {
  return ['abort', '/abort', 'POST'] as const
}

export function usePostAbort<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.abort.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.abort.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAbortKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.abort.$post> }) =>
        parseResponse(client.abort.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDiagnosisKey() {
  return ['diagnosis', '/diagnosis', 'POST'] as const
}

export function usePostDiagnosis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.diagnosis.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.diagnosis.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDiagnosisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.diagnosis.$post> }) =>
        parseResponse(client.diagnosis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDisplayKey() {
  return ['display', '/display', 'POST'] as const
}

export function usePostDisplay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.display.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.display.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisplayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.display.$post> }) =>
        parseResponse(client.display.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInputKey() {
  return ['input', '/input', 'POST'] as const
}

export function usePostInput<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.input.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.input.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInputKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.input.$post> }) =>
        parseResponse(client.input.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPrintKey() {
  return ['print', '/print', 'POST'] as const
}

export function usePostPrint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.print.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.print.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPrintKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.print.$post> }) =>
        parseResponse(client.print.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
