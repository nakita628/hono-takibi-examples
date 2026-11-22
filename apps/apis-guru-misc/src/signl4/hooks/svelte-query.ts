import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createPostAlerts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$post>>>>>,
        TError,
        InferRequestType<typeof client.alerts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlertsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAlertsAcknowledgeAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlertsAcknowledgeAllMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAlertsAcknowledgeMultiple<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlertsAcknowledgeMultipleMutationOptions<
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

export function createPostAlertsCloseAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlertsCloseAllMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAlertsCloseMultiple<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlertsCloseMultipleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAlertsPaged<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.paged.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.alerts.paged.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlertsPagedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAlertsReportQueryKey(args: InferRequestType<typeof client.alerts.report.$get>) {
  return ['alerts', '/alerts/report', args] as const
}

export function getAlertsReportQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.report.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.alerts.report.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.report.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsReportQueryKey>
  >({
    queryKey: getAlertsReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts.report.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAlertsReport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.report.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.alerts.report.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.report.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAlertsReportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlertsReportQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAlertsUndoAcknowledgeMultiple<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlertsUndoAcknowledgeMultipleMutationOptions<
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

export function createPostAlertsUndoCloseMultiple<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlertsUndoCloseMultipleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAlertsAlertIdQueryKey(
  args: InferRequestType<(typeof client.alerts)[':alertId']['$get']>,
) {
  return ['alerts', '/alerts/:alertId', args] as const
}

export function getAlertsAlertIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alertId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.alerts)[':alertId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alertId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsAlertIdQueryKey>
  >({
    queryKey: getAlertsAlertIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts[':alertId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAlertsAlertId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alertId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.alerts)[':alertId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.alerts)[':alertId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAlertsAlertIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlertsAlertIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAlertsAlertIdAcknowledge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlertsAlertIdAcknowledgeMutationOptions<
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

export function createPostAlertsAlertIdAnnotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlertsAlertIdAnnotateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAlertsAlertIdAnnotationsQueryKey(
  args: InferRequestType<(typeof client.alerts)[':alertId']['annotations']['$get']>,
) {
  return ['alerts', '/alerts/:alertId/annotations', args] as const
}

export function getAlertsAlertIdAnnotationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts)[':alertId']['annotations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.alerts)[':alertId']['annotations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAlertsAlertIdAnnotationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts[':alertId'].annotations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlertsAlertIdAnnotations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts)[':alertId']['annotations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.alerts)[':alertId']['annotations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAlertsAlertIdAnnotationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAlertsAlertIdAttachmentsQueryKey(
  args: InferRequestType<(typeof client.alerts)[':alertId']['attachments']['$get']>,
) {
  return ['alerts', '/alerts/:alertId/attachments', args] as const
}

export function getAlertsAlertIdAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts)[':alertId']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.alerts)[':alertId']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAlertsAlertIdAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts[':alertId'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlertsAlertIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts)[':alertId']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.alerts)[':alertId']['attachments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAlertsAlertIdAttachmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAlertsAlertIdAttachmentsAttachmentIdQueryKey(
  args: InferRequestType<
    (typeof client.alerts)[':alertId']['attachments'][':attachmentId']['$get']
  >,
) {
  return ['alerts', '/alerts/:alertId/attachments/:attachmentId', args] as const
}

export function getAlertsAlertIdAttachmentsAttachmentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.alerts)[':alertId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAlertsAlertIdAttachmentsAttachmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts[':alertId'].attachments[':attachmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlertsAlertIdAttachmentsAttachmentId<
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
  args: () => InferRequestType<
    (typeof client.alerts)[':alertId']['attachments'][':attachmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAlertsAlertIdAttachmentsAttachmentIdQueryKey>
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
      ...getAlertsAlertIdAttachmentsAttachmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAlertsAlertIdClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlertsAlertIdCloseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAlertsAlertIdNotificationsQueryKey(
  args: InferRequestType<(typeof client.alerts)[':alertId']['notifications']['$get']>,
) {
  return ['alerts', '/alerts/:alertId/notifications', args] as const
}

export function getAlertsAlertIdNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts)[':alertId']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.alerts)[':alertId']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAlertsAlertIdNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts[':alertId'].notifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlertsAlertIdNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts)[':alertId']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.alerts)[':alertId']['notifications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAlertsAlertIdNotificationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAlertsAlertIdOverviewQueryKey(
  args: InferRequestType<(typeof client.alerts)[':alertId']['overview']['$get']>,
) {
  return ['alerts', '/alerts/:alertId/overview', args] as const
}

export function getAlertsAlertIdOverviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts)[':alertId']['overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.alerts)[':alertId']['overview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAlertsAlertIdOverviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts[':alertId'].overview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlertsAlertIdOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.alerts)[':alertId']['overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.alerts)[':alertId']['overview']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAlertsAlertIdOverviewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAlertsAlertIdUndoAcknowledge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlertsAlertIdUndoAcknowledgeMutationOptions<
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

export function createPostAlertsAlertIdUndoClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlertsAlertIdUndoCloseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCategoriesImagesQueryKey() {
  return ['categories', '/categories/images'] as const
}

export function getCategoriesImagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.images.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.images.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesImagesQueryKey>
  >({
    queryKey: getCategoriesImagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.categories.images.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCategoriesImages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.images.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.categories.images.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesImagesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCategoriesTeamIdQueryKey(
  args: InferRequestType<(typeof client.categories)[':teamId']['$get']>,
) {
  return ['categories', '/categories/:teamId', args] as const
}

export function getCategoriesTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':teamId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesTeamIdQueryKey>
  >({
    queryKey: getCategoriesTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':teamId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCategoriesTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.categories)[':teamId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':teamId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCategoriesTeamIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostCategoriesTeamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCategoriesTeamIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCategoriesTeamIdMetricsQueryKey(
  args: InferRequestType<(typeof client.categories)[':teamId']['metrics']['$get']>,
) {
  return ['categories', '/categories/:teamId/metrics', args] as const
}

export function getCategoriesTeamIdMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':teamId']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':teamId']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCategoriesTeamIdMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':teamId'].metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCategoriesTeamIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':teamId']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.categories)[':teamId']['metrics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCategoriesTeamIdMetricsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCategoriesTeamIdCategoryIdQueryKey(
  args: InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['$get']>,
) {
  return ['categories', '/categories/:teamId/:categoryId', args] as const
}

export function getCategoriesTeamIdCategoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':teamId'][':categoryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCategoriesTeamIdCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':teamId'][':categoryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCategoriesTeamIdCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':teamId'][':categoryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCategoriesTeamIdCategoryIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutCategoriesTeamIdCategoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCategoriesTeamIdCategoryIdMutationOptions<
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

export function createDeleteCategoriesTeamIdCategoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCategoriesTeamIdCategoryIdMutationOptions<
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

export function getCategoriesTeamIdCategoryIdMetricsQueryKey(
  args: InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['metrics']['$get']>,
) {
  return ['categories', '/categories/:teamId/:categoryId/metrics', args] as const
}

export function getCategoriesTeamIdCategoryIdMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':teamId'][':categoryId']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':teamId'][':categoryId']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCategoriesTeamIdCategoryIdMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':teamId'][':categoryId'].metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCategoriesTeamIdCategoryIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.categories)[':teamId'][':categoryId']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.categories)[':teamId'][':categoryId']['metrics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCategoriesTeamIdCategoryIdMetricsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCategoriesTeamIdCategoryIdSubscriptionsQueryKey(
  args: InferRequestType<
    (typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$get']
  >,
) {
  return ['categories', '/categories/:teamId/:categoryId/subscriptions', args] as const
}

export function getCategoriesTeamIdCategoryIdSubscriptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCategoriesTeamIdCategoryIdSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':teamId'][':categoryId'].subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCategoriesTeamIdCategoryIdSubscriptions<
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
  args: () => InferRequestType<
    (typeof client.categories)[':teamId'][':categoryId']['subscriptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCategoriesTeamIdCategoryIdSubscriptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostCategoriesTeamIdCategoryIdSubscriptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCategoriesTeamIdCategoryIdSubscriptionsMutationOptions<
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

export function createPostEventsPaged<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.paged.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.events.paged.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsPagedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEventsEventIdOverviewQueryKey(
  args: InferRequestType<(typeof client.events)[':eventId']['overview']['$get']>,
) {
  return ['events', '/events/:eventId/overview', args] as const
}

export function getEventsEventIdOverviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':eventId']['overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':eventId']['overview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEventsEventIdOverviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':eventId'].overview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsEventIdOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':eventId']['overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':eventId']['overview']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEventsEventIdOverviewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEventsEventIdParametersQueryKey(
  args: InferRequestType<(typeof client.events)[':eventId']['parameters']['$get']>,
) {
  return ['events', '/events/:eventId/parameters', args] as const
}

