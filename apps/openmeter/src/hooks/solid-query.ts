import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1AddonsQueryKey(args: InferRequestType<typeof client.api.v1.addons.$get>) {
  return ['api', '/api/v1/addons', args] as const
}

export function getApiV1AddonsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.addons.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.addons.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.addons.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AddonsQueryKey>
  >({
    queryKey: getApiV1AddonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.addons.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Addons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.addons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.addons.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.addons.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AddonsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AddonsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1AddonsMutationKey() {
  return ['api', '/api/v1/addons', 'POST'] as const
}

export function getPostApiV1AddonsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.addons.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.addons.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AddonsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.addons.$post>) {
      return parseResponse(client.api.v1.addons.$post(args, options))
    },
  })
}

export function createPostApiV1Addons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.addons.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.addons.$post>,
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
    const mutationDefaults = getPostApiV1AddonsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AddonsAddonIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.addons)[':addonId']['$get']>,
) {
  return ['api', '/api/v1/addons/:addonId', args] as const
}

export function getApiV1AddonsAddonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.addons)[':addonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AddonsAddonIdQueryKey>
  >({
    queryKey: getApiV1AddonsAddonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.addons[':addonId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AddonsAddonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.addons)[':addonId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AddonsAddonIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AddonsAddonIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1AddonsAddonIdMutationKey() {
  return ['api', '/api/v1/addons/:addonId', 'PUT'] as const
}

export function getPutApiV1AddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.addons)[':addonId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AddonsAddonIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.addons)[':addonId']['$put']>) {
      return parseResponse(client.api.v1.addons[':addonId'].$put(args, options))
    },
  })
}

export function createPutApiV1AddonsAddonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.addons)[':addonId']['$put']>,
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
    const mutationDefaults = getPutApiV1AddonsAddonIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1AddonsAddonIdMutationKey() {
  return ['api', '/api/v1/addons/:addonId', 'DELETE'] as const
}

export function getDeleteApiV1AddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.addons)[':addonId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AddonsAddonIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.addons)[':addonId']['$delete']>) {
      return parseResponse(client.api.v1.addons[':addonId'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1AddonsAddonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.addons)[':addonId']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1AddonsAddonIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1AddonsAddonIdArchiveMutationKey() {
  return ['api', '/api/v1/addons/:addonId/archive', 'POST'] as const
}

export function getPostApiV1AddonsAddonIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.addons)[':addonId']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AddonsAddonIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.addons)[':addonId']['archive']['$post']>,
    ) {
      return parseResponse(client.api.v1.addons[':addonId'].archive.$post(args, options))
    },
  })
}

export function createPostApiV1AddonsAddonIdArchive<
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
                Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['archive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.addons)[':addonId']['archive']['$post']>,
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
    const mutationDefaults = getPostApiV1AddonsAddonIdArchiveMutationOptions<
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

export function getPostApiV1AddonsAddonIdPublishMutationKey() {
  return ['api', '/api/v1/addons/:addonId/publish', 'POST'] as const
}

export function getPostApiV1AddonsAddonIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.addons)[':addonId']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AddonsAddonIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.addons)[':addonId']['publish']['$post']>,
    ) {
      return parseResponse(client.api.v1.addons[':addonId'].publish.$post(args, options))
    },
  })
}

export function createPostApiV1AddonsAddonIdPublish<
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
                Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['publish']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.addons)[':addonId']['publish']['$post']>,
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
    const mutationDefaults = getPostApiV1AddonsAddonIdPublishMutationOptions<
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

export function getApiV1AppsQueryKey(args: InferRequestType<typeof client.api.v1.apps.$get>) {
  return ['api', '/api/v1/apps', args] as const
}

export function getApiV1AppsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.apps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1AppsQueryKey>
  >({
    queryKey: getApiV1AppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.apps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Apps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.apps.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AppsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AppsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1AppsCustomInvoicingInvoiceIdDraftSynchronizedMutationKey() {
  return ['api', '/api/v1/apps/custom-invoicing/:invoiceId/draft/synchronized', 'POST'] as const
}

export function getPostApiV1AppsCustomInvoicingInvoiceIdDraftSynchronizedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['draft']['synchronized']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['draft']['synchronized']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppsCustomInvoicingInvoiceIdDraftSynchronizedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['draft']['synchronized']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.apps['custom-invoicing'][':invoiceId'].draft.synchronized.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1AppsCustomInvoicingInvoiceIdDraftSynchronized<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['draft']['synchronized']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['draft']['synchronized']['$post']
          >,
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
    const mutationDefaults =
      getPostApiV1AppsCustomInvoicingInvoiceIdDraftSynchronizedMutationOptions<
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

export function getPostApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronizedMutationKey() {
  return ['api', '/api/v1/apps/custom-invoicing/:invoiceId/issuing/synchronized', 'POST'] as const
}

export function getPostApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronizedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['issuing']['synchronized']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['issuing']['synchronized']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronizedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['issuing']['synchronized']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.apps['custom-invoicing'][':invoiceId'].issuing.synchronized.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronized<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['issuing']['synchronized']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['issuing']['synchronized']['$post']
          >,
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
    const mutationDefaults =
      getPostApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronizedMutationOptions<
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

export function getPostApiV1AppsCustomInvoicingInvoiceIdPaymentStatusMutationKey() {
  return ['api', '/api/v1/apps/custom-invoicing/:invoiceId/payment/status', 'POST'] as const
}

export function getPostApiV1AppsCustomInvoicingInvoiceIdPaymentStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['payment']['status']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['payment']['status']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppsCustomInvoicingInvoiceIdPaymentStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['payment']['status']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.apps['custom-invoicing'][':invoiceId'].payment.status.$post(args, options),
      )
    },
  })
}

export function createPostApiV1AppsCustomInvoicingInvoiceIdPaymentStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['payment']['status']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['payment']['status']['$post']
          >,
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
    const mutationDefaults = getPostApiV1AppsCustomInvoicingInvoiceIdPaymentStatusMutationOptions<
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

export function getApiV1AppsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.apps)[':id']['$get']>,
) {
  return ['api', '/api/v1/apps/:id', args] as const
}

export function getApiV1AppsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.apps)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppsIdQueryKey>
  >({
    queryKey: getApiV1AppsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.apps[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1AppsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.apps)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AppsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AppsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1AppsIdMutationKey() {
  return ['api', '/api/v1/apps/:id', 'PUT'] as const
}

export function getPutApiV1AppsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.apps)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AppsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.apps)[':id']['$put']>) {
      return parseResponse(client.api.v1.apps[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1AppsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.apps)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1AppsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1AppsIdMutationKey() {
  return ['api', '/api/v1/apps/:id', 'DELETE'] as const
}

export function getDeleteApiV1AppsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.apps)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AppsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.apps)[':id']['$delete']>) {
      return parseResponse(client.api.v1.apps[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1AppsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.apps)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1AppsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApiV1AppsIdStripeApiKeyMutationKey() {
  return ['api', '/api/v1/apps/:id/stripe/api-key', 'PUT'] as const
}

export function getPutApiV1AppsIdStripeApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['stripe']['api-key']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.apps)[':id']['stripe']['api-key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AppsIdStripeApiKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.apps)[':id']['stripe']['api-key']['$put']>,
    ) {
      return parseResponse(client.api.v1.apps[':id'].stripe['api-key'].$put(args, options))
    },
  })
}

export function createPutApiV1AppsIdStripeApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.apps)[':id']['stripe']['api-key']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.apps)[':id']['stripe']['api-key']['$put']>,
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
    const mutationDefaults = getPutApiV1AppsIdStripeApiKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1AppsIdStripeWebhookMutationKey() {
  return ['api', '/api/v1/apps/:id/stripe/webhook', 'POST'] as const
}

export function getPostApiV1AppsIdStripeWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['stripe']['webhook']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.apps)[':id']['stripe']['webhook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppsIdStripeWebhookMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.apps)[':id']['stripe']['webhook']['$post']>,
    ) {
      return parseResponse(client.api.v1.apps[':id'].stripe.webhook.$post(args, options))
    },
  })
}

export function createPostApiV1AppsIdStripeWebhook<
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
                Awaited<
                  ReturnType<(typeof client.api.v1.apps)[':id']['stripe']['webhook']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.apps)[':id']['stripe']['webhook']['$post']>,
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
    const mutationDefaults = getPostApiV1AppsIdStripeWebhookMutationOptions<
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

export function getApiV1BillingCustomersQueryKey(
  args: InferRequestType<typeof client.api.v1.billing.customers.$get>,
) {
  return ['api', '/api/v1/billing/customers', args] as const
}

export function getApiV1BillingCustomersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.customers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.billing.customers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.customers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillingCustomersQueryKey>
  >({
    queryKey: getApiV1BillingCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.billing.customers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1BillingCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.customers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.billing.customers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.customers.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1BillingCustomersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1BillingCustomersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1BillingCustomersCustomerIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>,
) {
  return ['api', '/api/v1/billing/customers/:customerId', args] as const
}

export function getApiV1BillingCustomersCustomerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillingCustomersCustomerIdQueryKey>
  >({
    queryKey: getApiV1BillingCustomersCustomerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.billing.customers[':customerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1BillingCustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1BillingCustomersCustomerIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1BillingCustomersCustomerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1BillingCustomersCustomerIdMutationKey() {
  return ['api', '/api/v1/billing/customers/:customerId', 'PUT'] as const
}

export function getPutApiV1BillingCustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1BillingCustomersCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$put']>,
    ) {
      return parseResponse(client.api.v1.billing.customers[':customerId'].$put(args, options))
    },
  })
}

