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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1AddonsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.addons.$get>>,
) {
  return ['api', '/api/v1/addons', toValue(args)] as const
}

export function getApiV1AddonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.addons.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AddonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.addons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Addons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.addons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.addons.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.addons.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.addons.$get>>>>
          >,
          ReturnType<typeof getApiV1AddonsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.addons.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AddonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AddonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.addons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Addons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.addons.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.addons.$post>,
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
  const mutationDefaults = getPostApiV1AddonsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AddonsAddonIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.addons)[':addonId']['$get']>>,
) {
  return ['api', '/api/v1/addons/:addonId', toValue(args)] as const
}

export function getApiV1AddonsAddonIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.addons)[':addonId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AddonsAddonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.addons[':addonId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AddonsAddonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.addons)[':addonId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AddonsAddonIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AddonsAddonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AddonsAddonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.addons[':addonId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1AddonsAddonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1AddonsAddonIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1AddonsAddonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1AddonsAddonIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1AddonsAddonIdArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1AddonsAddonIdArchiveMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1AddonsAddonIdPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1AddonsAddonIdPublishMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AppsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.apps.$get>>,
) {
  return ['api', '/api/v1/apps', toValue(args)] as const
}

export function getApiV1AppsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.apps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.apps.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Apps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.apps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.$get>>>>
          >,
          ReturnType<typeof getApiV1AppsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1AppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1AppsCustomInvoicingInvoiceIdDraftSynchronized<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1AppsCustomInvoicingInvoiceIdDraftSynchronizedMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronized<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults =
    getPostApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronizedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1AppsCustomInvoicingInvoiceIdPaymentStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1AppsCustomInvoicingInvoiceIdPaymentStatusMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AppsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.apps)[':id']['$get']>>,
) {
  return ['api', '/api/v1/apps/:id', toValue(args)] as const
}

export function getApiV1AppsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.apps)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AppsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.apps[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AppsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.apps)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1AppsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AppsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.apps[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1AppsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.apps)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1AppsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiV1AppsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1AppsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePutApiV1AppsIdStripeApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1AppsIdStripeApiKeyMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1AppsIdStripeWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1AppsIdStripeWebhookMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1BillingCustomersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.billing.customers.$get>>,
) {
  return ['api', '/api/v1/billing/customers', toValue(args)] as const
}

export function getApiV1BillingCustomersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.billing.customers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillingCustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.billing.customers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BillingCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.customers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.billing.customers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.customers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.customers.$get>>>
            >
          >,
          ReturnType<typeof getApiV1BillingCustomersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.customers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillingCustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillingCustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.billing.customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BillingCustomersCustomerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>
  >,
) {
  return ['api', '/api/v1/billing/customers/:customerId', toValue(args)] as const
}

export function getApiV1BillingCustomersCustomerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillingCustomersCustomerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.billing.customers[':customerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BillingCustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BillingCustomersCustomerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillingCustomersCustomerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillingCustomersCustomerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.billing.customers[':customerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1BillingCustomersCustomerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1BillingCustomersCustomerIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiV1BillingCustomersCustomerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1BillingCustomersCustomerIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1BillingCustomersCustomerIdInvoicesPendingLines<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults =
    getPostApiV1BillingCustomersCustomerIdInvoicesPendingLinesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1BillingCustomersCustomerIdInvoicesSimulate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1BillingCustomersCustomerIdInvoicesSimulateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1BillingInvoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.billing.invoices.$get>>,
) {
  return ['api', '/api/v1/billing/invoices', toValue(args)] as const
}

export function getApiV1BillingInvoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.billing.invoices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillingInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.billing.invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BillingInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.billing.invoices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.invoices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.invoices.$get>>>
            >
          >,
          ReturnType<typeof getApiV1BillingInvoicesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.invoices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillingInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillingInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.billing.invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1BillingInvoicesInvoice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1BillingInvoicesInvoiceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1BillingInvoicesInvoiceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>
  >,
) {
  return ['api', '/api/v1/billing/invoices/:invoiceId', toValue(args)] as const
}

export function getApiV1BillingInvoicesInvoiceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillingInvoicesInvoiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.billing.invoices[':invoiceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BillingInvoicesInvoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BillingInvoicesInvoiceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillingInvoicesInvoiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillingInvoicesInvoiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.billing.invoices[':invoiceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1BillingInvoicesInvoiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1BillingInvoicesInvoiceIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiV1BillingInvoicesInvoiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1BillingInvoicesInvoiceIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1BillingInvoicesInvoiceIdAdvance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1BillingInvoicesInvoiceIdAdvanceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1BillingInvoicesInvoiceIdApprove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1BillingInvoicesInvoiceIdApproveMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1BillingInvoicesInvoiceIdRetry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1BillingInvoicesInvoiceIdRetryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1BillingInvoicesInvoiceIdSnapshotQuantities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1BillingInvoicesInvoiceIdSnapshotQuantitiesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1BillingInvoicesInvoiceIdTaxesRecalculate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1BillingInvoicesInvoiceIdTaxesRecalculateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1BillingInvoicesInvoiceIdVoid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1BillingInvoicesInvoiceIdVoidMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1BillingProfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.billing.profiles.$get>>,
) {
  return ['api', '/api/v1/billing/profiles', toValue(args)] as const
}

export function getApiV1BillingProfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.billing.profiles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillingProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.billing.profiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BillingProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.profiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.billing.profiles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.profiles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.profiles.$get>>>
            >
          >,
          ReturnType<typeof getApiV1BillingProfilesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.profiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillingProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillingProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.billing.profiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1BillingProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.profiles.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.billing.profiles.$post>,
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
  const mutationDefaults = getPostApiV1BillingProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1BillingProfilesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$get']>>,
) {
  return ['api', '/api/v1/billing/profiles/:id', toValue(args)] as const
}

export function getApiV1BillingProfilesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillingProfilesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.billing.profiles[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BillingProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BillingProfilesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillingProfilesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillingProfilesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.billing.profiles[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1BillingProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1BillingProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1BillingProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1BillingProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CustomersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.customers.$get>>,
) {
  return ['api', '/api/v1/customers', toValue(args)] as const
}

export function getApiV1CustomersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.customers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.customers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Customers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.customers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customers.$get>>>
            >
          >,
          ReturnType<typeof getApiV1CustomersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Customers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.customers.$post>,
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
  const mutationDefaults = getPostApiV1CustomersMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CustomersCustomerIdOrKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>
  >,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey', toValue(args)] as const
}

export function getApiV1CustomersCustomerIdOrKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CustomersCustomerIdOrKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.customers[':customerIdOrKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CustomersCustomerIdOrKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CustomersCustomerIdOrKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomersCustomerIdOrKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CustomersCustomerIdOrKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.customers[':customerIdOrKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1CustomersCustomerIdOrKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1CustomersCustomerIdOrKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiV1CustomersCustomerIdOrKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1CustomersCustomerIdOrKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1CustomersCustomerIdOrKeyAccessQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>
  >,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey/access', toValue(args)] as const
}

export function getApiV1CustomersCustomerIdOrKeyAccessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CustomersCustomerIdOrKeyAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.customers[':customerIdOrKey'].access.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CustomersCustomerIdOrKeyAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CustomersCustomerIdOrKeyAccessQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomersCustomerIdOrKeyAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CustomersCustomerIdOrKeyAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.customers[':customerIdOrKey'].access.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CustomersCustomerIdOrKeyAppsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>
  >,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey/apps', toValue(args)] as const
}

