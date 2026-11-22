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

export function getCrmKey() {
  return ['crm'] as const
}

export function getPostCrmExtensionsCalling202609InboundCallMutationKey() {
  return ['crm', '/crm/extensions/calling/2026-09/inbound-call', 'POST'] as const
}

export function getPostCrmExtensionsCalling202609InboundCallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmExtensionsCalling202609InboundCallMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.calling['2026-09']['inbound-call'].$post(args, options),
      )
    },
  })
}

export function injectPostCrmExtensionsCalling202609InboundCall<
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
                  (typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']
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
    const mutationDefaults = getPostCrmExtensionsCalling202609InboundCallMutationOptions<
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

export function getPostCrmExtensionsCalling202609RecordingsReadyMutationKey() {
  return ['crm', '/crm/extensions/calling/2026-09/recordings/ready', 'POST'] as const
}

export function getPostCrmExtensionsCalling202609RecordingsReadyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09']['recordings']['ready']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09']['recordings']['ready']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmExtensionsCalling202609RecordingsReadyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.calling)['2026-09']['recordings']['ready']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'].recordings.ready.$post(args, options),
      )
    },
  })
}

export function injectPostCrmExtensionsCalling202609RecordingsReady<
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
                  ReturnType<
                    (typeof client.crm.extensions.calling)['2026-09']['recordings']['ready']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.extensions.calling)['2026-09']['recordings']['ready']['$post']
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
    const mutationDefaults = getPostCrmExtensionsCalling202609RecordingsReadyMutationOptions<
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

export function getCrmExtensionsCalling202609AppIdSettingsQueryKey(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$get']
  >,
) {
  return ['crm', '/crm/extensions/calling/2026-09/:appId/settings', args] as const
}

export function getCrmExtensionsCalling202609AppIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmExtensionsCalling202609AppIdSettingsQueryKey>
  >({
    queryKey: getCrmExtensionsCalling202609AppIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'][':appId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrmExtensionsCalling202609AppIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmExtensionsCalling202609AppIdSettingsQueryKey>
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
      ...getCrmExtensionsCalling202609AppIdSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostCrmExtensionsCalling202609AppIdSettingsMutationKey() {
  return ['crm', '/crm/extensions/calling/2026-09/:appId/settings', 'POST'] as const
}

export function getPostCrmExtensionsCalling202609AppIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmExtensionsCalling202609AppIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'][':appId'].settings.$post(args, options),
      )
    },
  })
}

export function injectPostCrmExtensionsCalling202609AppIdSettings<
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
                  (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$post']
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
    const mutationDefaults = getPostCrmExtensionsCalling202609AppIdSettingsMutationOptions<
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

export function getDeleteCrmExtensionsCalling202609AppIdSettingsMutationKey() {
  return ['crm', '/crm/extensions/calling/2026-09/:appId/settings', 'DELETE'] as const
}

export function getDeleteCrmExtensionsCalling202609AppIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmExtensionsCalling202609AppIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'][':appId'].settings.$delete(args, options),
      )
    },
  })
}

export function injectDeleteCrmExtensionsCalling202609AppIdSettings<
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
                  ReturnType<
                    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$delete']
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
    const mutationDefaults = getDeleteCrmExtensionsCalling202609AppIdSettingsMutationOptions<
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

export function getPatchCrmExtensionsCalling202609AppIdSettingsMutationKey() {
  return ['crm', '/crm/extensions/calling/2026-09/:appId/settings', 'PATCH'] as const
}

export function getPatchCrmExtensionsCalling202609AppIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmExtensionsCalling202609AppIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$patch']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'][':appId'].settings.$patch(args, options),
      )
    },
  })
}