export function createPutApiV1BillingCustomersCustomerId<
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
                Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$put']>,
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
    const mutationDefaults = getPutApiV1BillingCustomersCustomerIdMutationOptions<
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

export function getDeleteApiV1BillingCustomersCustomerIdMutationKey() {
  return ['api', '/api/v1/billing/customers/:customerId', 'DELETE'] as const
}

export function getDeleteApiV1BillingCustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1BillingCustomersCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.billing.customers[':customerId'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1BillingCustomersCustomerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1BillingCustomersCustomerIdMutationOptions<
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

export function getPostApiV1BillingCustomersCustomerIdInvoicesPendingLinesMutationKey() {
  return ['api', '/api/v1/billing/customers/:customerId/invoices/pending-lines', 'POST'] as const
}

export function getPostApiV1BillingCustomersCustomerIdInvoicesPendingLinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.billing.customers)[':customerId']['invoices']['pending-lines']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.billing.customers)[':customerId']['invoices']['pending-lines']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BillingCustomersCustomerIdInvoicesPendingLinesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.billing.customers)[':customerId']['invoices']['pending-lines']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.billing.customers[':customerId'].invoices['pending-lines'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1BillingCustomersCustomerIdInvoicesPendingLines<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.billing.customers)[':customerId']['invoices']['pending-lines']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.billing.customers)[':customerId']['invoices']['pending-lines']['$post']
          >,
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
    const mutationDefaults =
      getPostApiV1BillingCustomersCustomerIdInvoicesPendingLinesMutationOptions<
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

export function getPostApiV1BillingCustomersCustomerIdInvoicesSimulateMutationKey() {
  return ['api', '/api/v1/billing/customers/:customerId/invoices/simulate', 'POST'] as const
}

export function getPostApiV1BillingCustomersCustomerIdInvoicesSimulateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.billing.customers)[':customerId']['invoices']['simulate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.billing.customers)[':customerId']['invoices']['simulate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BillingCustomersCustomerIdInvoicesSimulateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.billing.customers)[':customerId']['invoices']['simulate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.billing.customers[':customerId'].invoices.simulate.$post(args, options),
      )
    },
  })
}

export function createPostApiV1BillingCustomersCustomerIdInvoicesSimulate<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.billing.customers)[':customerId']['invoices']['simulate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.billing.customers)[':customerId']['invoices']['simulate']['$post']
          >,
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
    const mutationDefaults = getPostApiV1BillingCustomersCustomerIdInvoicesSimulateMutationOptions<
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

export function getApiV1BillingInvoicesQueryKey(
  args: InferRequestType<typeof client.api.v1.billing.invoices.$get>,
) {
  return ['api', '/api/v1/billing/invoices', args] as const
}

export function getApiV1BillingInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.billing.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.invoices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillingInvoicesQueryKey>
  >({
    queryKey: getApiV1BillingInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.billing.invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1BillingInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.billing.invoices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.invoices.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1BillingInvoicesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1BillingInvoicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1BillingInvoicesInvoiceMutationKey() {
  return ['api', '/api/v1/billing/invoices/invoice', 'POST'] as const
}

export function getPostApiV1BillingInvoicesInvoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.billing.invoices.invoice.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.billing.invoices.invoice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BillingInvoicesInvoiceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.billing.invoices.invoice.$post>) {
      return parseResponse(client.api.v1.billing.invoices.invoice.$post(args, options))
    },
  })
}

export function createPostApiV1BillingInvoicesInvoice<
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
                Awaited<ReturnType<typeof client.api.v1.billing.invoices.invoice.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.billing.invoices.invoice.$post>,
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
    const mutationDefaults = getPostApiV1BillingInvoicesInvoiceMutationOptions<
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

export function getApiV1BillingInvoicesInvoiceIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>,
) {
  return ['api', '/api/v1/billing/invoices/:invoiceId', args] as const
}

export function getApiV1BillingInvoicesInvoiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillingInvoicesInvoiceIdQueryKey>
  >({
    queryKey: getApiV1BillingInvoicesInvoiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.billing.invoices[':invoiceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1BillingInvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1BillingInvoicesInvoiceIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1BillingInvoicesInvoiceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1BillingInvoicesInvoiceIdMutationKey() {
  return ['api', '/api/v1/billing/invoices/:invoiceId', 'PUT'] as const
}

export function getPutApiV1BillingInvoicesInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1BillingInvoicesInvoiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$put']>,
    ) {
      return parseResponse(client.api.v1.billing.invoices[':invoiceId'].$put(args, options))
    },
  })
}

export function createPutApiV1BillingInvoicesInvoiceId<
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
                Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$put']>,
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
    const mutationDefaults = getPutApiV1BillingInvoicesInvoiceIdMutationOptions<
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

export function getDeleteApiV1BillingInvoicesInvoiceIdMutationKey() {
  return ['api', '/api/v1/billing/invoices/:invoiceId', 'DELETE'] as const
}

export function getDeleteApiV1BillingInvoicesInvoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1BillingInvoicesInvoiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.billing.invoices[':invoiceId'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1BillingInvoicesInvoiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1BillingInvoicesInvoiceIdMutationOptions<
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

export function getPostApiV1BillingInvoicesInvoiceIdAdvanceMutationKey() {
  return ['api', '/api/v1/billing/invoices/:invoiceId/advance', 'POST'] as const
}

export function getPostApiV1BillingInvoicesInvoiceIdAdvanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['advance']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['advance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BillingInvoicesInvoiceIdAdvanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.billing.invoices)[':invoiceId']['advance']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.billing.invoices[':invoiceId'].advance.$post(args, options),
      )
    },
  })
}

export function createPostApiV1BillingInvoicesInvoiceIdAdvance<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.billing.invoices)[':invoiceId']['advance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.billing.invoices)[':invoiceId']['advance']['$post']
          >,
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
    const mutationDefaults = getPostApiV1BillingInvoicesInvoiceIdAdvanceMutationOptions<
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

export function getPostApiV1BillingInvoicesInvoiceIdApproveMutationKey() {
  return ['api', '/api/v1/billing/invoices/:invoiceId/approve', 'POST'] as const
}

export function getPostApiV1BillingInvoicesInvoiceIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['approve']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BillingInvoicesInvoiceIdApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.billing.invoices)[':invoiceId']['approve']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.billing.invoices[':invoiceId'].approve.$post(args, options),
      )
    },
  })
}

export function createPostApiV1BillingInvoicesInvoiceIdApprove<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.billing.invoices)[':invoiceId']['approve']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.billing.invoices)[':invoiceId']['approve']['$post']
          >,
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
    const mutationDefaults = getPostApiV1BillingInvoicesInvoiceIdApproveMutationOptions<
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

export function getPostApiV1BillingInvoicesInvoiceIdRetryMutationKey() {
  return ['api', '/api/v1/billing/invoices/:invoiceId/retry', 'POST'] as const
}

export function getPostApiV1BillingInvoicesInvoiceIdRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['retry']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BillingInvoicesInvoiceIdRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.billing.invoices)[':invoiceId']['retry']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.billing.invoices[':invoiceId'].retry.$post(args, options))
    },
  })
}

export function createPostApiV1BillingInvoicesInvoiceIdRetry<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.billing.invoices)[':invoiceId']['retry']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['retry']['$post']>,
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
    const mutationDefaults = getPostApiV1BillingInvoicesInvoiceIdRetryMutationOptions<
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

export function getPostApiV1BillingInvoicesInvoiceIdSnapshotQuantitiesMutationKey() {
  return ['api', '/api/v1/billing/invoices/:invoiceId/snapshot-quantities', 'POST'] as const
}

export function getPostApiV1BillingInvoicesInvoiceIdSnapshotQuantitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.billing.invoices)[':invoiceId']['snapshot-quantities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.billing.invoices)[':invoiceId']['snapshot-quantities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BillingInvoicesInvoiceIdSnapshotQuantitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.billing.invoices)[':invoiceId']['snapshot-quantities']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.billing.invoices[':invoiceId']['snapshot-quantities'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1BillingInvoicesInvoiceIdSnapshotQuantities<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.billing.invoices)[':invoiceId']['snapshot-quantities']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.billing.invoices)[':invoiceId']['snapshot-quantities']['$post']
          >,
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
    const mutationDefaults = getPostApiV1BillingInvoicesInvoiceIdSnapshotQuantitiesMutationOptions<
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

export function getPostApiV1BillingInvoicesInvoiceIdTaxesRecalculateMutationKey() {
  return ['api', '/api/v1/billing/invoices/:invoiceId/taxes/recalculate', 'POST'] as const
}

export function getPostApiV1BillingInvoicesInvoiceIdTaxesRecalculateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.billing.invoices)[':invoiceId']['taxes']['recalculate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.billing.invoices)[':invoiceId']['taxes']['recalculate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BillingInvoicesInvoiceIdTaxesRecalculateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.billing.invoices)[':invoiceId']['taxes']['recalculate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.billing.invoices[':invoiceId'].taxes.recalculate.$post(args, options),
      )
    },
  })
}

