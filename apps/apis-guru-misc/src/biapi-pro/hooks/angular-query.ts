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

export function getAccountTypesKey() {
  return ['account_types'] as const
}

export function getAdminKey() {
  return ['admin'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getBanksKey() {
  return ['banks'] as const
}

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getCategorizeKey() {
  return ['categorize'] as const
}

export function getCertificateKey() {
  return ['certificate'] as const
}

export function getClientsKey() {
  return ['clients'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getConnectionsKey() {
  return ['connections'] as const
}

export function getConnectorsKey() {
  return ['connectors'] as const
}

export function getIncidentsKey() {
  return ['incidents'] as const
}

export function getInvoicingKey() {
  return ['invoicing'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getMonitoringKey() {
  return ['monitoring'] as const
}

export function getProvidersKey() {
  return ['providers'] as const
}

export function getPsd2RegistrationsKey() {
  return ['psd2-registrations'] as const
}

export function getPublickeyKey() {
  return ['publickey'] as const
}

export function getTestKey() {
  return ['test'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebauthKey() {
  return ['webauth'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getAccountTypesQueryKey(args: InferRequestType<typeof client.account_types.$get>) {
  return ['account_types', '/account_types', args] as const
}

export function getAccountTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_types.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account_types.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTypesQueryKey>
  >({
    queryKey: getAccountTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account_types.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccountTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account_types.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account_types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAccountTypesIdAccountTypeQueryKey(
  args: InferRequestType<(typeof client.account_types)[':id_account_type']['$get']>,
) {
  return ['account_types', '/account_types/:id_account_type', args] as const
}

export function getAccountTypesIdAccountTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_types)[':id_account_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account_types)[':id_account_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account_types)[':id_account_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTypesIdAccountTypeQueryKey>
  >({
    queryKey: getAccountTypesIdAccountTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account_types[':id_account_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountTypesIdAccountType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account_types)[':id_account_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account_types)[':id_account_type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account_types)[':id_account_type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountTypesIdAccountTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountTypesIdAccountTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminJwtMutationKey() {
  return ['admin', '/admin/jwt', 'POST'] as const
}

export function getPostAdminJwtMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.jwt.$post>>>>>,
    TError,
    InferRequestType<typeof client.admin.jwt.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminJwtMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.jwt.$post>) {
      return parseResponse(client.admin.jwt.$post(args, options))
    },
  })
}

export function injectPostAdminJwt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.jwt.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.admin.jwt.$post>,
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
    const mutationDefaults = getPostAdminJwtMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAuthInitMutationKey() {
  return ['auth', '/auth/init', 'POST'] as const
}

export function getPostAuthInitMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.init.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.init.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthInitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.init.$post>) {
      return parseResponse(client.auth.init.$post(args, options))
    },
  })
}

export function injectPostAuthInit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.init.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.init.$post>,
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
    const mutationDefaults = getPostAuthInitMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAuthJwtMutationKey() {
  return ['auth', '/auth/jwt', 'POST'] as const
}

export function getPostAuthJwtMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.jwt.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.jwt.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthJwtMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.jwt.$post>) {
      return parseResponse(client.auth.jwt.$post(args, options))
    },
  })
}

export function injectPostAuthJwt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.jwt.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.jwt.$post>,
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
    const mutationDefaults = getPostAuthJwtMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAuthRenewMutationKey() {
  return ['auth', '/auth/renew', 'POST'] as const
}

export function getPostAuthRenewMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.renew.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.renew.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthRenewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.renew.$post>) {
      return parseResponse(client.auth.renew.$post(args, options))
    },
  })
}

export function injectPostAuthRenew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.renew.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.renew.$post>,
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
    const mutationDefaults = getPostAuthRenewMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAuthTokenMutationKey() {
  return ['auth', '/auth/token', 'POST'] as const
}

export function getPostAuthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.token.$post>) {
      return parseResponse(client.auth.token.$post(args, options))
    },
  })
}

export function injectPostAuthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.token.$post>,
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
    const mutationDefaults = getPostAuthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAuthTokenMutationKey() {
  return ['auth', '/auth/token', 'DELETE'] as const
}

export function getDeleteAuthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthTokenMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.token.$delete(undefined, options))
    },
  })
}

export function injectDeleteAuthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$delete>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getDeleteAuthTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAuthTokenAccessMutationKey() {
  return ['auth', '/auth/token/access', 'POST'] as const
}

export function getPostAuthTokenAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.access.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.token.access.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthTokenAccessMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.token.access.$post>) {
      return parseResponse(client.auth.token.access.$post(args, options))
    },
  })
}

export function injectPostAuthTokenAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.access.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.token.access.$post>,
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
    const mutationDefaults = getPostAuthTokenAccessMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAuthTokenCodeQueryKey() {
  return ['auth', '/auth/token/code'] as const
}

export function getAuthTokenCodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.code.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.code.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthTokenCodeQueryKey>
  >({
    queryKey: getAuthTokenCodeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.token.code.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAuthTokenCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.code.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.code.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthTokenCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthTokenCodeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getBanksQueryKey(args: InferRequestType<typeof client.banks.$get>) {
  return ['banks', '/banks', args] as const
}

export function getBanksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.banks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.banks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.banks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBanksQueryKey>
  >({
    queryKey: getBanksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.banks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBanks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.banks.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.banks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.banks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBanksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBanksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostBanksCategoriesMutationKey() {
  return ['banks', '/banks/categories', 'POST'] as const
}

export function getPostBanksCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.banks.categories.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.banks.categories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBanksCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.banks.categories.$post>) {
      return parseResponse(client.banks.categories.$post(args, options))
    },
  })
}

export function injectPostBanksCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.banks.categories.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.banks.categories.$post>,
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
    const mutationDefaults = getPostBanksCategoriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostBanksCategoriesIdCategoryMutationKey() {
  return ['banks', '/banks/categories/:id_category', 'POST'] as const
}

export function getPostBanksCategoriesIdCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.banks.categories)[':id_category']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.banks.categories)[':id_category']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBanksCategoriesIdCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.banks.categories)[':id_category']['$post']>,
    ) {
      return parseResponse(client.banks.categories[':id_category'].$post(args, options))
    },
  })
}

export function injectPostBanksCategoriesIdCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.banks.categories)[':id_category']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.banks.categories)[':id_category']['$post']>,
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
    const mutationDefaults = getPostBanksCategoriesIdCategoryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteBanksCategoriesIdCategoryMutationKey() {
  return ['banks', '/banks/categories/:id_category', 'DELETE'] as const
}

export function getDeleteBanksCategoriesIdCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.banks.categories)[':id_category']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.banks.categories)[':id_category']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBanksCategoriesIdCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.banks.categories)[':id_category']['$delete']>,
    ) {
      return parseResponse(client.banks.categories[':id_category'].$delete(args, options))
    },
  })
}

export function injectDeleteBanksCategoriesIdCategory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.banks.categories)[':id_category']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.banks.categories)[':id_category']['$delete']>,
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
    const mutationDefaults = getDeleteBanksCategoriesIdCategoryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBanksIdBankQueryKey(
  args: InferRequestType<(typeof client.banks)[':id_bank']['$get']>,
) {
  return ['banks', '/banks/:id_bank', args] as const
}

export function getBanksIdBankQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.banks)[':id_bank']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.banks)[':id_bank']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.banks)[':id_bank']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBanksIdBankQueryKey>
  >({
    queryKey: getBanksIdBankQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.banks[':id_bank'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBanksIdBank<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.banks)[':id_bank']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.banks)[':id_bank']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.banks)[':id_bank']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBanksIdBankQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBanksIdBankQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBanksIdConnectorConnectionsQueryKey(
  args: InferRequestType<(typeof client.banks)[':id_connector']['connections']['$get']>,
) {
  return ['banks', '/banks/:id_connector/connections', args] as const
}