export function getApiV1CustomersCustomerIdOrKeyAppsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CustomersCustomerIdOrKeyAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.customers[':customerIdOrKey'].apps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CustomersCustomerIdOrKeyApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CustomersCustomerIdOrKeyAppsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomersCustomerIdOrKeyAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CustomersCustomerIdOrKeyAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.customers[':customerIdOrKey'].apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1CustomersCustomerIdOrKeyApps<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1CustomersCustomerIdOrKeyAppsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiV1CustomersCustomerIdOrKeyAppsAppId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1CustomersCustomerIdOrKeyAppsAppIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/customers/:customerIdOrKey/entitlements/:featureKey/value',
    toValue(args),
  ] as const
}

export function getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.customers[':customerIdOrKey'].entitlements[':featureKey'].value.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValue<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.customers[':customerIdOrKey'].entitlements[':featureKey'].value.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CustomersCustomerIdOrKeyStripeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>
  >,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey/stripe', toValue(args)] as const
}

export function getApiV1CustomersCustomerIdOrKeyStripeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CustomersCustomerIdOrKeyStripeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.customers[':customerIdOrKey'].stripe.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CustomersCustomerIdOrKeyStripe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CustomersCustomerIdOrKeyStripeQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomersCustomerIdOrKeyStripeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CustomersCustomerIdOrKeyStripeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.customers[':customerIdOrKey'].stripe.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1CustomersCustomerIdOrKeyStripe<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1CustomersCustomerIdOrKeyStripeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1CustomersCustomerIdOrKeyStripePortal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1CustomersCustomerIdOrKeyStripePortalMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1CustomersCustomerIdOrKeySubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']>
  >,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey/subscriptions', toValue(args)] as const
}

export function getApiV1CustomersCustomerIdOrKeySubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CustomersCustomerIdOrKeySubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.customers[':customerIdOrKey'].subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CustomersCustomerIdOrKeySubscriptions<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getApiV1CustomersCustomerIdOrKeySubscriptionsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CustomersCustomerIdOrKeySubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.customers[':customerIdOrKey'].subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DebugMetricsQueryKey() {
  return ['api', '/api/v1/debug/metrics'] as const
}

export function getApiV1DebugMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1DebugMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.debug.metrics.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DebugMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.debug.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.debug.metrics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.debug.metrics.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DebugMetricsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.debug.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DebugMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1DebugMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.debug.metrics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EntitlementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.entitlements.$get>>,
) {
  return ['api', '/api/v1/entitlements', toValue(args)] as const
}

export function getApiV1EntitlementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.entitlements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EntitlementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.entitlements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Entitlements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.entitlements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.entitlements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.entitlements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.entitlements.$get>>>
            >
          >,
          ReturnType<typeof getApiV1EntitlementsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.entitlements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EntitlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EntitlementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.entitlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EntitlementsEntitlementIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>
  >,
) {
  return ['api', '/api/v1/entitlements/:entitlementId', toValue(args)] as const
}

export function getApiV1EntitlementsEntitlementIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EntitlementsEntitlementIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.entitlements[':entitlementId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1EntitlementsEntitlementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1EntitlementsEntitlementIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EntitlementsEntitlementIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EntitlementsEntitlementIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.entitlements[':entitlementId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.events.$get>>,
) {
  return ['api', '/api/v1/events', toValue(args)] as const
}

export function getApiV1EventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
          >,
          ReturnType<typeof getApiV1EventsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Events<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.v1.events.$post>,
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
  const mutationDefaults = getPostApiV1EventsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1FeaturesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.features.$get>>,
) {
  return ['api', '/api/v1/features', toValue(args)] as const
}

export function getApiV1FeaturesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.features.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FeaturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.features.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Features<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.features.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.features.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.features.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.features.$get>>>
            >
          >,
          ReturnType<typeof getApiV1FeaturesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.features.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FeaturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.features.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Features<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.features.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.features.$post>,
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
  const mutationDefaults = getPostApiV1FeaturesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1FeaturesFeatureIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.features)[':featureId']['$get']>>,
) {
  return ['api', '/api/v1/features/:featureId', toValue(args)] as const
}

