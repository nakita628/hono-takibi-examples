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

export function getAlertsKey() {
  return ['alerts'] as const
}

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getPrepaidKey() {
  return ['prepaid'] as const
}

export function getScriptsKey() {
  return ['scripts'] as const
}

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getPostAlertsMutationKey() {
  return ['alerts', '/alerts', 'POST'] as const
}

export function getPostAlertsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$post>>>>>,
    TError,
    InferRequestType<typeof client.alerts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlertsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alerts.$post>) {
      return parseResponse(client.alerts.$post(args, options))
    },
  })
}

export function usePostAlerts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.alerts.$post>,
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
  const mutationDefaults = getPostAlertsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAlertsAcknowledgeAllMutationKey() {
  return ['alerts', '/alerts/acknowledgeAll', 'POST'] as const
}

export function getPostAlertsAcknowledgeAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.alerts.acknowledgeAll.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.alerts.acknowledgeAll.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlertsAcknowledgeAllMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alerts.acknowledgeAll.$post>) {
      return parseResponse(client.alerts.acknowledgeAll.$post(args, options))
    },
  })
}

export function usePostAlertsAcknowledgeAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.alerts.acknowledgeAll.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.alerts.acknowledgeAll.$post>,
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
  const mutationDefaults = getPostAlertsAcknowledgeAllMutationOptions<TError, TOnMutateResult>(
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

export function getPostAlertsAcknowledgeMultipleMutationKey() {
  return ['alerts', '/alerts/acknowledgeMultiple', 'POST'] as const
}

export function getPostAlertsAcknowledgeMultipleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.alerts.acknowledgeMultiple.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.alerts.acknowledgeMultiple.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlertsAcknowledgeMultipleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alerts.acknowledgeMultiple.$post>) {
      return parseResponse(client.alerts.acknowledgeMultiple.$post(args, options))
    },
  })
}

export function usePostAlertsAcknowledgeMultiple<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.alerts.acknowledgeMultiple.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.alerts.acknowledgeMultiple.$post>,
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
  const mutationDefaults = getPostAlertsAcknowledgeMultipleMutationOptions<TError, TOnMutateResult>(
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

export function getPostAlertsCloseAllMutationKey() {
  return ['alerts', '/alerts/closeAll', 'POST'] as const
}

export function getPostAlertsCloseAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.closeAll.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.alerts.closeAll.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlertsCloseAllMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alerts.closeAll.$post>) {
      return parseResponse(client.alerts.closeAll.$post(args, options))
    },
  })
}

export function usePostAlertsCloseAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.alerts.closeAll.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.alerts.closeAll.$post>,
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
  const mutationDefaults = getPostAlertsCloseAllMutationOptions<TError, TOnMutateResult>(
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

export function getPostAlertsCloseMultipleMutationKey() {
  return ['alerts', '/alerts/closeMultiple', 'POST'] as const
}

export function getPostAlertsCloseMultipleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.alerts.closeMultiple.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.alerts.closeMultiple.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlertsCloseMultipleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alerts.closeMultiple.$post>) {
      return parseResponse(client.alerts.closeMultiple.$post(args, options))
    },
  })
}

export function usePostAlertsCloseMultiple<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.alerts.closeMultiple.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.alerts.closeMultiple.$post>,
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
  const mutationDefaults = getPostAlertsCloseMultipleMutationOptions<TError, TOnMutateResult>(
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

export function getPostAlertsPagedMutationKey() {
  return ['alerts', '/alerts/paged', 'POST'] as const
}

export function getPostAlertsPagedMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.paged.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.alerts.paged.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlertsPagedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alerts.paged.$post>) {
      return parseResponse(client.alerts.paged.$post(args, options))
    },
  })
}

export function usePostAlertsPaged<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.alerts.paged.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.alerts.paged.$post>,
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
  const mutationDefaults = getPostAlertsPagedMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAlertsReportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alerts.report.$get>>,
) {
  return ['alerts', '/alerts/report', toValue(args)] as const
}

export function getAlertsReportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alerts.report.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts.report.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlertsReport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.report.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.alerts.report.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.report.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.report.$get>>>>
          >,
          ReturnType<typeof getAlertsReportQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.report.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts.report.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAlertsUndoAcknowledgeMultipleMutationKey() {
  return ['alerts', '/alerts/undoAcknowledgeMultiple', 'POST'] as const
}

export function getPostAlertsUndoAcknowledgeMultipleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.alerts.undoAcknowledgeMultiple.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.alerts.undoAcknowledgeMultiple.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlertsUndoAcknowledgeMultipleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alerts.undoAcknowledgeMultiple.$post>) {
      return parseResponse(client.alerts.undoAcknowledgeMultiple.$post(args, options))
    },
  })
}

export function usePostAlertsUndoAcknowledgeMultiple<
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
                  Awaited<ReturnType<typeof client.alerts.undoAcknowledgeMultiple.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.alerts.undoAcknowledgeMultiple.$post>,
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
  const mutationDefaults = getPostAlertsUndoAcknowledgeMultipleMutationOptions<
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

export function getPostAlertsUndoCloseMultipleMutationKey() {
  return ['alerts', '/alerts/undoCloseMultiple', 'POST'] as const
}

export function getPostAlertsUndoCloseMultipleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.alerts.undoCloseMultiple.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.alerts.undoCloseMultiple.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlertsUndoCloseMultipleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alerts.undoCloseMultiple.$post>) {
      return parseResponse(client.alerts.undoCloseMultiple.$post(args, options))
    },
  })
}

export function usePostAlertsUndoCloseMultiple<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.alerts.undoCloseMultiple.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.alerts.undoCloseMultiple.$post>,
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
  const mutationDefaults = getPostAlertsUndoCloseMultipleMutationOptions<TError, TOnMutateResult>(
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

export function getAlertsAlertIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts)[':alertId']['$get']>>,
) {
  return ['alerts', '/alerts/:alertId', toValue(args)] as const
}

export function getAlertsAlertIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts)[':alertId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsAlertIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts[':alertId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlertsAlertId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alertId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts)[':alertId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alertId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alertId']['$get']>>>
            >
          >,
          ReturnType<typeof getAlertsAlertIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alertId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsAlertIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsAlertIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts[':alertId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAlertsAlertIdAcknowledgeMutationKey() {
  return ['alerts', '/alerts/:alertId/acknowledge', 'POST'] as const
}

export function getPostAlertsAlertIdAcknowledgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.alerts)[':alertId']['acknowledge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.alerts)[':alertId']['acknowledge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAlertsAlertIdAcknowledgeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.alerts)[':alertId']['acknowledge']['$post']>,
    ) {
      return parseResponse(client.alerts[':alertId'].acknowledge.$post(args, options))
    },
  })
}

