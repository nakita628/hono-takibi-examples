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

export function getAutomationKey() {
  return ['automation'] as const
}

export function getAutomationActions202609AppIdQueryKey(
  args: InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>,
) {
  return ['automation', '/automation/actions/2026-09/:appId', args] as const
}

export function getAutomationActions202609AppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAutomationActions202609AppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAutomationActions202609AppIdQueryKey>
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
      ...getAutomationActions202609AppIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationActions202609AppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAutomationActions202609AppIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
  >,
) {
  return ['automation', '/automation/actions/2026-09/:appId/:definitionId', args] as const
}

export function getAutomationActions202609AppIdDefinitionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAutomationActions202609AppIdDefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAutomationActions202609AppIdDefinitionIdQueryKey>
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
      ...getAutomationActions202609AppIdDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationActions202609AppIdDefinitionId<
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAutomationActions202609AppIdDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
  >,
) {
  return ['automation', '/automation/actions/2026-09/:appId/:definitionId/functions', args] as const
}

export function getAutomationActions202609AppIdDefinitionIdFunctionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAutomationActions202609AppIdDefinitionIdFunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].functions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAutomationActions202609AppIdDefinitionIdFunctionsQueryKey>
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
      ...getAutomationActions202609AppIdDefinitionIdFunctionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationActions202609AppIdDefinitionIdFunctions<
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAutomationActions202609AppIdDefinitionIdFunctionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeQueryKey(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$get']
  >,
) {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/functions/:functionType',
    args,
  ] as const
}

export function getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].functions[
          ':functionType'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeQueryKey>
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
      ...getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationActions202609AppIdDefinitionIdFunctionsFunctionType<
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$get']
  >,
) {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/functions/:functionType/:functionId',
    args,
  ] as const
}

export function getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].functions[':functionType'][
          ':functionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdQueryKey
        >
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
      ...getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionId<
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$get']
  >,
) {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/requires-object',
    args,
  ] as const
}

export function getAutomationActions202609AppIdDefinitionIdRequiresObjectQueryOptions<
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAutomationActions202609AppIdDefinitionIdRequiresObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId']['requires-object'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAutomationActions202609AppIdDefinitionIdRequiresObjectQueryKey>
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
      ...getAutomationActions202609AppIdDefinitionIdRequiresObjectQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationActions202609AppIdDefinitionIdRequiresObject<
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAutomationActions202609AppIdDefinitionIdRequiresObjectQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
  >,
) {
  return ['automation', '/automation/actions/2026-09/:appId/:definitionId/revisions', args] as const
}

export function getAutomationActions202609AppIdDefinitionIdRevisionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAutomationActions202609AppIdDefinitionIdRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].revisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAutomationActions202609AppIdDefinitionIdRevisionsQueryKey>
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
      ...getAutomationActions202609AppIdDefinitionIdRevisionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationActions202609AppIdDefinitionIdRevisions<
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAutomationActions202609AppIdDefinitionIdRevisionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdQueryKey(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions'][':revisionId']['$get']
  >,
) {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/revisions/:revisionId',
    args,
  ] as const
}

export function getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions'][':revisionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.automation.actions['2026-09'][':appId'][':definitionId'].revisions[
          ':revisionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdQueryKey>
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
      ...getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAutomationActions202609AppIdDefinitionIdRevisionsRevisionId<
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
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
