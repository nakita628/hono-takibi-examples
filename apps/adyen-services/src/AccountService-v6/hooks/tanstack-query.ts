import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCheckAccountHolderKey() {
  return ['checkAccountHolder'] as const
}

export function getCloseAccountKey() {
  return ['closeAccount'] as const
}

export function getCloseAccountHolderKey() {
  return ['closeAccountHolder'] as const
}

export function getCloseStoresKey() {
  return ['closeStores'] as const
}

export function getCreateAccountKey() {
  return ['createAccount'] as const
}

export function getCreateAccountHolderKey() {
  return ['createAccountHolder'] as const
}

export function getDeleteBankAccountsKey() {
  return ['deleteBankAccounts'] as const
}

export function getDeleteLegalArrangementsKey() {
  return ['deleteLegalArrangements'] as const
}

export function getDeletePayoutMethodsKey() {
  return ['deletePayoutMethods'] as const
}

export function getDeleteShareholdersKey() {
  return ['deleteShareholders'] as const
}

export function getDeleteSignatoriesKey() {
  return ['deleteSignatories'] as const
}

export function getGetAccountHolderKey() {
  return ['getAccountHolder'] as const
}

export function getGetTaxFormKey() {
  return ['getTaxForm'] as const
}

export function getGetUploadedDocumentsKey() {
  return ['getUploadedDocuments'] as const
}

export function getSuspendAccountHolderKey() {
  return ['suspendAccountHolder'] as const
}

export function getUnSuspendAccountHolderKey() {
  return ['unSuspendAccountHolder'] as const
}

export function getUpdateAccountKey() {
  return ['updateAccount'] as const
}

export function getUpdateAccountHolderKey() {
  return ['updateAccountHolder'] as const
}

export function getUpdateAccountHolderStateKey() {
  return ['updateAccountHolderState'] as const
}

export function getUploadDocumentKey() {
  return ['uploadDocument'] as const
}

export function getPostCheckAccountHolderMutationKey() {
  return ['checkAccountHolder', '/checkAccountHolder', 'POST'] as const
}

export function getPostCheckAccountHolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkAccountHolder.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.checkAccountHolder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCheckAccountHolderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.checkAccountHolder.$post>) {
      return parseResponse(client.checkAccountHolder.$post(args, options))
    },
  })
}

export function usePostCheckAccountHolder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.checkAccountHolder.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.checkAccountHolder.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCheckAccountHolderMutationOptions<TError, TOnMutateResult>(
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

export function getPostCloseAccountMutationKey() {
  return ['closeAccount', '/closeAccount', 'POST'] as const
}

export function getPostCloseAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.closeAccount.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.closeAccount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCloseAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.closeAccount.$post>) {
      return parseResponse(client.closeAccount.$post(args, options))
    },
  })
}

export function usePostCloseAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.closeAccount.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.closeAccount.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCloseAccountMutationOptions<TError, TOnMutateResult>(
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

export function getPostCloseAccountHolderMutationKey() {
  return ['closeAccountHolder', '/closeAccountHolder', 'POST'] as const
}

export function getPostCloseAccountHolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.closeAccountHolder.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.closeAccountHolder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCloseAccountHolderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.closeAccountHolder.$post>) {
      return parseResponse(client.closeAccountHolder.$post(args, options))
    },
  })
}

export function usePostCloseAccountHolder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.closeAccountHolder.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.closeAccountHolder.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCloseAccountHolderMutationOptions<TError, TOnMutateResult>(
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

export function getPostCloseStoresMutationKey() {
  return ['closeStores', '/closeStores', 'POST'] as const
}

export function getPostCloseStoresMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.closeStores.$post>>>>>,
    TError,
    InferRequestType<typeof client.closeStores.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCloseStoresMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.closeStores.$post>) {
      return parseResponse(client.closeStores.$post(args, options))
    },
  })
}

export function usePostCloseStores<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.closeStores.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.closeStores.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCloseStoresMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCreateAccountMutationKey() {
  return ['createAccount', '/createAccount', 'POST'] as const
}