export function getBanksIdConnectorConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.banks)[':id_connector']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.banks)[':id_connector']['connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBanksIdConnectorConnectionsQueryKey>
  >({
    queryKey: getBanksIdConnectorConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.banks[':id_connector'].connections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBanksIdConnectorConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.banks)[':id_connector']['connections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.banks)[':id_connector']['connections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBanksIdConnectorConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBanksIdConnectorConnectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBanksIdConnectorLogosQueryKey(
  args: InferRequestType<(typeof client.banks)[':id_connector']['logos']['$get']>,
) {
  return ['banks', '/banks/:id_connector/logos', args] as const
}

export function getBanksIdConnectorLogosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.banks)[':id_connector']['logos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBanksIdConnectorLogosQueryKey>
  >({
    queryKey: getBanksIdConnectorLogosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.banks[':id_connector'].logos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBanksIdConnectorLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.banks)[':id_connector']['logos']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBanksIdConnectorLogosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBanksIdConnectorLogosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBanksIdConnectorLogosMainQueryKey(
  args: InferRequestType<(typeof client.banks)[':id_connector']['logos']['main']['$get']>,
) {
  return ['banks', '/banks/:id_connector/logos/main', args] as const
}

export function getBanksIdConnectorLogosMainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['main']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.banks)[':id_connector']['logos']['main']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['main']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBanksIdConnectorLogosMainQueryKey>
  >({
    queryKey: getBanksIdConnectorLogosMainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.banks[':id_connector'].logos.main.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBanksIdConnectorLogosMain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['main']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.banks)[':id_connector']['logos']['main']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['main']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBanksIdConnectorLogosMainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBanksIdConnectorLogosMainQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBanksIdConnectorLogosThumbnailQueryKey(
  args: InferRequestType<(typeof client.banks)[':id_connector']['logos']['thumbnail']['$get']>,
) {
  return ['banks', '/banks/:id_connector/logos/thumbnail', args] as const
}

export function getBanksIdConnectorLogosThumbnailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.banks)[':id_connector']['logos']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['thumbnail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBanksIdConnectorLogosThumbnailQueryKey>
  >({
    queryKey: getBanksIdConnectorLogosThumbnailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.banks[':id_connector'].logos.thumbnail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBanksIdConnectorLogosThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['logos']['thumbnail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.banks)[':id_connector']['logos']['thumbnail']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.banks)[':id_connector']['logos']['thumbnail']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBanksIdConnectorLogosThumbnailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBanksIdConnectorLogosThumbnailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBanksIdConnectorSourcesQueryKey(
  args: InferRequestType<(typeof client.banks)[':id_connector']['sources']['$get']>,
) {
  return ['banks', '/banks/:id_connector/sources', args] as const
}

export function getBanksIdConnectorSourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.banks)[':id_connector']['sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.banks)[':id_connector']['sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBanksIdConnectorSourcesQueryKey>
  >({
    queryKey: getBanksIdConnectorSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.banks[':id_connector'].sources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBanksIdConnectorSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.banks)[':id_connector']['sources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.banks)[':id_connector']['sources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBanksIdConnectorSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBanksIdConnectorSourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getBanksIdConnectorSourcesIdConnectorSourceFieldsQueryKey(
  args: InferRequestType<
    (typeof client.banks)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
  >,
) {
  return ['banks', '/banks/:id_connector/sources/:id_connector_source/fields', args] as const
}

export function getBanksIdConnectorSourcesIdConnectorSourceFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.banks)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.banks)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.banks)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBanksIdConnectorSourcesIdConnectorSourceFieldsQueryKey>
  >({
    queryKey: getBanksIdConnectorSourcesIdConnectorSourceFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.banks[':id_connector'].sources[':id_connector_source'].fields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBanksIdConnectorSourcesIdConnectorSourceFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.banks)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.banks)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.banks)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBanksIdConnectorSourcesIdConnectorSourceFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBanksIdConnectorSourcesIdConnectorSourceFieldsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getBanksIdConnectorSourcesIdSourceQueryKey(
  args: InferRequestType<(typeof client.banks)[':id_connector']['sources'][':id_source']['$get']>,
) {
  return ['banks', '/banks/:id_connector/sources/:id_source', args] as const
}

export function getBanksIdConnectorSourcesIdSourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['sources'][':id_source']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.banks)[':id_connector']['sources'][':id_source']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.banks)[':id_connector']['sources'][':id_source']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBanksIdConnectorSourcesIdSourceQueryKey>
  >({
    queryKey: getBanksIdConnectorSourcesIdSourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.banks[':id_connector'].sources[':id_source'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBanksIdConnectorSourcesIdSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.banks)[':id_connector']['sources'][':id_source']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.banks)[':id_connector']['sources'][':id_source']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.banks)[':id_connector']['sources'][':id_source']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBanksIdConnectorSourcesIdSourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBanksIdConnectorSourcesIdSourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCategoriesQueryKey(args: InferRequestType<typeof client.categories.$get>) {
  return ['categories', '/categories', args] as const
}

export function getCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >({
    queryKey: getCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.categories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostCategoriesKeywordsMutationKey() {
  return ['categories', '/categories/keywords', 'POST'] as const
}

export function getPostCategoriesKeywordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.keywords.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.categories.keywords.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCategoriesKeywordsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.categories.keywords.$post>) {
      return parseResponse(client.categories.keywords.$post(args, options))
    },
  })
}

export function injectPostCategoriesKeywords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.categories.keywords.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.categories.keywords.$post>,
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
    const mutationDefaults = getPostCategoriesKeywordsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteCategoriesKeywordsIdKeywordMutationKey() {
  return ['categories', '/categories/keywords/:id_keyword', 'DELETE'] as const
}

export function getDeleteCategoriesKeywordsIdKeywordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.categories.keywords)[':id_keyword']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.categories.keywords)[':id_keyword']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCategoriesKeywordsIdKeywordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.categories.keywords)[':id_keyword']['$delete']>,
    ) {
      return parseResponse(client.categories.keywords[':id_keyword'].$delete(args, options))
    },
  })
}

export function injectDeleteCategoriesKeywordsIdKeyword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories.keywords)[':id_keyword']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.categories.keywords)[':id_keyword']['$delete']>,
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
    const mutationDefaults = getDeleteCategoriesKeywordsIdKeywordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCategorizeMutationKey() {
  return ['categorize', '/categorize', 'POST'] as const
}

export function getPostCategorizeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categorize.$post>>>>>,
    TError,
    InferRequestType<typeof client.categorize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCategorizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.categorize.$post>) {
      return parseResponse(client.categorize.$post(args, options))
    },
  })
}

export function injectPostCategorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categorize.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.categorize.$post>,
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
    const mutationDefaults = getPostCategorizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCertificateTypeQueryKey(
  args: InferRequestType<(typeof client.certificate)[':type']['$get']>,
) {
  return ['certificate', '/certificate/:type', args] as const
}

export function getCertificateTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.certificate)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.certificate)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.certificate)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificateTypeQueryKey>
  >({
    queryKey: getCertificateTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.certificate[':type'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCertificateType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.certificate)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.certificate)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.certificate)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCertificateTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCertificateTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getClientsQueryKey(args: InferRequestType<typeof client.clients.$get>) {
  return ['clients', '/clients', args] as const
}

export function getClientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.clients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClientsQueryKey>
  >({
    queryKey: getClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.clients.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClientsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostClientsMutationKey() {
  return ['clients', '/clients', 'POST'] as const
}

export function getPostClientsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$post>>>>>,
    TError,
    InferRequestType<typeof client.clients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.clients.$post>) {
      return parseResponse(client.clients.$post(args, options))
    },
  })
}

export function injectPostClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$post>>>>>,
        TError,
        InferRequestType<typeof client.clients.$post>,
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
    const mutationDefaults = getPostClientsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getClientsIdClientQueryKey(
  args: InferRequestType<(typeof client.clients)[':id_client']['$get']>,
) {
  return ['clients', '/clients/:id_client', args] as const
}

export function getClientsIdClientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id_client']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clients)[':id_client']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id_client']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientsIdClientQueryKey>
  >({
    queryKey: getClientsIdClientQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clients[':id_client'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectClientsIdClient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id_client']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clients)[':id_client']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id_client']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientsIdClientQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClientsIdClientQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutClientsIdClientMutationKey() {
  return ['clients', '/clients/:id_client', 'PUT'] as const
}

export function getPutClientsIdClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id_client']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.clients)[':id_client']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutClientsIdClientMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clients)[':id_client']['$put']>) {
      return parseResponse(client.clients[':id_client'].$put(args, options))
    },
  })
}

export function injectPutClientsIdClient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id_client']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.clients)[':id_client']['$put']>,
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
    const mutationDefaults = getPutClientsIdClientMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteClientsIdClientMutationKey() {
  return ['clients', '/clients/:id_client', 'DELETE'] as const
}

export function getDeleteClientsIdClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id_client']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.clients)[':id_client']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClientsIdClientMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clients)[':id_client']['$delete']>) {
      return parseResponse(client.clients[':id_client'].$delete(args, options))
    },
  })
}

export function injectDeleteClientsIdClient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clients)[':id_client']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.clients)[':id_client']['$delete']>,
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
    const mutationDefaults = getDeleteClientsIdClientMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostClientsIdClientLogoMutationKey() {
  return ['clients', '/clients/:id_client/logo', 'POST'] as const
}

export function getPostClientsIdClientLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clients)[':id_client']['logo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clients)[':id_client']['logo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClientsIdClientLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.clients)[':id_client']['logo']['$post']>,
    ) {
      return parseResponse(client.clients[':id_client'].logo.$post(args, options))
    },
  })
}

export function injectPostClientsIdClientLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clients)[':id_client']['logo']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.clients)[':id_client']['logo']['$post']>,
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
    const mutationDefaults = getPostClientsIdClientLogoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteClientsIdClientLogoMutationKey() {
  return ['clients', '/clients/:id_client/logo', 'DELETE'] as const
}

export function getDeleteClientsIdClientLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clients)[':id_client']['logo']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clients)[':id_client']['logo']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClientsIdClientLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.clients)[':id_client']['logo']['$delete']>,
    ) {
      return parseResponse(client.clients[':id_client'].logo.$delete(args, options))
    },
  })
}

export function injectDeleteClientsIdClientLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clients)[':id_client']['logo']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.clients)[':id_client']['logo']['$delete']>,
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
    const mutationDefaults = getDeleteClientsIdClientLogoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConfigQueryKey(args: InferRequestType<typeof client.config.$get>) {
  return ['config', '/config', args] as const
}

export function getConfigQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >({
    queryKey: getConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.config.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostConfigMutationKey() {
  return ['config', '/config', 'POST'] as const
}

export function getPostConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostConfigMutationKey(),
    async mutationFn() {
      return parseResponse(client.config.$post(undefined, options))
    },
  })
}

export function injectPostConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$post>>>>>,
        TError,
        void,
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
    const mutationDefaults = getPostConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConfigLogsQueryKey(args: InferRequestType<typeof client.config.logs.$get>) {
  return ['config', '/config/logs', args] as const
}

export function getConfigLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.config.logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigLogsQueryKey>
  >({
    queryKey: getConfigLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.config.logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConfigLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.config.logs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.logs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConfigLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConfigLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getConnectionsQueryKey(args: InferRequestType<typeof client.connections.$get>) {
  return ['connections', '/connections', args] as const
}

export function getConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.connections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectionsQueryKey>
  >({
    queryKey: getConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.connections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConnectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getConnectionsIdConnectionLogsQueryKey(
  args: InferRequestType<(typeof client.connections)[':id_connection']['logs']['$get']>,
) {
  return ['connections', '/connections/:id_connection/logs', args] as const
}

export function getConnectionsIdConnectionLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':id_connection']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':id_connection']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':id_connection']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsIdConnectionLogsQueryKey>
  >({
    queryKey: getConnectionsIdConnectionLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':id_connection'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectionsIdConnectionLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':id_connection']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.connections)[':id_connection']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connections)[':id_connection']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsIdConnectionLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectionsIdConnectionLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getConnectionsIdConnectionSourcesQueryKey(
  args: InferRequestType<(typeof client.connections)[':id_connection']['sources']['$get']>,
) {
  return ['connections', '/connections/:id_connection/sources', args] as const
}

export function getConnectionsIdConnectionSourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':id_connection']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':id_connection']['sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':id_connection']['sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsIdConnectionSourcesQueryKey>
  >({
    queryKey: getConnectionsIdConnectionSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':id_connection'].sources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectionsIdConnectionSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':id_connection']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.connections)[':id_connection']['sources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connections)[':id_connection']['sources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsIdConnectionSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectionsIdConnectionSourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutConnectionsIdConnectionSourcesIdSourceMutationKey() {
  return ['connections', '/connections/:id_connection/sources/:id_source', 'PUT'] as const
}

export function getPutConnectionsIdConnectionSourcesIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.connections)[':id_connection']['sources'][':id_source']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.connections)[':id_connection']['sources'][':id_source']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutConnectionsIdConnectionSourcesIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connections)[':id_connection']['sources'][':id_source']['$put']
      >,
    ) {
      return parseResponse(
        client.connections[':id_connection'].sources[':id_source'].$put(args, options),
      )
    },
  })
}

export function injectPutConnectionsIdConnectionSourcesIdSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.connections)[':id_connection']['sources'][':id_source']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.connections)[':id_connection']['sources'][':id_source']['$put']
        >,
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
    const mutationDefaults = getPutConnectionsIdConnectionSourcesIdSourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostConnectionsIdConnectionSourcesIdSourceMutationKey() {
  return ['connections', '/connections/:id_connection/sources/:id_source', 'POST'] as const
}

export function getPostConnectionsIdConnectionSourcesIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.connections)[':id_connection']['sources'][':id_source']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.connections)[':id_connection']['sources'][':id_source']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionsIdConnectionSourcesIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connections)[':id_connection']['sources'][':id_source']['$post']
      >,
    ) {
      return parseResponse(
        client.connections[':id_connection'].sources[':id_source'].$post(args, options),
      )
    },
  })
}

export function injectPostConnectionsIdConnectionSourcesIdSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.connections)[':id_connection']['sources'][':id_source']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.connections)[':id_connection']['sources'][':id_source']['$post']
        >,
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
    const mutationDefaults = getPostConnectionsIdConnectionSourcesIdSourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteConnectionsIdConnectionSourcesIdSourceMutationKey() {
  return ['connections', '/connections/:id_connection/sources/:id_source', 'DELETE'] as const
}

export function getDeleteConnectionsIdConnectionSourcesIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.connections)[':id_connection']['sources'][':id_source']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.connections)[':id_connection']['sources'][':id_source']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectionsIdConnectionSourcesIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connections)[':id_connection']['sources'][':id_source']['$delete']
      >,
    ) {
      return parseResponse(
        client.connections[':id_connection'].sources[':id_source'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteConnectionsIdConnectionSourcesIdSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.connections)[':id_connection']['sources'][':id_source']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.connections)[':id_connection']['sources'][':id_source']['$delete']
        >,
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
    const mutationDefaults = getDeleteConnectionsIdConnectionSourcesIdSourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConnectorsQueryKey(args: InferRequestType<typeof client.connectors.$get>) {
  return ['connectors', '/connectors', args] as const
}

export function getConnectorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connectors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.connectors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connectors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectorsQueryKey>
  >({
    queryKey: getConnectorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connectors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConnectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.connectors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connectors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConnectorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConnectorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutConnectorsMutationKey() {
  return ['connectors', '/connectors', 'PUT'] as const
}

export function getPutConnectorsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connectors.$put>>>>>,
    TError,
    InferRequestType<typeof client.connectors.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connectors.$put>) {
      return parseResponse(client.connectors.$put(args, options))
    },
  })
}

export function injectPutConnectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connectors.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.connectors.$put>,
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
    const mutationDefaults = getPutConnectorsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostConnectorsMutationKey() {
  return ['connectors', '/connectors', 'POST'] as const
}

export function getPostConnectorsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connectors.$post>>>>>,
    TError,
    InferRequestType<typeof client.connectors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connectors.$post>) {
      return parseResponse(client.connectors.$post(args, options))
    },
  })
}

export function injectPostConnectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connectors.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.connectors.$post>,
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
    const mutationDefaults = getPostConnectorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConnectorsIdConnectorQueryKey(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['$get']>,
) {
  return ['connectors', '/connectors/:id_connector', args] as const
}

export function getConnectorsIdConnectorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connectors)[':id_connector']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connectors)[':id_connector']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorsIdConnectorQueryKey>
  >({
    queryKey: getConnectorsIdConnectorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connectors[':id_connector'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectorsIdConnector<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connectors)[':id_connector']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.connectors)[':id_connector']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connectors)[':id_connector']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectorsIdConnectorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectorsIdConnectorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutConnectorsIdConnectorMutationKey() {
  return ['connectors', '/connectors/:id_connector', 'PUT'] as const
}

export function getPutConnectorsIdConnectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connectors)[':id_connector']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connectors)[':id_connector']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectorsIdConnectorMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.connectors)[':id_connector']['$put']>) {
      return parseResponse(client.connectors[':id_connector'].$put(args, options))
    },
  })
}

export function injectPutConnectorsIdConnector<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connectors)[':id_connector']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.connectors)[':id_connector']['$put']>,
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
    const mutationDefaults = getPutConnectorsIdConnectorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConnectorsIdConnectorLogosQueryKey(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$get']>,
) {
  return ['connectors', '/connectors/:id_connector/logos', args] as const
}

export function getConnectorsIdConnectorLogosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorsIdConnectorLogosQueryKey>
  >({
    queryKey: getConnectorsIdConnectorLogosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connectors[':id_connector'].logos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectorsIdConnectorLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectorsIdConnectorLogosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectorsIdConnectorLogosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutConnectorsIdConnectorLogosMutationKey() {
  return ['connectors', '/connectors/:id_connector/logos', 'PUT'] as const
}

export function getPutConnectorsIdConnectorLogosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectorsIdConnectorLogosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$put']>,
    ) {
      return parseResponse(client.connectors[':id_connector'].logos.$put(args, options))
    },
  })
}

export function injectPutConnectorsIdConnectorLogos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$put']>,
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
    const mutationDefaults = getPutConnectorsIdConnectorLogosMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostConnectorsIdConnectorLogosMutationKey() {
  return ['connectors', '/connectors/:id_connector/logos', 'POST'] as const
}

export function getPostConnectorsIdConnectorLogosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectorsIdConnectorLogosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$post']>,
    ) {
      return parseResponse(client.connectors[':id_connector'].logos.$post(args, options))
    },
  })
}

export function injectPostConnectorsIdConnectorLogos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$post']>,
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
    const mutationDefaults = getPostConnectorsIdConnectorLogosMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConnectorsIdConnectorLogosMainQueryKey(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['logos']['main']['$get']>,
) {
  return ['connectors', '/connectors/:id_connector/logos/main', args] as const
}

export function getConnectorsIdConnectorLogosMainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['main']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['logos']['main']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['main']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorsIdConnectorLogosMainQueryKey>
  >({
    queryKey: getConnectorsIdConnectorLogosMainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connectors[':id_connector'].logos.main.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectorsIdConnectorLogosMain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connectors)[':id_connector']['logos']['main']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.connectors)[':id_connector']['logos']['main']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.connectors)[':id_connector']['logos']['main']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectorsIdConnectorLogosMainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectorsIdConnectorLogosMainQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getConnectorsIdConnectorLogosThumbnailQueryKey(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['logos']['thumbnail']['$get']>,
) {
  return ['connectors', '/connectors/:id_connector/logos/thumbnail', args] as const
}

export function getConnectorsIdConnectorLogosThumbnailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.connectors)[':id_connector']['logos']['thumbnail']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['logos']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.connectors)[':id_connector']['logos']['thumbnail']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorsIdConnectorLogosThumbnailQueryKey>
  >({
    queryKey: getConnectorsIdConnectorLogosThumbnailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connectors[':id_connector'].logos.thumbnail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectorsIdConnectorLogosThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.connectors)[':id_connector']['logos']['thumbnail']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.connectors)[':id_connector']['logos']['thumbnail']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.connectors)[':id_connector']['logos']['thumbnail']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectorsIdConnectorLogosThumbnailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectorsIdConnectorLogosThumbnailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutConnectorsIdConnectorLogosIdLogoMutationKey() {
  return ['connectors', '/connectors/:id_connector/logos/:id_logo', 'PUT'] as const
}

export function getPutConnectorsIdConnectorLogosIdLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.connectors)[':id_connector']['logos'][':id_logo']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connectors)[':id_connector']['logos'][':id_logo']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectorsIdConnectorLogosIdLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connectors)[':id_connector']['logos'][':id_logo']['$put']
      >,
    ) {
      return parseResponse(client.connectors[':id_connector'].logos[':id_logo'].$put(args, options))
    },
  })
}

export function injectPutConnectorsIdConnectorLogosIdLogo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.connectors)[':id_connector']['logos'][':id_logo']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.connectors)[':id_connector']['logos'][':id_logo']['$put']>,
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
    const mutationDefaults = getPutConnectorsIdConnectorLogosIdLogoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteConnectorsIdConnectorLogosIdLogoMutationKey() {
  return ['connectors', '/connectors/:id_connector/logos/:id_logo', 'DELETE'] as const
}