export function createPostApiV1BillingInvoicesInvoiceIdTaxesRecalculate<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.billing.invoices)[':invoiceId']['taxes']['recalculate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.billing.invoices)[':invoiceId']['taxes']['recalculate']['$post']
          >,
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
    const mutationDefaults = getPostApiV1BillingInvoicesInvoiceIdTaxesRecalculateMutationOptions<
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

export function getPostApiV1BillingInvoicesInvoiceIdVoidMutationKey() {
  return ['api', '/api/v1/billing/invoices/:invoiceId/void', 'POST'] as const
}

export function getPostApiV1BillingInvoicesInvoiceIdVoidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['void']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['void']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BillingInvoicesInvoiceIdVoidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.billing.invoices)[':invoiceId']['void']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.billing.invoices[':invoiceId'].void.$post(args, options))
    },
  })
}

export function createPostApiV1BillingInvoicesInvoiceIdVoid<
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
                Awaited<
                  ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['void']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['void']['$post']>,
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
    const mutationDefaults = getPostApiV1BillingInvoicesInvoiceIdVoidMutationOptions<
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

export function getApiV1BillingProfilesQueryKey(
  args: InferRequestType<typeof client.api.v1.billing.profiles.$get>,
) {
  return ['api', '/api/v1/billing/profiles', args] as const
}

export function getApiV1BillingProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.profiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.billing.profiles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.profiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillingProfilesQueryKey>
  >({
    queryKey: getApiV1BillingProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.billing.profiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1BillingProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.profiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.billing.profiles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.profiles.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1BillingProfilesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1BillingProfilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1BillingProfilesMutationKey() {
  return ['api', '/api/v1/billing/profiles', 'POST'] as const
}

export function getPostApiV1BillingProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.profiles.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.billing.profiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BillingProfilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.billing.profiles.$post>) {
      return parseResponse(client.api.v1.billing.profiles.$post(args, options))
    },
  })
}

export function createPostApiV1BillingProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.profiles.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.billing.profiles.$post>,
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
    const mutationDefaults = getPostApiV1BillingProfilesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1BillingProfilesIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$get']>,
) {
  return ['api', '/api/v1/billing/profiles/:id', args] as const
}

export function getApiV1BillingProfilesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillingProfilesIdQueryKey>
  >({
    queryKey: getApiV1BillingProfilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.billing.profiles[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1BillingProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1BillingProfilesIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1BillingProfilesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1BillingProfilesIdMutationKey() {
  return ['api', '/api/v1/billing/profiles/:id', 'PUT'] as const
}

export function getPutApiV1BillingProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1BillingProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.billing.profiles[':id'].$put(args, options))
    },
  })
}

export function createPutApiV1BillingProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$put']>,
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
    const mutationDefaults = getPutApiV1BillingProfilesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1BillingProfilesIdMutationKey() {
  return ['api', '/api/v1/billing/profiles/:id', 'DELETE'] as const
}

export function getDeleteApiV1BillingProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1BillingProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.billing.profiles[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1BillingProfilesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1BillingProfilesIdMutationOptions<
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

export function getApiV1CustomersQueryKey(
  args: InferRequestType<typeof client.api.v1.customers.$get>,
) {
  return ['api', '/api/v1/customers', args] as const
}

export function getApiV1CustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.customers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomersQueryKey>
  >({
    queryKey: getApiV1CustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.customers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.customers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customers.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CustomersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1CustomersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1CustomersMutationKey() {
  return ['api', '/api/v1/customers', 'POST'] as const
}

export function getPostApiV1CustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.customers.$post>) {
      return parseResponse(client.api.v1.customers.$post(args, options))
    },
  })
}

export function createPostApiV1Customers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.customers.$post>,
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
    const mutationDefaults = getPostApiV1CustomersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1CustomersCustomerIdOrKeyQueryKey(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey', args] as const
}

export function getApiV1CustomersCustomerIdOrKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomersCustomerIdOrKeyQueryKey>
  >({
    queryKey: getApiV1CustomersCustomerIdOrKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.customers[':customerIdOrKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CustomersCustomerIdOrKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CustomersCustomerIdOrKeyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CustomersCustomerIdOrKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1CustomersCustomerIdOrKeyMutationKey() {
  return ['api', '/api/v1/customers/:customerIdOrKey', 'PUT'] as const
}

export function getPutApiV1CustomersCustomerIdOrKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1CustomersCustomerIdOrKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$put']>,
    ) {
      return parseResponse(client.api.v1.customers[':customerIdOrKey'].$put(args, options))
    },
  })
}

export function createPutApiV1CustomersCustomerIdOrKey<
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
                Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$put']>,
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
    const mutationDefaults = getPutApiV1CustomersCustomerIdOrKeyMutationOptions<
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

export function getDeleteApiV1CustomersCustomerIdOrKeyMutationKey() {
  return ['api', '/api/v1/customers/:customerIdOrKey', 'DELETE'] as const
}

export function getDeleteApiV1CustomersCustomerIdOrKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CustomersCustomerIdOrKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$delete']>,
    ) {
      return parseResponse(client.api.v1.customers[':customerIdOrKey'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1CustomersCustomerIdOrKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1CustomersCustomerIdOrKeyMutationOptions<
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

export function getApiV1CustomersCustomerIdOrKeyAccessQueryKey(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey/access', args] as const
}

export function getApiV1CustomersCustomerIdOrKeyAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomersCustomerIdOrKeyAccessQueryKey>
  >({
    queryKey: getApiV1CustomersCustomerIdOrKeyAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.customers[':customerIdOrKey'].access.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CustomersCustomerIdOrKeyAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CustomersCustomerIdOrKeyAccessQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CustomersCustomerIdOrKeyAccessQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1CustomersCustomerIdOrKeyAppsQueryKey(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey/apps', args] as const
}

export function getApiV1CustomersCustomerIdOrKeyAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomersCustomerIdOrKeyAppsQueryKey>
  >({
    queryKey: getApiV1CustomersCustomerIdOrKeyAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.customers[':customerIdOrKey'].apps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CustomersCustomerIdOrKeyApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CustomersCustomerIdOrKeyAppsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CustomersCustomerIdOrKeyAppsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1CustomersCustomerIdOrKeyAppsMutationKey() {
  return ['api', '/api/v1/customers/:customerIdOrKey/apps', 'PUT'] as const
}

export function getPutApiV1CustomersCustomerIdOrKeyAppsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1CustomersCustomerIdOrKeyAppsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$put']>,
    ) {
      return parseResponse(client.api.v1.customers[':customerIdOrKey'].apps.$put(args, options))
    },
  })
}

export function createPutApiV1CustomersCustomerIdOrKeyApps<
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
                Awaited<
                  ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$put']>,
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
    const mutationDefaults = getPutApiV1CustomersCustomerIdOrKeyAppsMutationOptions<
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

export function getDeleteApiV1CustomersCustomerIdOrKeyAppsAppIdMutationKey() {
  return ['api', '/api/v1/customers/:customerIdOrKey/apps/:appId', 'DELETE'] as const
}

export function getDeleteApiV1CustomersCustomerIdOrKeyAppsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.customers)[':customerIdOrKey']['apps'][':appId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.customers)[':customerIdOrKey']['apps'][':appId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CustomersCustomerIdOrKeyAppsAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.customers)[':customerIdOrKey']['apps'][':appId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.customers[':customerIdOrKey'].apps[':appId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1CustomersCustomerIdOrKeyAppsAppId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.customers)[':customerIdOrKey']['apps'][':appId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.customers)[':customerIdOrKey']['apps'][':appId']['$delete']
          >,
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
    const mutationDefaults = getDeleteApiV1CustomersCustomerIdOrKeyAppsAppIdMutationOptions<
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

export function getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
  >,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey/entitlements/:featureKey/value', args] as const
}

export function getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueQueryKey>
  >({
    queryKey: getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.customers[':customerIdOrKey'].entitlements[':featureKey'].value.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1CustomersCustomerIdOrKeyStripeQueryKey(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey/stripe', args] as const
}

export function getApiV1CustomersCustomerIdOrKeyStripeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomersCustomerIdOrKeyStripeQueryKey>
  >({
    queryKey: getApiV1CustomersCustomerIdOrKeyStripeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.customers[':customerIdOrKey'].stripe.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CustomersCustomerIdOrKeyStripe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CustomersCustomerIdOrKeyStripeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CustomersCustomerIdOrKeyStripeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1CustomersCustomerIdOrKeyStripeMutationKey() {
  return ['api', '/api/v1/customers/:customerIdOrKey/stripe', 'PUT'] as const
}

export function getPutApiV1CustomersCustomerIdOrKeyStripeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1CustomersCustomerIdOrKeyStripeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$put']
      >,
    ) {
      return parseResponse(client.api.v1.customers[':customerIdOrKey'].stripe.$put(args, options))
    },
  })
}

export function createPutApiV1CustomersCustomerIdOrKeyStripe<
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
                Awaited<
                  ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$put']>,
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
    const mutationDefaults = getPutApiV1CustomersCustomerIdOrKeyStripeMutationOptions<
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

export function getPostApiV1CustomersCustomerIdOrKeyStripePortalMutationKey() {
  return ['api', '/api/v1/customers/:customerIdOrKey/stripe/portal', 'POST'] as const
}

export function getPostApiV1CustomersCustomerIdOrKeyStripePortalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['portal']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['portal']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CustomersCustomerIdOrKeyStripePortalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['portal']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.customers[':customerIdOrKey'].stripe.portal.$post(args, options),
      )
    },
  })
}