export function getApiV1FeaturesFeatureIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.features)[':featureId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FeaturesFeatureIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.features[':featureId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1FeaturesFeatureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.features)[':featureId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.features)[':featureId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.features)[':featureId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.features)[':featureId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1FeaturesFeatureIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.features)[':featureId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FeaturesFeatureIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FeaturesFeatureIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.features[':featureId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiV1FeaturesFeatureId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1FeaturesFeatureIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1GrantsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.grants.$get>>,
) {
  return ['api', '/api/v1/grants', toValue(args)] as const
}

export function getApiV1GrantsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.grants.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GrantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.grants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Grants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.grants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.grants.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.grants.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.grants.$get>>>>
          >,
          ReturnType<typeof getApiV1GrantsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.grants.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GrantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GrantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.grants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiV1GrantsGrantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1GrantsGrantIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1InfoCurrenciesQueryKey() {
  return ['api', '/api/v1/info/currencies'] as const
}

export function getApiV1InfoCurrenciesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1InfoCurrenciesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.info.currencies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1InfoCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.currencies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.currencies.$get>>>
            >
          >,
          ReturnType<typeof getApiV1InfoCurrenciesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.currencies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InfoCurrenciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1InfoCurrenciesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.info.currencies.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1InfoProgressIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.info.progress)[':id']['$get']>>,
) {
  return ['api', '/api/v1/info/progress/:id', toValue(args)] as const
}

export function getApiV1InfoProgressIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.info.progress)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1InfoProgressIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.info.progress[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1InfoProgressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.info.progress)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.info.progress)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.info.progress)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.info.progress)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1InfoProgressIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.info.progress)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InfoProgressIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1InfoProgressIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.info.progress[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MarketplaceListingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.marketplace.listings.$get>>,
) {
  return ['api', '/api/v1/marketplace/listings', toValue(args)] as const
}

export function getApiV1MarketplaceListingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.marketplace.listings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MarketplaceListingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.marketplace.listings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MarketplaceListings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.marketplace.listings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.marketplace.listings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.marketplace.listings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.marketplace.listings.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1MarketplaceListingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.marketplace.listings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MarketplaceListingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MarketplaceListingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.marketplace.listings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MarketplaceListingsTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>
  >,
) {
  return ['api', '/api/v1/marketplace/listings/:type', toValue(args)] as const
}

export function getApiV1MarketplaceListingsTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MarketplaceListingsTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.marketplace.listings[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MarketplaceListingsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1MarketplaceListingsTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MarketplaceListingsTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MarketplaceListingsTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.marketplace.listings[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1MarketplaceListingsTypeInstall<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1MarketplaceListingsTypeInstallMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1MarketplaceListingsTypeInstallApikey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1MarketplaceListingsTypeInstallApikeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1MarketplaceListingsTypeInstallOauth2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
    >
  >,
) {
  return ['api', '/api/v1/marketplace/listings/:type/install/oauth2', toValue(args)] as const
}

export function getApiV1MarketplaceListingsTypeInstallOauth2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MarketplaceListingsTypeInstallOauth2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.marketplace.listings[':type'].install.oauth2.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MarketplaceListingsTypeInstallOauth2<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getApiV1MarketplaceListingsTypeInstallOauth2QueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MarketplaceListingsTypeInstallOauth2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.marketplace.listings[':type'].install.oauth2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/marketplace/listings/:type/install/oauth2/authorize',
    toValue(args),
  ] as const
}

export function getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.marketplace.listings[':type'].install.oauth2.authorize.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MarketplaceListingsTypeInstallOauth2Authorize<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.marketplace.listings[':type'].install.oauth2.authorize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MetersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.meters.$get>>,
) {
  return ['api', '/api/v1/meters', toValue(args)] as const
}

export function getApiV1MetersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.meters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.meters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Meters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.meters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.meters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.meters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.meters.$get>>>>
          >,
          ReturnType<typeof getApiV1MetersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.meters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.meters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Meters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.meters.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.meters.$post>,
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
  const mutationDefaults = getPostApiV1MetersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1MetersMeterIdOrSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>>,
) {
  return ['api', '/api/v1/meters/:meterIdOrSlug', toValue(args)] as const
}