export function getDeleteConnectorsIdConnectorLogosIdLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.connectors)[':id_connector']['logos'][':id_logo']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connectors)[':id_connector']['logos'][':id_logo']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectorsIdConnectorLogosIdLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connectors)[':id_connector']['logos'][':id_logo']['$delete']
      >,
    ) {
      return parseResponse(
        client.connectors[':id_connector'].logos[':id_logo'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteConnectorsIdConnectorLogosIdLogo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.connectors)[':id_connector']['logos'][':id_logo']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.connectors)[':id_connector']['logos'][':id_logo']['$delete']
        >,
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
    const mutationDefaults = getDeleteConnectorsIdConnectorLogosIdLogoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConnectorsIdConnectorSourcesQueryKey(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['sources']['$get']>,
) {
  return ['connectors', '/connectors/:id_connector/sources', args] as const
}

export function getConnectorsIdConnectorSourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connectors)[':id_connector']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connectors)[':id_connector']['sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorsIdConnectorSourcesQueryKey>
  >({
    queryKey: getConnectorsIdConnectorSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connectors[':id_connector'].sources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectorsIdConnectorSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connectors)[':id_connector']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.connectors)[':id_connector']['sources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connectors)[':id_connector']['sources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectorsIdConnectorSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectorsIdConnectorSourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutConnectorsIdConnectorSourcesMutationKey() {
  return ['connectors', '/connectors/:id_connector/sources', 'PUT'] as const
}

export function getPutConnectorsIdConnectorSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connectors)[':id_connector']['sources']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connectors)[':id_connector']['sources']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectorsIdConnectorSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connectors)[':id_connector']['sources']['$put']>,
    ) {
      return parseResponse(client.connectors[':id_connector'].sources.$put(args, options))
    },
  })
}

export function injectPutConnectorsIdConnectorSources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connectors)[':id_connector']['sources']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.connectors)[':id_connector']['sources']['$put']>,
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
    const mutationDefaults = getPutConnectorsIdConnectorSourcesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConnectorsIdConnectorSourcesIdConnectorSourceFieldsQueryKey(
  args: InferRequestType<
    (typeof client.connectors)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
  >,
) {
  return [
    'connectors',
    '/connectors/:id_connector/sources/:id_connector_source/fields',
    args,
  ] as const
}

export function getConnectorsIdConnectorSourcesIdConnectorSourceFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.connectors)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.connectors)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.connectors)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorsIdConnectorSourcesIdConnectorSourceFieldsQueryKey>
  >({
    queryKey: getConnectorsIdConnectorSourcesIdConnectorSourceFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connectors[':id_connector'].sources[':id_connector_source'].fields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectorsIdConnectorSourcesIdConnectorSourceFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.connectors)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.connectors)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.connectors)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectorsIdConnectorSourcesIdConnectorSourceFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectorsIdConnectorSourcesIdConnectorSourceFieldsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getConnectorsIdConnectorSourcesIdSourceQueryKey(
  args: InferRequestType<
    (typeof client.connectors)[':id_connector']['sources'][':id_source']['$get']
  >,
) {
  return ['connectors', '/connectors/:id_connector/sources/:id_source', args] as const
}

export function getConnectorsIdConnectorSourcesIdSourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.connectors)[':id_connector']['sources'][':id_source']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.connectors)[':id_connector']['sources'][':id_source']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.connectors)[':id_connector']['sources'][':id_source']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectorsIdConnectorSourcesIdSourceQueryKey>
  >({
    queryKey: getConnectorsIdConnectorSourcesIdSourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connectors[':id_connector'].sources[':id_source'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectorsIdConnectorSourcesIdSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.connectors)[':id_connector']['sources'][':id_source']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.connectors)[':id_connector']['sources'][':id_source']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.connectors)[':id_connector']['sources'][':id_source']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectorsIdConnectorSourcesIdSourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectorsIdConnectorSourcesIdSourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutConnectorsIdConnectorSourcesIdSourceMutationKey() {
  return ['connectors', '/connectors/:id_connector/sources/:id_source', 'PUT'] as const
}

export function getPutConnectorsIdConnectorSourcesIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.connectors)[':id_connector']['sources'][':id_source']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connectors)[':id_connector']['sources'][':id_source']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectorsIdConnectorSourcesIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.connectors)[':id_connector']['sources'][':id_source']['$put']
      >,
    ) {
      return parseResponse(
        client.connectors[':id_connector'].sources[':id_source'].$put(args, options),
      )
    },
  })
}

export function injectPutConnectorsIdConnectorSourcesIdSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.connectors)[':id_connector']['sources'][':id_source']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.connectors)[':id_connector']['sources'][':id_source']['$put']
        >,
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
    const mutationDefaults = getPutConnectorsIdConnectorSourcesIdSourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIncidentsQueryKey(args: InferRequestType<typeof client.incidents.$get>) {
  return ['incidents', '/incidents', args] as const
}

export function getIncidentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.incidents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIncidentsQueryKey>
  >({
    queryKey: getIncidentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.incidents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIncidents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.incidents.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incidents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIncidentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIncidentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getInvoicingQueryKey(args: InferRequestType<typeof client.invoicing.$get>) {
  return ['invoicing', '/invoicing', args] as const
}

export function getInvoicingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoicing.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.invoicing.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoicing.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvoicingQueryKey>
  >({
    queryKey: getInvoicingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invoicing.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInvoicing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoicing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.invoicing.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoicing.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInvoicingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvoicingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLogsQueryKey(args: InferRequestType<typeof client.logs.$get>) {
  return ['logs', '/logs', args] as const
}

export function getLogsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsQueryKey>
  >({
    queryKey: getLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.logs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMonitoringQueryKey(args: InferRequestType<typeof client.monitoring.$get>) {
  return ['monitoring', '/monitoring', args] as const
}

export function getMonitoringQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitoring.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.monitoring.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitoring.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMonitoringQueryKey>
  >({
    queryKey: getMonitoringQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.monitoring.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMonitoring<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitoring.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.monitoring.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitoring.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMonitoringQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMonitoringQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getProvidersQueryKey(args: InferRequestType<typeof client.providers.$get>) {
  return ['providers', '/providers', args] as const
}

export function getProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.providers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProvidersQueryKey>
  >({
    queryKey: getProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.providers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProvidersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getProvidersIdConnectorConnectionsQueryKey(
  args: InferRequestType<(typeof client.providers)[':id_connector']['connections']['$get']>,
) {
  return ['providers', '/providers/:id_connector/connections', args] as const
}

export function getProvidersIdConnectorConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':id_connector']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':id_connector']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.providers)[':id_connector']['connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdConnectorConnectionsQueryKey>
  >({
    queryKey: getProvidersIdConnectorConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':id_connector'].connections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProvidersIdConnectorConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':id_connector']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.providers)[':id_connector']['connections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.providers)[':id_connector']['connections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersIdConnectorConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProvidersIdConnectorConnectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getProvidersIdConnectorLogosQueryKey(
  args: InferRequestType<(typeof client.providers)[':id_connector']['logos']['$get']>,
) {
  return ['providers', '/providers/:id_connector/logos', args] as const
}

export function getProvidersIdConnectorLogosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':id_connector']['logos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':id_connector']['logos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.providers)[':id_connector']['logos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdConnectorLogosQueryKey>
  >({
    queryKey: getProvidersIdConnectorLogosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':id_connector'].logos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProvidersIdConnectorLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':id_connector']['logos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.providers)[':id_connector']['logos']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.providers)[':id_connector']['logos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersIdConnectorLogosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProvidersIdConnectorLogosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getProvidersIdConnectorLogosMainQueryKey(
  args: InferRequestType<(typeof client.providers)[':id_connector']['logos']['main']['$get']>,
) {
  return ['providers', '/providers/:id_connector/logos/main', args] as const
}

export function getProvidersIdConnectorLogosMainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':id_connector']['logos']['main']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':id_connector']['logos']['main']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.providers)[':id_connector']['logos']['main']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdConnectorLogosMainQueryKey>
  >({
    queryKey: getProvidersIdConnectorLogosMainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':id_connector'].logos.main.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProvidersIdConnectorLogosMain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':id_connector']['logos']['main']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.providers)[':id_connector']['logos']['main']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.providers)[':id_connector']['logos']['main']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersIdConnectorLogosMainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProvidersIdConnectorLogosMainQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getProvidersIdConnectorLogosThumbnailQueryKey(
  args: InferRequestType<(typeof client.providers)[':id_connector']['logos']['thumbnail']['$get']>,
) {
  return ['providers', '/providers/:id_connector/logos/thumbnail', args] as const
}

export function getProvidersIdConnectorLogosThumbnailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.providers)[':id_connector']['logos']['thumbnail']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':id_connector']['logos']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.providers)[':id_connector']['logos']['thumbnail']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdConnectorLogosThumbnailQueryKey>
  >({
    queryKey: getProvidersIdConnectorLogosThumbnailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':id_connector'].logos.thumbnail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProvidersIdConnectorLogosThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.providers)[':id_connector']['logos']['thumbnail']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.providers)[':id_connector']['logos']['thumbnail']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.providers)[':id_connector']['logos']['thumbnail']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersIdConnectorLogosThumbnailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProvidersIdConnectorLogosThumbnailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getProvidersIdConnectorSourcesQueryKey(
  args: InferRequestType<(typeof client.providers)[':id_connector']['sources']['$get']>,
) {
  return ['providers', '/providers/:id_connector/sources', args] as const
}

export function getProvidersIdConnectorSourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':id_connector']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':id_connector']['sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.providers)[':id_connector']['sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdConnectorSourcesQueryKey>
  >({
    queryKey: getProvidersIdConnectorSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':id_connector'].sources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProvidersIdConnectorSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.providers)[':id_connector']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.providers)[':id_connector']['sources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.providers)[':id_connector']['sources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersIdConnectorSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProvidersIdConnectorSourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getProvidersIdConnectorSourcesIdConnectorSourceFieldsQueryKey(
  args: InferRequestType<
    (typeof client.providers)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
  >,
) {
  return [
    'providers',
    '/providers/:id_connector/sources/:id_connector_source/fields',
    args,
  ] as const
}

export function getProvidersIdConnectorSourcesIdConnectorSourceFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.providers)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.providers)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.providers)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdConnectorSourcesIdConnectorSourceFieldsQueryKey>
  >({
    queryKey: getProvidersIdConnectorSourcesIdConnectorSourceFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':id_connector'].sources[':id_connector_source'].fields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProvidersIdConnectorSourcesIdConnectorSourceFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.providers)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.providers)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.providers)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersIdConnectorSourcesIdConnectorSourceFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProvidersIdConnectorSourcesIdConnectorSourceFieldsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getProvidersIdConnectorSourcesIdSourceQueryKey(
  args: InferRequestType<
    (typeof client.providers)[':id_connector']['sources'][':id_source']['$get']
  >,
) {
  return ['providers', '/providers/:id_connector/sources/:id_source', args] as const
}

export function getProvidersIdConnectorSourcesIdSourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.providers)[':id_connector']['sources'][':id_source']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.providers)[':id_connector']['sources'][':id_source']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.providers)[':id_connector']['sources'][':id_source']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdConnectorSourcesIdSourceQueryKey>
  >({
    queryKey: getProvidersIdConnectorSourcesIdSourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':id_connector'].sources[':id_source'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProvidersIdConnectorSourcesIdSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.providers)[':id_connector']['sources'][':id_source']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.providers)[':id_connector']['sources'][':id_source']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.providers)[':id_connector']['sources'][':id_source']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersIdConnectorSourcesIdSourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProvidersIdConnectorSourcesIdSourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getProvidersIdProviderQueryKey(
  args: InferRequestType<(typeof client.providers)[':id_provider']['$get']>,
) {
  return ['providers', '/providers/:id_provider', args] as const
}

export function getProvidersIdProviderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':id_provider']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.providers)[':id_provider']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':id_provider']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersIdProviderQueryKey>
  >({
    queryKey: getProvidersIdProviderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.providers[':id_provider'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProvidersIdProvider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':id_provider']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.providers)[':id_provider']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.providers)[':id_provider']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersIdProviderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProvidersIdProviderQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPsd2RegistrationsQueryKey(
  args: InferRequestType<(typeof client)['psd2-registrations']['$get']>,
) {
  return ['psd2-registrations', '/psd2-registrations', args] as const
}

export function getPsd2RegistrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['psd2-registrations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['psd2-registrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['psd2-registrations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPsd2RegistrationsQueryKey>
  >({
    queryKey: getPsd2RegistrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['psd2-registrations'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPsd2Registrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['psd2-registrations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['psd2-registrations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['psd2-registrations']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPsd2RegistrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPsd2RegistrationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPsd2RegistrationsIdPsd2RegistrationQueryKey(
  args: InferRequestType<(typeof client)['psd2-registrations'][':id_psd2-registration']['$get']>,
) {
  return ['psd2-registrations', '/psd2-registrations/:id_psd2-registration', args] as const
}

export function getPsd2RegistrationsIdPsd2RegistrationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['psd2-registrations'][':id_psd2-registration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['psd2-registrations'][':id_psd2-registration']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['psd2-registrations'][':id_psd2-registration']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPsd2RegistrationsIdPsd2RegistrationQueryKey>
  >({
    queryKey: getPsd2RegistrationsIdPsd2RegistrationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['psd2-registrations'][':id_psd2-registration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPsd2RegistrationsIdPsd2Registration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['psd2-registrations'][':id_psd2-registration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['psd2-registrations'][':id_psd2-registration']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['psd2-registrations'][':id_psd2-registration']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPsd2RegistrationsIdPsd2RegistrationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPsd2RegistrationsIdPsd2RegistrationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPsd2RegistrationsIdPsd2registrationLogsQueryKey(
  args: InferRequestType<
    (typeof client)['psd2-registrations'][':id_psd2registration']['logs']['$get']
  >,
) {
  return ['psd2-registrations', '/psd2-registrations/:id_psd2registration/logs', args] as const
}

export function getPsd2RegistrationsIdPsd2registrationLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['psd2-registrations'][':id_psd2registration']['logs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['psd2-registrations'][':id_psd2registration']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['psd2-registrations'][':id_psd2registration']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPsd2RegistrationsIdPsd2registrationLogsQueryKey>
  >({
    queryKey: getPsd2RegistrationsIdPsd2registrationLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['psd2-registrations'][':id_psd2registration'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPsd2RegistrationsIdPsd2registrationLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['psd2-registrations'][':id_psd2registration']['logs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['psd2-registrations'][':id_psd2registration']['logs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['psd2-registrations'][':id_psd2registration']['logs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPsd2RegistrationsIdPsd2registrationLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPsd2RegistrationsIdPsd2registrationLogsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPublickeyQueryKey() {
  return ['publickey', '/publickey'] as const
}

export function getPublickeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publickey.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publickey.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPublickeyQueryKey>
  >({
    queryKey: getPublickeyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.publickey.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPublickey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publickey.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.publickey.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublickeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPublickeyQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostTestSyncMutationKey() {
  return ['test', '/test/sync', 'POST'] as const
}

export function getPostTestSyncMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.sync.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostTestSyncMutationKey(),
    async mutationFn() {
      return parseResponse(client.test.sync.$post(undefined, options))
    },
  })
}

export function injectPostTestSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.sync.$post>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getPostTestSyncMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTestWebhooksMutationKey() {
  return ['test', '/test/webhooks', 'POST'] as const
}

export function getPostTestWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.webhooks.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostTestWebhooksMutationKey(),
    async mutationFn() {
      return parseResponse(client.test.webhooks.$post(undefined, options))
    },
  })
}

export function injectPostTestWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.webhooks.$post>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getPostTestWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersIdUserQueryKey(
  args: InferRequestType<(typeof client.users)[':id_user']['$get']>,
) {
  return ['users', '/users/:id_user', args] as const
}

export function getUsersIdUserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id_user']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserQueryKey>
  >({
    queryKey: getUsersIdUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersIdUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id_user']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdUserQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteUsersIdUserMutationKey() {
  return ['users', '/users/:id_user', 'DELETE'] as const
}

export function getDeleteUsersIdUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id_user']['$delete']>) {
      return parseResponse(client.users[':id_user'].$delete(args, options))
    },
  })
}

export function injectDeleteUsersIdUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id_user']['$delete']>,
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
    const mutationDefaults = getDeleteUsersIdUserMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdUserAccountTypesQueryKey(
  args: InferRequestType<(typeof client.users)[':id_user']['account_types']['$get']>,
) {
  return ['users', '/users/:id_user/account_types', args] as const
}

export function getUsersIdUserAccountTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['account_types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id_user']['account_types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['account_types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserAccountTypesQueryKey>
  >({
    queryKey: getUsersIdUserAccountTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].account_types.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserAccountTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['account_types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id_user']['account_types']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['account_types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserAccountTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserAccountTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersIdUserAccountTypesIdAccountTypeQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id_user']['account_types'][':id_account_type']['$get']
  >,
) {
  return ['users', '/users/:id_user/account_types/:id_account_type', args] as const
}

export function getUsersIdUserAccountTypesIdAccountTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':id_user']['account_types'][':id_account_type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id_user']['account_types'][':id_account_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['account_types'][':id_account_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserAccountTypesIdAccountTypeQueryKey>
  >({
    queryKey: getUsersIdUserAccountTypesIdAccountTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].account_types[':id_account_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserAccountTypesIdAccountType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':id_user']['account_types'][':id_account_type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['account_types'][':id_account_type']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['account_types'][':id_account_type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserAccountTypesIdAccountTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserAccountTypesIdAccountTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersIdUserAccountsIdAccountCategoriesQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id_user']['accounts'][':id_account']['categories']['$get']
  >,
) {
  return ['users', '/users/:id_user/accounts/:id_account/categories', args] as const
}

export function getUsersIdUserAccountsIdAccountCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['accounts'][':id_account']['categories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id_user']['accounts'][':id_account']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['accounts'][':id_account']['categories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserAccountsIdAccountCategoriesQueryKey>
  >({
    queryKey: getUsersIdUserAccountsIdAccountCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].accounts[':id_account'].categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserAccountsIdAccountCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['accounts'][':id_account']['categories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['accounts'][':id_account']['categories']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['accounts'][':id_account']['categories']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserAccountsIdAccountCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserAccountsIdAccountCategoriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getUsersIdUserAccountsIdAccountTransactionsclustersQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$get']
  >,
) {
  return ['users', '/users/:id_user/accounts/:id_account/transactionsclusters', args] as const
}

export function getUsersIdUserAccountsIdAccountTransactionsclustersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserAccountsIdAccountTransactionsclustersQueryKey>
  >({
    queryKey: getUsersIdUserAccountsIdAccountTransactionsclustersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].accounts[':id_account'].transactionsclusters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserAccountsIdAccountTransactionsclusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserAccountsIdAccountTransactionsclustersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserAccountsIdAccountTransactionsclustersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostUsersIdUserAccountsIdAccountTransactionsclustersMutationKey() {
  return ['users', '/users/:id_user/accounts/:id_account/transactionsclusters', 'POST'] as const
}

export function getPostUsersIdUserAccountsIdAccountTransactionsclustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserAccountsIdAccountTransactionsclustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].accounts[':id_account'].transactionsclusters.$post(args, options),
      )
    },
  })
}

export function injectPostUsersIdUserAccountsIdAccountTransactionsclusters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$post']
        >,
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
    const mutationDefaults = getPostUsersIdUserAccountsIdAccountTransactionsclustersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationKey() {
  return [
    'users',
    '/users/:id_user/accounts/:id_account/transactionsclusters/:id_transactionscluster',
    'PUT',
  ] as const
}

export function getPutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].accounts[':id_account'].transactionsclusters[
          ':id_transactionscluster'
        ].$put(args, options),
      )
    },
  })
}