export function getPostCreateAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAccount.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createAccount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createAccount.$post>) {
      return parseResponse(client.createAccount.$post(args, options))
    },
  })
}

export function usePostCreateAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAccount.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.createAccount.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateAccountMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreateAccountHolderMutationKey() {
  return ['createAccountHolder', '/createAccountHolder', 'POST'] as const
}

export function getPostCreateAccountHolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAccountHolder.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createAccountHolder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateAccountHolderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createAccountHolder.$post>) {
      return parseResponse(client.createAccountHolder.$post(args, options))
    },
  })
}

export function usePostCreateAccountHolder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createAccountHolder.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.createAccountHolder.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateAccountHolderMutationOptions<TError, TOnMutateResult>(
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

export function getPostDeleteBankAccountsMutationKey() {
  return ['deleteBankAccounts', '/deleteBankAccounts', 'POST'] as const
}

export function getPostDeleteBankAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteBankAccounts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.deleteBankAccounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteBankAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteBankAccounts.$post>) {
      return parseResponse(client.deleteBankAccounts.$post(args, options))
    },
  })
}

export function usePostDeleteBankAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deleteBankAccounts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.deleteBankAccounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteBankAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getPostDeleteLegalArrangementsMutationKey() {
  return ['deleteLegalArrangements', '/deleteLegalArrangements', 'POST'] as const
}

export function getPostDeleteLegalArrangementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteLegalArrangements.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.deleteLegalArrangements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteLegalArrangementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteLegalArrangements.$post>) {
      return parseResponse(client.deleteLegalArrangements.$post(args, options))
    },
  })
}

export function usePostDeleteLegalArrangements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deleteLegalArrangements.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.deleteLegalArrangements.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteLegalArrangementsMutationOptions<TError, TOnMutateResult>(
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

export function getPostDeletePayoutMethodsMutationKey() {
  return ['deletePayoutMethods', '/deletePayoutMethods', 'POST'] as const
}

export function getPostDeletePayoutMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePayoutMethods.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.deletePayoutMethods.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeletePayoutMethodsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deletePayoutMethods.$post>) {
      return parseResponse(client.deletePayoutMethods.$post(args, options))
    },
  })
}

export function usePostDeletePayoutMethods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deletePayoutMethods.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.deletePayoutMethods.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeletePayoutMethodsMutationOptions<TError, TOnMutateResult>(
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

export function getPostDeleteShareholdersMutationKey() {
  return ['deleteShareholders', '/deleteShareholders', 'POST'] as const
}

export function getPostDeleteShareholdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteShareholders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.deleteShareholders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteShareholdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteShareholders.$post>) {
      return parseResponse(client.deleteShareholders.$post(args, options))
    },
  })
}

export function usePostDeleteShareholders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deleteShareholders.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.deleteShareholders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteShareholdersMutationOptions<TError, TOnMutateResult>(
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

export function getPostDeleteSignatoriesMutationKey() {
  return ['deleteSignatories', '/deleteSignatories', 'POST'] as const
}

export function getPostDeleteSignatoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSignatories.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.deleteSignatories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteSignatoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteSignatories.$post>) {
      return parseResponse(client.deleteSignatories.$post(args, options))
    },
  })
}

export function usePostDeleteSignatories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deleteSignatories.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.deleteSignatories.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteSignatoriesMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetAccountHolderMutationKey() {
  return ['getAccountHolder', '/getAccountHolder', 'POST'] as const
}

export function getPostGetAccountHolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAccountHolder.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getAccountHolder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetAccountHolderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getAccountHolder.$post>) {
      return parseResponse(client.getAccountHolder.$post(args, options))
    },
  })
}

export function usePostGetAccountHolder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getAccountHolder.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getAccountHolder.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetAccountHolderMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetTaxFormMutationKey() {
  return ['getTaxForm', '/getTaxForm', 'POST'] as const
}