export function usePostAlertsAlertIdAcknowledge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts)[':alertId']['acknowledge']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.alerts)[':alertId']['acknowledge']['$post']>,
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
  const mutationDefaults = getPostAlertsAlertIdAcknowledgeMutationOptions<TError, TOnMutateResult>(
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

export function getPostAlertsAlertIdAnnotateMutationKey() {
  return ['alerts', '/alerts/:alertId/annotate', 'POST'] as const
}

export function getPostAlertsAlertIdAnnotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.alerts)[':alertId']['annotate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.alerts)[':alertId']['annotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAlertsAlertIdAnnotateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.alerts)[':alertId']['annotate']['$post']>,
    ) {
      return parseResponse(client.alerts[':alertId'].annotate.$post(args, options))
    },
  })
}

export function usePostAlertsAlertIdAnnotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts)[':alertId']['annotate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.alerts)[':alertId']['annotate']['$post']>,
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
  const mutationDefaults = getPostAlertsAlertIdAnnotateMutationOptions<TError, TOnMutateResult>(
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

export function getAlertsAlertIdAnnotationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.alerts)[':alertId']['annotations']['$get']>
  >,
) {
  return ['alerts', '/alerts/:alertId/annotations', toValue(args)] as const
}

export function getAlertsAlertIdAnnotationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.alerts)[':alertId']['annotations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsAlertIdAnnotationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts[':alertId'].annotations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlertsAlertIdAnnotations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts)[':alertId']['annotations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.alerts)[':alertId']['annotations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts)[':alertId']['annotations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts)[':alertId']['annotations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAlertsAlertIdAnnotationsQueryKey>
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
          Awaited<ReturnType<(typeof client.alerts)[':alertId']['annotations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsAlertIdAnnotationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsAlertIdAnnotationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts[':alertId'].annotations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlertsAlertIdAttachmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.alerts)[':alertId']['attachments']['$get']>
  >,
) {
  return ['alerts', '/alerts/:alertId/attachments', toValue(args)] as const
}

export function getAlertsAlertIdAttachmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.alerts)[':alertId']['attachments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsAlertIdAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts[':alertId'].attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlertsAlertIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts)[':alertId']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.alerts)[':alertId']['attachments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts)[':alertId']['attachments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts)[':alertId']['attachments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAlertsAlertIdAttachmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.alerts)[':alertId']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsAlertIdAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsAlertIdAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts[':alertId'].attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlertsAlertIdAttachmentsAttachmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.alerts)[':alertId']['attachments'][':attachmentId']['$get']>
  >,
) {
  return ['alerts', '/alerts/:alertId/attachments/:attachmentId', toValue(args)] as const
}

export function getAlertsAlertIdAttachmentsAttachmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.alerts)[':alertId']['attachments'][':attachmentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsAlertIdAttachmentsAttachmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts[':alertId'].attachments[':attachmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlertsAlertIdAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.alerts)[':alertId']['attachments'][':attachmentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.alerts)[':alertId']['attachments'][':attachmentId']['$get']>
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
                    (typeof client.alerts)[':alertId']['attachments'][':attachmentId']['$get']
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
                    (typeof client.alerts)[':alertId']['attachments'][':attachmentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAlertsAlertIdAttachmentsAttachmentIdQueryKey>
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
            ReturnType<(typeof client.alerts)[':alertId']['attachments'][':attachmentId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsAlertIdAttachmentsAttachmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsAlertIdAttachmentsAttachmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts[':alertId'].attachments[':attachmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAlertsAlertIdCloseMutationKey() {
  return ['alerts', '/alerts/:alertId/close', 'POST'] as const
}

export function getPostAlertsAlertIdCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.alerts)[':alertId']['close']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.alerts)[':alertId']['close']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAlertsAlertIdCloseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.alerts)[':alertId']['close']['$post']>) {
      return parseResponse(client.alerts[':alertId'].close.$post(args, options))
    },
  })
}

export function usePostAlertsAlertIdClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts)[':alertId']['close']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.alerts)[':alertId']['close']['$post']>,
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
  const mutationDefaults = getPostAlertsAlertIdCloseMutationOptions<TError, TOnMutateResult>(
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

export function getAlertsAlertIdNotificationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.alerts)[':alertId']['notifications']['$get']>
  >,
) {
  return ['alerts', '/alerts/:alertId/notifications', toValue(args)] as const
}

export function getAlertsAlertIdNotificationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.alerts)[':alertId']['notifications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsAlertIdNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts[':alertId'].notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlertsAlertIdNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts)[':alertId']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.alerts)[':alertId']['notifications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts)[':alertId']['notifications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts)[':alertId']['notifications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAlertsAlertIdNotificationsQueryKey>
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
          Awaited<ReturnType<(typeof client.alerts)[':alertId']['notifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsAlertIdNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsAlertIdNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts[':alertId'].notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlertsAlertIdOverviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts)[':alertId']['overview']['$get']>>,
) {
  return ['alerts', '/alerts/:alertId/overview', toValue(args)] as const
}

export function getAlertsAlertIdOverviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts)[':alertId']['overview']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsAlertIdOverviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts[':alertId'].overview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlertsAlertIdOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts)[':alertId']['overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.alerts)[':alertId']['overview']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts)[':alertId']['overview']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts)[':alertId']['overview']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAlertsAlertIdOverviewQueryKey>
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
          Awaited<ReturnType<(typeof client.alerts)[':alertId']['overview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsAlertIdOverviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsAlertIdOverviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts[':alertId'].overview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAlertsAlertIdUndoAcknowledgeMutationKey() {
  return ['alerts', '/alerts/:alertId/undoAcknowledge', 'POST'] as const
}

export function getPostAlertsAlertIdUndoAcknowledgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.alerts)[':alertId']['undoAcknowledge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.alerts)[':alertId']['undoAcknowledge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAlertsAlertIdUndoAcknowledgeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.alerts)[':alertId']['undoAcknowledge']['$post']>,
    ) {
      return parseResponse(client.alerts[':alertId'].undoAcknowledge.$post(args, options))
    },
  })
}

export function usePostAlertsAlertIdUndoAcknowledge<
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
                Awaited<ReturnType<(typeof client.alerts)[':alertId']['undoAcknowledge']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.alerts)[':alertId']['undoAcknowledge']['$post']>,
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
  const mutationDefaults = getPostAlertsAlertIdUndoAcknowledgeMutationOptions<
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

export function getPostAlertsAlertIdUndoCloseMutationKey() {
  return ['alerts', '/alerts/:alertId/undoClose', 'POST'] as const
}

export function getPostAlertsAlertIdUndoCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.alerts)[':alertId']['undoClose']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.alerts)[':alertId']['undoClose']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAlertsAlertIdUndoCloseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.alerts)[':alertId']['undoClose']['$post']>,
    ) {
      return parseResponse(client.alerts[':alertId'].undoClose.$post(args, options))
    },
  })
}

export function usePostAlertsAlertIdUndoClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.alerts)[':alertId']['undoClose']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.alerts)[':alertId']['undoClose']['$post']>,
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
  const mutationDefaults = getPostAlertsAlertIdUndoCloseMutationOptions<TError, TOnMutateResult>(
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

export function getCategoriesImagesQueryKey() {
  return ['categories', '/categories/images'] as const
}

export function getCategoriesImagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCategoriesImagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories.images.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesImages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.images.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categories.images.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categories.images.$get>>>
            >
          >,
          ReturnType<typeof getCategoriesImagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.images.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCategoriesImagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.categories.images.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesTeamIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':teamId']['$get']>>,
) {
  return ['categories', '/categories/:teamId', toValue(args)] as const
}