export function getEventsEventIdParametersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':eventId']['parameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':eventId']['parameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEventsEventIdParametersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':eventId'].parameters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsEventIdParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':eventId']['parameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':eventId']['parameters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getEventsEventIdParametersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPrepaidBalanceQueryKey() {
  return ['prepaid', '/prepaid/balance'] as const
}

export function getPrepaidBalanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.balance.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.balance.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPrepaidBalanceQueryKey>
  >({
    queryKey: getPrepaidBalanceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.prepaid.balance.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPrepaidBalance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.balance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.balance.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPrepaidBalanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPrepaidBalanceQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPrepaidSettingsQueryKey() {
  return ['prepaid', '/prepaid/settings'] as const
}

export function getPrepaidSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPrepaidSettingsQueryKey>
  >({
    queryKey: getPrepaidSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.prepaid.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPrepaidSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPrepaidSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPrepaidSettingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutPrepaidSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.settings.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.prepaid.settings.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPrepaidSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPrepaidTransactionsQueryKey() {
  return ['prepaid', '/prepaid/transactions'] as const
}

export function getPrepaidTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.transactions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.transactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPrepaidTransactionsQueryKey>
  >({
    queryKey: getPrepaidTransactionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.prepaid.transactions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPrepaidTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.prepaid.transactions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrepaidTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPrepaidTransactionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getScriptsInstancesQueryKey(
  args: InferRequestType<typeof client.scripts.instances.$get>,
) {
  return ['scripts', '/scripts/instances', args] as const
}

export function getScriptsInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.instances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.scripts.instances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsInstancesQueryKey>
  >({
    queryKey: getScriptsInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scripts.instances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createScriptsInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.scripts.instances.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.scripts.instances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScriptsInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getScriptsInstancesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostScriptsInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.scripts.instances.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.scripts.instances.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostScriptsInstancesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getScriptsInstancesInstanceIdQueryKey(
  args: InferRequestType<(typeof client.scripts.instances)[':instanceId']['$get']>,
) {
  return ['scripts', '/scripts/instances/:instanceId', args] as const
}

export function getScriptsInstancesInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts.instances)[':instanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scripts.instances)[':instanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getScriptsInstancesInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scripts.instances[':instanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScriptsInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts.instances)[':instanceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.scripts.instances)[':instanceId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getScriptsInstancesInstanceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutScriptsInstancesInstanceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutScriptsInstancesInstanceIdMutationOptions<
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

export function createDeleteScriptsInstancesInstanceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteScriptsInstancesInstanceIdMutationOptions<
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

export function createPutScriptsInstancesInstanceIdData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutScriptsInstancesInstanceIdDataMutationOptions<
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

export function createPostScriptsInstancesInstanceIdDisable<
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
                ReturnType<(typeof client.scripts.instances)[':instanceId']['disable']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scripts.instances)[':instanceId']['disable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostScriptsInstancesInstanceIdDisableMutationOptions<
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

export function createPostScriptsInstancesInstanceIdEnable<
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
                ReturnType<(typeof client.scripts.instances)[':instanceId']['enable']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scripts.instances)[':instanceId']['enable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostScriptsInstancesInstanceIdEnableMutationOptions<
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

export function getScriptsInventoryQueryKey() {
  return ['scripts', '/scripts/inventory'] as const
}

export function getScriptsInventoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.inventory.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.inventory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsInventoryQueryKey>
  >({
    queryKey: getScriptsInventoryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.scripts.inventory.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScriptsInventory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.inventory.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.scripts.inventory.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScriptsInventoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getScriptsInventoryQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getScriptsInventoryParsedQueryKey(
  args: InferRequestType<typeof client.scripts.inventory.parsed.$get>,
) {
  return ['scripts', '/scripts/inventory/parsed', args] as const
}

export function getScriptsInventoryParsedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.scripts.inventory.parsed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.scripts.inventory.parsed.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.scripts.inventory.parsed.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScriptsInventoryParsedQueryKey>
  >({
    queryKey: getScriptsInventoryParsedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scripts.inventory.parsed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScriptsInventoryParsed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.scripts.inventory.parsed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.scripts.inventory.parsed.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.scripts.inventory.parsed.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScriptsInventoryParsedQueryKey>
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
      ...getScriptsInventoryParsedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getScriptsInventoryParsedScriptIdQueryKey(
  args: InferRequestType<(typeof client.scripts.inventory.parsed)[':scriptId']['$get']>,
) {
  return ['scripts', '/scripts/inventory/parsed/:scriptId', args] as const
}

export function getScriptsInventoryParsedScriptIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts.inventory.parsed)[':scriptId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scripts.inventory.parsed)[':scriptId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getScriptsInventoryParsedScriptIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scripts.inventory.parsed[':scriptId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScriptsInventoryParsedScriptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scripts.inventory.parsed)[':scriptId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.scripts.inventory.parsed)[':scriptId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getScriptsInventoryParsedScriptIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSubscriptionsQueryKey() {
  return ['subscriptions', '/subscriptions'] as const
}

export function getSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsQueryKey>
  >({
    queryKey: getSubscriptionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubscriptionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId', args] as const
}

export function getSubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSubscriptionsSubscriptionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSubscriptionsSubscriptionIdChannelPricesQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['channelPrices']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId/channelPrices', args] as const
}

export function getSubscriptionsSubscriptionIdChannelPricesQueryOptions<
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
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['channelPrices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsSubscriptionIdChannelPricesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].channelPrices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsSubscriptionIdChannelPrices<
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
  args: () => InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['channelPrices']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getSubscriptionsSubscriptionIdChannelPricesQueryKey>
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
      ...getSubscriptionsSubscriptionIdChannelPricesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSubscriptionsSubscriptionIdFeaturesQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['features']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId/features', args] as const
}

export function getSubscriptionsSubscriptionIdFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['features']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsSubscriptionIdFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].features.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsSubscriptionIdFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['features']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getSubscriptionsSubscriptionIdFeaturesQueryKey>
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
      ...getSubscriptionsSubscriptionIdFeaturesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSubscriptionsSubscriptionIdPrepaidBalanceQueryKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['prepaidBalance']['$get']
  >,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId/prepaidBalance', args] as const
}

export function getSubscriptionsSubscriptionIdPrepaidBalanceQueryOptions<
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
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['prepaidBalance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsSubscriptionIdPrepaidBalanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].prepaidBalance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsSubscriptionIdPrepaidBalance<
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
  args: () => InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['prepaidBalance']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getSubscriptionsSubscriptionIdPrepaidBalanceQueryKey>
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
      ...getSubscriptionsSubscriptionIdPrepaidBalanceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSubscriptionsSubscriptionIdPrepaidSettingsQueryKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$get']
  >,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId/prepaidSettings', args] as const
}

export function getSubscriptionsSubscriptionIdPrepaidSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsSubscriptionIdPrepaidSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].prepaidSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsSubscriptionIdPrepaidSettings<
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
  args: () => InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['prepaidSettings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getSubscriptionsSubscriptionIdPrepaidSettingsQueryKey>
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
      ...getSubscriptionsSubscriptionIdPrepaidSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutSubscriptionsSubscriptionIdPrepaidSettings<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSubscriptionsSubscriptionIdPrepaidSettingsMutationOptions<
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

export function getSubscriptionsSubscriptionIdPrepaidTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['prepaidTransactions']['$get']
  >,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId/prepaidTransactions', args] as const
}

export function getSubscriptionsSubscriptionIdPrepaidTransactionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['prepaidTransactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsSubscriptionIdPrepaidTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].prepaidTransactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsSubscriptionIdPrepaidTransactions<
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
  args: () => InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['prepaidTransactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSubscriptionsSubscriptionIdPrepaidTransactionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutSubscriptionsSubscriptionIdProfile<
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
                ReturnType<(typeof client.subscriptions)[':subscriptionId']['profile']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':subscriptionId']['profile']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSubscriptionsSubscriptionIdProfileMutationOptions<
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

export function getSubscriptionsSubscriptionIdTeamsQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['teams']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId/teams', args] as const
}

export function getSubscriptionsSubscriptionIdTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsSubscriptionIdTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].teams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsSubscriptionIdTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subscriptions)[':subscriptionId']['teams']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSubscriptionsSubscriptionIdTeamsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSubscriptionsSubscriptionIdUserLicensesQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['userLicenses']['$get']>,
) {
  return ['subscriptions', '/subscriptions/:subscriptionId/userLicenses', args] as const
}

export function getSubscriptionsSubscriptionIdUserLicensesQueryOptions<
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
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['userLicenses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubscriptionsSubscriptionIdUserLicensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].userLicenses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsSubscriptionIdUserLicenses<
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
  args: () => InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['userLicenses']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSubscriptionsSubscriptionIdUserLicensesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getTeamsQueryKey() {
  return ['teams', '/teams'] as const
}

export function getTeamsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamsQueryKey>
  >({
    queryKey: getTeamsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.teams.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeams<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getTeamsTeamIdQueryKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['$get']>,
) {
  return ['teams', '/teams/:teamId', args] as const
}

export function getTeamsTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdQueryKey>
  >({
    queryKey: getTeamsTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTeamsTeamId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':teamId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsTeamIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTeamsTeamIdAlertReportsQueryKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['alertReports']['$get']>,
) {
  return ['teams', '/teams/:teamId/alertReports', args] as const
}

export function getTeamsTeamIdAlertReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['alertReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['alertReports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsTeamIdAlertReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].alertReports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsTeamIdAlertReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['alertReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':teamId']['alertReports']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTeamsTeamIdAlertReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTeamsTeamIdAlertReportsFileNameQueryKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['alertReports'][':fileName']['$get']>,
) {
  return ['teams', '/teams/:teamId/alertReports/:fileName', args] as const
}

export function getTeamsTeamIdAlertReportsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['alertReports'][':fileName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['alertReports'][':fileName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsTeamIdAlertReportsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].alertReports[':fileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsTeamIdAlertReportsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['alertReports'][':fileName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.teams)[':teamId']['alertReports'][':fileName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getTeamsTeamIdAlertReportsFileNameQueryKey>
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
      ...getTeamsTeamIdAlertReportsFileNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTeamsTeamIdAlertSettingsQueryKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['alertSettings']['$get']>,
) {
  return ['teams', '/teams/:teamId/alertSettings', args] as const
}

export function getTeamsTeamIdAlertSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['alertSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['alertSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsTeamIdAlertSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].alertSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsTeamIdAlertSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['alertSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':teamId']['alertSettings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTeamsTeamIdAlertSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostTeamsTeamIdAlertSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTeamsTeamIdAlertSettingsMutationOptions<
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

export function getTeamsTeamIdDutyReportsQueryKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['dutyReports']['$get']>,
) {
  return ['teams', '/teams/:teamId/dutyReports', args] as const
}

export function getTeamsTeamIdDutyReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['dutyReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['dutyReports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsTeamIdDutyReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].dutyReports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsTeamIdDutyReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['dutyReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':teamId']['dutyReports']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTeamsTeamIdDutyReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTeamsTeamIdDutyReportsFileNameQueryKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['dutyReports'][':fileName']['$get']>,
) {
  return ['teams', '/teams/:teamId/dutyReports/:fileName', args] as const
}

export function getTeamsTeamIdDutyReportsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['dutyReports'][':fileName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['dutyReports'][':fileName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsTeamIdDutyReportsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].dutyReports[':fileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsTeamIdDutyReportsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['dutyReports'][':fileName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.teams)[':teamId']['dutyReports'][':fileName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getTeamsTeamIdDutyReportsFileNameQueryKey>
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
      ...getTeamsTeamIdDutyReportsFileNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTeamsTeamIdDutysummaryQueryKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['dutysummary']['$get']>,
) {
  return ['teams', '/teams/:teamId/dutysummary', args] as const
}

export function getTeamsTeamIdDutysummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['dutysummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['dutysummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsTeamIdDutysummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].dutysummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsTeamIdDutysummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['dutysummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':teamId']['dutysummary']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTeamsTeamIdDutysummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTeamsTeamIdEventSourcesQueryKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['eventSources']['$get']>,
) {
  return ['teams', '/teams/:teamId/eventSources', args] as const
}

export function getTeamsTeamIdEventSourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['eventSources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['eventSources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsTeamIdEventSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].eventSources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsTeamIdEventSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['eventSources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':teamId']['eventSources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTeamsTeamIdEventSourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTeamsTeamIdMembershipsQueryKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>,
) {
  return ['teams', '/teams/:teamId/memberships', args] as const
}

export function getTeamsTeamIdMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsTeamIdMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsTeamIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTeamsTeamIdMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostTeamsTeamIdMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTeamsTeamIdMembershipsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTeamsTeamIdMembershipsResendInviteMail<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTeamsTeamIdMembershipsResendInviteMailMutationOptions<
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

export function createPutTeamsTeamIdMembershipsUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTeamsTeamIdMembershipsUserIdMutationOptions<
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

export function createDeleteTeamsTeamIdMembershipsUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTeamsTeamIdMembershipsUserIdMutationOptions<
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

export function createPutTeamsTeamIdProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTeamsTeamIdProfileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTeamsTeamIdSchedulesQueryKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['schedules']['$get']>,
) {
  return ['teams', '/teams/:teamId/schedules', args] as const
}

export function getTeamsTeamIdSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsTeamIdSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].schedules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsTeamIdSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':teamId']['schedules']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTeamsTeamIdSchedulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostTeamsTeamIdSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTeamsTeamIdSchedulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTeamsTeamIdSchedulesDeleteRange<
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
                ReturnType<(typeof client.teams)[':teamId']['schedules']['deleteRange']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.teams)[':teamId']['schedules']['deleteRange']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTeamsTeamIdSchedulesDeleteRangeMutationOptions<
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

export function createPostTeamsTeamIdSchedulesMultiple<
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
                ReturnType<(typeof client.teams)[':teamId']['schedules']['multiple']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.teams)[':teamId']['schedules']['multiple']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTeamsTeamIdSchedulesMultipleMutationOptions<
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

export function createDeleteTeamsTeamIdSchedulesDutyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTeamsTeamIdSchedulesDutyIdMutationOptions<
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

export function getTeamsTeamIdSchedulesScheduleIdQueryKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['schedules'][':scheduleId']['$get']>,
) {
  return ['teams', '/teams/:teamId/schedules/:scheduleId', args] as const
}

export function getTeamsTeamIdSchedulesScheduleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['schedules'][':scheduleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['schedules'][':scheduleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsTeamIdSchedulesScheduleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].schedules[':scheduleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsTeamIdSchedulesScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['schedules'][':scheduleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.teams)[':teamId']['schedules'][':scheduleId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getTeamsTeamIdSchedulesScheduleIdQueryKey>
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
      ...getTeamsTeamIdSchedulesScheduleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTeamsTeamIdSetupProgressQueryKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['setupProgress']['$get']>,
) {
  return ['teams', '/teams/:teamId/setupProgress', args] as const
}

export function getTeamsTeamIdSetupProgressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['setupProgress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['setupProgress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsTeamIdSetupProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].setupProgress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsTeamIdSetupProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['setupProgress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':teamId']['setupProgress']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTeamsTeamIdSetupProgressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersQueryKey() {
  return ['users', '/users'] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
) {
  return ['users', '/users/:userId', args] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutUsersUserIdChangePassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersUserIdChangePasswordMutationOptions<
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

export function createPostUsersUserIdCheckPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdCheckPermissionsMutationOptions<
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

export function getUsersUserIdDutyStatusQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['dutyStatus']['$get']>,
) {
  return ['users', '/users/:userId/dutyStatus', args] as const
}

export function getUsersUserIdDutyStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['dutyStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['dutyStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdDutyStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].dutyStatus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdDutyStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['dutyStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['dutyStatus']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getUsersUserIdDutyStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdImageQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['image']['$get']>,
) {
  return ['users', '/users/:userId/image', args] as const
}

export function getUsersUserIdImageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['image']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['image']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['image']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdImageQueryKey>
  >({
    queryKey: getUsersUserIdImageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].image.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['image']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['image']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':userId']['image']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdImageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdImageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsersUserIdImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdImageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutUsersUserIdProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersUserIdProfileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersUserIdPunchIn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdPunchInMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersUserIdPunchInAsManager<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdPunchInAsManagerMutationOptions<
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

export function createPostUsersUserIdPunchOut<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdPunchOutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdSetupProgressQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['setupProgress']['$get']>,
) {
  return ['users', '/users/:userId/setupProgress', args] as const
}

export function getUsersUserIdSetupProgressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['setupProgress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['setupProgress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdSetupProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].setupProgress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdSetupProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['setupProgress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['setupProgress']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getUsersUserIdSetupProgressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createWebhooks<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhookId', args] as const
}

export function getWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >({
    queryKey: getWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':webhookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWebhooksWebhookIdDisable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhooksWebhookIdDisableMutationOptions<
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

export function createPostWebhooksWebhookIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhooksWebhookIdEnableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