export function createPostApiV1CustomersCustomerIdOrKeyStripePortal<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['portal']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['portal']['$post']
          >,
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
    const mutationDefaults = getPostApiV1CustomersCustomerIdOrKeyStripePortalMutationOptions<
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

export function getApiV1CustomersCustomerIdOrKeySubscriptionsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']
  >,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey/subscriptions', args] as const
}

export function getApiV1CustomersCustomerIdOrKeySubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomersCustomerIdOrKeySubscriptionsQueryKey>
  >({
    queryKey: getApiV1CustomersCustomerIdOrKeySubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.customers[':customerIdOrKey'].subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CustomersCustomerIdOrKeySubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CustomersCustomerIdOrKeySubscriptionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CustomersCustomerIdOrKeySubscriptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1DebugMetricsQueryKey() {
  return ['api', '/api/v1/debug/metrics'] as const
}

export function getApiV1DebugMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.debug.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.debug.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DebugMetricsQueryKey>
  >({
    queryKey: getApiV1DebugMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.debug.metrics.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1DebugMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.debug.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.debug.metrics.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1DebugMetricsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1DebugMetricsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1EntitlementsQueryKey(
  args: InferRequestType<typeof client.api.v1.entitlements.$get>,
) {
  return ['api', '/api/v1/entitlements', args] as const
}

export function getApiV1EntitlementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.entitlements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.entitlements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.entitlements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EntitlementsQueryKey>
  >({
    queryKey: getApiV1EntitlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.entitlements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Entitlements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.entitlements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.entitlements.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.entitlements.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1EntitlementsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1EntitlementsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1EntitlementsEntitlementIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>,
) {
  return ['api', '/api/v1/entitlements/:entitlementId', args] as const
}

export function getApiV1EntitlementsEntitlementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EntitlementsEntitlementIdQueryKey>
  >({
    queryKey: getApiV1EntitlementsEntitlementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.entitlements[':entitlementId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1EntitlementsEntitlementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1EntitlementsEntitlementIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1EntitlementsEntitlementIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1EventsQueryKey(args: InferRequestType<typeof client.api.v1.events.$get>) {
  return ['api', '/api/v1/events', args] as const
}

export function getApiV1EventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EventsQueryKey>
  >({
    queryKey: getApiV1EventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.events.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1EventsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1EventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1EventsMutationKey() {
  return ['api', '/api/v1/events', 'POST'] as const
}

export function getPostApiV1EventsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1EventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.events.$post>) {
      return parseResponse(client.api.v1.events.$post(args, options))
    },
  })
}

export function createPostApiV1Events<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.events.$post>,
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
    const mutationDefaults = getPostApiV1EventsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1FeaturesQueryKey(
  args: InferRequestType<typeof client.api.v1.features.$get>,
) {
  return ['api', '/api/v1/features', args] as const
}

export function getApiV1FeaturesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.features.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.features.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.features.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FeaturesQueryKey>
  >({
    queryKey: getApiV1FeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.features.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Features<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.features.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.features.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.features.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1FeaturesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1FeaturesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1FeaturesMutationKey() {
  return ['api', '/api/v1/features', 'POST'] as const
}

export function getPostApiV1FeaturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.features.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.features.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1FeaturesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.features.$post>) {
      return parseResponse(client.api.v1.features.$post(args, options))
    },
  })
}

export function createPostApiV1Features<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.features.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.features.$post>,
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
    const mutationDefaults = getPostApiV1FeaturesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1FeaturesFeatureIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.features)[':featureId']['$get']>,
) {
  return ['api', '/api/v1/features/:featureId', args] as const
}

export function getApiV1FeaturesFeatureIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.features)[':featureId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.features)[':featureId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.features)[':featureId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FeaturesFeatureIdQueryKey>
  >({
    queryKey: getApiV1FeaturesFeatureIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.features[':featureId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1FeaturesFeatureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.features)[':featureId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.features)[':featureId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.features)[':featureId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1FeaturesFeatureIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1FeaturesFeatureIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1FeaturesFeatureIdMutationKey() {
  return ['api', '/api/v1/features/:featureId', 'DELETE'] as const
}

export function getDeleteApiV1FeaturesFeatureIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.features)[':featureId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.features)[':featureId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1FeaturesFeatureIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.features)[':featureId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.features[':featureId'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1FeaturesFeatureId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.features)[':featureId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.features)[':featureId']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1FeaturesFeatureIdMutationOptions<
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

export function getApiV1GrantsQueryKey(args: InferRequestType<typeof client.api.v1.grants.$get>) {
  return ['api', '/api/v1/grants', args] as const
}

export function getApiV1GrantsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.grants.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.grants.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.grants.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GrantsQueryKey>
  >({
    queryKey: getApiV1GrantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.grants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Grants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.grants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.grants.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.grants.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1GrantsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1GrantsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiV1GrantsGrantIdMutationKey() {
  return ['api', '/api/v1/grants/:grantId', 'DELETE'] as const
}

export function getDeleteApiV1GrantsGrantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.grants)[':grantId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.grants)[':grantId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1GrantsGrantIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.grants)[':grantId']['$delete']>) {
      return parseResponse(client.api.v1.grants[':grantId'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1GrantsGrantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.grants)[':grantId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.grants)[':grantId']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1GrantsGrantIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1InfoCurrenciesQueryKey() {
  return ['api', '/api/v1/info/currencies'] as const
}

export function getApiV1InfoCurrenciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.currencies.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.currencies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InfoCurrenciesQueryKey>
  >({
    queryKey: getApiV1InfoCurrenciesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.info.currencies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1InfoCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.currencies.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1InfoCurrenciesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1InfoCurrenciesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1InfoProgressIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.info.progress)[':id']['$get']>,
) {
  return ['api', '/api/v1/info/progress/:id', args] as const
}

export function getApiV1InfoProgressIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.info.progress)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.info.progress)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.info.progress)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InfoProgressIdQueryKey>
  >({
    queryKey: getApiV1InfoProgressIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.info.progress[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1InfoProgressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.info.progress)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.info.progress)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.info.progress)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1InfoProgressIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1InfoProgressIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1MarketplaceListingsQueryKey(
  args: InferRequestType<typeof client.api.v1.marketplace.listings.$get>,
) {
  return ['api', '/api/v1/marketplace/listings', args] as const
}

export function getApiV1MarketplaceListingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.marketplace.listings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.marketplace.listings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.marketplace.listings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MarketplaceListingsQueryKey>
  >({
    queryKey: getApiV1MarketplaceListingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.marketplace.listings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1MarketplaceListings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.marketplace.listings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.marketplace.listings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.marketplace.listings.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MarketplaceListingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MarketplaceListingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1MarketplaceListingsTypeQueryKey(
  args: InferRequestType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>,
) {
  return ['api', '/api/v1/marketplace/listings/:type', args] as const
}

export function getApiV1MarketplaceListingsTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MarketplaceListingsTypeQueryKey>
  >({
    queryKey: getApiV1MarketplaceListingsTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.marketplace.listings[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1MarketplaceListingsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MarketplaceListingsTypeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MarketplaceListingsTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1MarketplaceListingsTypeInstallMutationKey() {
  return ['api', '/api/v1/marketplace/listings/:type/install', 'POST'] as const
}

export function getPostApiV1MarketplaceListingsTypeInstallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.marketplace.listings)[':type']['install']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.marketplace.listings)[':type']['install']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MarketplaceListingsTypeInstallMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.marketplace.listings)[':type']['install']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.marketplace.listings[':type'].install.$post(args, options))
    },
  })
}

export function createPostApiV1MarketplaceListingsTypeInstall<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.marketplace.listings)[':type']['install']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.marketplace.listings)[':type']['install']['$post']
          >,
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
    const mutationDefaults = getPostApiV1MarketplaceListingsTypeInstallMutationOptions<
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

export function getPostApiV1MarketplaceListingsTypeInstallApikeyMutationKey() {
  return ['api', '/api/v1/marketplace/listings/:type/install/apikey', 'POST'] as const
}

export function getPostApiV1MarketplaceListingsTypeInstallApikeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.marketplace.listings)[':type']['install']['apikey']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.marketplace.listings)[':type']['install']['apikey']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MarketplaceListingsTypeInstallApikeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.marketplace.listings)[':type']['install']['apikey']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.marketplace.listings[':type'].install.apikey.$post(args, options),
      )
    },
  })
}

export function createPostApiV1MarketplaceListingsTypeInstallApikey<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.marketplace.listings)[':type']['install']['apikey']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.marketplace.listings)[':type']['install']['apikey']['$post']
          >,
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
    const mutationDefaults = getPostApiV1MarketplaceListingsTypeInstallApikeyMutationOptions<
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