export function getApiV1MetersMeterIdOrSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetersMeterIdOrSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.meters[':meterIdOrSlug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetersMeterIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1MetersMeterIdOrSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetersMeterIdOrSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetersMeterIdOrSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.meters[':meterIdOrSlug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1MetersMeterIdOrSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1MetersMeterIdOrSlugMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1MetersMeterIdOrSlug<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1MetersMeterIdOrSlugMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/meters/:meterIdOrSlug/group-by/:groupByKey/values',
    toValue(args),
  ] as const
}

export function getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.meters[':meterIdOrSlug']['group-by'][':groupByKey'].values.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1MetersMeterIdOrSlugGroupByGroupByKeyValues<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.meters[':meterIdOrSlug']['group-by'][':groupByKey'].values.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MetersMeterIdOrSlugQueryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>
  >,
) {
  return ['api', '/api/v1/meters/:meterIdOrSlug/query', toValue(args)] as const
}

export function getApiV1MetersMeterIdOrSlugQueryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetersMeterIdOrSlugQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.meters[':meterIdOrSlug'].query.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetersMeterIdOrSlugQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1MetersMeterIdOrSlugQueryQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetersMeterIdOrSlugQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetersMeterIdOrSlugQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.meters[':meterIdOrSlug'].query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1MetersMeterIdOrSlugQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1MetersMeterIdOrSlugQueryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1MetersMeterIdOrSlugSubjectsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>
  >,
) {
  return ['api', '/api/v1/meters/:meterIdOrSlug/subjects', toValue(args)] as const
}

export function getApiV1MetersMeterIdOrSlugSubjectsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetersMeterIdOrSlugSubjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.meters[':meterIdOrSlug'].subjects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetersMeterIdOrSlugSubjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1MetersMeterIdOrSlugSubjectsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetersMeterIdOrSlugSubjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetersMeterIdOrSlugSubjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.meters[':meterIdOrSlug'].subjects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1NotificationChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.notification.channels.$get>>,
) {
  return ['api', '/api/v1/notification/channels', toValue(args)] as const
}

export function getApiV1NotificationChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.notification.channels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NotificationChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.notification.channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NotificationChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.channels.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.notification.channels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.channels.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.channels.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1NotificationChannelsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.channels.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NotificationChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.notification.channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1NotificationChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1NotificationChannelsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1NotificationChannelsChannelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>
  >,
) {
  return ['api', '/api/v1/notification/channels/:channelId', toValue(args)] as const
}

export function getApiV1NotificationChannelsChannelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NotificationChannelsChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.notification.channels[':channelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NotificationChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1NotificationChannelsChannelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationChannelsChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NotificationChannelsChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.notification.channels[':channelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1NotificationChannelsChannelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1NotificationChannelsChannelIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiV1NotificationChannelsChannelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1NotificationChannelsChannelIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1NotificationEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.notification.events.$get>>,
) {
  return ['api', '/api/v1/notification/events', toValue(args)] as const
}

export function getApiV1NotificationEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.notification.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NotificationEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.notification.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NotificationEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.notification.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.events.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.events.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1NotificationEventsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.events.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NotificationEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.notification.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1NotificationEventsEventIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.notification.events)[':eventId']['$get']>
  >,
) {
  return ['api', '/api/v1/notification/events/:eventId', toValue(args)] as const
}

export function getApiV1NotificationEventsEventIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.notification.events)[':eventId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NotificationEventsEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.notification.events[':eventId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NotificationEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.notification.events)[':eventId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.notification.events)[':eventId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.notification.events)[':eventId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.notification.events)[':eventId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1NotificationEventsEventIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.notification.events)[':eventId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationEventsEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NotificationEventsEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.notification.events[':eventId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1NotificationEventsEventIdResend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1NotificationEventsEventIdResendMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1NotificationRulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.notification.rules.$get>>,
) {
  return ['api', '/api/v1/notification/rules', toValue(args)] as const
}

