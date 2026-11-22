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

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getV1beta1AlertsQueryKey(
  args: InferRequestType<typeof client.v1beta1.alerts.$get>,
) {
  return ['v1beta1', '/v1beta1/alerts', args] as const
}

export function getV1beta1AlertsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.alerts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1beta1.alerts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.alerts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AlertsQueryKey>
  >({
    queryKey: getV1beta1AlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.alerts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1beta1Alerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.alerts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1beta1.alerts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.alerts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1AlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1AlertsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1beta1AlertsAlertIdQueryKey(
  args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['$get']>,
) {
  return ['v1beta1', '/v1beta1/alerts/:alertId', args] as const
}

export function getV1beta1AlertsAlertIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AlertsAlertIdQueryKey>
  >({
    queryKey: getV1beta1AlertsAlertIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.alerts[':alertId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1AlertsAlertId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1AlertsAlertIdQueryKey>
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
      ...getV1beta1AlertsAlertIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1beta1AlertsAlertIdMutationKey() {
  return ['v1beta1', '/v1beta1/alerts/:alertId', 'DELETE'] as const
}

export function getDeleteV1beta1AlertsAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta1AlertsAlertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['$delete']>,
    ) {
      return parseResponse(client.v1beta1.alerts[':alertId'].$delete(args, options))
    },
  })
}

export function injectDeleteV1beta1AlertsAlertId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['$delete']>,
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
    const mutationDefaults = getDeleteV1beta1AlertsAlertIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1beta1AlertsAlertIdFeedbackQueryKey(
  args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$get']>,
) {
  return ['v1beta1', '/v1beta1/alerts/:alertId/feedback', args] as const
}

export function getV1beta1AlertsAlertIdFeedbackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AlertsAlertIdFeedbackQueryKey>
  >({
    queryKey: getV1beta1AlertsAlertIdFeedbackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.alerts[':alertId'].feedback.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1AlertsAlertIdFeedback<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1AlertsAlertIdFeedbackQueryKey>
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
      ...getV1beta1AlertsAlertIdFeedbackQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1beta1AlertsAlertIdFeedbackMutationKey() {
  return ['v1beta1', '/v1beta1/alerts/:alertId/feedback', 'POST'] as const
}

export function getPostV1beta1AlertsAlertIdFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1AlertsAlertIdFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$post']>,
    ) {
      return parseResponse(client.v1beta1.alerts[':alertId'].feedback.$post(args, options))
    },
  })
}

export function injectPostV1beta1AlertsAlertIdFeedback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$post']>,
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
    const mutationDefaults = getPostV1beta1AlertsAlertIdFeedbackMutationOptions<
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

export function getV1beta1AlertsAlertIdMetadataQueryKey(
  args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['metadata']['$get']>,
) {
  return ['v1beta1', '/v1beta1/alerts/:alertId/metadata', args] as const
}

export function getV1beta1AlertsAlertIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1AlertsAlertIdMetadataQueryKey>
  >({
    queryKey: getV1beta1AlertsAlertIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.alerts[':alertId'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1AlertsAlertIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['metadata']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1AlertsAlertIdMetadataQueryKey>
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
      ...getV1beta1AlertsAlertIdMetadataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1beta1AlertsAlertIdUndeleteMutationKey() {
  return ['v1beta1', '/v1beta1/alerts/:alertId:undelete', 'POST'] as const
}

export function getPostV1beta1AlertsAlertIdUndeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId:undelete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1.alerts)[':alertId:undelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1AlertsAlertIdUndeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId:undelete']['$post']>,
    ) {
      return parseResponse(client.v1beta1.alerts[':alertId:undelete'].$post(args, options))
    },
  })
}

export function injectPostV1beta1AlertsAlertIdUndelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1.alerts)[':alertId:undelete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1.alerts)[':alertId:undelete']['$post']>,
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
    const mutationDefaults = getPostV1beta1AlertsAlertIdUndeleteMutationOptions<
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

export function getPostV1beta1AlertsBatchDeleteMutationKey() {
  return ['v1beta1', '/v1beta1/alerts:batchDelete', 'POST'] as const
}

export function getPostV1beta1AlertsBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)['alerts:batchDelete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)['alerts:batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1AlertsBatchDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)['alerts:batchDelete']['$post']>,
    ) {
      return parseResponse(client.v1beta1['alerts:batchDelete'].$post(args, options))
    },
  })
}

export function injectPostV1beta1AlertsBatchDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)['alerts:batchDelete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)['alerts:batchDelete']['$post']>,
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
    const mutationDefaults = getPostV1beta1AlertsBatchDeleteMutationOptions<
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

export function getPostV1beta1AlertsBatchUndeleteMutationKey() {
  return ['v1beta1', '/v1beta1/alerts:batchUndelete', 'POST'] as const
}

export function getPostV1beta1AlertsBatchUndeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)['alerts:batchUndelete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)['alerts:batchUndelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1AlertsBatchUndeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)['alerts:batchUndelete']['$post']>,
    ) {
      return parseResponse(client.v1beta1['alerts:batchUndelete'].$post(args, options))
    },
  })
}

export function injectPostV1beta1AlertsBatchUndelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)['alerts:batchUndelete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)['alerts:batchUndelete']['$post']>,
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
    const mutationDefaults = getPostV1beta1AlertsBatchUndeleteMutationOptions<
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

export function getV1beta1SettingsQueryKey(
  args: InferRequestType<typeof client.v1beta1.settings.$get>,
) {
  return ['v1beta1', '/v1beta1/settings', args] as const
}

export function getV1beta1SettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1beta1.settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1SettingsQueryKey>
  >({
    queryKey: getV1beta1SettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1beta1Settings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1beta1.settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1SettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1SettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchV1beta1SettingsMutationKey() {
  return ['v1beta1', '/v1beta1/settings', 'PATCH'] as const
}

export function getPatchV1beta1SettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.settings.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.v1beta1.settings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1beta1SettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1beta1.settings.$patch>) {
      return parseResponse(client.v1beta1.settings.$patch(args, options))
    },
  })
}

export function injectPatchV1beta1Settings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.settings.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1beta1.settings.$patch>,
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
    const mutationDefaults = getPatchV1beta1SettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
