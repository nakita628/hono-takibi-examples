import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2ControllerDebuggeesRegisterKey() {
  return ['v2', '/v2/controller/debuggees/register', 'POST'] as const
}

export function usePostV2ControllerDebuggeesRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.controller.debuggees.register.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.controller.debuggees.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ControllerDebuggeesRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.controller.debuggees.register.$post> },
      ) => parseResponse(client.v2.controller.debuggees.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ControllerDebuggeesDebuggeeIdBreakpointsKey(
  args: InferRequestType<
    (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']
  >,
) {
  return ['v2', '/v2/controller/debuggees/:debuggeeId/breakpoints', args] as const
}

export function useGetV2ControllerDebuggeesDebuggeeIdBreakpoints<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ControllerDebuggeesDebuggeeIdBreakpointsKey(args)
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
                (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']
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
          client.v2.controller.debuggees[':debuggeeId'].breakpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ControllerDebuggeesDebuggeeIdBreakpoints<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2ControllerDebuggeesDebuggeeIdBreakpointsKey(args)
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
                (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']
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
          client.v2.controller.debuggees[':debuggeeId'].breakpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2ControllerDebuggeesDebuggeeIdBreakpointsIdKey() {
  return ['v2', '/v2/controller/debuggees/:debuggeeId/breakpoints/:id', 'PUT'] as const
}

export function usePutV2ControllerDebuggeesDebuggeeIdBreakpointsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ControllerDebuggeesDebuggeeIdBreakpointsIdKey()
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
            (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.controller.debuggees[':debuggeeId'].breakpoints[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DebuggerDebuggeesKey(
  args: InferRequestType<typeof client.v2.debugger.debuggees.$get>,
) {
  return ['v2', '/v2/debugger/debuggees', args] as const
}

export function useGetV2DebuggerDebuggees<TError = unknown>(
  args: InferRequestType<typeof client.v2.debugger.debuggees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.debugger.debuggees.$get>>>
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
        ? getGetV2DebuggerDebuggeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.debugger.debuggees.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.debugger.debuggees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DebuggerDebuggees<TError = unknown>(
  args: InferRequestType<typeof client.v2.debugger.debuggees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.debugger.debuggees.$get>>>
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
        ? getGetV2DebuggerDebuggeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.debugger.debuggees.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.debugger.debuggees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2DebuggerDebuggeesDebuggeeIdBreakpointsKey(
  args: InferRequestType<
    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']
  >,
) {
  return ['v2', '/v2/debugger/debuggees/:debuggeeId/breakpoints', args] as const
}

export function useGetV2DebuggerDebuggeesDebuggeeIdBreakpoints<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2DebuggerDebuggeesDebuggeeIdBreakpointsKey(args)
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
                (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']
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
          client.v2.debugger.debuggees[':debuggeeId'].breakpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DebuggerDebuggeesDebuggeeIdBreakpoints<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2DebuggerDebuggeesDebuggeeIdBreakpointsKey(args)
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
                (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']
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
          client.v2.debugger.debuggees[':debuggeeId'].breakpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2DebuggerDebuggeesDebuggeeIdBreakpointsSetKey() {
  return ['v2', '/v2/debugger/debuggees/:debuggeeId/breakpoints/set', 'POST'] as const
}

export function usePostV2DebuggerDebuggeesDebuggeeIdBreakpointsSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['set']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DebuggerDebuggeesDebuggeeIdBreakpointsSetKey()
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
            (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['set']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.debugger.debuggees[':debuggeeId'].breakpoints.set.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdKey(
  args: InferRequestType<
    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
  >,
) {
  return ['v2', '/v2/debugger/debuggees/:debuggeeId/breakpoints/:breakpointId', args] as const
}

export function useGetV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdKey(args)
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
                (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
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
          client.v2.debugger.debuggees[':debuggeeId'].breakpoints[':breakpointId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdKey(args)
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
                (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
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
          client.v2.debugger.debuggees[':debuggeeId'].breakpoints[':breakpointId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdKey() {
  return ['v2', '/v2/debugger/debuggees/:debuggeeId/breakpoints/:breakpointId', 'DELETE'] as const
}

export function useDeleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdKey()
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
            (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.debugger.debuggees[':debuggeeId'].breakpoints[':breakpointId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