export function getApiV1MarketplaceListingsTypeInstallOauth2QueryKey(
  args: InferRequestType<
    (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
  >,
) {
  return ['api', '/api/v1/marketplace/listings/:type/install/oauth2', args] as const
}

export function getApiV1MarketplaceListingsTypeInstallOauth2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MarketplaceListingsTypeInstallOauth2QueryKey>
  >({
    queryKey: getApiV1MarketplaceListingsTypeInstallOauth2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.marketplace.listings[':type'].install.oauth2.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1MarketplaceListingsTypeInstallOauth2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MarketplaceListingsTypeInstallOauth2QueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MarketplaceListingsTypeInstallOauth2QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
  >,
) {
  return ['api', '/api/v1/marketplace/listings/:type/install/oauth2/authorize', args] as const
}

export function getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeQueryKey>
  >({
    queryKey: getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.marketplace.listings[':type'].install.oauth2.authorize.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1MarketplaceListingsTypeInstallOauth2Authorize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1MetersQueryKey(args: InferRequestType<typeof client.api.v1.meters.$get>) {
  return ['api', '/api/v1/meters', args] as const
}

export function getApiV1MetersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.meters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.meters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.meters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetersQueryKey>
  >({
    queryKey: getApiV1MetersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.meters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Meters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.meters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.meters.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.meters.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MetersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1MetersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1MetersMutationKey() {
  return ['api', '/api/v1/meters', 'POST'] as const
}

export function getPostApiV1MetersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.meters.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.meters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MetersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.meters.$post>) {
      return parseResponse(client.api.v1.meters.$post(args, options))
    },
  })
}

export function createPostApiV1Meters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.meters.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.meters.$post>,
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
    const mutationDefaults = getPostApiV1MetersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1MetersMeterIdOrSlugQueryKey(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>,
) {
  return ['api', '/api/v1/meters/:meterIdOrSlug', args] as const
}

export function getApiV1MetersMeterIdOrSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetersMeterIdOrSlugQueryKey>
  >({
    queryKey: getApiV1MetersMeterIdOrSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.meters[':meterIdOrSlug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1MetersMeterIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MetersMeterIdOrSlugQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MetersMeterIdOrSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1MetersMeterIdOrSlugMutationKey() {
  return ['api', '/api/v1/meters/:meterIdOrSlug', 'PUT'] as const
}

export function getPutApiV1MetersMeterIdOrSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1MetersMeterIdOrSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$put']>,
    ) {
      return parseResponse(client.api.v1.meters[':meterIdOrSlug'].$put(args, options))
    },
  })
}

export function createPutApiV1MetersMeterIdOrSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$put']>,
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
    const mutationDefaults = getPutApiV1MetersMeterIdOrSlugMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1MetersMeterIdOrSlugMutationKey() {
  return ['api', '/api/v1/meters/:meterIdOrSlug', 'DELETE'] as const
}

export function getDeleteApiV1MetersMeterIdOrSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1MetersMeterIdOrSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$delete']>,
    ) {
      return parseResponse(client.api.v1.meters[':meterIdOrSlug'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1MetersMeterIdOrSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1MetersMeterIdOrSlugMutationOptions<
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

export function getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
  >,
) {
  return ['api', '/api/v1/meters/:meterIdOrSlug/group-by/:groupByKey/values', args] as const
}

export function getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesQueryKey>
  >({
    queryKey: getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.meters[':meterIdOrSlug']['group-by'][':groupByKey'].values.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1MetersMeterIdOrSlugGroupByGroupByKeyValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1MetersMeterIdOrSlugQueryQueryKey(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>,
) {
  return ['api', '/api/v1/meters/:meterIdOrSlug/query', args] as const
}

export function getApiV1MetersMeterIdOrSlugQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetersMeterIdOrSlugQueryQueryKey>
  >({
    queryKey: getApiV1MetersMeterIdOrSlugQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.meters[':meterIdOrSlug'].query.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1MetersMeterIdOrSlugQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MetersMeterIdOrSlugQueryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MetersMeterIdOrSlugQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1MetersMeterIdOrSlugQueryMutationKey() {
  return ['api', '/api/v1/meters/:meterIdOrSlug/query', 'POST'] as const
}

export function getPostApiV1MetersMeterIdOrSlugQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MetersMeterIdOrSlugQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$post']>,
    ) {
      return parseResponse(client.api.v1.meters[':meterIdOrSlug'].query.$post(args, options))
    },
  })
}

export function createPostApiV1MetersMeterIdOrSlugQuery<
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
                Awaited<
                  ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$post']>,
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
    const mutationDefaults = getPostApiV1MetersMeterIdOrSlugQueryMutationOptions<
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

export function getApiV1MetersMeterIdOrSlugSubjectsQueryKey(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>,
) {
  return ['api', '/api/v1/meters/:meterIdOrSlug/subjects', args] as const
}

export function getApiV1MetersMeterIdOrSlugSubjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetersMeterIdOrSlugSubjectsQueryKey>
  >({
    queryKey: getApiV1MetersMeterIdOrSlugSubjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.meters[':meterIdOrSlug'].subjects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1MetersMeterIdOrSlugSubjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1MetersMeterIdOrSlugSubjectsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MetersMeterIdOrSlugSubjectsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NotificationChannelsQueryKey(
  args: InferRequestType<typeof client.api.v1.notification.channels.$get>,
) {
  return ['api', '/api/v1/notification/channels', args] as const
}

export function getApiV1NotificationChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.channels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.notification.channels.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.channels.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationChannelsQueryKey>
  >({
    queryKey: getApiV1NotificationChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.notification.channels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NotificationChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.channels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.notification.channels.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.channels.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1NotificationChannelsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1NotificationChannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NotificationChannelsMutationKey() {
  return ['api', '/api/v1/notification/channels', 'POST'] as const
}

export function getPostApiV1NotificationChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.channels.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.notification.channels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NotificationChannelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.notification.channels.$post>) {
      return parseResponse(client.api.v1.notification.channels.$post(args, options))
    },
  })
}

export function createPostApiV1NotificationChannels<
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
                Awaited<ReturnType<typeof client.api.v1.notification.channels.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.notification.channels.$post>,
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
    const mutationDefaults = getPostApiV1NotificationChannelsMutationOptions<
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

export function getApiV1NotificationChannelsChannelIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>,
) {
  return ['api', '/api/v1/notification/channels/:channelId', args] as const
}

export function getApiV1NotificationChannelsChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationChannelsChannelIdQueryKey>
  >({
    queryKey: getApiV1NotificationChannelsChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.notification.channels[':channelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NotificationChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1NotificationChannelsChannelIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1NotificationChannelsChannelIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1NotificationChannelsChannelIdMutationKey() {
  return ['api', '/api/v1/notification/channels/:channelId', 'PUT'] as const
}

export function getPutApiV1NotificationChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notification.channels)[':channelId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NotificationChannelsChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$put']>,
    ) {
      return parseResponse(client.api.v1.notification.channels[':channelId'].$put(args, options))
    },
  })
}

export function createPutApiV1NotificationChannelsChannelId<
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
                Awaited<
                  ReturnType<(typeof client.api.v1.notification.channels)[':channelId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$put']>,
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
    const mutationDefaults = getPutApiV1NotificationChannelsChannelIdMutationOptions<
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

export function getDeleteApiV1NotificationChannelsChannelIdMutationKey() {
  return ['api', '/api/v1/notification/channels/:channelId', 'DELETE'] as const
}

export function getDeleteApiV1NotificationChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.notification.channels)[':channelId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NotificationChannelsChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.notification.channels[':channelId'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1NotificationChannelsChannelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.notification.channels)[':channelId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1NotificationChannelsChannelIdMutationOptions<
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

export function getApiV1NotificationEventsQueryKey(
  args: InferRequestType<typeof client.api.v1.notification.events.$get>,
) {
  return ['api', '/api/v1/notification/events', args] as const
}

export function getApiV1NotificationEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.notification.events.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.events.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationEventsQueryKey>
  >({
    queryKey: getApiV1NotificationEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.notification.events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NotificationEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.notification.events.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.events.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1NotificationEventsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1NotificationEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NotificationEventsEventIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.notification.events)[':eventId']['$get']>,
) {
  return ['api', '/api/v1/notification/events/:eventId', args] as const
}

export function getApiV1NotificationEventsEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.notification.events)[':eventId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.notification.events)[':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notification.events)[':eventId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationEventsEventIdQueryKey>
  >({
    queryKey: getApiV1NotificationEventsEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.notification.events[':eventId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NotificationEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.notification.events)[':eventId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.notification.events)[':eventId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.notification.events)[':eventId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1NotificationEventsEventIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1NotificationEventsEventIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NotificationEventsEventIdResendMutationKey() {
  return ['api', '/api/v1/notification/events/:eventId/resend', 'POST'] as const
}

export function getPostApiV1NotificationEventsEventIdResendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.notification.events)[':eventId']['resend']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.notification.events)[':eventId']['resend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NotificationEventsEventIdResendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.notification.events)[':eventId']['resend']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.notification.events[':eventId'].resend.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NotificationEventsEventIdResend<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.notification.events)[':eventId']['resend']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.notification.events)[':eventId']['resend']['$post']
          >,
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
    const mutationDefaults = getPostApiV1NotificationEventsEventIdResendMutationOptions<
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

export function getApiV1NotificationRulesQueryKey(
  args: InferRequestType<typeof client.api.v1.notification.rules.$get>,
) {
  return ['api', '/api/v1/notification/rules', args] as const
}

export function getApiV1NotificationRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.rules.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.notification.rules.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.rules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationRulesQueryKey>
  >({
    queryKey: getApiV1NotificationRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.notification.rules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NotificationRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.rules.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.notification.rules.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.rules.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1NotificationRulesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1NotificationRulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NotificationRulesMutationKey() {
  return ['api', '/api/v1/notification/rules', 'POST'] as const
}

export function getPostApiV1NotificationRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.rules.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.notification.rules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NotificationRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.notification.rules.$post>) {
      return parseResponse(client.api.v1.notification.rules.$post(args, options))
    },
  })
}

export function createPostApiV1NotificationRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.rules.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.notification.rules.$post>,
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
    const mutationDefaults = getPostApiV1NotificationRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1NotificationRulesRuleIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>,
) {
  return ['api', '/api/v1/notification/rules/:ruleId', args] as const
}