export function getApiV1NotificationRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.notification.rules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NotificationRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.notification.rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NotificationRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.rules.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.notification.rules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.rules.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.notification.rules.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1NotificationRulesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.rules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NotificationRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.notification.rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1NotificationRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1NotificationRulesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1NotificationRulesRuleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>
  >,
) {
  return ['api', '/api/v1/notification/rules/:ruleId', toValue(args)] as const
}

export function getApiV1NotificationRulesRuleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NotificationRulesRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.notification.rules[':ruleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NotificationRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1NotificationRulesRuleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationRulesRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NotificationRulesRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.notification.rules[':ruleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1NotificationRulesRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1NotificationRulesRuleIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiV1NotificationRulesRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1NotificationRulesRuleIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1NotificationRulesRuleIdTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1NotificationRulesRuleIdTestMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1PlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.plans.$get>>,
) {
  return ['api', '/api/v1/plans', toValue(args)] as const
}

export function getApiV1PlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.plans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.plans.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Plans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.plans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plans.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plans.$get>>>>
          >,
          ReturnType<typeof getApiV1PlansQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1PlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Plans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plans.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.plans.$post>,
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
  const mutationDefaults = getPostApiV1PlansMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1PlansPlanIdOrKeyNext<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1PlansPlanIdOrKeyNextMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PlansPlanIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.plans)[':planId']['$get']>>,
) {
  return ['api', '/api/v1/plans/:planId', toValue(args)] as const
}

export function getApiV1PlansPlanIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.plans)[':planId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PlansPlanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.plans[':planId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PlansPlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.plans)[':planId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PlansPlanIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PlansPlanIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PlansPlanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.plans[':planId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1PlansPlanId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1PlansPlanIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1PlansPlanId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1PlansPlanIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PlansPlanIdAddonsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>
  >,
) {
  return ['api', '/api/v1/plans/:planId/addons', toValue(args)] as const
}

export function getApiV1PlansPlanIdAddonsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PlansPlanIdAddonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.plans[':planId'].addons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PlansPlanIdAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PlansPlanIdAddonsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PlansPlanIdAddonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PlansPlanIdAddonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.plans[':planId'].addons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1PlansPlanIdAddons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1PlansPlanIdAddonsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PlansPlanIdAddonsPlanAddonIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>
  >,
) {
  return ['api', '/api/v1/plans/:planId/addons/:planAddonId', toValue(args)] as const
}

export function getApiV1PlansPlanIdAddonsPlanAddonIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PlansPlanIdAddonsPlanAddonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.plans[':planId'].addons[':planAddonId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PlansPlanIdAddonsPlanAddonId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getApiV1PlansPlanIdAddonsPlanAddonIdQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PlansPlanIdAddonsPlanAddonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PlansPlanIdAddonsPlanAddonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.plans[':planId'].addons[':planAddonId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1PlansPlanIdAddonsPlanAddonId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutApiV1PlansPlanIdAddonsPlanAddonIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteApiV1PlansPlanIdAddonsPlanAddonId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1PlansPlanIdAddonsPlanAddonIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1PlansPlanIdArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1PlansPlanIdArchiveMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1PlansPlanIdPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1PlansPlanIdPublishMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PortalMetersMeterSlugQueryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>
  >,
) {
  return ['api', '/api/v1/portal/meters/:meterSlug/query', toValue(args)] as const
}

export function getApiV1PortalMetersMeterSlugQueryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PortalMetersMeterSlugQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.portal.meters[':meterSlug'].query.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PortalMetersMeterSlugQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1PortalMetersMeterSlugQueryQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PortalMetersMeterSlugQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PortalMetersMeterSlugQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.portal.meters[':meterSlug'].query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PortalTokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.portal.tokens.$get>>,
) {
  return ['api', '/api/v1/portal/tokens', toValue(args)] as const
}