export function injectPutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
        >,
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
    const mutationDefaults =
      getPutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationKey() {
  return [
    'users',
    '/users/:id_user/accounts/:id_account/transactionsclusters/:id_transactionscluster',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].accounts[':id_account'].transactionsclusters[
          ':id_transactionscluster'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdUserAlertsQueryKey(
  args: InferRequestType<(typeof client.users)[':id_user']['alerts']['$get']>,
) {
  return ['users', '/users/:id_user/alerts', args] as const
}

export function getUsersIdUserAlertsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['alerts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id_user']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['alerts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserAlertsQueryKey>
  >({
    queryKey: getUsersIdUserAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].alerts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['alerts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id_user']['alerts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['alerts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserAlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdUserAlertsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersIdUserCategoriesQueryKey(
  args: InferRequestType<(typeof client.users)[':id_user']['categories']['$get']>,
) {
  return ['users', '/users/:id_user/categories', args] as const
}

export function getUsersIdUserCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id_user']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserCategoriesQueryKey>
  >({
    queryKey: getUsersIdUserCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id_user']['categories']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserCategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersIdUserCategoriesFullQueryKey(
  args: InferRequestType<(typeof client.users)[':id_user']['categories']['full']['$get']>,
) {
  return ['users', '/users/:id_user/categories/full', args] as const
}

export function getUsersIdUserCategoriesFullQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['full']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id_user']['categories']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['full']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserCategoriesFullQueryKey>
  >({
    queryKey: getUsersIdUserCategoriesFullQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].categories.full.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserCategoriesFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['full']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id_user']['categories']['full']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['full']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserCategoriesFullQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserCategoriesFullQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostUsersIdUserCategoriesFullMutationKey() {
  return ['users', '/users/:id_user/categories/full', 'POST'] as const
}

export function getPostUsersIdUserCategoriesFullMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['full']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['categories']['full']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserCategoriesFullMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id_user']['categories']['full']['$post']>,
    ) {
      return parseResponse(client.users[':id_user'].categories.full.$post(args, options))
    },
  })
}

export function injectPostUsersIdUserCategoriesFull<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['categories']['full']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id_user']['categories']['full']['$post']>,
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
    const mutationDefaults = getPostUsersIdUserCategoriesFullMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutUsersIdUserCategoriesFullIdFullMutationKey() {
  return ['users', '/users/:id_user/categories/full/:id_full', 'PUT'] as const
}

export function getPutUsersIdUserCategoriesFullIdFullMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':id_user']['categories']['full'][':id_full']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['categories']['full'][':id_full']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdUserCategoriesFullIdFullMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['categories']['full'][':id_full']['$put']
      >,
    ) {
      return parseResponse(client.users[':id_user'].categories.full[':id_full'].$put(args, options))
    },
  })
}

export function injectPutUsersIdUserCategoriesFullIdFull<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['categories']['full'][':id_full']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['categories']['full'][':id_full']['$put']
        >,
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
    const mutationDefaults = getPutUsersIdUserCategoriesFullIdFullMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersIdUserCategoriesFullIdFullMutationKey() {
  return ['users', '/users/:id_user/categories/full/:id_full', 'DELETE'] as const
}

export function getDeleteUsersIdUserCategoriesFullIdFullMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['categories']['full'][':id_full']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['categories']['full'][':id_full']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserCategoriesFullIdFullMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['categories']['full'][':id_full']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].categories.full[':id_full'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteUsersIdUserCategoriesFullIdFull<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['categories']['full'][':id_full']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['categories']['full'][':id_full']['$delete']
        >,
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
    const mutationDefaults = getDeleteUsersIdUserCategoriesFullIdFullMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdUserConfigQueryKey(
  args: InferRequestType<(typeof client.users)[':id_user']['config']['$get']>,
) {
  return ['users', '/users/:id_user/config', args] as const
}

export function getUsersIdUserConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['config']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id_user']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConfigQueryKey>
  >({
    queryKey: getUsersIdUserConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['config']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id_user']['config']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['config']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdUserConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostUsersIdUserConfigMutationKey() {
  return ['users', '/users/:id_user/config', 'POST'] as const
}

export function getPostUsersIdUserConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['config']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['config']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserConfigMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id_user']['config']['$post']>) {
      return parseResponse(client.users[':id_user'].config.$post(args, options))
    },
  })
}

export function injectPostUsersIdUserConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['config']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id_user']['config']['$post']>,
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
    const mutationDefaults = getPostUsersIdUserConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersIdUserConfigMutationKey() {
  return ['users', '/users/:id_user/config', 'DELETE'] as const
}

export function getDeleteUsersIdUserConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['config']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['config']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id_user']['config']['$delete']>,
    ) {
      return parseResponse(client.users[':id_user'].config.$delete(args, options))
    },
  })
}

export function injectDeleteUsersIdUserConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['config']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id_user']['config']['$delete']>,
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
    const mutationDefaults = getDeleteUsersIdUserConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdUserConnectionsQueryKey(
  args: InferRequestType<(typeof client.users)[':id_user']['connections']['$get']>,
) {
  return ['users', '/users/:id_user/connections', args] as const
}

export function getUsersIdUserConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id_user']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsQueryKey>
  >({
    queryKey: getUsersIdUserConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].connections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id_user']['connections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['connections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserConnectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostUsersIdUserConnectionsMutationKey() {
  return ['users', '/users/:id_user/connections', 'POST'] as const
}

export function getPostUsersIdUserConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['connections']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['connections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id_user']['connections']['$post']>,
    ) {
      return parseResponse(client.users[':id_user'].connections.$post(args, options))
    },
  })
}

export function injectPostUsersIdUserConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['connections']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id_user']['connections']['$post']>,
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
    const mutationDefaults = getPostUsersIdUserConnectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersIdUserConnectionsMutationKey() {
  return ['users', '/users/:id_user/connections', 'DELETE'] as const
}

export function getDeleteUsersIdUserConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['connections']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['connections']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id_user']['connections']['$delete']>,
    ) {
      return parseResponse(client.users[':id_user'].connections.$delete(args, options))
    },
  })
}

export function injectDeleteUsersIdUserConnections<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['connections']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id_user']['connections']['$delete']>,
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
    const mutationDefaults = getDeleteUsersIdUserConnectionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutUsersIdUserConnectionsIdConnectionMutationKey() {
  return ['users', '/users/:id_user/connections/:id_connection', 'PUT'] as const
}

export function getPutUsersIdUserConnectionsIdConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':id_user']['connections'][':id_connection']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['connections'][':id_connection']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdUserConnectionsIdConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].$put(args, options),
      )
    },
  })
}

export function injectPutUsersIdUserConnectionsIdConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['$put']
        >,
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
    const mutationDefaults = getPutUsersIdUserConnectionsIdConnectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersIdUserConnectionsIdConnectionMutationKey() {
  return ['users', '/users/:id_user/connections/:id_connection', 'POST'] as const
}

export function getPostUsersIdUserConnectionsIdConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':id_user']['connections'][':id_connection']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['connections'][':id_connection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserConnectionsIdConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].$post(args, options),
      )
    },
  })
}

export function injectPostUsersIdUserConnectionsIdConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['$post']
        >,
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
    const mutationDefaults = getPostUsersIdUserConnectionsIdConnectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersIdUserConnectionsIdConnectionMutationKey() {
  return ['users', '/users/:id_user/connections/:id_connection', 'DELETE'] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['connections'][':id_connection']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserConnectionsIdConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteUsersIdUserConnectionsIdConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['$delete']
        >,
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
    const mutationDefaults = getDeleteUsersIdUserConnectionsIdConnectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdUserConnectionsIdConnectionAccountsQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$get']
  >,
) {
  return ['users', '/users/:id_user/connections/:id_connection/accounts', args] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsQueryKey>
  >({
    queryKey: getUsersIdUserConnectionsIdConnectionAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserConnectionsIdConnectionAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserConnectionsIdConnectionAccountsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsMutationKey() {
  return ['users', '/users/:id_user/connections/:id_connection/accounts', 'PUT'] as const
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdUserConnectionsIdConnectionAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts.$put(args, options),
      )
    },
  })
}

export function injectPutUsersIdUserConnectionsIdConnectionAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$put']
        >,
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
    const mutationDefaults = getPutUsersIdUserConnectionsIdConnectionAccountsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersIdUserConnectionsIdConnectionAccountsMutationKey() {
  return ['users', '/users/:id_user/connections/:id_connection/accounts', 'POST'] as const
}

export function getPostUsersIdUserConnectionsIdConnectionAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserConnectionsIdConnectionAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts.$post(args, options),
      )
    },
  })
}

export function injectPostUsersIdUserConnectionsIdConnectionAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$post']
        >,
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
    const mutationDefaults = getPostUsersIdUserConnectionsIdConnectionAccountsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsMutationKey() {
  return ['users', '/users/:id_user/connections/:id_connection/accounts', 'DELETE'] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserConnectionsIdConnectionAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts.$delete(args, options),
      )
    },
  })
}

export function injectDeleteUsersIdUserConnectionsIdConnectionAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$delete']
        >,
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
    const mutationDefaults = getDeleteUsersIdUserConnectionsIdConnectionAccountsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account',
    'PUT',
  ] as const
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutUsersIdUserConnectionsIdConnectionAccountsIdAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$put']
        >,
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
    const mutationDefaults =
      getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['categories']['$get']
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/categories',
    args,
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['categories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['categories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesQueryKey>
  >({
    queryKey: getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[
          ':id_account'
        ].categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersIdUserConnectionsIdConnectionAccountsIdAccountCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['categories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['categories']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['categories']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['delta']['$get']
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/delta',
    args,
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['delta']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['delta']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['delta']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaQueryKey>
  >({
    queryKey: getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].delta.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectUsersIdUserConnectionsIdConnectionAccountsIdAccountDelta<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['delta']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['delta']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['delta']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['logs']['$get']
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/logs',
    args,
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsQueryKey>
  >({
    queryKey: getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].logs.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectUsersIdUserConnectionsIdConnectionAccountsIdAccountLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['logs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['logs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['sources']['$get']
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/sources',
    args,
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['sources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['sources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['sources']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesQueryKey>
  >({
    queryKey: getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].sources.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectUsersIdUserConnectionsIdConnectionAccountsIdAccountSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['sources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['sources']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['sources']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$get']
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions',
    args,
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsQueryKey>
  >({
    queryKey: getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[
          ':id_account'
        ].transactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions',
    'POST',
  ] as const
}

export function getPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[
          ':id_account'
        ].transactions.$post(args, options),
      )
    },
  })
}

export function injectPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$post']
        >,
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
    const mutationDefaults =
      getPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[
          ':id_account'
        ].transactions.$delete(args, options),
      )
    },
  })
}

export function injectDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions/:id_transaction',
    'PUT',
  ] as const
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
          ':id_transaction'
        ].$put(args, options),
      )
    },
  })
}