export function getApiV1NotificationRulesRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationRulesRuleIdQueryKey>
  >({
    queryKey: getApiV1NotificationRulesRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.notification.rules[':ruleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NotificationRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1NotificationRulesRuleIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1NotificationRulesRuleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1NotificationRulesRuleIdMutationKey() {
  return ['api', '/api/v1/notification/rules/:ruleId', 'PUT'] as const
}

export function getPutApiV1NotificationRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1NotificationRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$put']>,
    ) {
      return parseResponse(client.api.v1.notification.rules[':ruleId'].$put(args, options))
    },
  })
}

export function createPutApiV1NotificationRulesRuleId<
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
                Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$put']>,
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
    const mutationDefaults = getPutApiV1NotificationRulesRuleIdMutationOptions<
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

export function getDeleteApiV1NotificationRulesRuleIdMutationKey() {
  return ['api', '/api/v1/notification/rules/:ruleId', 'DELETE'] as const
}

export function getDeleteApiV1NotificationRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NotificationRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.notification.rules[':ruleId'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1NotificationRulesRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1NotificationRulesRuleIdMutationOptions<
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

export function getPostApiV1NotificationRulesRuleIdTestMutationKey() {
  return ['api', '/api/v1/notification/rules/:ruleId/test', 'POST'] as const
}

export function getPostApiV1NotificationRulesRuleIdTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['test']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NotificationRulesRuleIdTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['test']['$post']>,
    ) {
      return parseResponse(client.api.v1.notification.rules[':ruleId'].test.$post(args, options))
    },
  })
}

export function createPostApiV1NotificationRulesRuleIdTest<
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
                Awaited<
                  ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['test']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['test']['$post']>,
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
    const mutationDefaults = getPostApiV1NotificationRulesRuleIdTestMutationOptions<
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

export function getApiV1PlansQueryKey(args: InferRequestType<typeof client.api.v1.plans.$get>) {
  return ['api', '/api/v1/plans', args] as const
}

export function getApiV1PlansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plans.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.plans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1PlansQueryKey>
  >({
    queryKey: getApiV1PlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.plans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Plans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.plans.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plans.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1PlansQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1PlansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1PlansMutationKey() {
  return ['api', '/api/v1/plans', 'POST'] as const
}

export function getPostApiV1PlansMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plans.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.plans.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PlansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.plans.$post>) {
      return parseResponse(client.api.v1.plans.$post(args, options))
    },
  })
}

export function createPostApiV1Plans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plans.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.plans.$post>,
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
    const mutationDefaults = getPostApiV1PlansMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1PlansPlanIdOrKeyNextMutationKey() {
  return ['api', '/api/v1/plans/:planIdOrKey/next', 'POST'] as const
}

export function getPostApiV1PlansPlanIdOrKeyNextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.plans)[':planIdOrKey']['next']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.plans)[':planIdOrKey']['next']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PlansPlanIdOrKeyNextMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.plans)[':planIdOrKey']['next']['$post']>,
    ) {
      return parseResponse(client.api.v1.plans[':planIdOrKey'].next.$post(args, options))
    },
  })
}

export function createPostApiV1PlansPlanIdOrKeyNext<
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
                Awaited<ReturnType<(typeof client.api.v1.plans)[':planIdOrKey']['next']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.plans)[':planIdOrKey']['next']['$post']>,
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
    const mutationDefaults = getPostApiV1PlansPlanIdOrKeyNextMutationOptions<
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

export function getApiV1PlansPlanIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['$get']>,
) {
  return ['api', '/api/v1/plans/:planId', args] as const
}

export function getApiV1PlansPlanIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PlansPlanIdQueryKey>
  >({
    queryKey: getApiV1PlansPlanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.plans[':planId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1PlansPlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.plans)[':planId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1PlansPlanIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1PlansPlanIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV1PlansPlanIdMutationKey() {
  return ['api', '/api/v1/plans/:planId', 'PUT'] as const
}

export function getPutApiV1PlansPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.plans)[':planId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1PlansPlanIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.plans)[':planId']['$put']>) {
      return parseResponse(client.api.v1.plans[':planId'].$put(args, options))
    },
  })
}

export function createPutApiV1PlansPlanId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.plans)[':planId']['$put']>,
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
    const mutationDefaults = getPutApiV1PlansPlanIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1PlansPlanIdMutationKey() {
  return ['api', '/api/v1/plans/:planId', 'DELETE'] as const
}

export function getDeleteApiV1PlansPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.plans)[':planId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1PlansPlanIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.plans)[':planId']['$delete']>) {
      return parseResponse(client.api.v1.plans[':planId'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1PlansPlanId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.plans)[':planId']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1PlansPlanIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1PlansPlanIdAddonsQueryKey(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>,
) {
  return ['api', '/api/v1/plans/:planId/addons', args] as const
}

export function getApiV1PlansPlanIdAddonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PlansPlanIdAddonsQueryKey>
  >({
    queryKey: getApiV1PlansPlanIdAddonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.plans[':planId'].addons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1PlansPlanIdAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1PlansPlanIdAddonsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1PlansPlanIdAddonsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1PlansPlanIdAddonsMutationKey() {
  return ['api', '/api/v1/plans/:planId/addons', 'POST'] as const
}

export function getPostApiV1PlansPlanIdAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['addons']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.plans)[':planId']['addons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PlansPlanIdAddonsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.plans)[':planId']['addons']['$post']>,
    ) {
      return parseResponse(client.api.v1.plans[':planId'].addons.$post(args, options))
    },
  })
}

export function createPostApiV1PlansPlanIdAddons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['addons']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.plans)[':planId']['addons']['$post']>,
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
    const mutationDefaults = getPostApiV1PlansPlanIdAddonsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1PlansPlanIdAddonsPlanAddonIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>,
) {
  return ['api', '/api/v1/plans/:planId/addons/:planAddonId', args] as const
}

export function getApiV1PlansPlanIdAddonsPlanAddonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PlansPlanIdAddonsPlanAddonIdQueryKey>
  >({
    queryKey: getApiV1PlansPlanIdAddonsPlanAddonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.plans[':planId'].addons[':planAddonId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1PlansPlanIdAddonsPlanAddonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1PlansPlanIdAddonsPlanAddonIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1PlansPlanIdAddonsPlanAddonIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1PlansPlanIdAddonsPlanAddonIdMutationKey() {
  return ['api', '/api/v1/plans/:planId/addons/:planAddonId', 'PUT'] as const
}

export function getPutApiV1PlansPlanIdAddonsPlanAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1PlansPlanIdAddonsPlanAddonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.plans[':planId'].addons[':planAddonId'].$put(args, options),
      )
    },
  })
}

export function createPutApiV1PlansPlanIdAddonsPlanAddonId<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$put']
          >,
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
    const mutationDefaults = getPutApiV1PlansPlanIdAddonsPlanAddonIdMutationOptions<
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

export function getDeleteApiV1PlansPlanIdAddonsPlanAddonIdMutationKey() {
  return ['api', '/api/v1/plans/:planId/addons/:planAddonId', 'DELETE'] as const
}

export function getDeleteApiV1PlansPlanIdAddonsPlanAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1PlansPlanIdAddonsPlanAddonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.plans[':planId'].addons[':planAddonId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1PlansPlanIdAddonsPlanAddonId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$delete']
          >,
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
    const mutationDefaults = getDeleteApiV1PlansPlanIdAddonsPlanAddonIdMutationOptions<
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

export function getPostApiV1PlansPlanIdArchiveMutationKey() {
  return ['api', '/api/v1/plans/:planId/archive', 'POST'] as const
}

export function getPostApiV1PlansPlanIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.plans)[':planId']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PlansPlanIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.plans)[':planId']['archive']['$post']>,
    ) {
      return parseResponse(client.api.v1.plans[':planId'].archive.$post(args, options))
    },
  })
}

export function createPostApiV1PlansPlanIdArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['archive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.plans)[':planId']['archive']['$post']>,
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
    const mutationDefaults = getPostApiV1PlansPlanIdArchiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1PlansPlanIdPublishMutationKey() {
  return ['api', '/api/v1/plans/:planId/publish', 'POST'] as const
}

export function getPostApiV1PlansPlanIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.plans)[':planId']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PlansPlanIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.plans)[':planId']['publish']['$post']>,
    ) {
      return parseResponse(client.api.v1.plans[':planId'].publish.$post(args, options))
    },
  })
}