export function injectPatchCrmExtensionsCalling202609AppIdSettings<
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
                  (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$patch']
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
    const mutationDefaults = getPatchCrmExtensionsCalling202609AppIdSettingsMutationOptions<
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

export function getCrmExtensionsCalling202609AppIdSettingsChannelConnectionQueryKey(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$get']
  >,
) {
  return [
    'crm',
    '/crm/extensions/calling/2026-09/:appId/settings/channel-connection',
    args,
  ] as const
}

export function getCrmExtensionsCalling202609AppIdSettingsChannelConnectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmExtensionsCalling202609AppIdSettingsChannelConnectionQueryKey>
  >({
    queryKey: getCrmExtensionsCalling202609AppIdSettingsChannelConnectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'][':appId'].settings['channel-connection'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectCrmExtensionsCalling202609AppIdSettingsChannelConnection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmExtensionsCalling202609AppIdSettingsChannelConnectionQueryKey>
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
      ...getCrmExtensionsCalling202609AppIdSettingsChannelConnectionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostCrmExtensionsCalling202609AppIdSettingsChannelConnectionMutationKey() {
  return [
    'crm',
    '/crm/extensions/calling/2026-09/:appId/settings/channel-connection',
    'POST',
  ] as const
}

export function getPostCrmExtensionsCalling202609AppIdSettingsChannelConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmExtensionsCalling202609AppIdSettingsChannelConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'][':appId'].settings['channel-connection'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostCrmExtensionsCalling202609AppIdSettingsChannelConnection<
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
                  (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$post']
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
      getPostCrmExtensionsCalling202609AppIdSettingsChannelConnectionMutationOptions<
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

export function getDeleteCrmExtensionsCalling202609AppIdSettingsChannelConnectionMutationKey() {
  return [
    'crm',
    '/crm/extensions/calling/2026-09/:appId/settings/channel-connection',
    'DELETE',
  ] as const
}

export function getDeleteCrmExtensionsCalling202609AppIdSettingsChannelConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmExtensionsCalling202609AppIdSettingsChannelConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$delete']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'][':appId'].settings['channel-connection'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteCrmExtensionsCalling202609AppIdSettingsChannelConnection<
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
                  ReturnType<
                    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$delete']
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
      getDeleteCrmExtensionsCalling202609AppIdSettingsChannelConnectionMutationOptions<
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

export function getPatchCrmExtensionsCalling202609AppIdSettingsChannelConnectionMutationKey() {
  return [
    'crm',
    '/crm/extensions/calling/2026-09/:appId/settings/channel-connection',
    'PATCH',
  ] as const
}

export function getPatchCrmExtensionsCalling202609AppIdSettingsChannelConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmExtensionsCalling202609AppIdSettingsChannelConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$patch']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'][':appId'].settings['channel-connection'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchCrmExtensionsCalling202609AppIdSettingsChannelConnection<
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
                  (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$patch']
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
      getPatchCrmExtensionsCalling202609AppIdSettingsChannelConnectionMutationOptions<
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

export function getCrmExtensionsCalling202609AppIdSettingsRecordingQueryKey(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$get']
  >,
) {
  return ['crm', '/crm/extensions/calling/2026-09/:appId/settings/recording', args] as const
}

export function getCrmExtensionsCalling202609AppIdSettingsRecordingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmExtensionsCalling202609AppIdSettingsRecordingQueryKey>
  >({
    queryKey: getCrmExtensionsCalling202609AppIdSettingsRecordingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'][':appId'].settings.recording.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCrmExtensionsCalling202609AppIdSettingsRecording<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmExtensionsCalling202609AppIdSettingsRecordingQueryKey>
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
      ...getCrmExtensionsCalling202609AppIdSettingsRecordingQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostCrmExtensionsCalling202609AppIdSettingsRecordingMutationKey() {
  return ['crm', '/crm/extensions/calling/2026-09/:appId/settings/recording', 'POST'] as const
}

export function getPostCrmExtensionsCalling202609AppIdSettingsRecordingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCrmExtensionsCalling202609AppIdSettingsRecordingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$post']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'][':appId'].settings.recording.$post(args, options),
      )
    },
  })
}

export function injectPostCrmExtensionsCalling202609AppIdSettingsRecording<
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
                  (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$post']
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
    const mutationDefaults = getPostCrmExtensionsCalling202609AppIdSettingsRecordingMutationOptions<
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

export function getPatchCrmExtensionsCalling202609AppIdSettingsRecordingMutationKey() {
  return ['crm', '/crm/extensions/calling/2026-09/:appId/settings/recording', 'PATCH'] as const
}

export function getPatchCrmExtensionsCalling202609AppIdSettingsRecordingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmExtensionsCalling202609AppIdSettingsRecordingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$patch']
      >,
    ) {
      return parseResponse(
        client.crm.extensions.calling['2026-09'][':appId'].settings.recording.$patch(args, options),
      )
    },
  })
}

export function injectPatchCrmExtensionsCalling202609AppIdSettingsRecording<
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
                  (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$patch']
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
      getPatchCrmExtensionsCalling202609AppIdSettingsRecordingMutationOptions<
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
