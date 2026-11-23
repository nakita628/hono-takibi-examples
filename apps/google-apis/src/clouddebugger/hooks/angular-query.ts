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

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2ControllerDebuggeesRegisterMutationKey() {
  return ['v2', '/v2/controller/debuggees/register', 'POST'] as const
}

export function getPostV2ControllerDebuggeesRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.controller.debuggees.register.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.controller.debuggees.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ControllerDebuggeesRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.controller.debuggees.register.$post>) {
      return parseResponse(client.v2.controller.debuggees.register.$post(args, options))
    },
  })
}

export function injectPostV2ControllerDebuggeesRegister<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.controller.debuggees.register.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.controller.debuggees.register.$post>,
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
    const mutationDefaults = getPostV2ControllerDebuggeesRegisterMutationOptions<
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

export function getV2ControllerDebuggeesDebuggeeIdBreakpointsQueryKey(
  args: InferRequestType<
    (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']
  >,
) {
  return ['v2', '/v2/controller/debuggees/:debuggeeId/breakpoints', args] as const
}

export function getV2ControllerDebuggeesDebuggeeIdBreakpointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ControllerDebuggeesDebuggeeIdBreakpointsQueryKey>
  >({
    queryKey: getV2ControllerDebuggeesDebuggeeIdBreakpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.controller.debuggees[':debuggeeId'].breakpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ControllerDebuggeesDebuggeeIdBreakpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ControllerDebuggeesDebuggeeIdBreakpointsQueryKey>
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
      ...getV2ControllerDebuggeesDebuggeeIdBreakpointsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2ControllerDebuggeesDebuggeeIdBreakpointsIdMutationKey() {
  return ['v2', '/v2/controller/debuggees/:debuggeeId/breakpoints/:id', 'PUT'] as const
}

export function getPutV2ControllerDebuggeesDebuggeeIdBreakpointsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints'][':id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2ControllerDebuggeesDebuggeeIdBreakpointsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.controller.debuggees[':debuggeeId'].breakpoints[':id'].$put(args, options),
      )
    },
  })
}

export function injectPutV2ControllerDebuggeesDebuggeeIdBreakpointsId<
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
                  (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints'][':id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints'][':id']['$put']
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
    const mutationDefaults = getPutV2ControllerDebuggeesDebuggeeIdBreakpointsIdMutationOptions<
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

export function getV2DebuggerDebuggeesQueryKey(
  args: InferRequestType<typeof client.v2.debugger.debuggees.$get>,
) {
  return ['v2', '/v2/debugger/debuggees', args] as const
}

export function getV2DebuggerDebuggeesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.debugger.debuggees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.debugger.debuggees.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.debugger.debuggees.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DebuggerDebuggeesQueryKey>
  >({
    queryKey: getV2DebuggerDebuggeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.debugger.debuggees.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2DebuggerDebuggees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.debugger.debuggees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.debugger.debuggees.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.debugger.debuggees.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DebuggerDebuggeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2DebuggerDebuggeesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2DebuggerDebuggeesDebuggeeIdBreakpointsQueryKey(
  args: InferRequestType<
    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']
  >,
) {
  return ['v2', '/v2/debugger/debuggees/:debuggeeId/breakpoints', args] as const
}

export function getV2DebuggerDebuggeesDebuggeeIdBreakpointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DebuggerDebuggeesDebuggeeIdBreakpointsQueryKey>
  >({
    queryKey: getV2DebuggerDebuggeesDebuggeeIdBreakpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.debugger.debuggees[':debuggeeId'].breakpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DebuggerDebuggeesDebuggeeIdBreakpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DebuggerDebuggeesDebuggeeIdBreakpointsQueryKey>
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
      ...getV2DebuggerDebuggeesDebuggeeIdBreakpointsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2DebuggerDebuggeesDebuggeeIdBreakpointsSetMutationKey() {
  return ['v2', '/v2/debugger/debuggees/:debuggeeId/breakpoints/set', 'POST'] as const
}

export function getPostV2DebuggerDebuggeesDebuggeeIdBreakpointsSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['set']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['set']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2DebuggerDebuggeesDebuggeeIdBreakpointsSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['set']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.debugger.debuggees[':debuggeeId'].breakpoints.set.$post(args, options),
      )
    },
  })
}

export function injectPostV2DebuggerDebuggeesDebuggeeIdBreakpointsSet<
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
                  (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['set']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['set']['$post']
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
    const mutationDefaults = getPostV2DebuggerDebuggeesDebuggeeIdBreakpointsSetMutationOptions<
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

export function getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
  >,
) {
  return ['v2', '/v2/debugger/debuggees/:debuggeeId/breakpoints/:breakpointId', args] as const
}

export function getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdQueryKey>
  >({
    queryKey: getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.debugger.debuggees[':debuggeeId'].breakpoints[':breakpointId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdQueryKey>
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
      ...getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdMutationKey() {
  return ['v2', '/v2/debugger/debuggees/:debuggeeId/breakpoints/:breakpointId', 'DELETE'] as const
}

export function getDeleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.debugger.debuggees[':debuggeeId'].breakpoints[':breakpointId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointId<
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
                  (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$delete']
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
      getDeleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdMutationOptions<
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
