import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCalendarsKey() {
  return ['calendars'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getColorsKey() {
  return ['colors'] as const
}

export function getFreeBusyKey() {
  return ['freeBusy'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getPostCalendarsKey() {
  return ['calendars', '/calendars', 'POST'] as const
}

export function usePostCalendars<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calendars.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.calendars.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalendarsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.calendars.$post> }) =>
        parseResponse(client.calendars.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCalendarsCalendarIdKey(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['$get']>,
) {
  return ['calendars', '/calendars/:calendarId', args] as const
}

export function useGetCalendarsCalendarId<TError = unknown>(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCalendarsCalendarIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.calendars[':calendarId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarsCalendarId<TError = unknown>(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCalendarsCalendarIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.calendars[':calendarId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCalendarsCalendarIdKey() {
  return ['calendars', '/calendars/:calendarId', 'PUT'] as const
}

export function usePutCalendarsCalendarId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calendars)[':calendarId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCalendarsCalendarIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.calendars)[':calendarId']['$put']> },
      ) => parseResponse(client.calendars[':calendarId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCalendarsCalendarIdKey() {
  return ['calendars', '/calendars/:calendarId', 'DELETE'] as const
}

export function useDeleteCalendarsCalendarId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calendars)[':calendarId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCalendarsCalendarIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.calendars)[':calendarId']['$delete']> },
      ) => parseResponse(client.calendars[':calendarId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCalendarsCalendarIdKey() {
  return ['calendars', '/calendars/:calendarId', 'PATCH'] as const
}

export function usePatchCalendarsCalendarId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calendars)[':calendarId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCalendarsCalendarIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.calendars)[':calendarId']['$patch']> },
      ) => parseResponse(client.calendars[':calendarId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCalendarsCalendarIdAclKey(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl']['$get']>,
) {
  return ['calendars', '/calendars/:calendarId/acl', args] as const
}

export function useGetCalendarsCalendarIdAcl<TError = unknown>(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCalendarsCalendarIdAclKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.calendars[':calendarId'].acl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarsCalendarIdAcl<TError = unknown>(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCalendarsCalendarIdAclKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.calendars[':calendarId'].acl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCalendarsCalendarIdAclKey() {
  return ['calendars', '/calendars/:calendarId/acl', 'POST'] as const
}

export function usePostCalendarsCalendarIdAcl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calendars)[':calendarId']['acl']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalendarsCalendarIdAclKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.calendars)[':calendarId']['acl']['$post']> },
      ) => parseResponse(client.calendars[':calendarId'].acl.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalendarsCalendarIdAclWatchKey() {
  return ['calendars', '/calendars/:calendarId/acl/watch', 'POST'] as const
}

export function usePostCalendarsCalendarIdAclWatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl']['watch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calendars)[':calendarId']['acl']['watch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalendarsCalendarIdAclWatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.calendars)[':calendarId']['acl']['watch']['$post']>
        },
      ) => parseResponse(client.calendars[':calendarId'].acl.watch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCalendarsCalendarIdAclRuleIdKey(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>,
) {
  return ['calendars', '/calendars/:calendarId/acl/:ruleId', args] as const
}

export function useGetCalendarsCalendarIdAclRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCalendarsCalendarIdAclRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.calendars[':calendarId'].acl[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarsCalendarIdAclRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCalendarsCalendarIdAclRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.calendars[':calendarId'].acl[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCalendarsCalendarIdAclRuleIdKey() {
  return ['calendars', '/calendars/:calendarId/acl/:ruleId', 'PUT'] as const
}

export function usePutCalendarsCalendarIdAclRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCalendarsCalendarIdAclRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$put']>
        },
      ) => parseResponse(client.calendars[':calendarId'].acl[':ruleId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCalendarsCalendarIdAclRuleIdKey() {
  return ['calendars', '/calendars/:calendarId/acl/:ruleId', 'DELETE'] as const
}

export function useDeleteCalendarsCalendarIdAclRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCalendarsCalendarIdAclRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.calendars)[':calendarId']['acl'][':ruleId']['$delete']
          >
        },
      ) =>
        parseResponse(client.calendars[':calendarId'].acl[':ruleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCalendarsCalendarIdAclRuleIdKey() {
  return ['calendars', '/calendars/:calendarId/acl/:ruleId', 'PATCH'] as const
}

export function usePatchCalendarsCalendarIdAclRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calendars)[':calendarId']['acl'][':ruleId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCalendarsCalendarIdAclRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.calendars)[':calendarId']['acl'][':ruleId']['$patch']
          >
        },
      ) => parseResponse(client.calendars[':calendarId'].acl[':ruleId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalendarsCalendarIdClearKey() {
  return ['calendars', '/calendars/:calendarId/clear', 'POST'] as const
}

export function usePostCalendarsCalendarIdClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['clear']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calendars)[':calendarId']['clear']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalendarsCalendarIdClearKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.calendars)[':calendarId']['clear']['$post']> },
      ) => parseResponse(client.calendars[':calendarId'].clear.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCalendarsCalendarIdEventsKey(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events']['$get']>,
) {
  return ['calendars', '/calendars/:calendarId/events', args] as const
}

export function useGetCalendarsCalendarIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCalendarsCalendarIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.calendars[':calendarId'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarsCalendarIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCalendarsCalendarIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.calendars[':calendarId'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCalendarsCalendarIdEventsKey() {
  return ['calendars', '/calendars/:calendarId/events', 'POST'] as const
}

export function usePostCalendarsCalendarIdEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calendars)[':calendarId']['events']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalendarsCalendarIdEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.calendars)[':calendarId']['events']['$post']> },
      ) => parseResponse(client.calendars[':calendarId'].events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalendarsCalendarIdEventsImportKey() {
  return ['calendars', '/calendars/:calendarId/events/import', 'POST'] as const
}

export function usePostCalendarsCalendarIdEventsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['import']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calendars)[':calendarId']['events']['import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalendarsCalendarIdEventsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.calendars)[':calendarId']['events']['import']['$post']
          >
        },
      ) => parseResponse(client.calendars[':calendarId'].events.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalendarsCalendarIdEventsQuickAddKey() {
  return ['calendars', '/calendars/:calendarId/events/quickAdd', 'POST'] as const
}

export function usePostCalendarsCalendarIdEventsQuickAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calendars)[':calendarId']['events']['quickAdd']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calendars)[':calendarId']['events']['quickAdd']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalendarsCalendarIdEventsQuickAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.calendars)[':calendarId']['events']['quickAdd']['$post']
          >
        },
      ) => parseResponse(client.calendars[':calendarId'].events.quickAdd.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCalendarsCalendarIdEventsWatchKey() {
  return ['calendars', '/calendars/:calendarId/events/watch', 'POST'] as const
}

export function usePostCalendarsCalendarIdEventsWatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars)[':calendarId']['events']['watch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calendars)[':calendarId']['events']['watch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalendarsCalendarIdEventsWatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.calendars)[':calendarId']['events']['watch']['$post']
          >
        },
      ) => parseResponse(client.calendars[':calendarId'].events.watch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCalendarsCalendarIdEventsEventIdKey(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>,
) {
  return ['calendars', '/calendars/:calendarId/events/:eventId', args] as const
}

export function useGetCalendarsCalendarIdEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCalendarsCalendarIdEventsEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.calendars[':calendarId'].events[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarsCalendarIdEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCalendarsCalendarIdEventsEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.calendars[':calendarId'].events[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCalendarsCalendarIdEventsEventIdKey() {
  return ['calendars', '/calendars/:calendarId/events/:eventId', 'PUT'] as const
}

export function usePutCalendarsCalendarIdEventsEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCalendarsCalendarIdEventsEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.calendars)[':calendarId']['events'][':eventId']['$put']
          >
        },
      ) =>
        parseResponse(client.calendars[':calendarId'].events[':eventId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCalendarsCalendarIdEventsEventIdKey() {
  return ['calendars', '/calendars/:calendarId/events/:eventId', 'DELETE'] as const
}

export function useDeleteCalendarsCalendarIdEventsEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCalendarsCalendarIdEventsEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.calendars)[':calendarId']['events'][':eventId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.calendars[':calendarId'].events[':eventId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCalendarsCalendarIdEventsEventIdKey() {
  return ['calendars', '/calendars/:calendarId/events/:eventId', 'PATCH'] as const
}

export function usePatchCalendarsCalendarIdEventsEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.calendars)[':calendarId']['events'][':eventId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCalendarsCalendarIdEventsEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.calendars)[':calendarId']['events'][':eventId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.calendars[':calendarId'].events[':eventId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCalendarsCalendarIdEventsEventIdInstancesKey(
  args: InferRequestType<
    (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
  >,
) {
  return ['calendars', '/calendars/:calendarId/events/:eventId/instances', args] as const
}

export function useGetCalendarsCalendarIdEventsEventIdInstances<TError = unknown>(
  args: InferRequestType<
    (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCalendarsCalendarIdEventsEventIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.calendars[':calendarId'].events[':eventId'].instances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarsCalendarIdEventsEventIdInstances<TError = unknown>(
  args: InferRequestType<
    (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCalendarsCalendarIdEventsEventIdInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.calendars)[':calendarId']['events'][':eventId']['instances']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.calendars[':calendarId'].events[':eventId'].instances.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCalendarsCalendarIdEventsEventIdMoveKey() {
  return ['calendars', '/calendars/:calendarId/events/:eventId/move', 'POST'] as const
}

export function usePostCalendarsCalendarIdEventsEventIdMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.calendars)[':calendarId']['events'][':eventId']['move']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.calendars)[':calendarId']['events'][':eventId']['move']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCalendarsCalendarIdEventsEventIdMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.calendars)[':calendarId']['events'][':eventId']['move']['$post']
          >
        },
      ) =>
        parseResponse(
          client.calendars[':calendarId'].events[':eventId'].move.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostChannelsStopKey() {
  return ['channels', '/channels/stop', 'POST'] as const
}

export function usePostChannelsStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.stop.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.channels.stop.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channels.stop.$post> }) =>
        parseResponse(client.channels.stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetColorsKey(args: InferRequestType<typeof client.colors.$get>) {
  return ['colors', '/colors', args] as const
}

export function useGetColors<TError = unknown>(
  args: InferRequestType<typeof client.colors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.colors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetColorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.colors.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.colors.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetColors<TError = unknown>(
  args: InferRequestType<typeof client.colors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.colors.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetColorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.colors.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.colors.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostFreeBusyKey() {
  return ['freeBusy', '/freeBusy', 'POST'] as const
}

export function usePostFreeBusy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.freeBusy.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.freeBusy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFreeBusyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.freeBusy.$post> }) =>
        parseResponse(client.freeBusy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeCalendarListKey(
  args: InferRequestType<typeof client.users.me.calendarList.$get>,
) {
  return ['users', '/users/me/calendarList', args] as const
}

export function useGetUsersMeCalendarList<TError = unknown>(
  args: InferRequestType<typeof client.users.me.calendarList.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersMeCalendarListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.calendarList.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeCalendarList<TError = unknown>(
  args: InferRequestType<typeof client.users.me.calendarList.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersMeCalendarListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.calendarList.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersMeCalendarListKey() {
  return ['users', '/users/me/calendarList', 'POST'] as const
}

export function usePostUsersMeCalendarList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.calendarList.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMeCalendarListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.me.calendarList.$post> },
      ) => parseResponse(client.users.me.calendarList.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersMeCalendarListWatchKey() {
  return ['users', '/users/me/calendarList/watch', 'POST'] as const
}

export function usePostUsersMeCalendarListWatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.calendarList.watch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.calendarList.watch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMeCalendarListWatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.me.calendarList.watch.$post> },
      ) => parseResponse(client.users.me.calendarList.watch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeCalendarListCalendarIdKey(
  args: InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$get']>,
) {
  return ['users', '/users/me/calendarList/:calendarId', args] as const
}

export function useGetUsersMeCalendarListCalendarId<TError = unknown>(
  args: InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersMeCalendarListCalendarIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users.me.calendarList[':calendarId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeCalendarListCalendarId<TError = unknown>(
  args: InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersMeCalendarListCalendarIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users.me.calendarList[':calendarId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersMeCalendarListCalendarIdKey() {
  return ['users', '/users/me/calendarList/:calendarId', 'PUT'] as const
}

export function usePutUsersMeCalendarListCalendarId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersMeCalendarListCalendarIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$put']> },
      ) => parseResponse(client.users.me.calendarList[':calendarId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersMeCalendarListCalendarIdKey() {
  return ['users', '/users/me/calendarList/:calendarId', 'DELETE'] as const
}

export function useDeleteUsersMeCalendarListCalendarId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersMeCalendarListCalendarIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$delete']>
        },
      ) => parseResponse(client.users.me.calendarList[':calendarId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersMeCalendarListCalendarIdKey() {
  return ['users', '/users/me/calendarList/:calendarId', 'PATCH'] as const
}

export function usePatchUsersMeCalendarListCalendarId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.me.calendarList)[':calendarId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersMeCalendarListCalendarIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users.me.calendarList)[':calendarId']['$patch']>
        },
      ) => parseResponse(client.users.me.calendarList[':calendarId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeSettingsKey(
  args: InferRequestType<typeof client.users.me.settings.$get>,
) {
  return ['users', '/users/me/settings', args] as const
}

export function useGetUsersMeSettings<TError = unknown>(
  args: InferRequestType<typeof client.users.me.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.settings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersMeSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeSettings<TError = unknown>(
  args: InferRequestType<typeof client.users.me.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.settings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersMeSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersMeSettingsWatchKey() {
  return ['users', '/users/me/settings/watch', 'POST'] as const
}

export function usePostUsersMeSettingsWatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.settings.watch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.me.settings.watch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMeSettingsWatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.me.settings.watch.$post> },
      ) => parseResponse(client.users.me.settings.watch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeSettingsSettingKey(
  args: InferRequestType<(typeof client.users.me.settings)[':setting']['$get']>,
) {
  return ['users', '/users/me/settings/:setting', args] as const
}

export function useGetUsersMeSettingsSetting<TError = unknown>(
  args: InferRequestType<(typeof client.users.me.settings)[':setting']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.me.settings)[':setting']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersMeSettingsSettingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.me.settings)[':setting']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.settings[':setting'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeSettingsSetting<TError = unknown>(
  args: InferRequestType<(typeof client.users.me.settings)[':setting']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.me.settings)[':setting']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersMeSettingsSettingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.me.settings)[':setting']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.settings[':setting'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
