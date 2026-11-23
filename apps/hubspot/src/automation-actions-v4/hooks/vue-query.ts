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

export function getAutomationKey() {
  return ['automation'] as const
}

export function getAutomationActions202609AppIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>
  >,
) {
  return ['automation', '/automation/actions/2026-09/:appId', toValue(args)] as const
}

export function getAutomationActions202609AppIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutomationActions202609AppIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAutomationActions202609AppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAutomationActions202609AppIdQueryKey>
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
          Awaited<ReturnType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationActions202609AppIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutomationActions202609AppIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.automation.actions['2026-09'][':appId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAutomationActions202609AppIdMutationKey() {
  return ['automation', '/automation/actions/2026-09/:appId', 'POST'] as const
}

export function getPostAutomationActions202609AppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automation.actions)['2026-09'][':appId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationActions202609AppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$post']>,
    ) {
      return parseResponse(client.automation.actions['2026-09'][':appId'].$post(args, options))
    },
  })
}

export function usePostAutomationActions202609AppId<
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
                  ReturnType<(typeof client.automation.actions)['2026-09'][':appId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$post']>,
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
  const mutationDefaults = getPostAutomationActions202609AppIdMutationOptions<
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

export function getAutomationActions202609AppIdDefinitionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
    >
  >,
) {
  return ['automation', '/automation/actions/2026-09/:appId/:definitionId', toValue(args)] as const
}

export function getAutomationActions202609AppIdDefinitionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutomationActions202609AppIdDefinitionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAutomationActions202609AppIdDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAutomationActions202609AppIdDefinitionIdQueryKey>
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
              (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationActions202609AppIdDefinitionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutomationActions202609AppIdDefinitionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.automation.actions['2026-09'][':appId'][':definitionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAutomationActions202609AppIdDefinitionIdMutationKey() {
  return ['automation', '/automation/actions/2026-09/:appId/:definitionId', 'DELETE'] as const
}

export function getDeleteAutomationActions202609AppIdDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAutomationActions202609AppIdDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAutomationActions202609AppIdDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$delete']
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
  const mutationDefaults = getDeleteAutomationActions202609AppIdDefinitionIdMutationOptions<
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

export function getPatchAutomationActions202609AppIdDefinitionIdMutationKey() {
  return ['automation', '/automation/actions/2026-09/:appId/:definitionId', 'PATCH'] as const
}

export function getPatchAutomationActions202609AppIdDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAutomationActions202609AppIdDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].$patch(args, options),
      )
    },
  })
}

export function usePatchAutomationActions202609AppIdDefinitionId<
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$patch']
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
  const mutationDefaults = getPatchAutomationActions202609AppIdDefinitionIdMutationOptions<
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

export function getAutomationActions202609AppIdDefinitionIdFunctionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
    >
  >,
) {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/functions',
    toValue(args),
  ] as const
}

export function getAutomationActions202609AppIdDefinitionIdFunctionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutomationActions202609AppIdDefinitionIdFunctionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].functions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAutomationActions202609AppIdDefinitionIdFunctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAutomationActions202609AppIdDefinitionIdFunctionsQueryKey>
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
              (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationActions202609AppIdDefinitionIdFunctionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutomationActions202609AppIdDefinitionIdFunctionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.automation.actions['2026-09'][':appId'][':definitionId'].functions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$get']
    >
  >,
) {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/functions/:functionType',
    toValue(args),
  ] as const
}

export function getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].functions[
          ':functionType'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAutomationActions202609AppIdDefinitionIdFunctionsFunctionType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$get']
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$get']
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeQueryKey
          >
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
              (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.automation.actions['2026-09'][':appId'][':definitionId'].functions[
            ':functionType'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeMutationKey() {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/functions/:functionType',
    'PUT',
  ] as const
}

export function getPutAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$put']
      >,
    ) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].functions[
          ':functionType'
        ].$put(args, options),
      )
    },
  })
}

export function usePutAutomationActions202609AppIdDefinitionIdFunctionsFunctionType<
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$put']
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
    getPutAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeMutationOptions<
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

export function getDeleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeMutationKey() {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/functions/:functionType',
    'DELETE',
  ] as const
}

export function getDeleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$delete']
      >,
    ) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].functions[
          ':functionType'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$delete']
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
    getDeleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeMutationOptions<
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

export function getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$get']
    >
  >,
) {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/functions/:functionType/:functionId',
    toValue(args),
  ] as const
}

export function getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].functions[':functionType'][
          ':functionId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$get']
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$get']
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdQueryKey
          >
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
              (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.automation.actions['2026-09'][':appId'][':definitionId'].functions[
            ':functionType'
          ][':functionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdMutationKey() {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/functions/:functionType/:functionId',
    'PUT',
  ] as const
}

