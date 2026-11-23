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

export function getTimesheetsKey() {
  return ['Timesheets'] as const
}

export function getTimesheetsQueryKey(args: InferRequestType<typeof client.Timesheets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Timesheets', '/Timesheets', keyArgs] as const
}

export function getTimesheetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Timesheets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimesheetsQueryKey>
  >({
    queryKey: getTimesheetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Timesheets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTimesheets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Timesheets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTimesheetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTimesheetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostTimesheetsMutationKey() {
  return ['Timesheets', '/Timesheets', 'POST'] as const
}

export function getPostTimesheetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$post>>>>>,
    TError,
    InferRequestType<typeof client.Timesheets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTimesheetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Timesheets.$post>) {
      return parseResponse(client.Timesheets.$post(args, options))
    },
  })
}

export function injectPostTimesheets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Timesheets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Timesheets.$post>,
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
    const mutationDefaults = getPostTimesheetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTimesheetsTimesheetIDQueryKey(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Timesheets', '/Timesheets/:TimesheetID', keyArgs] as const
}

export function getTimesheetsTimesheetIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimesheetsTimesheetIDQueryKey>
  >({
    queryKey: getTimesheetsTimesheetIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Timesheets[':TimesheetID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTimesheetsTimesheetID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimesheetsTimesheetIDQueryKey>
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
      ...getTimesheetsTimesheetIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteTimesheetsTimesheetIDMutationKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID', 'DELETE'] as const
}

export function getDeleteTimesheetsTimesheetIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTimesheetsTimesheetIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$delete']>,
    ) {
      return parseResponse(client.Timesheets[':TimesheetID'].$delete(args, options))
    },
  })
}

export function injectDeleteTimesheetsTimesheetID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Timesheets)[':TimesheetID']['$delete']>,
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
    const mutationDefaults = getDeleteTimesheetsTimesheetIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTimesheetsTimesheetIDLinesMutationKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/Lines', 'POST'] as const
}

export function getPostTimesheetsTimesheetIDLinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTimesheetsTimesheetIDLinesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']>,
    ) {
      return parseResponse(client.Timesheets[':TimesheetID'].Lines.$post(args, options))
    },
  })
}

export function injectPostTimesheetsTimesheetIDLines<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Lines']['$post']>,
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
    const mutationDefaults = getPostTimesheetsTimesheetIDLinesMutationOptions<
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

export function getPostTimesheetsTimesheetIDApproveMutationKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/Approve', 'POST'] as const
}

export function getPostTimesheetsTimesheetIDApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTimesheetsTimesheetIDApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>,
    ) {
      return parseResponse(client.Timesheets[':TimesheetID'].Approve.$post(args, options))
    },
  })
}

export function injectPostTimesheetsTimesheetIDApprove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Timesheets)[':TimesheetID']['Approve']['$post']>,
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
    const mutationDefaults = getPostTimesheetsTimesheetIDApproveMutationOptions<
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

export function getPostTimesheetsTimesheetIDRevertToDraftMutationKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/RevertToDraft', 'POST'] as const
}

export function getPostTimesheetsTimesheetIDRevertToDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTimesheetsTimesheetIDRevertToDraftMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>,
    ) {
      return parseResponse(client.Timesheets[':TimesheetID'].RevertToDraft.$post(args, options))
    },
  })
}

export function injectPostTimesheetsTimesheetIDRevertToDraft<
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
                ReturnType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Timesheets)[':TimesheetID']['RevertToDraft']['$post']>,
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
    const mutationDefaults = getPostTimesheetsTimesheetIDRevertToDraftMutationOptions<
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

export function getPutTimesheetsTimesheetIDLinesTimesheetLineIDMutationKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/Lines/:TimesheetLineID', 'PUT'] as const
}

export function getPutTimesheetsTimesheetIDLinesTimesheetLineIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutTimesheetsTimesheetIDLinesTimesheetLineIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$put']
      >,
    ) {
      return parseResponse(
        client.Timesheets[':TimesheetID'].Lines[':TimesheetLineID'].$put(args, options),
      )
    },
  })
}

export function injectPutTimesheetsTimesheetIDLinesTimesheetLineID<
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
                  (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$put']
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
    const mutationDefaults = getPutTimesheetsTimesheetIDLinesTimesheetLineIDMutationOptions<
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

export function getDeleteTimesheetsTimesheetIDLinesTimesheetLineIDMutationKey() {
  return ['Timesheets', '/Timesheets/:TimesheetID/Lines/:TimesheetLineID', 'DELETE'] as const
}

export function getDeleteTimesheetsTimesheetIDLinesTimesheetLineIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTimesheetsTimesheetIDLinesTimesheetLineIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$delete']
      >,
    ) {
      return parseResponse(
        client.Timesheets[':TimesheetID'].Lines[':TimesheetLineID'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteTimesheetsTimesheetIDLinesTimesheetLineID<
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
                  (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Timesheets)[':TimesheetID']['Lines'][':TimesheetLineID']['$delete']
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
    const mutationDefaults = getDeleteTimesheetsTimesheetIDLinesTimesheetLineIDMutationOptions<
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