export function getCategoriesTeamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':teamId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesTeamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':teamId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':teamId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':teamId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':teamId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoriesTeamIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':teamId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesTeamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesTeamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':teamId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCategoriesTeamIdMutationKey() {
  return ['categories', '/categories/:teamId', 'POST'] as const
}

export function getPostCategoriesTeamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':teamId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.categories)[':teamId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCategoriesTeamIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.categories)[':teamId']['$post']>) {
      return parseResponse(client.categories[':teamId'].$post(args, options))
    },
  })
}

export function usePostCategoriesTeamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':teamId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.categories)[':teamId']['$post']>,
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
  const mutationDefaults = getPostCategoriesTeamIdMutationOptions<TError, TOnMutateResult>(
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

export function getCategoriesTeamIdMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':teamId']['metrics']['$get']>
  >,
) {
  return ['categories', '/categories/:teamId/metrics', toValue(args)] as const
}

export function getCategoriesTeamIdMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':teamId']['metrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesTeamIdMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':teamId'].metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesTeamIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':teamId']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':teamId']['metrics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':teamId']['metrics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':teamId']['metrics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoriesTeamIdMetricsQueryKey>
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
          Awaited<ReturnType<(typeof client.categories)[':teamId']['metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesTeamIdMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesTeamIdMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':teamId'].metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesTeamIdCategoryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['$get']>
  >,
) {
  return ['categories', '/categories/:teamId/:categoryId', toValue(args)] as const
}

export function getCategoriesTeamIdCategoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesTeamIdCategoryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':teamId'][':categoryId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesTeamIdCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':teamId'][':categoryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':teamId'][':categoryId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':teamId'][':categoryId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoriesTeamIdCategoryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.categories)[':teamId'][':categoryId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesTeamIdCategoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesTeamIdCategoryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':teamId'][':categoryId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCategoriesTeamIdCategoryIdMutationKey() {
  return ['categories', '/categories/:teamId/:categoryId', 'PUT'] as const
}

export function getPutCategoriesTeamIdCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.categories)[':teamId'][':categoryId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCategoriesTeamIdCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['$put']>,
    ) {
      return parseResponse(client.categories[':teamId'][':categoryId'].$put(args, options))
    },
  })
}

export function usePutCategoriesTeamIdCategoryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':teamId'][':categoryId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['$put']>,
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
  const mutationDefaults = getPutCategoriesTeamIdCategoryIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCategoriesTeamIdCategoryIdMutationKey() {
  return ['categories', '/categories/:teamId/:categoryId', 'DELETE'] as const
}

export function getDeleteCategoriesTeamIdCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.categories)[':teamId'][':categoryId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCategoriesTeamIdCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['$delete']>,
    ) {
      return parseResponse(client.categories[':teamId'][':categoryId'].$delete(args, options))
    },
  })
}

export function useDeleteCategoriesTeamIdCategoryId<
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
                    ReturnType<(typeof client.categories)[':teamId'][':categoryId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['$delete']>,
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
  const mutationDefaults = getDeleteCategoriesTeamIdCategoryIdMutationOptions<
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

export function getCategoriesTeamIdCategoryIdMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['metrics']['$get']>
  >,
) {
  return ['categories', '/categories/:teamId/:categoryId/metrics', toValue(args)] as const
}

export function getCategoriesTeamIdCategoryIdMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['metrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesTeamIdCategoryIdMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':teamId'][':categoryId'].metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesTeamIdCategoryIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':teamId'][':categoryId']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['metrics']['$get']>
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
                    (typeof client.categories)[':teamId'][':categoryId']['metrics']['$get']
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
                    (typeof client.categories)[':teamId'][':categoryId']['metrics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCategoriesTeamIdCategoryIdMetricsQueryKey>
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
            ReturnType<(typeof client.categories)[':teamId'][':categoryId']['metrics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesTeamIdCategoryIdMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesTeamIdCategoryIdMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':teamId'][':categoryId'].metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesTeamIdCategoryIdSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$get']>
  >,
) {
  return ['categories', '/categories/:teamId/:categoryId/subscriptions', toValue(args)] as const
}

export function getCategoriesTeamIdCategoryIdSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesTeamIdCategoryIdSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':teamId'][':categoryId'].subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesTeamIdCategoryIdSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$get']>
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
                    (typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$get']
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
                    (typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCategoriesTeamIdCategoryIdSubscriptionsQueryKey>
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
              (typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesTeamIdCategoryIdSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesTeamIdCategoryIdSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':teamId'][':categoryId'].subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCategoriesTeamIdCategoryIdSubscriptionsMutationKey() {
  return ['categories', '/categories/:teamId/:categoryId/subscriptions', 'POST'] as const
}

export function getPostCategoriesTeamIdCategoryIdSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCategoriesTeamIdCategoryIdSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$post']
      >,
    ) {
      return parseResponse(
        client.categories[':teamId'][':categoryId'].subscriptions.$post(args, options),
      )
    },
  })
}

export function usePostCategoriesTeamIdCategoryIdSubscriptions<
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
                    (typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$post']
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
  const mutationDefaults = getPostCategoriesTeamIdCategoryIdSubscriptionsMutationOptions<
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

export function getPostEventsPagedMutationKey() {
  return ['events', '/events/paged', 'POST'] as const
}

export function getPostEventsPagedMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.paged.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.events.paged.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsPagedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.paged.$post>) {
      return parseResponse(client.events.paged.$post(args, options))
    },
  })
}

export function usePostEventsPaged<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.events.paged.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.events.paged.$post>,
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
  const mutationDefaults = getPostEventsPagedMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEventsEventIdOverviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':eventId']['overview']['$get']>>,
) {
  return ['events', '/events/:eventId/overview', toValue(args)] as const
}

export function getEventsEventIdOverviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':eventId']['overview']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsEventIdOverviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':eventId'].overview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventIdOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':eventId']['overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':eventId']['overview']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':eventId']['overview']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':eventId']['overview']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsEventIdOverviewQueryKey>
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
          Awaited<ReturnType<(typeof client.events)[':eventId']['overview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdOverviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsEventIdOverviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':eventId'].overview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsEventIdParametersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)[':eventId']['parameters']['$get']>
  >,
) {
  return ['events', '/events/:eventId/parameters', toValue(args)] as const
}

export function getEventsEventIdParametersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)[':eventId']['parameters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsEventIdParametersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':eventId'].parameters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventIdParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':eventId']['parameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)[':eventId']['parameters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':eventId']['parameters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':eventId']['parameters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsEventIdParametersQueryKey>
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
          Awaited<ReturnType<(typeof client.events)[':eventId']['parameters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdParametersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsEventIdParametersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':eventId'].parameters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPrepaidBalanceQueryKey() {
  return ['prepaid', '/prepaid/balance'] as const
}

export function getPrepaidBalanceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPrepaidBalanceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.prepaid.balance.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePrepaidBalance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.balance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.balance.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.balance.$get>>>
            >
          >,
          ReturnType<typeof getPrepaidBalanceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.balance.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPrepaidBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPrepaidBalanceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.prepaid.balance.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPrepaidSettingsQueryKey() {
  return ['prepaid', '/prepaid/settings'] as const
}

export function getPrepaidSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPrepaidSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.prepaid.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePrepaidSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.settings.$get>>>
            >
          >,
          ReturnType<typeof getPrepaidSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPrepaidSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPrepaidSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.prepaid.settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPrepaidSettingsMutationKey() {
  return ['prepaid', '/prepaid/settings', 'PUT'] as const
}

export function getPutPrepaidSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.settings.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.prepaid.settings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutPrepaidSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.prepaid.settings.$put>) {
      return parseResponse(client.prepaid.settings.$put(args, options))
    },
  })
}