export function getApiV1PortalTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.portal.tokens.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PortalTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.portal.tokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PortalTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.portal.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.portal.tokens.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.portal.tokens.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.portal.tokens.$get>>>
            >
          >,
          ReturnType<typeof getApiV1PortalTokensQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.portal.tokens.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PortalTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PortalTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.portal.tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1PortalTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.portal.tokens.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.portal.tokens.$post>,
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
  const mutationDefaults = getPostApiV1PortalTokensMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1PortalTokensInvalidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1PortalTokensInvalidateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1StripeCheckoutSessions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1StripeCheckoutSessionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1SubjectsQueryKey() {
  return ['api', '/api/v1/subjects'] as const
}

export function getApiV1SubjectsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SubjectsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.subjects.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Subjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subjects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subjects.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subjects.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SubjectsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subjects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SubjectsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.subjects.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Subjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subjects.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.subjects.$post>,
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
  const mutationDefaults = getPostApiV1SubjectsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SubjectsSubjectIdOrKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>
  >,
) {
  return ['api', '/api/v1/subjects/:subjectIdOrKey', toValue(args)] as const
}

export function getApiV1SubjectsSubjectIdOrKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SubjectsSubjectIdOrKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SubjectsSubjectIdOrKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SubjectsSubjectIdOrKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubjectsSubjectIdOrKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SubjectsSubjectIdOrKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.subjects[':subjectIdOrKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiV1SubjectsSubjectIdOrKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1SubjectsSubjectIdOrKeyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']>
  >,
) {
  return ['api', '/api/v1/subjects/:subjectIdOrKey/entitlements', toValue(args)] as const
}

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SubjectsSubjectIdOrKeyEntitlementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].entitlements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SubjectsSubjectIdOrKeyEntitlements<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SubjectsSubjectIdOrKeyEntitlementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.subjects[':subjectIdOrKey'].entitlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1SubjectsSubjectIdOrKeyEntitlements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1SubjectsSubjectIdOrKeyEntitlementsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementIdOrFeatureKey/grants',
    toValue(args),
  ] as const
}

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].entitlements[
          ':entitlementIdOrFeatureKey'
        ].grants.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.subjects[':subjectIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].grants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults =
    getPostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverride<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults =
    getPutApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementIdOrFeatureKey/value',
    toValue(args),
  ] as const
}

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].entitlements[
          ':entitlementIdOrFeatureKey'
        ].value.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValue<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.subjects[':subjectIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].value.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementId',
    toValue(args),
  ] as const
}

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults =
    getDeleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementId/history',
    toValue(args),
  ] as const
}

export function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].history.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistory<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].history.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults =
    getPostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdResetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1Subscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.subscriptions.$post>,
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
  const mutationDefaults = getPostApiV1SubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SubscriptionsSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>
  >,
) {
  return ['api', '/api/v1/subscriptions/:subscriptionId', toValue(args)] as const
}

export function getApiV1SubscriptionsSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SubscriptionsSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SubscriptionsSubscriptionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubscriptionsSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SubscriptionsSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiV1SubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiV1SubscriptionsSubscriptionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchApiV1SubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchApiV1SubscriptionsSubscriptionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1SubscriptionsSubscriptionIdAddonsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>
  >,
) {
  return ['api', '/api/v1/subscriptions/:subscriptionId/addons', toValue(args)] as const
}

export function getApiV1SubscriptionsSubscriptionIdAddonsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SubscriptionsSubscriptionIdAddonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].addons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SubscriptionsSubscriptionIdAddons<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getApiV1SubscriptionsSubscriptionIdAddonsQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SubscriptionsSubscriptionIdAddonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SubscriptionsSubscriptionIdAddonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].addons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1SubscriptionsSubscriptionIdAddons<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1SubscriptionsSubscriptionIdAddonsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/addons/:subscriptionAddonId',
    toValue(args),
  ] as const
}

