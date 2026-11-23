import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTimesheetsKey() {
  return ['Timesheets'] as const
}

export function getGetTimesheetsKey(args: InferRequestType<typeof client.Timesheets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Timesheets', '/Timesheets', keyArgs] as const
}

export function useGetTimesheets<TError = unknown>(
  args: InferRequestType<typeof client.Timesheets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimesheetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Timesheets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimesheets<TError = unknown>(
  args: InferRequestType<typeof client.Timesheets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimesheetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Timesheets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTimesheetsKey() {
  return ['Timesheets', '/Timesheets', 'POST'] as const
}

export function usePostTimesheets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Timesheets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimesheetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Timesheets.$post> }) =>
        parseResponse(client.Timesheets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTimesheetsTimesheetIDKey(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Timesheets', '/Timesheets/:TimesheetID', keyArgs] as const
}

export function useGetTimesheetsTimesheetID<TError = unknown>(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>
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
        ? getGetTimesheetsTimesheetIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Timesheets[':TimesheetID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimesheetsTimesheetID<TError = unknown>(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>
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
        ? getGetTimesheetsTimesheetIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Timesheets[':TimesheetID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTimesheetsTimesheetIDKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID', 'DELETE'] as const
}

export function useDeleteTimesheetsTimesheetID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTimesheetsTimesheetIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$delete']> },
      ) => parseResponse(client.Timesheets[':TimesheetID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTimesheetsTimesheetIDLinesKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/Lines', 'POST'] as const
}

export function usePostTimesheetsTimesheetIDLines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimesheetsTimesheetIDLinesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']> },
      ) => parseResponse(client.Timesheets[':TimesheetID'].Lines.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTimesheetsTimesheetIDApproveKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/Approve', 'POST'] as const
}

export function usePostTimesheetsTimesheetIDApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimesheetsTimesheetIDApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>
        },
      ) => parseResponse(client.Timesheets[':TimesheetID'].Approve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTimesheetsTimesheetIDRevertToDraftKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/RevertToDraft', 'POST'] as const
}

export function usePostTimesheetsTimesheetIDRevertToDraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimesheetsTimesheetIDRevertToDraftKey()
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
            (typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']
          >
        },
      ) => parseResponse(client.Timesheets[':TimesheetID'].RevertToDraft.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTimesheetsTimesheetIDLinesTimesheetLineIDKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/Lines/:TimesheetLineID', 'PUT'] as const
}

export function usePutTimesheetsTimesheetIDLinesTimesheetLineID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTimesheetsTimesheetIDLinesTimesheetLineIDKey()
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
            (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$put']
          >
        },
      ) =>
        parseResponse(
          client.Timesheets[':TimesheetID'].Lines[':TimesheetLineID'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTimesheetsTimesheetIDLinesTimesheetLineIDKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/Lines/:TimesheetLineID', 'DELETE'] as const
}

export function useDeleteTimesheetsTimesheetIDLinesTimesheetLineID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTimesheetsTimesheetIDLinesTimesheetLineIDKey()
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
            (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.Timesheets[':TimesheetID'].Lines[':TimesheetLineID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