export function getPostGetTaxFormMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getTaxForm.$post>>>>>,
    TError,
    InferRequestType<typeof client.getTaxForm.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetTaxFormMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getTaxForm.$post>) {
      return parseResponse(client.getTaxForm.$post(args, options))
    },
  })
}

export function usePostGetTaxForm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getTaxForm.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getTaxForm.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetTaxFormMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetUploadedDocumentsMutationKey() {
  return ['getUploadedDocuments', '/getUploadedDocuments', 'POST'] as const
}

export function getPostGetUploadedDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getUploadedDocuments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getUploadedDocuments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetUploadedDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getUploadedDocuments.$post>) {
      return parseResponse(client.getUploadedDocuments.$post(args, options))
    },
  })
}

export function usePostGetUploadedDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getUploadedDocuments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getUploadedDocuments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetUploadedDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostSuspendAccountHolderMutationKey() {
  return ['suspendAccountHolder', '/suspendAccountHolder', 'POST'] as const
}

export function getPostSuspendAccountHolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.suspendAccountHolder.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.suspendAccountHolder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSuspendAccountHolderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.suspendAccountHolder.$post>) {
      return parseResponse(client.suspendAccountHolder.$post(args, options))
    },
  })
}

export function usePostSuspendAccountHolder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.suspendAccountHolder.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.suspendAccountHolder.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSuspendAccountHolderMutationOptions<TError, TOnMutateResult>(
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

export function getPostUnSuspendAccountHolderMutationKey() {
  return ['unSuspendAccountHolder', '/unSuspendAccountHolder', 'POST'] as const
}

export function getPostUnSuspendAccountHolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.unSuspendAccountHolder.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.unSuspendAccountHolder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnSuspendAccountHolderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.unSuspendAccountHolder.$post>) {
      return parseResponse(client.unSuspendAccountHolder.$post(args, options))
    },
  })
}

export function usePostUnSuspendAccountHolder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.unSuspendAccountHolder.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.unSuspendAccountHolder.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUnSuspendAccountHolderMutationOptions<TError, TOnMutateResult>(
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

export function getPostUpdateAccountMutationKey() {
  return ['updateAccount', '/updateAccount', 'POST'] as const
}

export function getPostUpdateAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updateAccount.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.updateAccount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateAccount.$post>) {
      return parseResponse(client.updateAccount.$post(args, options))
    },
  })
}

export function usePostUpdateAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updateAccount.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.updateAccount.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateAccountMutationOptions<TError, TOnMutateResult>(
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

export function getPostUpdateAccountHolderMutationKey() {
  return ['updateAccountHolder', '/updateAccountHolder', 'POST'] as const
}

export function getPostUpdateAccountHolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updateAccountHolder.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.updateAccountHolder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateAccountHolderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateAccountHolder.$post>) {
      return parseResponse(client.updateAccountHolder.$post(args, options))
    },
  })
}

export function usePostUpdateAccountHolder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.updateAccountHolder.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.updateAccountHolder.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateAccountHolderMutationOptions<TError, TOnMutateResult>(
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

export function getPostUpdateAccountHolderStateMutationKey() {
  return ['updateAccountHolderState', '/updateAccountHolderState', 'POST'] as const
}

export function getPostUpdateAccountHolderStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.updateAccountHolderState.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.updateAccountHolderState.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateAccountHolderStateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateAccountHolderState.$post>) {
      return parseResponse(client.updateAccountHolderState.$post(args, options))
    },
  })
}

export function usePostUpdateAccountHolderState<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.updateAccountHolderState.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.updateAccountHolderState.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateAccountHolderStateMutationOptions<TError, TOnMutateResult>(
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

export function getPostUploadDocumentMutationKey() {
  return ['uploadDocument', '/uploadDocument', 'POST'] as const
}

export function getPostUploadDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploadDocument.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.uploadDocument.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadDocumentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.uploadDocument.$post>) {
      return parseResponse(client.uploadDocument.$post(args, options))
    },
  })
}

export function usePostUploadDocument<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploadDocument.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.uploadDocument.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadDocumentMutationOptions<TError, TOnMutateResult>(
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