export function injectPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransaction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['$put']
        >,
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
    const mutationDefaults =
      getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$get']
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions/:id_transaction/informations',
    args,
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsQueryKey
    >
  >({
    queryKey:
      getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
          ':id_transaction'
        ].informations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions/:id_transaction/informations',
    'PUT',
  ] as const
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
          ':id_transaction'
        ].informations.$put(args, options),
      )
    },
  })
}

export function injectPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$put']
        >,
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
    const mutationDefaults =
      getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions/:id_transaction/informations',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
          ':id_transaction'
        ].informations.$delete(args, options),
      )
    },
  })
}

export function injectDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$get']
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions/:id_transaction/informations/:id_information',
    args,
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationQueryKey
    >
  >({
    queryKey:
      getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
          ':id_transaction'
        ].informations[':id_information'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactions/:id_transaction/informations/:id_information',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
          ':id_transaction'
        ].informations[':id_information'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$get']
  >,
) {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactionsclusters',
    args,
  ] as const
}

export function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersQueryKey
    >
  >({
    queryKey:
      getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[
          ':id_account'
        ].transactionsclusters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactionsclusters',
    'POST',
  ] as const
}

export function getPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[
          ':id_account'
        ].transactionsclusters.$post(args, options),
      )
    },
  })
}

export function injectPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$post']
        >,
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
    const mutationDefaults =
      getPostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactionsclusters/:id_transactionscluster',
    'PUT',
  ] as const
}

export function getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[
          ':id_account'
        ].transactionsclusters[':id_transactionscluster'].$put(args, options),
      )
    },
  })
}

export function injectPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
        >,
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
    const mutationDefaults =
      getPutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/accounts/:id_account/transactionsclusters/:id_transactionscluster',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].accounts[
          ':id_account'
        ].transactionsclusters[':id_transactionscluster'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdUserConnectionsIdConnectionInformationsQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['informations']['$get']
  >,
) {
  return ['users', '/users/:id_user/connections/:id_connection/informations', args] as const
}

export function getUsersIdUserConnectionsIdConnectionInformationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['informations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['informations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['informations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionInformationsQueryKey>
  >({
    queryKey: getUsersIdUserConnectionsIdConnectionInformationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].informations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserConnectionsIdConnectionInformations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['informations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['informations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['informations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserConnectionsIdConnectionInformationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserConnectionsIdConnectionInformationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getUsersIdUserConnectionsIdConnectionLogsQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['logs']['$get']
  >,
) {
  return ['users', '/users/:id_user/connections/:id_connection/logs', args] as const
}

export function getUsersIdUserConnectionsIdConnectionLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionLogsQueryKey>
  >({
    queryKey: getUsersIdUserConnectionsIdConnectionLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserConnectionsIdConnectionLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['logs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['logs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserConnectionsIdConnectionLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserConnectionsIdConnectionLogsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getUsersIdUserConnectionsIdConnectionSourcesQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['sources']['$get']
  >,
) {
  return ['users', '/users/:id_user/connections/:id_connection/sources', args] as const
}

export function getUsersIdUserConnectionsIdConnectionSourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['sources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['sources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['sources']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionSourcesQueryKey>
  >({
    queryKey: getUsersIdUserConnectionsIdConnectionSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].sources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserConnectionsIdConnectionSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['sources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['sources']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['sources']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserConnectionsIdConnectionSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserConnectionsIdConnectionSourcesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationKey() {
  return ['users', '/users/:id_user/connections/:id_connection/sources/:id_source', 'PUT'] as const
}

export function getPutUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].sources[':id_source'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutUsersIdUserConnectionsIdConnectionSourcesIdSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$put']
        >,
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
    const mutationDefaults = getPutUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationKey() {
  return ['users', '/users/:id_user/connections/:id_connection/sources/:id_source', 'POST'] as const
}

export function getPostUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].sources[':id_source'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostUsersIdUserConnectionsIdConnectionSourcesIdSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$post']
        >,
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
    const mutationDefaults =
      getPostUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/sources/:id_source',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].sources[':id_source'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteUsersIdUserConnectionsIdConnectionSourcesIdSource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdUserConnectionsIdConnectionTransactionsclustersQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$get']
  >,
) {
  return ['users', '/users/:id_user/connections/:id_connection/transactionsclusters', args] as const
}

export function getUsersIdUserConnectionsIdConnectionTransactionsclustersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserConnectionsIdConnectionTransactionsclustersQueryKey>
  >({
    queryKey: getUsersIdUserConnectionsIdConnectionTransactionsclustersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].transactionsclusters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserConnectionsIdConnectionTransactionsclusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserConnectionsIdConnectionTransactionsclustersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserConnectionsIdConnectionTransactionsclustersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostUsersIdUserConnectionsIdConnectionTransactionsclustersMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/transactionsclusters',
    'POST',
  ] as const
}

export function getPostUsersIdUserConnectionsIdConnectionTransactionsclustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserConnectionsIdConnectionTransactionsclustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].transactionsclusters.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostUsersIdUserConnectionsIdConnectionTransactionsclusters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$post']
        >,
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
    const mutationDefaults =
      getPostUsersIdUserConnectionsIdConnectionTransactionsclustersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/transactionsclusters/:id_transactionscluster',
    'PUT',
  ] as const
}

export function getPutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].transactionsclusters[
          ':id_transactionscluster'
        ].$put(args, options),
      )
    },
  })
}

export function injectPutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$put']
        >,
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
    const mutationDefaults =
      getPutUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterMutationKey() {
  return [
    'users',
    '/users/:id_user/connections/:id_connection/transactionsclusters/:id_transactionscluster',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].connections[':id_connection'].transactionsclusters[
          ':id_transactionscluster'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdUserForecastQueryKey(
  args: InferRequestType<(typeof client.users)[':id_user']['forecast']['$get']>,
) {
  return ['users', '/users/:id_user/forecast', args] as const
}

export function getUsersIdUserForecastQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['forecast']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id_user']['forecast']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['forecast']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserForecastQueryKey>
  >({
    queryKey: getUsersIdUserForecastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].forecast.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserForecast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['forecast']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id_user']['forecast']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['forecast']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserForecastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdUserForecastQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersIdUserLogsQueryKey(
  args: InferRequestType<(typeof client.users)[':id_user']['logs']['$get']>,
) {
  return ['users', '/users/:id_user/logs', args] as const
}

export function getUsersIdUserLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id_user']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserLogsQueryKey>
  >({
    queryKey: getUsersIdUserLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id_user']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id_user']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdUserLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersIdUserProfilesQueryKey(
  args: InferRequestType<(typeof client.users)[':id_user']['profiles']['$get']>,
) {
  return ['users', '/users/:id_user/profiles', args] as const
}

export function getUsersIdUserProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id_user']['profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserProfilesQueryKey>
  >({
    queryKey: getUsersIdUserProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].profiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id_user']['profiles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['profiles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdUserProfilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersIdUserProfilesMainQueryKey(
  args: InferRequestType<(typeof client.users)[':id_user']['profiles']['main']['$get']>,
) {
  return ['users', '/users/:id_user/profiles/main', args] as const
}

export function getUsersIdUserProfilesMainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['profiles']['main']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id_user']['profiles']['main']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['profiles']['main']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserProfilesMainQueryKey>
  >({
    queryKey: getUsersIdUserProfilesMainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].profiles.main.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserProfilesMain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['profiles']['main']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id_user']['profiles']['main']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['profiles']['main']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserProfilesMainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserProfilesMainQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersIdUserProfilesIdProfileQueryKey(
  args: InferRequestType<(typeof client.users)[':id_user']['profiles'][':id_profile']['$get']>,
) {
  return ['users', '/users/:id_user/profiles/:id_profile', args] as const
}

export function getUsersIdUserProfilesIdProfileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['profiles'][':id_profile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id_user']['profiles'][':id_profile']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['profiles'][':id_profile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserProfilesIdProfileQueryKey>
  >({
    queryKey: getUsersIdUserProfilesIdProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].profiles[':id_profile'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserProfilesIdProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['profiles'][':id_profile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id_user']['profiles'][':id_profile']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':id_user']['profiles'][':id_profile']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserProfilesIdProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserProfilesIdProfileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostUsersIdUserTokenMutationKey() {
  return ['users', '/users/:id_user/token', 'POST'] as const
}

export function getPostUsersIdUserTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id_user']['token']['$post']>) {
      return parseResponse(client.users[':id_user'].token.$post(args, options))
    },
  })
}

export function injectPostUsersIdUserToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['token']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id_user']['token']['$post']>,
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
    const mutationDefaults = getPostUsersIdUserTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersIdUserTransactionsclustersQueryKey(
  args: InferRequestType<(typeof client.users)[':id_user']['transactionsclusters']['$get']>,
) {
  return ['users', '/users/:id_user/transactionsclusters', args] as const
}

export function getUsersIdUserTransactionsclustersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['transactionsclusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id_user']['transactionsclusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['transactionsclusters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdUserTransactionsclustersQueryKey>
  >({
    queryKey: getUsersIdUserTransactionsclustersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id_user'].transactionsclusters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersIdUserTransactionsclusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id_user']['transactionsclusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id_user']['transactionsclusters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id_user']['transactionsclusters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdUserTransactionsclustersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdUserTransactionsclustersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostUsersIdUserTransactionsclustersMutationKey() {
  return ['users', '/users/:id_user/transactionsclusters', 'POST'] as const
}

export function getPostUsersIdUserTransactionsclustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id_user']['transactionsclusters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id_user']['transactionsclusters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdUserTransactionsclustersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id_user']['transactionsclusters']['$post']>,
    ) {
      return parseResponse(client.users[':id_user'].transactionsclusters.$post(args, options))
    },
  })
}

export function injectPostUsersIdUserTransactionsclusters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':id_user']['transactionsclusters']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id_user']['transactionsclusters']['$post']>,
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
    const mutationDefaults = getPostUsersIdUserTransactionsclustersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutUsersIdUserTransactionsclustersIdTransactionsclusterMutationKey() {
  return ['users', '/users/:id_user/transactionsclusters/:id_transactionscluster', 'PUT'] as const
}