export function createPostApiV1PlansPlanIdPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['publish']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.plans)[':planId']['publish']['$post']>,
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
    const mutationDefaults = getPostApiV1PlansPlanIdPublishMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1PortalMetersMeterSlugQueryQueryKey(
  args: InferRequestType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>,
) {
  return ['api', '/api/v1/portal/meters/:meterSlug/query', args] as const
}

export function getApiV1PortalMetersMeterSlugQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PortalMetersMeterSlugQueryQueryKey>
  >({
    queryKey: getApiV1PortalMetersMeterSlugQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.portal.meters[':meterSlug'].query.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1PortalMetersMeterSlugQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1PortalMetersMeterSlugQueryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1PortalMetersMeterSlugQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1PortalTokensQueryKey(
  args: InferRequestType<typeof client.api.v1.portal.tokens.$get>,
) {
  return ['api', '/api/v1/portal/tokens', args] as const
}

export function getApiV1PortalTokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.portal.tokens.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.portal.tokens.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.portal.tokens.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PortalTokensQueryKey>
  >({
    queryKey: getApiV1PortalTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.portal.tokens.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1PortalTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.portal.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.portal.tokens.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.portal.tokens.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1PortalTokensQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1PortalTokensQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1PortalTokensMutationKey() {
  return ['api', '/api/v1/portal/tokens', 'POST'] as const
}

export function getPostApiV1PortalTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.portal.tokens.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.portal.tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PortalTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.portal.tokens.$post>) {
      return parseResponse(client.api.v1.portal.tokens.$post(args, options))
    },
  })
}

export function createPostApiV1PortalTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.portal.tokens.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.portal.tokens.$post>,
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
    const mutationDefaults = getPostApiV1PortalTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1PortalTokensInvalidateMutationKey() {
  return ['api', '/api/v1/portal/tokens/invalidate', 'POST'] as const
}

export function getPostApiV1PortalTokensInvalidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.portal.tokens.invalidate.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v1.portal.tokens.invalidate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PortalTokensInvalidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.portal.tokens.invalidate.$post>) {
      return parseResponse(client.api.v1.portal.tokens.invalidate.$post(args, options))
    },
  })
}

export function createPostApiV1PortalTokensInvalidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.v1.portal.tokens.invalidate.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.portal.tokens.invalidate.$post>,
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
    const mutationDefaults = getPostApiV1PortalTokensInvalidateMutationOptions<
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

export function getPostApiV1StripeCheckoutSessionsMutationKey() {
  return ['api', '/api/v1/stripe/checkout/sessions', 'POST'] as const
}

export function getPostApiV1StripeCheckoutSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.stripe.checkout.sessions.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.stripe.checkout.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1StripeCheckoutSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.stripe.checkout.sessions.$post>) {
      return parseResponse(client.api.v1.stripe.checkout.sessions.$post(args, options))
    },
  })
}

export function createPostApiV1StripeCheckoutSessions<
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
                Awaited<ReturnType<typeof client.api.v1.stripe.checkout.sessions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.stripe.checkout.sessions.$post>,
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
    const mutationDefaults = getPostApiV1StripeCheckoutSessionsMutationOptions<
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

export function getApiV1SubjectsQueryKey() {
  return ['api', '/api/v1/subjects'] as const
}

export function getApiV1SubjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subjects.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subjects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubjectsQueryKey>
  >({
    queryKey: getApiV1SubjectsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.subjects.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Subjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subjects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subjects.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SubjectsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SubjectsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1SubjectsMutationKey() {
  return ['api', '/api/v1/subjects', 'POST'] as const
}

export function getPostApiV1SubjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subjects.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.subjects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SubjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.subjects.$post>) {
      return parseResponse(client.api.v1.subjects.$post(args, options))
    },
  })
}

export function createPostApiV1Subjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subjects.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.subjects.$post>,
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
    const mutationDefaults = getPostApiV1SubjectsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1SubjectsSubjectIdOrKeyQueryKey(
  args: InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>,
) {
  return ['api', '/api/v1/subjects/:subjectIdOrKey', args] as const
}

export function getApiV1SubjectsSubjectIdOrKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubjectsSubjectIdOrKeyQueryKey>
  >({
    queryKey: getApiV1SubjectsSubjectIdOrKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SubjectsSubjectIdOrKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SubjectsSubjectIdOrKeyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1SubjectsSubjectIdOrKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1SubjectsSubjectIdOrKeyMutationKey() {
  return ['api', '/api/v1/subjects/:subjectIdOrKey', 'DELETE'] as const
}

export function getDeleteApiV1SubjectsSubjectIdOrKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SubjectsSubjectIdOrKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$delete']>,
    ) {
      return parseResponse(client.api.v1.subjects[':subjectIdOrKey'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1SubjectsSubjectIdOrKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1SubjectsSubjectIdOrKeyMutationOptions<
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

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']
  >,
) {
  return ['api', '/api/v1/subjects/:subjectIdOrKey/entitlements', args] as const
}

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsQueryKey>
  >({
    queryKey: getApiV1SubjectsSubjectIdOrKeyEntitlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].entitlements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SubjectsSubjectIdOrKeyEntitlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1SubjectsSubjectIdOrKeyEntitlementsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1SubjectsSubjectIdOrKeyEntitlementsMutationKey() {
  return ['api', '/api/v1/subjects/:subjectIdOrKey/entitlements', 'POST'] as const
}

export function getPostApiV1SubjectsSubjectIdOrKeyEntitlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SubjectsSubjectIdOrKeyEntitlementsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].entitlements.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubjectsSubjectIdOrKeyEntitlements<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$post']
          >,
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
    const mutationDefaults = getPostApiV1SubjectsSubjectIdOrKeyEntitlementsMutationOptions<
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

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementIdOrFeatureKey/grants',
    args,
  ] as const
}

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryKey
    >
  >({
    queryKey:
      getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].entitlements[
          ':entitlementIdOrFeatureKey'
        ].grants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsMutationKey() {
  return [
    'api',
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementIdOrFeatureKey/grants',
    'POST',
  ] as const
}

export function getPostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].entitlements[
          ':entitlementIdOrFeatureKey'
        ].grants.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
          >,
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
    const mutationDefaults =
      getPostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsMutationOptions<
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

export function getPutApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideMutationKey() {
  return [
    'api',
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementIdOrFeatureKey/override',
    'PUT',
  ] as const
}

export function getPutApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].entitlements[
          ':entitlementIdOrFeatureKey'
        ].override.$put(args, options),
      )
    },
  })
}

export function createPutApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverride<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
          >,
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
    const mutationDefaults =
      getPutApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideMutationOptions<
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

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementIdOrFeatureKey/value',
    args,
  ] as const
}

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryKey
    >
  >({
    queryKey:
      getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].entitlements[
          ':entitlementIdOrFeatureKey'
        ].value.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
  >,
) {
  return ['api', '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementId', args] as const
}

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdQueryKey>
  >({
    queryKey: getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdMutationKey() {
  return ['api', '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementId', 'DELETE'] as const
}

export function getDeleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$delete']
          >,
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
    const mutationDefaults =
      getDeleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdMutationOptions<
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

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementId/history',
    args,
  ] as const
}

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryQueryKey>
  >({
    queryKey: getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].history.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdResetMutationKey() {
  return [
    'api',
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementId/reset',
    'POST',
  ] as const
}

export function getPostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['reset']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].reset.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['reset']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['reset']['$post']
          >,
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
    const mutationDefaults =
      getPostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdResetMutationOptions<
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

export function getPostApiV1SubscriptionsMutationKey() {
  return ['api', '/api/v1/subscriptions', 'POST'] as const
}

export function getPostApiV1SubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.subscriptions.$post>) {
      return parseResponse(client.api.v1.subscriptions.$post(args, options))
    },
  })
}

export function createPostApiV1Subscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.subscriptions.$post>,
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
    const mutationDefaults = getPostApiV1SubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1SubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>,
) {
  return ['api', '/api/v1/subscriptions/:subscriptionId', args] as const
}

export function getApiV1SubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubscriptionsSubscriptionIdQueryKey>
  >({
    queryKey: getApiV1SubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SubscriptionsSubscriptionIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1SubscriptionsSubscriptionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1SubscriptionsSubscriptionIdMutationKey() {
  return ['api', '/api/v1/subscriptions/:subscriptionId', 'DELETE'] as const
}

export function getDeleteApiV1SubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$delete']>,
    ) {
      return parseResponse(client.api.v1.subscriptions[':subscriptionId'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1SubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1SubscriptionsSubscriptionIdMutationOptions<
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

export function getPatchApiV1SubscriptionsSubscriptionIdMutationKey() {
  return ['api', '/api/v1/subscriptions/:subscriptionId', 'PATCH'] as const
}

export function getPatchApiV1SubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1SubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$patch']>,
    ) {
      return parseResponse(client.api.v1.subscriptions[':subscriptionId'].$patch(args, options))
    },
  })
}

export function createPatchApiV1SubscriptionsSubscriptionId<
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
                Awaited<
                  ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$patch']>,
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
    const mutationDefaults = getPatchApiV1SubscriptionsSubscriptionIdMutationOptions<
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