export function getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.subscriptions[':subscriptionId'].addons[':subscriptionAddonId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].addons[':subscriptionAddonId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePatchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults =
    getPatchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1SubscriptionsSubscriptionIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1SubscriptionsSubscriptionIdCancelMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1SubscriptionsSubscriptionIdChange<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1SubscriptionsSubscriptionIdChangeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1SubscriptionsSubscriptionIdMigrate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1SubscriptionsSubscriptionIdMigrateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1SubscriptionsSubscriptionIdRestore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1SubscriptionsSubscriptionIdRestoreMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1SubscriptionsSubscriptionIdUnscheduleCancelation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults =
    getPostApiV1SubscriptionsSubscriptionIdUnscheduleCancelationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2CustomersCustomerIdOrKeyEntitlementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']>
  >,
) {
  return ['api', '/api/v2/customers/:customerIdOrKey/entitlements', toValue(args)] as const
}

export function getApiV2CustomersCustomerIdOrKeyEntitlementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2CustomersCustomerIdOrKeyEntitlementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.customers[':customerIdOrKey'].entitlements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2CustomersCustomerIdOrKeyEntitlements<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getApiV2CustomersCustomerIdOrKeyEntitlementsQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2CustomersCustomerIdOrKeyEntitlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2CustomersCustomerIdOrKeyEntitlementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.customers[':customerIdOrKey'].entitlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2CustomersCustomerIdOrKeyEntitlements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV2CustomersCustomerIdOrKeyEntitlementsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey',
    toValue(args),
  ] as const
}

export function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.customers[':customerIdOrKey'].entitlements[':entitlementIdOrFeatureKey'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKey<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.customers[':customerIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults =
    getDeleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/grants',
    toValue(args),
  ] as const
}

export function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.customers[':customerIdOrKey'].entitlements[
          ':entitlementIdOrFeatureKey'
        ].grants.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.customers[':customerIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].grants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults =
    getPostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/history',
    toValue(args),
  ] as const
}

export function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.customers[':customerIdOrKey'].entitlements[
          ':entitlementIdOrFeatureKey'
        ].history.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistory<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.customers[':customerIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverride<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults =
    getPutApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults =
    getPostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyResetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/value',
    toValue(args),
  ] as const
}

export function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.customers[':customerIdOrKey'].entitlements[
          ':entitlementIdOrFeatureKey'
        ].value.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValue<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.customers[':customerIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].value.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EntitlementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.entitlements.$get>>,
) {
  return ['api', '/api/v2/entitlements', toValue(args)] as const
}

export function getApiV2EntitlementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.entitlements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EntitlementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.entitlements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Entitlements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.entitlements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.entitlements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.entitlements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.entitlements.$get>>>
            >
          >,
          ReturnType<typeof getApiV2EntitlementsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.entitlements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EntitlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EntitlementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.entitlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EntitlementsEntitlementIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>
  >,
) {
  return ['api', '/api/v2/entitlements/:entitlementId', toValue(args)] as const
}

export function getApiV2EntitlementsEntitlementIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EntitlementsEntitlementIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.entitlements[':entitlementId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2EntitlementsEntitlementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2EntitlementsEntitlementIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EntitlementsEntitlementIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EntitlementsEntitlementIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.entitlements[':entitlementId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2EventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.events.$get>>,
) {
  return ['api', '/api/v2/events', toValue(args)] as const
}

export function getApiV2EventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2EventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.events.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.events.$get>>>>
          >,
          ReturnType<typeof getApiV2EventsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2EventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2EventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2GrantsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.grants.$get>>,
) {
  return ['api', '/api/v2/grants', toValue(args)] as const
}

export function getApiV2GrantsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.grants.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2GrantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.grants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Grants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.grants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.grants.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.grants.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.grants.$get>>>>
          >,
          ReturnType<typeof getApiV2GrantsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.grants.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2GrantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2GrantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.grants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
