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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']>
  >,
) {
  return ['v2', '/v2/controller/debuggees/:debuggeeId/breakpoints', toValue(args)] as const
}

export function getV2ControllerDebuggeesDebuggeeIdBreakpointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ControllerDebuggeesDebuggeeIdBreakpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.controller.debuggees[':debuggeeId'].breakpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']>
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
                    (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']
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
                    (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ControllerDebuggeesDebuggeeIdBreakpointsQueryKey>
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
              (typeof client.v2.controller.debuggees)[':debuggeeId']['breakpoints']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ControllerDebuggeesDebuggeeIdBreakpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ControllerDebuggeesDebuggeeIdBreakpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.controller.debuggees[':debuggeeId'].breakpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.debugger.debuggees.$get>>,
) {
  return ['v2', '/v2/debugger/debuggees', toValue(args)] as const
}

export function getV2DebuggerDebuggeesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.debugger.debuggees.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DebuggerDebuggeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.debugger.debuggees.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DebuggerDebuggees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.debugger.debuggees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.debugger.debuggees.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.debugger.debuggees.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.debugger.debuggees.$get>>>
            >
          >,
          ReturnType<typeof getV2DebuggerDebuggeesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.debugger.debuggees.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DebuggerDebuggeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DebuggerDebuggeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.debugger.debuggees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DebuggerDebuggeesDebuggeeIdBreakpointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']>
  >,
) {
  return ['v2', '/v2/debugger/debuggees/:debuggeeId/breakpoints', toValue(args)] as const
}

export function getV2DebuggerDebuggeesDebuggeeIdBreakpointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DebuggerDebuggeesDebuggeeIdBreakpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.debugger.debuggees[':debuggeeId'].breakpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']>
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
                    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']
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
                    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DebuggerDebuggeesDebuggeeIdBreakpointsQueryKey>
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
            ReturnType<(typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DebuggerDebuggeesDebuggeeIdBreakpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DebuggerDebuggeesDebuggeeIdBreakpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.debugger.debuggees[':debuggeeId'].breakpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/debugger/debuggees/:debuggeeId/breakpoints/:breakpointId',
    toValue(args),
  ] as const
}

export function getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.debugger.debuggees[':debuggeeId'].breakpoints[':breakpointId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
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
                    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
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
                    (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdQueryKey>
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
              (typeof client.v2.debugger.debuggees)[':debuggeeId']['breakpoints'][':breakpointId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.debugger.debuggees[':debuggeeId'].breakpoints[':breakpointId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