export function getApiV1SubscriptionsSubscriptionIdAddonsQueryKey(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>,
) {
  return ['api', '/api/v1/subscriptions/:subscriptionId/addons', args] as const
}

export function getApiV1SubscriptionsSubscriptionIdAddonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubscriptionsSubscriptionIdAddonsQueryKey>
  >({
    queryKey: getApiV1SubscriptionsSubscriptionIdAddonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].addons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SubscriptionsSubscriptionIdAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SubscriptionsSubscriptionIdAddonsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1SubscriptionsSubscriptionIdAddonsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1SubscriptionsSubscriptionIdAddonsMutationKey() {
  return ['api', '/api/v1/subscriptions/:subscriptionId/addons', 'POST'] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SubscriptionsSubscriptionIdAddonsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].addons.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdAddons<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$post']
          >,
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
    const mutationDefaults = getPostApiV1SubscriptionsSubscriptionIdAddonsMutationOptions<
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

export function getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
  >,
) {
  return ['api', '/api/v1/subscriptions/:subscriptionId/addons/:subscriptionAddonId', args] as const
}

export function getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdQueryKey>
  >({
    queryKey: getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].addons[':subscriptionAddonId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPatchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdMutationKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/addons/:subscriptionAddonId',
    'PATCH',
  ] as const
}

export function getPatchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].addons[':subscriptionAddonId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonId<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$patch']
          >,
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
    const mutationDefaults =
      getPatchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdCancelMutationKey() {
  return ['api', '/api/v1/subscriptions/:subscriptionId/cancel', 'POST'] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SubscriptionsSubscriptionIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].cancel.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdCancel<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subscriptions)[':subscriptionId']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.subscriptions)[':subscriptionId']['cancel']['$post']
          >,
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
    const mutationDefaults = getPostApiV1SubscriptionsSubscriptionIdCancelMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdChangeMutationKey() {
  return ['api', '/api/v1/subscriptions/:subscriptionId/change', 'POST'] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdChangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['change']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['change']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SubscriptionsSubscriptionIdChangeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['change']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].change.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdChange<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subscriptions)[':subscriptionId']['change']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.subscriptions)[':subscriptionId']['change']['$post']
          >,
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
    const mutationDefaults = getPostApiV1SubscriptionsSubscriptionIdChangeMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdMigrateMutationKey() {
  return ['api', '/api/v1/subscriptions/:subscriptionId/migrate', 'POST'] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdMigrateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['migrate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['migrate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SubscriptionsSubscriptionIdMigrateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['migrate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].migrate.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdMigrate<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subscriptions)[':subscriptionId']['migrate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.subscriptions)[':subscriptionId']['migrate']['$post']
          >,
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
    const mutationDefaults = getPostApiV1SubscriptionsSubscriptionIdMigrateMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdRestoreMutationKey() {
  return ['api', '/api/v1/subscriptions/:subscriptionId/restore', 'POST'] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['restore']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SubscriptionsSubscriptionIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].restore.$post(args, options),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdRestore<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subscriptions)[':subscriptionId']['restore']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.subscriptions)[':subscriptionId']['restore']['$post']
          >,
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
    const mutationDefaults = getPostApiV1SubscriptionsSubscriptionIdRestoreMutationOptions<
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

export function getPostApiV1SubscriptionsSubscriptionIdUnscheduleCancelationMutationKey() {
  return ['api', '/api/v1/subscriptions/:subscriptionId/unschedule-cancelation', 'POST'] as const
}

export function getPostApiV1SubscriptionsSubscriptionIdUnscheduleCancelationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['unschedule-cancelation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['unschedule-cancelation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SubscriptionsSubscriptionIdUnscheduleCancelationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.subscriptions)[':subscriptionId']['unschedule-cancelation']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId']['unschedule-cancelation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1SubscriptionsSubscriptionIdUnscheduleCancelation<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.subscriptions)[':subscriptionId']['unschedule-cancelation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.subscriptions)[':subscriptionId']['unschedule-cancelation']['$post']
          >,
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
    const mutationDefaults =
      getPostApiV1SubscriptionsSubscriptionIdUnscheduleCancelationMutationOptions<
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

export function getApiV2CustomersCustomerIdOrKeyEntitlementsQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']
  >,
) {
  return ['api', '/api/v2/customers/:customerIdOrKey/entitlements', args] as const
}

export function getApiV2CustomersCustomerIdOrKeyEntitlementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2CustomersCustomerIdOrKeyEntitlementsQueryKey>
  >({
    queryKey: getApiV2CustomersCustomerIdOrKeyEntitlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.customers[':customerIdOrKey'].entitlements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2CustomersCustomerIdOrKeyEntitlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2CustomersCustomerIdOrKeyEntitlementsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV2CustomersCustomerIdOrKeyEntitlementsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2CustomersCustomerIdOrKeyEntitlementsMutationKey() {
  return ['api', '/api/v2/customers/:customerIdOrKey/entitlements', 'POST'] as const
}

export function getPostApiV2CustomersCustomerIdOrKeyEntitlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2CustomersCustomerIdOrKeyEntitlementsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v2.customers[':customerIdOrKey'].entitlements.$post(args, options),
      )
    },
  })
}

export function createPostApiV2CustomersCustomerIdOrKeyEntitlements<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$post']
          >,
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
    const mutationDefaults = getPostApiV2CustomersCustomerIdOrKeyEntitlementsMutationOptions<
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

export function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey',
    args,
  ] as const
}

export function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyQueryKey>
  >({
    queryKey: getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.customers[':customerIdOrKey'].entitlements[':entitlementIdOrFeatureKey'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyMutationKey() {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey',
    'DELETE',
  ] as const
}

export function getDeleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v2.customers[':customerIdOrKey'].entitlements[
          ':entitlementIdOrFeatureKey'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$delete']
          >,
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
    const mutationDefaults =
      getDeleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyMutationOptions<
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

export function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/grants',
    args,
  ] as const
}

export function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryKey
    >
  >({
    queryKey:
      getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.customers[':customerIdOrKey'].entitlements[
          ':entitlementIdOrFeatureKey'
        ].grants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsMutationKey() {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/grants',
    'POST',
  ] as const
}

export function getPostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v2.customers[':customerIdOrKey'].entitlements[
          ':entitlementIdOrFeatureKey'
        ].grants.$post(args, options),
      )
    },
  })
}

export function createPostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
          >,
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
    const mutationDefaults =
      getPostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsMutationOptions<
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

export function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/history',
    args,
  ] as const
}

export function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryQueryKey
    >
  >({
    queryKey:
      getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.customers[':customerIdOrKey'].entitlements[
          ':entitlementIdOrFeatureKey'
        ].history.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideMutationKey() {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/override',
    'PUT',
  ] as const
}

export function getPutApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v2.customers[':customerIdOrKey'].entitlements[
          ':entitlementIdOrFeatureKey'
        ].override.$put(args, options),
      )
    },
  })
}

export function createPutApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverride<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
          >,
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
    const mutationDefaults =
      getPutApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideMutationOptions<
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

export function getPostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyResetMutationKey() {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/reset',
    'POST',
  ] as const
}

export function getPostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['reset']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v2.customers[':customerIdOrKey'].entitlements[
          ':entitlementIdOrFeatureKey'
        ].reset.$post(args, options),
      )
    },
  })
}

export function createPostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['reset']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['reset']['$post']
          >,
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
    const mutationDefaults =
      getPostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyResetMutationOptions<
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

export function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryKey(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/value',
    args,
  ] as const
}

export function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryKey
    >
  >({
    queryKey:
      getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.customers[':customerIdOrKey'].entitlements[
          ':entitlementIdOrFeatureKey'
        ].value.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2EntitlementsQueryKey(
  args: InferRequestType<typeof client.api.v2.entitlements.$get>,
) {
  return ['api', '/api/v2/entitlements', args] as const
}

export function getApiV2EntitlementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.entitlements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.entitlements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.entitlements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EntitlementsQueryKey>
  >({
    queryKey: getApiV2EntitlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.entitlements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Entitlements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.entitlements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.entitlements.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.entitlements.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EntitlementsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2EntitlementsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2EntitlementsEntitlementIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>,
) {
  return ['api', '/api/v2/entitlements/:entitlementId', args] as const
}

export function getApiV2EntitlementsEntitlementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EntitlementsEntitlementIdQueryKey>
  >({
    queryKey: getApiV2EntitlementsEntitlementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.entitlements[':entitlementId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2EntitlementsEntitlementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EntitlementsEntitlementIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV2EntitlementsEntitlementIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2EventsQueryKey(args: InferRequestType<typeof client.api.v2.events.$get>) {
  return ['api', '/api/v2/events', args] as const
}

export function getApiV2EventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EventsQueryKey>
  >({
    queryKey: getApiV2EventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.events.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.events.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2EventsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2EventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2GrantsQueryKey(args: InferRequestType<typeof client.api.v2.grants.$get>) {
  return ['api', '/api/v2/grants', args] as const
}

export function getApiV2GrantsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.grants.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.grants.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.grants.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GrantsQueryKey>
  >({
    queryKey: getApiV2GrantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.grants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Grants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.grants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.grants.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.grants.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV2GrantsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2GrantsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
