import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountHolderBalanceKey() {
  return ['accountHolderBalance'] as const
}

export function getAccountHolderTransactionListKey() {
  return ['accountHolderTransactionList'] as const
}

export function getDebitAccountHolderKey() {
  return ['debitAccountHolder'] as const
}

export function getPayoutAccountHolderKey() {
  return ['payoutAccountHolder'] as const
}

export function getRefundFundsTransferKey() {
  return ['refundFundsTransfer'] as const
}

export function getRefundNotPaidOutTransfersKey() {
  return ['refundNotPaidOutTransfers'] as const
}

export function getSetupBeneficiaryKey() {
  return ['setupBeneficiary'] as const
}

export function getTransferFundsKey() {
  return ['transferFunds'] as const
}

export function getPostAccountHolderBalanceMutationKey() {
  return ['accountHolderBalance', '/accountHolderBalance', 'POST'] as const
}

export function getPostAccountHolderBalanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accountHolderBalance.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.accountHolderBalance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountHolderBalanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accountHolderBalance.$post>) {
      return parseResponse(client.accountHolderBalance.$post(args, options))
    },
  })
}

export function createPostAccountHolderBalance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accountHolderBalance.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accountHolderBalance.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountHolderBalanceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountHolderTransactionListMutationKey() {
  return ['accountHolderTransactionList', '/accountHolderTransactionList', 'POST'] as const
}

export function getPostAccountHolderTransactionListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accountHolderTransactionList.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.accountHolderTransactionList.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountHolderTransactionListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accountHolderTransactionList.$post>) {
      return parseResponse(client.accountHolderTransactionList.$post(args, options))
    },
  })
}

export function createPostAccountHolderTransactionList<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.accountHolderTransactionList.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.accountHolderTransactionList.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountHolderTransactionListMutationOptions<
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

export function getPostDebitAccountHolderMutationKey() {
  return ['debitAccountHolder', '/debitAccountHolder', 'POST'] as const
}

export function getPostDebitAccountHolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debitAccountHolder.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.debitAccountHolder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDebitAccountHolderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.debitAccountHolder.$post>) {
      return parseResponse(client.debitAccountHolder.$post(args, options))
    },
  })
}

export function createPostDebitAccountHolder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.debitAccountHolder.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.debitAccountHolder.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDebitAccountHolderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPayoutAccountHolderMutationKey() {
  return ['payoutAccountHolder', '/payoutAccountHolder', 'POST'] as const
}

export function getPostPayoutAccountHolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payoutAccountHolder.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.payoutAccountHolder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPayoutAccountHolderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payoutAccountHolder.$post>) {
      return parseResponse(client.payoutAccountHolder.$post(args, options))
    },
  })
}

export function createPostPayoutAccountHolder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payoutAccountHolder.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.payoutAccountHolder.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPayoutAccountHolderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRefundFundsTransferMutationKey() {
  return ['refundFundsTransfer', '/refundFundsTransfer', 'POST'] as const
}

export function getPostRefundFundsTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refundFundsTransfer.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.refundFundsTransfer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRefundFundsTransferMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.refundFundsTransfer.$post>) {
      return parseResponse(client.refundFundsTransfer.$post(args, options))
    },
  })
}

export function createPostRefundFundsTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.refundFundsTransfer.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.refundFundsTransfer.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRefundFundsTransferMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRefundNotPaidOutTransfersMutationKey() {
  return ['refundNotPaidOutTransfers', '/refundNotPaidOutTransfers', 'POST'] as const
}

export function getPostRefundNotPaidOutTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.refundNotPaidOutTransfers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.refundNotPaidOutTransfers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRefundNotPaidOutTransfersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.refundNotPaidOutTransfers.$post>) {
      return parseResponse(client.refundNotPaidOutTransfers.$post(args, options))
    },
  })
}

export function createPostRefundNotPaidOutTransfers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.refundNotPaidOutTransfers.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.refundNotPaidOutTransfers.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRefundNotPaidOutTransfersMutationOptions<
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

export function getPostSetupBeneficiaryMutationKey() {
  return ['setupBeneficiary', '/setupBeneficiary', 'POST'] as const
}

export function getPostSetupBeneficiaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setupBeneficiary.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setupBeneficiary.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupBeneficiaryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setupBeneficiary.$post>) {
      return parseResponse(client.setupBeneficiary.$post(args, options))
    },
  })
}

export function createPostSetupBeneficiary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setupBeneficiary.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.setupBeneficiary.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupBeneficiaryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTransferFundsMutationKey() {
  return ['transferFunds', '/transferFunds', 'POST'] as const
}

export function getPostTransferFundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transferFunds.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transferFunds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferFundsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transferFunds.$post>) {
      return parseResponse(client.transferFunds.$post(args, options))
    },
  })
}

export function createPostTransferFunds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transferFunds.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.transferFunds.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTransferFundsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
