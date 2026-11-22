import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAutomationKey() {
  return ['automation'] as const
}

export function getGetAutomationActions202609AppIdKey(
  args: InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>,
) {
  return ['automation', '/automation/actions/2026-09/:appId', args] as const
}

export function useGetAutomationActions202609AppId<TError = unknown>(
  args: InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>>
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
        ? getGetAutomationActions202609AppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automation.actions['2026-09'][':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActions202609AppId<TError = unknown>(
  args: InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>>
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
        ? getGetAutomationActions202609AppIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.automation.actions['2026-09'][':appId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationActions202609AppIdKey() {
  return ['automation', '/automation/actions/2026-09/:appId', 'POST'] as const
}

export function usePostAutomationActions202609AppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.automation.actions)['2026-09'][':appId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationActions202609AppIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$post']>
        },
      ) => parseResponse(client.automation.actions['2026-09'][':appId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationActions202609AppIdDefinitionIdKey(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
  >,
) {
  return ['automation', '/automation/actions/2026-09/:appId/:definitionId', args] as const
}

export function useGetAutomationActions202609AppIdDefinitionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAutomationActions202609AppIdDefinitionIdKey(args)
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
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
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
          client.automation.actions['2026-09'][':appId'][':definitionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActions202609AppIdDefinitionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAutomationActions202609AppIdDefinitionIdKey(args)
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
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
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
          client.automation.actions['2026-09'][':appId'][':definitionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAutomationActions202609AppIdDefinitionIdKey() {
  return ['automation', '/automation/actions/2026-09/:appId/:definitionId', 'DELETE'] as const
}

export function useDeleteAutomationActions202609AppIdDefinitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAutomationActions202609AppIdDefinitionIdKey()
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
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.automation.actions['2026-09'][':appId'][':definitionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAutomationActions202609AppIdDefinitionIdKey() {
  return ['automation', '/automation/actions/2026-09/:appId/:definitionId', 'PATCH'] as const
}

export function usePatchAutomationActions202609AppIdDefinitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAutomationActions202609AppIdDefinitionIdKey()
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
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.automation.actions['2026-09'][':appId'][':definitionId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationActions202609AppIdDefinitionIdFunctionsKey(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
  >,
) {
  return ['automation', '/automation/actions/2026-09/:appId/:definitionId/functions', args] as const
}

export function useGetAutomationActions202609AppIdDefinitionIdFunctions<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAutomationActions202609AppIdDefinitionIdFunctionsKey(args)
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
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
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
          client.automation.actions['2026-09'][':appId'][':definitionId'].functions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActions202609AppIdDefinitionIdFunctions<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAutomationActions202609AppIdDefinitionIdFunctionsKey(args)
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
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
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
          client.automation.actions['2026-09'][':appId'][':definitionId'].functions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeKey(
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

export function useGetAutomationActions202609AppIdDefinitionIdFunctionsFunctionType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeKey(args)
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
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$get']
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
          client.automation.actions['2026-09'][':appId'][':definitionId'].functions[
            ':functionType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActions202609AppIdDefinitionIdFunctionsFunctionType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeKey(args)
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
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$get']
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
          client.automation.actions['2026-09'][':appId'][':definitionId'].functions[
            ':functionType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeKey() {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/functions/:functionType',
    'PUT',
  ] as const
}

export function usePutAutomationActions202609AppIdDefinitionIdFunctionsFunctionType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeKey()
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
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$put']
          >
        },
      ) =>
        parseResponse(
          client.automation.actions['2026-09'][':appId'][':definitionId'].functions[
            ':functionType'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeKey() {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/functions/:functionType',
    'DELETE',
  ] as const
}

export function useDeleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeKey()
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
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.automation.actions['2026-09'][':appId'][':definitionId'].functions[
            ':functionType'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdKey(
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

export function useGetAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdKey(args)
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
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$get']
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
          client.automation.actions['2026-09'][':appId'][':definitionId'].functions[
            ':functionType'
          ][':functionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdKey(args)
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
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$get']
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
          client.automation.actions['2026-09'][':appId'][':definitionId'].functions[
            ':functionType'
          ][':functionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdKey() {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/functions/:functionType/:functionId',
    'PUT',
  ] as const
}

export function usePutAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdKey()
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
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.automation.actions['2026-09'][':appId'][':definitionId'].functions[
            ':functionType'
          ][':functionId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdKey() {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/functions/:functionType/:functionId',
    'DELETE',
  ] as const
}

export function useDeleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionIdKey()
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
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.automation.actions['2026-09'][':appId'][':definitionId'].functions[
            ':functionType'
          ][':functionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationActions202609AppIdDefinitionIdRequiresObjectKey(
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

export function useGetAutomationActions202609AppIdDefinitionIdRequiresObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAutomationActions202609AppIdDefinitionIdRequiresObjectKey(args)
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
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$get']
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
          client.automation.actions['2026-09'][':appId'][':definitionId']['requires-object'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActions202609AppIdDefinitionIdRequiresObject<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAutomationActions202609AppIdDefinitionIdRequiresObjectKey(args)
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
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$get']
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
          client.automation.actions['2026-09'][':appId'][':definitionId']['requires-object'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationActions202609AppIdDefinitionIdRequiresObjectKey() {
  return [
    'automation',
    '/automation/actions/2026-09/:appId/:definitionId/requires-object',
    'POST',
  ] as const
}

export function usePostAutomationActions202609AppIdDefinitionIdRequiresObject<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationActions202609AppIdDefinitionIdRequiresObjectKey()
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
            (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$post']
          >
        },
      ) =>
        parseResponse(
          client.automation.actions['2026-09'][':appId'][':definitionId']['requires-object'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAutomationActions202609AppIdDefinitionIdRevisionsKey(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
  >,
) {
  return ['automation', '/automation/actions/2026-09/:appId/:definitionId/revisions', args] as const
}

export function useGetAutomationActions202609AppIdDefinitionIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAutomationActions202609AppIdDefinitionIdRevisionsKey(args)
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
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
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
          client.automation.actions['2026-09'][':appId'][':definitionId'].revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActions202609AppIdDefinitionIdRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAutomationActions202609AppIdDefinitionIdRevisionsKey(args)
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
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
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
          client.automation.actions['2026-09'][':appId'][':definitionId'].revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdKey(
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

export function useGetAutomationActions202609AppIdDefinitionIdRevisionsRevisionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdKey(args)
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
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions'][':revisionId']['$get']
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
          client.automation.actions['2026-09'][':appId'][':definitionId'].revisions[
            ':revisionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutomationActions202609AppIdDefinitionIdRevisionsRevisionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions'][':revisionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdKey(args)
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
                (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions'][':revisionId']['$get']
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
          client.automation.actions['2026-09'][':appId'][':definitionId'].revisions[
            ':revisionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAutomationActionsCallbacks202609CompleteKey() {
  return ['automation', '/automation/actions/callbacks/2026-09/complete', 'POST'] as const
}

export function usePostAutomationActionsCallbacks202609Complete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.automation.actions.callbacks)['2026-09']['complete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationActionsCallbacks202609CompleteKey()
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
            (typeof client.automation.actions.callbacks)['2026-09']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.automation.actions.callbacks['2026-09'].complete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAutomationActionsCallbacks202609CallbackIdCompleteKey() {
  return [
    'automation',
    '/automation/actions/callbacks/2026-09/:callbackId/complete',
    'POST',
  ] as const
}

export function usePostAutomationActionsCallbacks202609CallbackIdComplete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.automation.actions.callbacks)['2026-09'][':callbackId']['complete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAutomationActionsCallbacks202609CallbackIdCompleteKey()
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
            (typeof client.automation.actions.callbacks)['2026-09'][':callbackId']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.automation.actions.callbacks['2026-09'][':callbackId'].complete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