export function getPutAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$put']
      >,
    ) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].functions[':functionType'][
          ':functionId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionId<
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$put']
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
    getPutAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdMutationOptions<
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

export function getDeleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdMutationKey() {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/functions/:functionType/:functionId',
    'DELETE',
  ] as const
}

export function getDeleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].functions[':functionType'][
          ':functionId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$delete']
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
    getDeleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdMutationOptions<
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

export function getAutomationActions202609AppIdDefinitionIdRequiresObjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$get']
    >
  >,
) {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/requires-object',
    toValue(args),
  ] as const
}

export function getAutomationActions202609AppIdDefinitionIdRequiresObjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAutomationActions202609AppIdDefinitionIdRequiresObjectQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId']['requires-object'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAutomationActions202609AppIdDefinitionIdRequiresObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$get']
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$get']
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAutomationActions202609AppIdDefinitionIdRequiresObjectQueryKey>
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
              (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationActions202609AppIdDefinitionIdRequiresObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAutomationActions202609AppIdDefinitionIdRequiresObjectQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.automation.actions['2026-09'][':appId'][':definitionId']['requires-object'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostAutomationActions202609AppIdDefinitionIdRequiresObjectMutationKey() {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/requires-object',
    'POST',
  ] as const
}

export function getPostAutomationActions202609AppIdDefinitionIdRequiresObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationActions202609AppIdDefinitionIdRequiresObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$post']
      >,
    ) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId']['requires-object'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAutomationActions202609AppIdDefinitionIdRequiresObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$post']
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
    getPostAutomationActions202609AppIdDefinitionIdRequiresObjectMutationOptions<
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

export function getAutomationActions202609AppIdDefinitionIdRevisionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
    >
  >,
) {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/revisions',
    toValue(args),
  ] as const
}

export function getAutomationActions202609AppIdDefinitionIdRevisionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAutomationActions202609AppIdDefinitionIdRevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].revisions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAutomationActions202609AppIdDefinitionIdRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAutomationActions202609AppIdDefinitionIdRevisionsQueryKey>
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
              (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationActions202609AppIdDefinitionIdRevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAutomationActions202609AppIdDefinitionIdRevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.automation.actions['2026-09'][':appId'][':definitionId'].revisions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions'][':revisionId']['$get']
    >
  >,
) {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/revisions/:revisionId',
    toValue(args),
  ] as const
}

export function getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions'][':revisionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].revisions[
          ':revisionId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAutomationActions202609AppIdDefinitionIdRevisionsRevisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions'][':revisionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions'][':revisionId']['$get']
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions'][':revisionId']['$get']
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
                    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions'][':revisionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdQueryKey>
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
              (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions'][':revisionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.automation.actions['2026-09'][':appId'][':definitionId'].revisions[
            ':revisionId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAutomationActionsCallbacks202609CompleteMutationKey() {
  return ['automation', '/automation/actions/callbacks/2026-09/complete', 'POST'] as const
}

export function getPostAutomationActionsCallbacks202609CompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.automation.actions.callbacks)['2026-09']['complete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.automation.actions.callbacks)['2026-09']['complete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationActionsCallbacks202609CompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automation.actions.callbacks)['2026-09']['complete']['$post']
      >,
    ) {
      return parseResponse(
        client.automation.actions.callbacks['2026-09'].complete.$post(args, options),
      )
    },
  })
}

export function usePostAutomationActionsCallbacks202609Complete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.automation.actions.callbacks)['2026-09']['complete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.automation.actions.callbacks)['2026-09']['complete']['$post']
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
  const mutationDefaults = getPostAutomationActionsCallbacks202609CompleteMutationOptions<
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

export function getPostAutomationActionsCallbacks202609CallbackIdCompleteMutationKey() {
  return [
    'automation',
    '/automation/actions/callbacks/2026-09/:callbackId/complete',
    'POST',
  ] as const
}

export function getPostAutomationActionsCallbacks202609CallbackIdCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.automation.actions.callbacks)['2026-09'][':callbackId']['complete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.automation.actions.callbacks)['2026-09'][':callbackId']['complete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAutomationActionsCallbacks202609CallbackIdCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.automation.actions.callbacks)['2026-09'][':callbackId']['complete']['$post']
      >,
    ) {
      return parseResponse(
        client.automation.actions.callbacks['2026-09'][':callbackId'].complete.$post(args, options),
      )
    },
  })
}

export function usePostAutomationActionsCallbacks202609CallbackIdComplete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.automation.actions.callbacks)['2026-09'][':callbackId']['complete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.automation.actions.callbacks)['2026-09'][':callbackId']['complete']['$post']
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
  const mutationDefaults = getPostAutomationActionsCallbacks202609CallbackIdCompleteMutationOptions<
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
