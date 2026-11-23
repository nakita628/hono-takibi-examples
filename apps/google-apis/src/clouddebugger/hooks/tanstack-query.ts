import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function usePostV2ControllerDebuggeesRegister<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ControllerDebuggeesRegisterMutationOptions<
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

export function useV2ControllerDebuggeesDebuggeeIdBreakpoints<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2ControllerDebuggeesDebuggeeIdBreakpointsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2ControllerDebuggeesDebuggeeIdBreakpoints<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2ControllerDebuggeesDebuggeeIdBreakpointsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutV2ControllerDebuggeesDebuggeeIdBreakpointsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2ControllerDebuggeesDebuggeeIdBreakpointsIdMutationOptions<
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

export function useV2DebuggerDebuggees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.debugger.debuggees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.debugger.debuggees.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2DebuggerDebuggeesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2DebuggerDebuggees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.debugger.debuggees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.debugger.debuggees.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2DebuggerDebuggeesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useV2DebuggerDebuggeesDebuggeeIdBreakpoints<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2DebuggerDebuggeesDebuggeeIdBreakpointsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2DebuggerDebuggeesDebuggeeIdBreakpoints<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2DebuggerDebuggeesDebuggeeIdBreakpointsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostV2DebuggerDebuggeesDebuggeeIdBreakpointsSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2DebuggerDebuggeesDebuggeeIdBreakpointsSetMutationOptions<
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

export function useV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDeleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdMutationOptions<
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