export function usePutPrepaidSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.settings.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.prepaid.settings.$put>,
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
  const mutationDefaults = getPutPrepaidSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getPrepaidTransactionsQueryKey() {
  return ['prepaid', '/prepaid/transactions'] as const
}

export function getPrepaidTransactionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPrepaidTransactionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.prepaid.transactions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePrepaidTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.transactions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.transactions.$get>>>
            >
          >,
          ReturnType<typeof getPrepaidTransactionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.transactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPrepaidTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPrepaidTransactionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.prepaid.transactions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScriptsInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scripts.instances.$get>>,
) {
  return ['scripts', '/scripts/instances', toValue(args)] as const
}

export function getScriptsInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scripts.instances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScriptsInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scripts.instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScriptsInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scripts.instances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scripts.instances.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scripts.instances.$get>>>
            >
          >,
          ReturnType<typeof getScriptsInstancesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScriptsInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scripts.instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostScriptsInstancesMutationKey() {
  return ['scripts', '/scripts/instances', 'POST'] as const
}

export function getPostScriptsInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.instances.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.scripts.instances.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScriptsInstancesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.scripts.instances.$post>) {
      return parseResponse(client.scripts.instances.$post(args, options))
    },
  })
}

export function usePostScriptsInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scripts.instances.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.scripts.instances.$post>,
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
  const mutationDefaults = getPostScriptsInstancesMutationOptions<TError, TOnMutateResult>(
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

export function getScriptsInstancesInstanceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scripts.instances)[':instanceId']['$get']>
  >,
) {
  return ['scripts', '/scripts/instances/:instanceId', toValue(args)] as const
}

export function getScriptsInstancesInstanceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scripts.instances)[':instanceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScriptsInstancesInstanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scripts.instances[':instanceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScriptsInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts.instances)[':instanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scripts.instances)[':instanceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts.instances)[':instanceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts.instances)[':instanceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getScriptsInstancesInstanceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.scripts.instances)[':instanceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsInstancesInstanceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScriptsInstancesInstanceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scripts.instances[':instanceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutScriptsInstancesInstanceIdMutationKey() {
  return ['scripts', '/scripts/instances/:instanceId', 'PUT'] as const
}

export function getPutScriptsInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scripts.instances)[':instanceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scripts.instances)[':instanceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutScriptsInstancesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scripts.instances)[':instanceId']['$put']>,
    ) {
      return parseResponse(client.scripts.instances[':instanceId'].$put(args, options))
    },
  })
}

export function usePutScriptsInstancesInstanceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts.instances)[':instanceId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.scripts.instances)[':instanceId']['$put']>,
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
  const mutationDefaults = getPutScriptsInstancesInstanceIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteScriptsInstancesInstanceIdMutationKey() {
  return ['scripts', '/scripts/instances/:instanceId', 'DELETE'] as const
}

export function getDeleteScriptsInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scripts.instances)[':instanceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scripts.instances)[':instanceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScriptsInstancesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scripts.instances)[':instanceId']['$delete']>,
    ) {
      return parseResponse(client.scripts.instances[':instanceId'].$delete(args, options))
    },
  })
}

export function useDeleteScriptsInstancesInstanceId<
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
                Awaited<ReturnType<(typeof client.scripts.instances)[':instanceId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.scripts.instances)[':instanceId']['$delete']>,
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
  const mutationDefaults = getDeleteScriptsInstancesInstanceIdMutationOptions<
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

export function getPutScriptsInstancesInstanceIdDataMutationKey() {
  return ['scripts', '/scripts/instances/:instanceId/data', 'PUT'] as const
}

export function getPutScriptsInstancesInstanceIdDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scripts.instances)[':instanceId']['data']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scripts.instances)[':instanceId']['data']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutScriptsInstancesInstanceIdDataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scripts.instances)[':instanceId']['data']['$put']>,
    ) {
      return parseResponse(client.scripts.instances[':instanceId'].data.$put(args, options))
    },
  })
}

export function usePutScriptsInstancesInstanceIdData<
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
                  ReturnType<(typeof client.scripts.instances)[':instanceId']['data']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.scripts.instances)[':instanceId']['data']['$put']>,
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
  const mutationDefaults = getPutScriptsInstancesInstanceIdDataMutationOptions<
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

export function getPostScriptsInstancesInstanceIdDisableMutationKey() {
  return ['scripts', '/scripts/instances/:instanceId/disable', 'POST'] as const
}

export function getPostScriptsInstancesInstanceIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scripts.instances)[':instanceId']['disable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scripts.instances)[':instanceId']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScriptsInstancesInstanceIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scripts.instances)[':instanceId']['disable']['$post']>,
    ) {
      return parseResponse(client.scripts.instances[':instanceId'].disable.$post(args, options))
    },
  })
}

export function usePostScriptsInstancesInstanceIdDisable<
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
                  ReturnType<(typeof client.scripts.instances)[':instanceId']['disable']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.scripts.instances)[':instanceId']['disable']['$post']>,
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
  const mutationDefaults = getPostScriptsInstancesInstanceIdDisableMutationOptions<
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

export function getPostScriptsInstancesInstanceIdEnableMutationKey() {
  return ['scripts', '/scripts/instances/:instanceId/enable', 'POST'] as const
}

export function getPostScriptsInstancesInstanceIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scripts.instances)[':instanceId']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scripts.instances)[':instanceId']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScriptsInstancesInstanceIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scripts.instances)[':instanceId']['enable']['$post']>,
    ) {
      return parseResponse(client.scripts.instances[':instanceId'].enable.$post(args, options))
    },
  })
}

export function usePostScriptsInstancesInstanceIdEnable<
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
                  ReturnType<(typeof client.scripts.instances)[':instanceId']['enable']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.scripts.instances)[':instanceId']['enable']['$post']>,
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
  const mutationDefaults = getPostScriptsInstancesInstanceIdEnableMutationOptions<
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

export function getScriptsInventoryQueryKey() {
  return ['scripts', '/scripts/inventory'] as const
}

export function getScriptsInventoryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getScriptsInventoryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scripts.inventory.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScriptsInventory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.inventory.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scripts.inventory.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scripts.inventory.$get>>>
            >
          >,
          ReturnType<typeof getScriptsInventoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.inventory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsInventoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getScriptsInventoryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.scripts.inventory.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScriptsInventoryParsedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scripts.inventory.parsed.$get>>,
) {
  return ['scripts', '/scripts/inventory/parsed', toValue(args)] as const
}