export function getPutUsersIdUserTransactionsclustersIdTransactionsclusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdUserTransactionsclustersIdTransactionsclusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].transactionsclusters[':id_transactionscluster'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutUsersIdUserTransactionsclustersIdTransactionscluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$put']
        >,
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
    const mutationDefaults =
      getPutUsersIdUserTransactionsclustersIdTransactionsclusterMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUsersIdUserTransactionsclustersIdTransactionsclusterMutationKey() {
  return [
    'users',
    '/users/:id_user/transactionsclusters/:id_transactionscluster',
    'DELETE',
  ] as const
}

export function getDeleteUsersIdUserTransactionsclustersIdTransactionsclusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdUserTransactionsclustersIdTransactionsclusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':id_user'].transactionsclusters[':id_transactionscluster'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteUsersIdUserTransactionsclustersIdTransactionscluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteUsersIdUserTransactionsclustersIdTransactionsclusterMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebauthQueryKey(args: InferRequestType<typeof client.webauth.$get>) {
  return ['webauth', '/webauth', args] as const
}

export function getWebauthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauth.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webauth.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauth.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebauthQueryKey>
  >({
    queryKey: getWebauthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webauth.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebauth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.webauth.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webauth.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebauthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebauthQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWebhooksQueryKey(args: InferRequestType<typeof client.webhooks.$get>) {
  return ['webhooks', '/webhooks', args] as const
}

export function getWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >({
    queryKey: getWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.webhooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function getPostWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.$post>) {
      return parseResponse(client.webhooks.$post(args, options))
    },
  })
}

export function injectPostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.$post>,
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
    const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'DELETE'] as const
}

export function getDeleteWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$delete>>>>>,
    TError,
    InferRequestType<typeof client.webhooks.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.$delete>) {
      return parseResponse(client.webhooks.$delete(args, options))
    },
  })
}

export function injectDeleteWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.$delete>,
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
    const mutationDefaults = getDeleteWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebhooksAuthQueryKey(args: InferRequestType<typeof client.webhooks.auth.$get>) {
  return ['webhooks', '/webhooks/auth', args] as const
}

export function getWebhooksAuthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.auth.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhooks.auth.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.auth.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksAuthQueryKey>
  >({
    queryKey: getWebhooksAuthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.auth.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebhooksAuth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.auth.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.webhooks.auth.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.auth.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksAuthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksAuthQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostWebhooksAuthMutationKey() {
  return ['webhooks', '/webhooks/auth', 'POST'] as const
}

export function getPostWebhooksAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.auth.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhooks.auth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksAuthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.auth.$post>) {
      return parseResponse(client.webhooks.auth.$post(args, options))
    },
  })
}

export function injectPostWebhooksAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.auth.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.auth.$post>,
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
    const mutationDefaults = getPostWebhooksAuthMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteWebhooksAuthMutationKey() {
  return ['webhooks', '/webhooks/auth', 'DELETE'] as const
}

export function getDeleteWebhooksAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.auth.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.webhooks.auth.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksAuthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.auth.$delete>) {
      return parseResponse(client.webhooks.auth.$delete(args, options))
    },
  })
}

export function injectDeleteWebhooksAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.auth.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.auth.$delete>,
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
    const mutationDefaults = getDeleteWebhooksAuthMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutWebhooksAuthIdAuthMutationKey() {
  return ['webhooks', '/webhooks/auth/:id_auth', 'PUT'] as const
}

export function getPutWebhooksAuthIdAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks.auth)[':id_auth']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksAuthIdAuthMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$put']>) {
      return parseResponse(client.webhooks.auth[':id_auth'].$put(args, options))
    },
  })
}

export function injectPutWebhooksAuthIdAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks.auth)[':id_auth']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$put']>,
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
    const mutationDefaults = getPutWebhooksAuthIdAuthMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostWebhooksAuthIdAuthMutationKey() {
  return ['webhooks', '/webhooks/auth/:id_auth', 'POST'] as const
}

export function getPostWebhooksAuthIdAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks.auth)[':id_auth']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksAuthIdAuthMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$post']>) {
      return parseResponse(client.webhooks.auth[':id_auth'].$post(args, options))
    },
  })
}

export function injectPostWebhooksAuthIdAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks.auth)[':id_auth']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$post']>,
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
    const mutationDefaults = getPostWebhooksAuthIdAuthMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteWebhooksAuthIdAuthMutationKey() {
  return ['webhooks', '/webhooks/auth/:id_auth', 'DELETE'] as const
}

export function getDeleteWebhooksAuthIdAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks.auth)[':id_auth']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksAuthIdAuthMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$delete']>) {
      return parseResponse(client.webhooks.auth[':id_auth'].$delete(args, options))
    },
  })
}

export function injectDeleteWebhooksAuthIdAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks.auth)[':id_auth']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$delete']>,
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
    const mutationDefaults = getDeleteWebhooksAuthIdAuthMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutWebhooksIdWebhookMutationKey() {
  return ['webhooks', '/webhooks/:id_webhook', 'PUT'] as const
}

export function getPutWebhooksIdWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id_webhook']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksIdWebhookMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id_webhook']['$put']>) {
      return parseResponse(client.webhooks[':id_webhook'].$put(args, options))
    },
  })
}

export function injectPutWebhooksIdWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id_webhook']['$put']>,
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
    const mutationDefaults = getPutWebhooksIdWebhookMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostWebhooksIdWebhookMutationKey() {
  return ['webhooks', '/webhooks/:id_webhook', 'POST'] as const
}

export function getPostWebhooksIdWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id_webhook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksIdWebhookMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id_webhook']['$post']>) {
      return parseResponse(client.webhooks[':id_webhook'].$post(args, options))
    },
  })
}

export function injectPostWebhooksIdWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id_webhook']['$post']>,
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
    const mutationDefaults = getPostWebhooksIdWebhookMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteWebhooksIdWebhookMutationKey() {
  return ['webhooks', '/webhooks/:id_webhook', 'DELETE'] as const
}

export function getDeleteWebhooksIdWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id_webhook']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksIdWebhookMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':id_webhook']['$delete']>) {
      return parseResponse(client.webhooks[':id_webhook'].$delete(args, options))
    },
  })
}

export function injectDeleteWebhooksIdWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id_webhook']['$delete']>,
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
    const mutationDefaults = getDeleteWebhooksIdWebhookMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebhooksIdWebhookAddToDataQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$get']>,
) {
  return ['webhooks', '/webhooks/:id_webhook/add_to_data', args] as const
}

export function getWebhooksIdWebhookAddToDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdWebhookAddToDataQueryKey>
  >({
    queryKey: getWebhooksIdWebhookAddToDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':id_webhook'].add_to_data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksIdWebhookAddToData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIdWebhookAddToDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWebhooksIdWebhookAddToDataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostWebhooksIdWebhookAddToDataMutationKey() {
  return ['webhooks', '/webhooks/:id_webhook/add_to_data', 'POST'] as const
}

export function getPostWebhooksIdWebhookAddToDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksIdWebhookAddToDataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$post']>,
    ) {
      return parseResponse(client.webhooks[':id_webhook'].add_to_data.$post(args, options))
    },
  })
}

export function injectPostWebhooksIdWebhookAddToData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$post']>,
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
    const mutationDefaults = getPostWebhooksIdWebhookAddToDataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteWebhooksIdWebhookAddToDataMutationKey() {
  return ['webhooks', '/webhooks/:id_webhook/add_to_data', 'DELETE'] as const
}

export function getDeleteWebhooksIdWebhookAddToDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksIdWebhookAddToDataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$delete']>,
    ) {
      return parseResponse(client.webhooks[':id_webhook'].add_to_data.$delete(args, options))
    },
  })
}

export function injectDeleteWebhooksIdWebhookAddToData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$delete']>,
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
    const mutationDefaults = getDeleteWebhooksIdWebhookAddToDataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebhooksIdWebhookAddToDataKeyQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$get']>,
) {
  return ['webhooks', '/webhooks/:id_webhook/add_to_data/:key', args] as const
}

export function getWebhooksIdWebhookAddToDataKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdWebhookAddToDataKeyQueryKey>
  >({
    queryKey: getWebhooksIdWebhookAddToDataKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':id_webhook'].add_to_data[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksIdWebhookAddToDataKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIdWebhookAddToDataKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWebhooksIdWebhookAddToDataKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostWebhooksIdWebhookAddToDataKeyMutationKey() {
  return ['webhooks', '/webhooks/:id_webhook/add_to_data/:key', 'POST'] as const
}

export function getPostWebhooksIdWebhookAddToDataKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksIdWebhookAddToDataKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$post']
      >,
    ) {
      return parseResponse(client.webhooks[':id_webhook'].add_to_data[':key'].$post(args, options))
    },
  })
}

export function injectPostWebhooksIdWebhookAddToDataKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$post']>,
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
    const mutationDefaults = getPostWebhooksIdWebhookAddToDataKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteWebhooksIdWebhookAddToDataKeyMutationKey() {
  return ['webhooks', '/webhooks/:id_webhook/add_to_data/:key', 'DELETE'] as const
}

export function getDeleteWebhooksIdWebhookAddToDataKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksIdWebhookAddToDataKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.webhooks[':id_webhook'].add_to_data[':key'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteWebhooksIdWebhookAddToDataKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$delete']>,
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
    const mutationDefaults = getDeleteWebhooksIdWebhookAddToDataKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebhooksIdWebhookLogsQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':id_webhook']['logs']['$get']>,
) {
  return ['webhooks', '/webhooks/:id_webhook/logs', args] as const
}

export function getWebhooksIdWebhookLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':id_webhook']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdWebhookLogsQueryKey>
  >({
    queryKey: getWebhooksIdWebhookLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':id_webhook'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksIdWebhookLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':id_webhook']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id_webhook']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIdWebhookLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWebhooksIdWebhookLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
