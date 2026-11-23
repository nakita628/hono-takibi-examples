import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostCheckAccountHolderKey() {
  return ['checkAccountHolder', '/checkAccountHolder', 'POST'] as const
}

export function usePostCheckAccountHolder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkAccountHolder.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.checkAccountHolder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCheckAccountHolderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.checkAccountHolder.$post> }) =>
        parseResponse(client.checkAccountHolder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCloseAccountKey() {
  return ['closeAccount', '/closeAccount', 'POST'] as const
}

export function usePostCloseAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.closeAccount.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.closeAccount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCloseAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.closeAccount.$post> }) =>
        parseResponse(client.closeAccount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCloseAccountHolderKey() {
  return ['closeAccountHolder', '/closeAccountHolder', 'POST'] as const
}

export function usePostCloseAccountHolder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.closeAccountHolder.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.closeAccountHolder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCloseAccountHolderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.closeAccountHolder.$post> }) =>
        parseResponse(client.closeAccountHolder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCloseStoresKey() {
  return ['closeStores', '/closeStores', 'POST'] as const
}

export function usePostCloseStores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.closeStores.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.closeStores.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCloseStoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.closeStores.$post> }) =>
        parseResponse(client.closeStores.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateAccountKey() {
  return ['createAccount', '/createAccount', 'POST'] as const
}

export function usePostCreateAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAccount.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createAccount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createAccount.$post> }) =>
        parseResponse(client.createAccount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateAccountHolderKey() {
  return ['createAccountHolder', '/createAccountHolder', 'POST'] as const
}

export function usePostCreateAccountHolder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createAccountHolder.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createAccountHolder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateAccountHolderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createAccountHolder.$post> }) =>
        parseResponse(client.createAccountHolder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteBankAccountsKey() {
  return ['deleteBankAccounts', '/deleteBankAccounts', 'POST'] as const
}

export function usePostDeleteBankAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteBankAccounts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteBankAccounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteBankAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteBankAccounts.$post> }) =>
        parseResponse(client.deleteBankAccounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteLegalArrangementsKey() {
  return ['deleteLegalArrangements', '/deleteLegalArrangements', 'POST'] as const
}

export function usePostDeleteLegalArrangements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteLegalArrangements.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteLegalArrangements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteLegalArrangementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.deleteLegalArrangements.$post> },
      ) => parseResponse(client.deleteLegalArrangements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeletePayoutMethodsKey() {
  return ['deletePayoutMethods', '/deletePayoutMethods', 'POST'] as const
}

export function usePostDeletePayoutMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deletePayoutMethods.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.deletePayoutMethods.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeletePayoutMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deletePayoutMethods.$post> }) =>
        parseResponse(client.deletePayoutMethods.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteShareholdersKey() {
  return ['deleteShareholders', '/deleteShareholders', 'POST'] as const
}

export function usePostDeleteShareholders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteShareholders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteShareholders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteShareholdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteShareholders.$post> }) =>
        parseResponse(client.deleteShareholders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteSignatoriesKey() {
  return ['deleteSignatories', '/deleteSignatories', 'POST'] as const
}

export function usePostDeleteSignatories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteSignatories.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteSignatories.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteSignatoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteSignatories.$post> }) =>
        parseResponse(client.deleteSignatories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetAccountHolderKey() {
  return ['getAccountHolder', '/getAccountHolder', 'POST'] as const
}

export function usePostGetAccountHolder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getAccountHolder.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getAccountHolder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetAccountHolderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getAccountHolder.$post> }) =>
        parseResponse(client.getAccountHolder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetTaxFormKey() {
  return ['getTaxForm', '/getTaxForm', 'POST'] as const
}

export function usePostGetTaxForm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getTaxForm.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.getTaxForm.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetTaxFormKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getTaxForm.$post> }) =>
        parseResponse(client.getTaxForm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetUploadedDocumentsKey() {
  return ['getUploadedDocuments', '/getUploadedDocuments', 'POST'] as const
}

export function usePostGetUploadedDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getUploadedDocuments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getUploadedDocuments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetUploadedDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getUploadedDocuments.$post> },
      ) => parseResponse(client.getUploadedDocuments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSuspendAccountHolderKey() {
  return ['suspendAccountHolder', '/suspendAccountHolder', 'POST'] as const
}

export function usePostSuspendAccountHolder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.suspendAccountHolder.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.suspendAccountHolder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSuspendAccountHolderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.suspendAccountHolder.$post> },
      ) => parseResponse(client.suspendAccountHolder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnSuspendAccountHolderKey() {
  return ['unSuspendAccountHolder', '/unSuspendAccountHolder', 'POST'] as const
}

export function usePostUnSuspendAccountHolder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.unSuspendAccountHolder.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.unSuspendAccountHolder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnSuspendAccountHolderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.unSuspendAccountHolder.$post> },
      ) => parseResponse(client.unSuspendAccountHolder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateAccountKey() {
  return ['updateAccount', '/updateAccount', 'POST'] as const
}

export function usePostUpdateAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updateAccount.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateAccount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.updateAccount.$post> }) =>
        parseResponse(client.updateAccount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateAccountHolderKey() {
  return ['updateAccountHolder', '/updateAccountHolder', 'POST'] as const
}

export function usePostUpdateAccountHolder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updateAccountHolder.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateAccountHolder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateAccountHolderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.updateAccountHolder.$post> }) =>
        parseResponse(client.updateAccountHolder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateAccountHolderStateKey() {
  return ['updateAccountHolderState', '/updateAccountHolderState', 'POST'] as const
}

export function usePostUpdateAccountHolderState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.updateAccountHolderState.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateAccountHolderState.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateAccountHolderStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateAccountHolderState.$post> },
      ) => parseResponse(client.updateAccountHolderState.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUploadDocumentKey() {
  return ['uploadDocument', '/uploadDocument', 'POST'] as const
}

export function usePostUploadDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploadDocument.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.uploadDocument.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.uploadDocument.$post> }) =>
        parseResponse(client.uploadDocument.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