export function getScriptsInventoryParsedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scripts.inventory.parsed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScriptsInventoryParsedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scripts.inventory.parsed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScriptsInventoryParsed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.scripts.inventory.parsed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scripts.inventory.parsed.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scripts.inventory.parsed.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scripts.inventory.parsed.$get>>>
            >
          >,
          ReturnType<typeof getScriptsInventoryParsedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.scripts.inventory.parsed.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsInventoryParsedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScriptsInventoryParsedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scripts.inventory.parsed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScriptsInventoryParsedScriptIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scripts.inventory.parsed)[':scriptId']['$get']>
  >,
) {
  return ['scripts', '/scripts/inventory/parsed/:scriptId', toValue(args)] as const
}

export function getScriptsInventoryParsedScriptIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scripts.inventory.parsed)[':scriptId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScriptsInventoryParsedScriptIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scripts.inventory.parsed[':scriptId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScriptsInventoryParsedScriptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts.inventory.parsed)[':scriptId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.scripts.inventory.parsed)[':scriptId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts.inventory.parsed)[':scriptId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scripts.inventory.parsed)[':scriptId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getScriptsInventoryParsedScriptIdQueryKey>
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
          Awaited<ReturnType<(typeof client.scripts.inventory.parsed)[':scriptId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsInventoryParsedScriptIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScriptsInventoryParsedScriptIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scripts.inventory.parsed[':scriptId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsQueryKey() {
  return ['subscriptions', '/subscriptions'] as const
}

export function getSubscriptionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSubscriptionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          ReturnType<typeof getSubscriptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSubscriptionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>
  >,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId', toValue(args)] as const
}

export function getSubscriptionsSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':subscriptionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsSubscriptionIdChannelPricesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['channelPrices']['$get']>
  >,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId/channelPrices', toValue(args)] as const
}

export function getSubscriptionsSubscriptionIdChannelPricesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['channelPrices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsSubscriptionIdChannelPricesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].channelPrices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsSubscriptionIdChannelPrices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.subscriptions)[':subscriptionId']['channelPrices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['channelPrices']['$get']>
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
                    (typeof client.subscriptions)[':subscriptionId']['channelPrices']['$get']
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
                    (typeof client.subscriptions)[':subscriptionId']['channelPrices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsSubscriptionIdChannelPricesQueryKey>
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
            ReturnType<(typeof client.subscriptions)[':subscriptionId']['channelPrices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdChannelPricesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsSubscriptionIdChannelPricesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':subscriptionId'].channelPrices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsSubscriptionIdFeaturesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['features']['$get']>
  >,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId/features', toValue(args)] as const
}

export function getSubscriptionsSubscriptionIdFeaturesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['features']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsSubscriptionIdFeaturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].features.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsSubscriptionIdFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['features']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.subscriptions)[':subscriptionId']['features']['$get']>
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
                  ReturnType<(typeof client.subscriptions)[':subscriptionId']['features']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsSubscriptionIdFeaturesQueryKey>
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
          Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['features']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsSubscriptionIdFeaturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':subscriptionId'].features.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsSubscriptionIdPrepaidBalanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['prepaidBalance']['$get']>
  >,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId/prepaidBalance', toValue(args)] as const
}

export function getSubscriptionsSubscriptionIdPrepaidBalanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['prepaidBalance']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsSubscriptionIdPrepaidBalanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].prepaidBalance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsSubscriptionIdPrepaidBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.subscriptions)[':subscriptionId']['prepaidBalance']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['prepaidBalance']['$get']>
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
                    (typeof client.subscriptions)[':subscriptionId']['prepaidBalance']['$get']
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
                    (typeof client.subscriptions)[':subscriptionId']['prepaidBalance']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsSubscriptionIdPrepaidBalanceQueryKey>
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
            ReturnType<(typeof client.subscriptions)[':subscriptionId']['prepaidBalance']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdPrepaidBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsSubscriptionIdPrepaidBalanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':subscriptionId'].prepaidBalance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsSubscriptionIdPrepaidSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$get']>
  >,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId/prepaidSettings', toValue(args)] as const
}

export function getSubscriptionsSubscriptionIdPrepaidSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsSubscriptionIdPrepaidSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].prepaidSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsSubscriptionIdPrepaidSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$get']>
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
                    (typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$get']
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
                    (typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsSubscriptionIdPrepaidSettingsQueryKey>
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
            ReturnType<(typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdPrepaidSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsSubscriptionIdPrepaidSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':subscriptionId'].prepaidSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSubscriptionsSubscriptionIdPrepaidSettingsMutationKey() {
  return ['subscriptions', '/subscriptions/:subscriptionId/prepaidSettings', 'PUT'] as const
}

export function getPutSubscriptionsSubscriptionIdPrepaidSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionsSubscriptionIdPrepaidSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$put']
      >,
    ) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].prepaidSettings.$put(args, options),
      )
    },
  })
}

export function usePutSubscriptionsSubscriptionIdPrepaidSettings<
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
                    (typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$put']
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
  const mutationDefaults = getPutSubscriptionsSubscriptionIdPrepaidSettingsMutationOptions<
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

export function getSubscriptionsSubscriptionIdPrepaidTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':subscriptionId']['prepaidTransactions']['$get']
    >
  >,
) {
  return [
    'subscriptions',
    '/subscriptions/:subscriptionId/prepaidTransactions',
    toValue(args),
  ] as const
}

export function getSubscriptionsSubscriptionIdPrepaidTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':subscriptionId']['prepaidTransactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsSubscriptionIdPrepaidTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].prepaidTransactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsSubscriptionIdPrepaidTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.subscriptions)[':subscriptionId']['prepaidTransactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.subscriptions)[':subscriptionId']['prepaidTransactions']['$get']
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
                    (typeof client.subscriptions)[':subscriptionId']['prepaidTransactions']['$get']
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
                    (typeof client.subscriptions)[':subscriptionId']['prepaidTransactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsSubscriptionIdPrepaidTransactionsQueryKey>
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
              (typeof client.subscriptions)[':subscriptionId']['prepaidTransactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdPrepaidTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsSubscriptionIdPrepaidTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':subscriptionId'].prepaidTransactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSubscriptionsSubscriptionIdProfileMutationKey() {
  return ['subscriptions', '/subscriptions/:subscriptionId/profile', 'PUT'] as const
}

export function getPutSubscriptionsSubscriptionIdProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['profile']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['profile']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionsSubscriptionIdProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['profile']['$put']>,
    ) {
      return parseResponse(client.subscriptions[':subscriptionId'].profile.$put(args, options))
    },
  })
}

export function usePutSubscriptionsSubscriptionIdProfile<
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
                  ReturnType<(typeof client.subscriptions)[':subscriptionId']['profile']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':subscriptionId']['profile']['$put']>,
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
  const mutationDefaults = getPutSubscriptionsSubscriptionIdProfileMutationOptions<
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

export function getSubscriptionsSubscriptionIdTeamsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['teams']['$get']>
  >,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId/teams', toValue(args)] as const
}

export function getSubscriptionsSubscriptionIdTeamsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['teams']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsSubscriptionIdTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].teams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsSubscriptionIdTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['teams']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.subscriptions)[':subscriptionId']['teams']['$get']>
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
                  ReturnType<(typeof client.subscriptions)[':subscriptionId']['teams']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsSubscriptionIdTeamsQueryKey>
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
          Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsSubscriptionIdTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':subscriptionId'].teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsSubscriptionIdUserLicensesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['userLicenses']['$get']>
  >,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId/userLicenses', toValue(args)] as const
}

export function getSubscriptionsSubscriptionIdUserLicensesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['userLicenses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsSubscriptionIdUserLicensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].userLicenses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsSubscriptionIdUserLicenses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.subscriptions)[':subscriptionId']['userLicenses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['userLicenses']['$get']>
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
                    (typeof client.subscriptions)[':subscriptionId']['userLicenses']['$get']
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
                    (typeof client.subscriptions)[':subscriptionId']['userLicenses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsSubscriptionIdUserLicensesQueryKey>
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
            ReturnType<(typeof client.subscriptions)[':subscriptionId']['userLicenses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdUserLicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsSubscriptionIdUserLicensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':subscriptionId'].userLicenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsQueryKey() {
  return ['teams', '/teams'] as const
}

export function getTeamsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTeamsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeams<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
          ReturnType<typeof getTeamsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTeamsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.teams.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['$get']>>,
) {
  return ['teams', '/teams/:teamId', toValue(args)] as const
}

export function getTeamsTeamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>
            >
          >,
          ReturnType<typeof getTeamsTeamIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdAlertReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['alertReports']['$get']>
  >,
) {
  return ['teams', '/teams/:teamId/alertReports', toValue(args)] as const
}

export function getTeamsTeamIdAlertReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['alertReports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdAlertReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].alertReports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdAlertReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['alertReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['alertReports']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['alertReports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['alertReports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdAlertReportsQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':teamId']['alertReports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdAlertReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdAlertReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].alertReports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdAlertReportsFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['alertReports'][':fileName']['$get']>
  >,
) {
  return ['teams', '/teams/:teamId/alertReports/:fileName', toValue(args)] as const
}

export function getTeamsTeamIdAlertReportsFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['alertReports'][':fileName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdAlertReportsFileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].alertReports[':fileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdAlertReportsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['alertReports'][':fileName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['alertReports'][':fileName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.teams)[':teamId']['alertReports'][':fileName']['$get']>
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
                  ReturnType<(typeof client.teams)[':teamId']['alertReports'][':fileName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdAlertReportsFileNameQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':teamId']['alertReports'][':fileName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdAlertReportsFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdAlertReportsFileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].alertReports[':fileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdAlertSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['alertSettings']['$get']>
  >,
) {
  return ['teams', '/teams/:teamId/alertSettings', toValue(args)] as const
}

export function getTeamsTeamIdAlertSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['alertSettings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdAlertSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].alertSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdAlertSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['alertSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['alertSettings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['alertSettings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['alertSettings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdAlertSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':teamId']['alertSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdAlertSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdAlertSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].alertSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTeamsTeamIdAlertSettingsMutationKey() {
  return ['teams', '/teams/:teamId/alertSettings', 'POST'] as const
}

export function getPostTeamsTeamIdAlertSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':teamId']['alertSettings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['alertSettings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsTeamIdAlertSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':teamId']['alertSettings']['$post']>,
    ) {
      return parseResponse(client.teams[':teamId'].alertSettings.$post(args, options))
    },
  })
}

export function usePostTeamsTeamIdAlertSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['alertSettings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.teams)[':teamId']['alertSettings']['$post']>,
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
  const mutationDefaults = getPostTeamsTeamIdAlertSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getTeamsTeamIdDutyReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['dutyReports']['$get']>>,
) {
  return ['teams', '/teams/:teamId/dutyReports', toValue(args)] as const
}

export function getTeamsTeamIdDutyReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['dutyReports']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdDutyReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].dutyReports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdDutyReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['dutyReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['dutyReports']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['dutyReports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['dutyReports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdDutyReportsQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':teamId']['dutyReports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdDutyReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdDutyReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].dutyReports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdDutyReportsFileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['dutyReports'][':fileName']['$get']>
  >,
) {
  return ['teams', '/teams/:teamId/dutyReports/:fileName', toValue(args)] as const
}

export function getTeamsTeamIdDutyReportsFileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['dutyReports'][':fileName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdDutyReportsFileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].dutyReports[':fileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdDutyReportsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['dutyReports'][':fileName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['dutyReports'][':fileName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.teams)[':teamId']['dutyReports'][':fileName']['$get']>
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
                  ReturnType<(typeof client.teams)[':teamId']['dutyReports'][':fileName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdDutyReportsFileNameQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':teamId']['dutyReports'][':fileName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdDutyReportsFileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdDutyReportsFileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].dutyReports[':fileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdDutysummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['dutysummary']['$get']>>,
) {
  return ['teams', '/teams/:teamId/dutysummary', toValue(args)] as const
}

export function getTeamsTeamIdDutysummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['dutysummary']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdDutysummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].dutysummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdDutysummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['dutysummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['dutysummary']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['dutysummary']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['dutysummary']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdDutysummaryQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':teamId']['dutysummary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdDutysummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdDutysummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].dutysummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdEventSourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['eventSources']['$get']>
  >,
) {
  return ['teams', '/teams/:teamId/eventSources', toValue(args)] as const
}

export function getTeamsTeamIdEventSourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['eventSources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdEventSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].eventSources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdEventSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['eventSources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['eventSources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['eventSources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['eventSources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdEventSourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':teamId']['eventSources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdEventSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdEventSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].eventSources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdMembershipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>>,
) {
  return ['teams', '/teams/:teamId/memberships', toValue(args)] as const
}

export function getTeamsTeamIdMembershipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTeamsTeamIdMembershipsMutationKey() {
  return ['teams', '/teams/:teamId/memberships', 'POST'] as const
}

export function getPostTeamsTeamIdMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['memberships']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsTeamIdMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':teamId']['memberships']['$post']>,
    ) {
      return parseResponse(client.teams[':teamId'].memberships.$post(args, options))
    },
  })
}

export function usePostTeamsTeamIdMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.teams)[':teamId']['memberships']['$post']>,
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
  const mutationDefaults = getPostTeamsTeamIdMembershipsMutationOptions<TError, TOnMutateResult>(
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

export function getPostTeamsTeamIdMembershipsResendInviteMailMutationKey() {
  return ['teams', '/teams/:teamId/memberships/resendInviteMail', 'POST'] as const
}

export function getPostTeamsTeamIdMembershipsResendInviteMailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.teams)[':teamId']['memberships']['resendInviteMail']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['memberships']['resendInviteMail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsTeamIdMembershipsResendInviteMailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.teams)[':teamId']['memberships']['resendInviteMail']['$post']
      >,
    ) {
      return parseResponse(
        client.teams[':teamId'].memberships.resendInviteMail.$post(args, options),
      )
    },
  })
}

export function usePostTeamsTeamIdMembershipsResendInviteMail<
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
                    (typeof client.teams)[':teamId']['memberships']['resendInviteMail']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.teams)[':teamId']['memberships']['resendInviteMail']['$post']
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
  const mutationDefaults = getPostTeamsTeamIdMembershipsResendInviteMailMutationOptions<
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

export function getPutTeamsTeamIdMembershipsUserIdMutationKey() {
  return ['teams', '/teams/:teamId/memberships/:userId', 'PUT'] as const
}

export function getPutTeamsTeamIdMembershipsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships'][':userId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['memberships'][':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamsTeamIdMembershipsUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':teamId']['memberships'][':userId']['$put']>,
    ) {
      return parseResponse(client.teams[':teamId'].memberships[':userId'].$put(args, options))
    },
  })
}

export function usePutTeamsTeamIdMembershipsUserId<
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
                    ReturnType<(typeof client.teams)[':teamId']['memberships'][':userId']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.teams)[':teamId']['memberships'][':userId']['$put']>,
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
  const mutationDefaults = getPutTeamsTeamIdMembershipsUserIdMutationOptions<
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

export function getDeleteTeamsTeamIdMembershipsUserIdMutationKey() {
  return ['teams', '/teams/:teamId/memberships/:userId', 'DELETE'] as const
}

export function getDeleteTeamsTeamIdMembershipsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.teams)[':teamId']['memberships'][':userId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['memberships'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamsTeamIdMembershipsUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':teamId']['memberships'][':userId']['$delete']>,
    ) {
      return parseResponse(client.teams[':teamId'].memberships[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteTeamsTeamIdMembershipsUserId<
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
                      (typeof client.teams)[':teamId']['memberships'][':userId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.teams)[':teamId']['memberships'][':userId']['$delete']>,
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
  const mutationDefaults = getDeleteTeamsTeamIdMembershipsUserIdMutationOptions<
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

export function getPutTeamsTeamIdProfileMutationKey() {
  return ['teams', '/teams/:teamId/profile', 'PUT'] as const
}

export function getPutTeamsTeamIdProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':teamId']['profile']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['profile']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamsTeamIdProfileMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.teams)[':teamId']['profile']['$put']>) {
      return parseResponse(client.teams[':teamId'].profile.$put(args, options))
    },
  })
}

export function usePutTeamsTeamIdProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['profile']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.teams)[':teamId']['profile']['$put']>,
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
  const mutationDefaults = getPutTeamsTeamIdProfileMutationOptions<TError, TOnMutateResult>(
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

export function getTeamsTeamIdSchedulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['schedules']['$get']>>,
) {
  return ['teams', '/teams/:teamId/schedules', toValue(args)] as const
}

export function getTeamsTeamIdSchedulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['schedules']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].schedules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['schedules']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['schedules']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['schedules']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdSchedulesQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':teamId']['schedules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTeamsTeamIdSchedulesMutationKey() {
  return ['teams', '/teams/:teamId/schedules', 'POST'] as const
}

export function getPostTeamsTeamIdSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':teamId']['schedules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['schedules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsTeamIdSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':teamId']['schedules']['$post']>,
    ) {
      return parseResponse(client.teams[':teamId'].schedules.$post(args, options))
    },
  })
}

export function usePostTeamsTeamIdSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['schedules']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.teams)[':teamId']['schedules']['$post']>,
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
  const mutationDefaults = getPostTeamsTeamIdSchedulesMutationOptions<TError, TOnMutateResult>(
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

export function getPostTeamsTeamIdSchedulesDeleteRangeMutationKey() {
  return ['teams', '/teams/:teamId/schedules/deleteRange', 'POST'] as const
}

export function getPostTeamsTeamIdSchedulesDeleteRangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':teamId']['schedules']['deleteRange']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['schedules']['deleteRange']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsTeamIdSchedulesDeleteRangeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':teamId']['schedules']['deleteRange']['$post']>,
    ) {
      return parseResponse(client.teams[':teamId'].schedules.deleteRange.$post(args, options))
    },
  })
}

export function usePostTeamsTeamIdSchedulesDeleteRange<
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
                  ReturnType<(typeof client.teams)[':teamId']['schedules']['deleteRange']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.teams)[':teamId']['schedules']['deleteRange']['$post']>,
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
  const mutationDefaults = getPostTeamsTeamIdSchedulesDeleteRangeMutationOptions<
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

export function getPostTeamsTeamIdSchedulesMultipleMutationKey() {
  return ['teams', '/teams/:teamId/schedules/multiple', 'POST'] as const
}

export function getPostTeamsTeamIdSchedulesMultipleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':teamId']['schedules']['multiple']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['schedules']['multiple']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsTeamIdSchedulesMultipleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':teamId']['schedules']['multiple']['$post']>,
    ) {
      return parseResponse(client.teams[':teamId'].schedules.multiple.$post(args, options))
    },
  })
}

export function usePostTeamsTeamIdSchedulesMultiple<
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
                  ReturnType<(typeof client.teams)[':teamId']['schedules']['multiple']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.teams)[':teamId']['schedules']['multiple']['$post']>,
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
  const mutationDefaults = getPostTeamsTeamIdSchedulesMultipleMutationOptions<
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

export function getDeleteTeamsTeamIdSchedulesDutyIdMutationKey() {
  return ['teams', '/teams/:teamId/schedules/:dutyId', 'DELETE'] as const
}

export function getDeleteTeamsTeamIdSchedulesDutyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['schedules'][':dutyId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['schedules'][':dutyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamsTeamIdSchedulesDutyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':teamId']['schedules'][':dutyId']['$delete']>,
    ) {
      return parseResponse(client.teams[':teamId'].schedules[':dutyId'].$delete(args, options))
    },
  })
}

export function useDeleteTeamsTeamIdSchedulesDutyId<
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
                    ReturnType<(typeof client.teams)[':teamId']['schedules'][':dutyId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.teams)[':teamId']['schedules'][':dutyId']['$delete']>,
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
  const mutationDefaults = getDeleteTeamsTeamIdSchedulesDutyIdMutationOptions<
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

export function getTeamsTeamIdSchedulesScheduleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['schedules'][':scheduleId']['$get']>
  >,
) {
  return ['teams', '/teams/:teamId/schedules/:scheduleId', toValue(args)] as const
}

export function getTeamsTeamIdSchedulesScheduleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['schedules'][':scheduleId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdSchedulesScheduleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].schedules[':scheduleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdSchedulesScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['schedules'][':scheduleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['schedules'][':scheduleId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.teams)[':teamId']['schedules'][':scheduleId']['$get']>
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
                  ReturnType<(typeof client.teams)[':teamId']['schedules'][':scheduleId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdSchedulesScheduleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':teamId']['schedules'][':scheduleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdSchedulesScheduleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdSchedulesScheduleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].schedules[':scheduleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdSetupProgressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['setupProgress']['$get']>
  >,
) {
  return ['teams', '/teams/:teamId/setupProgress', toValue(args)] as const
}

export function getTeamsTeamIdSetupProgressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['setupProgress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdSetupProgressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].setupProgress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdSetupProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['setupProgress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['setupProgress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['setupProgress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['setupProgress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdSetupProgressQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':teamId']['setupProgress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdSetupProgressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdSetupProgressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].setupProgress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersQueryKey() {
  return ['users', '/users'] as const
}

export function getUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
) {
  return ['users', '/users/:userId', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersUserIdChangePasswordMutationKey() {
  return ['users', '/users/:userId/changePassword', 'PUT'] as const
}

export function getPutUsersUserIdChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['changePassword']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['changePassword']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdChangePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['changePassword']['$put']>,
    ) {
      return parseResponse(client.users[':userId'].changePassword.$put(args, options))
    },
  })
}

export function usePutUsersUserIdChangePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['changePassword']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['changePassword']['$put']>,
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
  const mutationDefaults = getPutUsersUserIdChangePasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersUserIdCheckPermissionsMutationKey() {
  return ['users', '/users/:userId/checkPermissions', 'POST'] as const
}

export function getPostUsersUserIdCheckPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['checkPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['checkPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdCheckPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['checkPermissions']['$post']>,
    ) {
      return parseResponse(client.users[':userId'].checkPermissions.$post(args, options))
    },
  })
}

export function usePostUsersUserIdCheckPermissions<
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
                Awaited<ReturnType<(typeof client.users)[':userId']['checkPermissions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['checkPermissions']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdCheckPermissionsMutationOptions<
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

export function getUsersUserIdDutyStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['dutyStatus']['$get']>>,
) {
  return ['users', '/users/:userId/dutyStatus', toValue(args)] as const
}

export function getUsersUserIdDutyStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['dutyStatus']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdDutyStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].dutyStatus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdDutyStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['dutyStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['dutyStatus']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['dutyStatus']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['dutyStatus']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdDutyStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['dutyStatus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdDutyStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdDutyStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].dutyStatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdImageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['image']['$get']>>,
) {
  return ['users', '/users/:userId/image', toValue(args)] as const
}

export function getUsersUserIdImageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['image']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdImageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].image.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['image']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['image']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['image']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['image']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdImageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['image']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdImageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdImageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].image.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersUserIdImageMutationKey() {
  return ['users', '/users/:userId/image', 'POST'] as const
}

export function getPostUsersUserIdImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['image']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['image']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdImageMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['image']['$post']>) {
      return parseResponse(client.users[':userId'].image.$post(args, options))
    },
  })
}

export function usePostUsersUserIdImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['image']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['image']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdImageMutationOptions<TError, TOnMutateResult>(
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

export function getPutUsersUserIdProfileMutationKey() {
  return ['users', '/users/:userId/profile', 'PUT'] as const
}

export function getPutUsersUserIdProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['profile']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['profile']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdProfileMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['profile']['$put']>) {
      return parseResponse(client.users[':userId'].profile.$put(args, options))
    },
  })
}

export function usePutUsersUserIdProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['profile']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['profile']['$put']>,
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
  const mutationDefaults = getPutUsersUserIdProfileMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersUserIdPunchInMutationKey() {
  return ['users', '/users/:userId/punchIn', 'POST'] as const
}

export function getPostUsersUserIdPunchInMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['punchIn']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['punchIn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdPunchInMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['punchIn']['$post']>) {
      return parseResponse(client.users[':userId'].punchIn.$post(args, options))
    },
  })
}

export function usePostUsersUserIdPunchIn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['punchIn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['punchIn']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdPunchInMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersUserIdPunchInAsManagerMutationKey() {
  return ['users', '/users/:userId/punchInAsManager', 'POST'] as const
}

export function getPostUsersUserIdPunchInAsManagerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['punchInAsManager']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['punchInAsManager']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdPunchInAsManagerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['punchInAsManager']['$post']>,
    ) {
      return parseResponse(client.users[':userId'].punchInAsManager.$post(args, options))
    },
  })
}

export function usePostUsersUserIdPunchInAsManager<
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
                Awaited<ReturnType<(typeof client.users)[':userId']['punchInAsManager']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['punchInAsManager']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdPunchInAsManagerMutationOptions<
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

export function getPostUsersUserIdPunchOutMutationKey() {
  return ['users', '/users/:userId/punchOut', 'POST'] as const
}

export function getPostUsersUserIdPunchOutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['punchOut']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['punchOut']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdPunchOutMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['punchOut']['$post']>,
    ) {
      return parseResponse(client.users[':userId'].punchOut.$post(args, options))
    },
  })
}

export function usePostUsersUserIdPunchOut<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['punchOut']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['punchOut']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdPunchOutMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdSetupProgressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['setupProgress']['$get']>
  >,
) {
  return ['users', '/users/:userId/setupProgress', toValue(args)] as const
}

export function getUsersUserIdSetupProgressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['setupProgress']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdSetupProgressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].setupProgress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdSetupProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['setupProgress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['setupProgress']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['setupProgress']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['setupProgress']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdSetupProgressQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['setupProgress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdSetupProgressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdSetupProgressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].setupProgress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
) {
  return ['webhooks', '/webhooks', toValue(args)] as const
}

export function getWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          ReturnType<typeof getWebhooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.$post>,
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
  const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebhooksWebhookIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>>,
) {
  return ['webhooks', '/webhooks/:webhookId', toValue(args)] as const
}

export function getWebhooksWebhookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhookId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhookId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhookId', 'PUT'] as const
}

export function getPutWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhookId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhookId']['$put']>) {
      return parseResponse(client.webhooks[':webhookId'].$put(args, options))
    },
  })
}

export function usePutWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhookId']['$put']>,
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
  const mutationDefaults = getPutWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhookId', 'DELETE'] as const
}

export function getDeleteWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>) {
      return parseResponse(client.webhooks[':webhookId'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>,
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
  const mutationDefaults = getDeleteWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostWebhooksWebhookIdDisableMutationKey() {
  return ['webhooks', '/webhooks/:webhookId/disable', 'POST'] as const
}

export function getPostWebhooksWebhookIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['disable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhookId']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksWebhookIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':webhookId']['disable']['$post']>,
    ) {
      return parseResponse(client.webhooks[':webhookId'].disable.$post(args, options))
    },
  })
}

export function usePostWebhooksWebhookIdDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['disable']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhookId']['disable']['$post']>,
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
  const mutationDefaults = getPostWebhooksWebhookIdDisableMutationOptions<TError, TOnMutateResult>(
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

export function getPostWebhooksWebhookIdEnableMutationKey() {
  return ['webhooks', '/webhooks/:webhookId/enable', 'POST'] as const
}

export function getPostWebhooksWebhookIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhookId']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksWebhookIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':webhookId']['enable']['$post']>,
    ) {
      return parseResponse(client.webhooks[':webhookId'].enable.$post(args, options))
    },
  })
}

export function usePostWebhooksWebhookIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['enable']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhookId']['enable']['$post']>,
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
  const mutationDefaults = getPostWebhooksWebhookIdEnableMutationOptions<TError, TOnMutateResult>(
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
