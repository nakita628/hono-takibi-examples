import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1VariablesKeyKey(
  args: InferRequestType<(typeof client.v1.variables)[':key']['$get']>,
) {
  return ['v1', '/v1/variables/:key', args] as const
}

export function useGetV1VariablesKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.variables)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1VariablesKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.variables[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VariablesKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.variables)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1VariablesKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.variables[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1VariablesKeyKey() {
  return ['v1', '/v1/variables/:key', 'PUT'] as const
}

export function usePutV1VariablesKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.variables)[':key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1VariablesKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.variables)[':key']['$put']> },
      ) => parseResponse(client.v1.variables[':key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1VariablesKeyKey() {
  return ['v1', '/v1/variables/:key', 'DELETE'] as const
}

export function useDeleteV1VariablesKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.variables)[':key']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.variables)[':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1VariablesKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.variables)[':key']['$delete']> },
      ) => parseResponse(client.v1.variables[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1GoalsKey(args: InferRequestType<typeof client.v1.goals.$get>) {
  return ['v1', '/v1/goals', args] as const
}

export function useGetV1Goals<TError = unknown>(
  args: InferRequestType<typeof client.v1.goals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.goals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1GoalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.goals.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.goals.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Goals<TError = unknown>(
  args: InferRequestType<typeof client.v1.goals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.goals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1GoalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.goals.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.goals.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV1WorkflowsWorkflowKeyKey(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$get']>,
) {
  return ['v1', '/v1/workflows/:workflow_key', args] as const
}

export function useGetV1WorkflowsWorkflowKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$get']>>
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
        ? getGetV1WorkflowsWorkflowKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows[':workflow_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowsWorkflowKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$get']>>
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
        ? getGetV1WorkflowsWorkflowKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows[':workflow_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1WorkflowsWorkflowKeyKey() {
  return ['v1', '/v1/workflows/:workflow_key', 'PUT'] as const
}

export function usePutV1WorkflowsWorkflowKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkflowsWorkflowKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$put']> },
      ) => parseResponse(client.v1.workflows[':workflow_key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1WorkflowsWorkflowKeyKey() {
  return ['v1', '/v1/workflows/:workflow_key', 'DELETE'] as const
}

export function useDeleteV1WorkflowsWorkflowKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1WorkflowsWorkflowKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['$delete']> },
      ) => parseResponse(client.v1.workflows[':workflow_key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CommitsIdKey(
  args: InferRequestType<(typeof client.v1.commits)[':id']['$get']>,
) {
  return ['v1', '/v1/commits/:id', args] as const
}

export function useGetV1CommitsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.commits)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.commits)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1CommitsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.commits)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.commits[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CommitsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.commits)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.commits)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1CommitsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.commits)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.commits[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SourcesKeyStatusKey(
  args: InferRequestType<(typeof client.v1.sources)[':key']['status']['$get']>,
) {
  return ['v1', '/v1/sources/:key/status', args] as const
}

export function useGetV1SourcesKeyStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':key']['status']['$get']>>
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
        ? getGetV1SourcesKeyStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':key']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sources[':key'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SourcesKeyStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':key']['status']['$get']>>
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
        ? getGetV1SourcesKeyStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':key']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sources[':key'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PartialsPartialKeyValidateKey() {
  return ['v1', '/v1/partials/:partial_key/validate', 'PUT'] as const
}

export function usePutV1PartialsPartialKeyValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['validate']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.partials)[':partial_key']['validate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PartialsPartialKeyValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.partials)[':partial_key']['validate']['$put']>
        },
      ) => parseResponse(client.v1.partials[':partial_key'].validate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WhoamiKey() {
  return ['v1', '/v1/whoami'] as const
}

export function useGetV1Whoami<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WhoamiKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.whoami.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Whoami<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WhoamiKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.whoami.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.whoami.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SourcesKey(args: InferRequestType<typeof client.v1.sources.$get>) {
  return ['v1', '/v1/sources', args] as const
}

export function useGetV1Sources<TError = unknown>(
  args: InferRequestType<typeof client.v1.sources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Sources<TError = unknown>(
  args: InferRequestType<typeof client.v1.sources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EmailLayoutsPreviewKey() {
  return ['v1', '/v1/email_layouts/preview', 'POST'] as const
}

export function usePostV1EmailLayoutsPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.preview.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.email_layouts.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EmailLayoutsPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.email_layouts.preview.$post> },
      ) => parseResponse(client.v1.email_layouts.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1WorkflowsWorkflowKeyValidateKey() {
  return ['v1', '/v1/workflows/:workflow_key/validate', 'PUT'] as const
}

export function usePutV1WorkflowsWorkflowKeyValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['validate']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows)[':workflow_key']['validate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkflowsWorkflowKeyValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['validate']['$put']>
        },
      ) => parseResponse(client.v1.workflows[':workflow_key'].validate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MessageTypesKey(
  args: InferRequestType<typeof client.v1.message_types.$get>,
) {
  return ['v1', '/v1/message_types', args] as const
}

export function useGetV1MessageTypes<TError = unknown>(
  args: InferRequestType<typeof client.v1.message_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.message_types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MessageTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.message_types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.message_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MessageTypes<TError = unknown>(
  args: InferRequestType<typeof client.v1.message_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.message_types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MessageTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.message_types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.message_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1GoalsGoalKeyKey(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['$get']>,
) {
  return ['v1', '/v1/goals/:goal_key', args] as const
}

export function useGetV1GoalsGoalKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1GoalsGoalKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.goals[':goal_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GoalsGoalKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1GoalsGoalKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.goals[':goal_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1GoalsGoalKeyKey() {
  return ['v1', '/v1/goals/:goal_key', 'PUT'] as const
}

export function usePutV1GoalsGoalKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.goals)[':goal_key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GoalsGoalKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.goals)[':goal_key']['$put']> },
      ) => parseResponse(client.v1.goals[':goal_key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1GoalsGoalKeyKey() {
  return ['v1', '/v1/goals/:goal_key', 'DELETE'] as const
}

export function useDeleteV1GoalsGoalKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.goals)[':goal_key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1GoalsGoalKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.goals)[':goal_key']['$delete']> },
      ) => parseResponse(client.v1.goals[':goal_key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EnvironmentsKey(
  args: InferRequestType<typeof client.v1.environments.$get>,
) {
  return ['v1', '/v1/environments', args] as const
}

export function useGetV1Environments<TError = unknown>(
  args: InferRequestType<typeof client.v1.environments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EnvironmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Environments<TError = unknown>(
  args: InferRequestType<typeof client.v1.environments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EnvironmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AssetsAssetIdKey() {
  return ['v1', '/v1/assets/:asset_id', 'DELETE'] as const
}

export function useDeleteV1AssetsAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.assets)[':asset_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.assets)[':asset_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AssetsAssetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.assets)[':asset_id']['$delete']> },
      ) => parseResponse(client.v1.assets[':asset_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AssetsKey(args: InferRequestType<typeof client.v1.assets.$get>) {
  return ['v1', '/v1/assets', args] as const
}

export function useGetV1Assets<TError = unknown>(
  args: InferRequestType<typeof client.v1.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Assets<TError = unknown>(
  args: InferRequestType<typeof client.v1.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AssetsKey() {
  return ['v1', '/v1/assets', 'POST'] as const
}

export function usePostV1Assets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.assets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AssetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.assets.$post> }) =>
        parseResponse(client.v1.assets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BroadcastsBroadcastKeyKey(
  args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>,
) {
  return ['v1', '/v1/broadcasts/:broadcast_key', args] as const
}

export function useGetV1BroadcastsBroadcastKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>>
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
        ? getGetV1BroadcastsBroadcastKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.broadcasts[':broadcast_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BroadcastsBroadcastKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>>
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
        ? getGetV1BroadcastsBroadcastKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.broadcasts[':broadcast_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1BroadcastsBroadcastKeyKey() {
  return ['v1', '/v1/broadcasts/:broadcast_key', 'PUT'] as const
}

export function usePutV1BroadcastsBroadcastKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1BroadcastsBroadcastKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['$put']> },
      ) => parseResponse(client.v1.broadcasts[':broadcast_key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1FeedbackKey() {
  return ['v1', '/v1/feedback', 'POST'] as const
}

export function usePostV1Feedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.feedback.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.feedback.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.feedback.$post> }) =>
        parseResponse(client.v1.feedback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TemplatesPreviewKey() {
  return ['v1', '/v1/templates/preview', 'POST'] as const
}

export function usePostV1TemplatesPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.preview.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.templates.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TemplatesPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.templates.preview.$post> },
      ) => parseResponse(client.v1.templates.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1GuidesGuideKeyActivateKey() {
  return ['v1', '/v1/guides/:guide_key/activate', 'PUT'] as const
}

export function usePutV1GuidesGuideKeyActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['activate']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.guides)[':guide_key']['activate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GuidesGuideKeyActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.guides)[':guide_key']['activate']['$put']> },
      ) => parseResponse(client.v1.guides[':guide_key'].activate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1CommitsPromoteKey() {
  return ['v1', '/v1/commits/promote', 'PUT'] as const
}

export function usePutV1CommitsPromote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.promote.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.commits.promote.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CommitsPromoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.commits.promote.$put> }) =>
        parseResponse(client.v1.commits.promote.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1WarehouseSyncsWarehouseSyncKeyRunKey() {
  return ['v1', '/v1/warehouse_syncs/:warehouse_sync_key/run', 'PUT'] as const
}

export function usePutV1WarehouseSyncsWarehouseSyncKeyRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['run']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['run']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WarehouseSyncsWarehouseSyncKeyRunKey()
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
            (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['run']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.warehouse_syncs[':warehouse_sync_key'].run.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1GuidesKey(args: InferRequestType<typeof client.v1.guides.$get>) {
  return ['v1', '/v1/guides', args] as const
}

export function useGetV1Guides<TError = unknown>(
  args: InferRequestType<typeof client.v1.guides.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.guides.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1GuidesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.guides.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.guides.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Guides<TError = unknown>(
  args: InferRequestType<typeof client.v1.guides.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.guides.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1GuidesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.guides.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.guides.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1HeadlessAccountsKey() {
  return ['v1', '/v1/headless_accounts', 'POST'] as const
}

export function usePostV1HeadlessAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.headless_accounts.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HeadlessAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v1.headless_accounts.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AudiencesKey(args: InferRequestType<typeof client.v1.audiences.$get>) {
  return ['v1', '/v1/audiences', args] as const
}

export function useGetV1Audiences<TError = unknown>(
  args: InferRequestType<typeof client.v1.audiences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audiences.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AudiencesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audiences.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audiences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Audiences<TError = unknown>(
  args: InferRequestType<typeof client.v1.audiences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audiences.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AudiencesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audiences.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audiences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TranslationsKey(
  args: InferRequestType<typeof client.v1.translations.$get>,
) {
  return ['v1', '/v1/translations', args] as const
}

export function useGetV1Translations<TError = unknown>(
  args: InferRequestType<typeof client.v1.translations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.translations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TranslationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.translations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.translations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Translations<TError = unknown>(
  args: InferRequestType<typeof client.v1.translations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.translations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TranslationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.translations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.translations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TranslationsLocaleCodeKey(
  args: InferRequestType<(typeof client.v1.translations)[':locale_code']['$get']>,
) {
  return ['v1', '/v1/translations/:locale_code', args] as const
}

export function useGetV1TranslationsLocaleCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.translations)[':locale_code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['$get']>>
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
        ? getGetV1TranslationsLocaleCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.translations[':locale_code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TranslationsLocaleCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.translations)[':locale_code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['$get']>>
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
        ? getGetV1TranslationsLocaleCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.translations[':locale_code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1TranslationsLocaleCodeKey() {
  return ['v1', '/v1/translations/:locale_code', 'PUT'] as const
}

export function usePutV1TranslationsLocaleCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.translations)[':locale_code']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TranslationsLocaleCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.translations)[':locale_code']['$put']> },
      ) => parseResponse(client.v1.translations[':locale_code'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1GoalsGoalKeyValidateKey() {
  return ['v1', '/v1/goals/:goal_key/validate', 'PUT'] as const
}

export function usePutV1GoalsGoalKeyValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['validate']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.goals)[':goal_key']['validate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GoalsGoalKeyValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.goals)[':goal_key']['validate']['$put']> },
      ) => parseResponse(client.v1.goals[':goal_key'].validate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1TagsNameKey() {
  return ['v1', '/v1/tags/:name', 'PUT'] as const
}

export function usePutV1TagsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tags)[':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TagsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.tags)[':name']['$put']> },
      ) => parseResponse(client.v1.tags[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TagsNameKey() {
  return ['v1', '/v1/tags/:name', 'DELETE'] as const
}

export function useDeleteV1TagsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tags)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TagsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.tags)[':name']['$delete']> },
      ) => parseResponse(client.v1.tags[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourcesKeyRehearseKey() {
  return ['v1', '/v1/sources/:key/rehearse', 'POST'] as const
}

export function usePostV1SourcesKeyRehearse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':key']['rehearse']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.sources)[':key']['rehearse']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesKeyRehearseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.sources)[':key']['rehearse']['$post']> },
      ) => parseResponse(client.v1.sources[':key'].rehearse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SchemasKey(args: InferRequestType<typeof client.v1.schemas.$get>) {
  return ['v1', '/v1/schemas', args] as const
}

export function useGetV1Schemas<TError = unknown>(
  args: InferRequestType<typeof client.v1.schemas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schemas.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SchemasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schemas.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Schemas<TError = unknown>(
  args: InferRequestType<typeof client.v1.schemas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schemas.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SchemasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schemas.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ChannelGroupsKey(
  args: InferRequestType<typeof client.v1.channel_groups.$get>,
) {
  return ['v1', '/v1/channel_groups', args] as const
}

export function useGetV1ChannelGroups<TError = unknown>(
  args: InferRequestType<typeof client.v1.channel_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channel_groups.$get>>>>
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
        ? getGetV1ChannelGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channel_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.channel_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ChannelGroups<TError = unknown>(
  args: InferRequestType<typeof client.v1.channel_groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channel_groups.$get>>>>
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
        ? getGetV1ChannelGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channel_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.channel_groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PartialsPartialKeyKey(
  args: InferRequestType<(typeof client.v1.partials)[':partial_key']['$get']>,
) {
  return ['v1', '/v1/partials/:partial_key', args] as const
}

export function useGetV1PartialsPartialKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.partials)[':partial_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$get']>>
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
        ? getGetV1PartialsPartialKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.partials[':partial_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PartialsPartialKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.partials)[':partial_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$get']>>
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
        ? getGetV1PartialsPartialKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.partials[':partial_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PartialsPartialKeyKey() {
  return ['v1', '/v1/partials/:partial_key', 'PUT'] as const
}

export function usePutV1PartialsPartialKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.partials)[':partial_key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PartialsPartialKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.partials)[':partial_key']['$put']> },
      ) => parseResponse(client.v1.partials[':partial_key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PartialsPartialKeyKey() {
  return ['v1', '/v1/partials/:partial_key', 'DELETE'] as const
}

export function useDeleteV1PartialsPartialKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.partials)[':partial_key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PartialsPartialKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.partials)[':partial_key']['$delete']> },
      ) => parseResponse(client.v1.partials[':partial_key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1VariablesKey(args: InferRequestType<typeof client.v1.variables.$get>) {
  return ['v1', '/v1/variables', args] as const
}

export function useGetV1Variables<TError = unknown>(
  args: InferRequestType<typeof client.v1.variables.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1VariablesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Variables<TError = unknown>(
  args: InferRequestType<typeof client.v1.variables.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1VariablesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.variables.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1GuidesGuideKeyKey(
  args: InferRequestType<(typeof client.v1.guides)[':guide_key']['$get']>,
) {
  return ['v1', '/v1/guides/:guide_key', args] as const
}

export function useGetV1GuidesGuideKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.guides)[':guide_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$get']>>>
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
        ? getGetV1GuidesGuideKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.guides[':guide_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GuidesGuideKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.guides)[':guide_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$get']>>>
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
        ? getGetV1GuidesGuideKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.guides[':guide_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1GuidesGuideKeyKey() {
  return ['v1', '/v1/guides/:guide_key', 'PUT'] as const
}

export function usePutV1GuidesGuideKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.guides)[':guide_key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GuidesGuideKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.guides)[':guide_key']['$put']> },
      ) => parseResponse(client.v1.guides[':guide_key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1GuidesGuideKeyKey() {
  return ['v1', '/v1/guides/:guide_key', 'DELETE'] as const
}

export function useDeleteV1GuidesGuideKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.guides)[':guide_key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1GuidesGuideKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.guides)[':guide_key']['$delete']> },
      ) => parseResponse(client.v1.guides[':guide_key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SourcesKeyKey(
  args: InferRequestType<(typeof client.v1.sources)[':key']['$get']>,
) {
  return ['v1', '/v1/sources/:key', args] as const
}

export function useGetV1SourcesKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1SourcesKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sources[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SourcesKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1SourcesKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sources[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1SourcesKeyKey() {
  return ['v1', '/v1/sources/:key', 'PUT'] as const
}

export function usePutV1SourcesKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':key']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.sources)[':key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SourcesKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.sources)[':key']['$put']> },
      ) => parseResponse(client.v1.sources[':key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ReusableRequestsReusableRequestKeyValidateKey() {
  return ['v1', '/v1/reusable_requests/:reusable_request_key/validate', 'PUT'] as const
}

export function usePutV1ReusableRequestsReusableRequestKeyValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.reusable_requests)[':reusable_request_key']['validate']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.reusable_requests)[':reusable_request_key']['validate']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ReusableRequestsReusableRequestKeyValidateKey()
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
            (typeof client.v1.reusable_requests)[':reusable_request_key']['validate']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.reusable_requests[':reusable_request_key'].validate.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1CommitsIdPromoteKey() {
  return ['v1', '/v1/commits/:id/promote', 'PUT'] as const
}

export function usePutV1CommitsIdPromote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.commits)[':id']['promote']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.commits)[':id']['promote']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CommitsIdPromoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.commits)[':id']['promote']['$put']> },
      ) => parseResponse(client.v1.commits[':id'].promote.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1HeadlessAccountsStatusKey() {
  return ['v1', '/v1/headless_accounts/status'] as const
}

export function useGetV1HeadlessAccountsStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.headless_accounts.status.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1HeadlessAccountsStatusKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.headless_accounts.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.headless_accounts.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1HeadlessAccountsStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.headless_accounts.status.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1HeadlessAccountsStatusKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.headless_accounts.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.headless_accounts.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1MessageTypesMessageTypeKeyValidateKey() {
  return ['v1', '/v1/message_types/:message_type_key/validate', 'PUT'] as const
}

export function usePutV1MessageTypesMessageTypeKeyValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.message_types)[':message_type_key']['validate']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.message_types)[':message_type_key']['validate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1MessageTypesMessageTypeKeyValidateKey()
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
            (typeof client.v1.message_types)[':message_type_key']['validate']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.message_types[':message_type_key'].validate.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1WorkflowsWorkflowKeyUnarchiveKey() {
  return ['v1', '/v1/workflows/:workflow_key/unarchive', 'PUT'] as const
}

export function usePutV1WorkflowsWorkflowKeyUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['unarchive']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows)[':workflow_key']['unarchive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkflowsWorkflowKeyUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['unarchive']['$put']>
        },
      ) => parseResponse(client.v1.workflows[':workflow_key'].unarchive.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ChannelsKey(args: InferRequestType<typeof client.v1.channels.$get>) {
  return ['v1', '/v1/channels', args] as const
}

export function useGetV1Channels<TError = unknown>(
  args: InferRequestType<typeof client.v1.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Channels<TError = unknown>(
  args: InferRequestType<typeof client.v1.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.channels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EnvironmentsEnvironmentSlugKey(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['$get']>,
) {
  return ['v1', '/v1/environments/:environment_slug', args] as const
}

export function useGetV1EnvironmentsEnvironmentSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environments)[':environment_slug']['$get']>>
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
        ? getGetV1EnvironmentsEnvironmentSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environments)[':environment_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.environments[':environment_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EnvironmentsEnvironmentSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environments)[':environment_slug']['$get']>>
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
        ? getGetV1EnvironmentsEnvironmentSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environments)[':environment_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.environments[':environment_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PartialsKey(args: InferRequestType<typeof client.v1.partials.$get>) {
  return ['v1', '/v1/partials', args] as const
}

export function useGetV1Partials<TError = unknown>(
  args: InferRequestType<typeof client.v1.partials.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PartialsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.partials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Partials<TError = unknown>(
  args: InferRequestType<typeof client.v1.partials.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PartialsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.partials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1WarehouseSyncsWarehouseSyncKeySettingsKey() {
  return ['v1', '/v1/warehouse_syncs/:warehouse_sync_key/settings', 'PUT'] as const
}

export function usePutV1WarehouseSyncsWarehouseSyncKeySettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WarehouseSyncsWarehouseSyncKeySettingsKey()
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
            (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.warehouse_syncs[':warehouse_sync_key'].settings.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1MessageTypesMessageTypeKeyKey(
  args: InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$get']>,
) {
  return ['v1', '/v1/message_types/:message_type_key', args] as const
}

export function useGetV1MessageTypesMessageTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.message_types)[':message_type_key']['$get']>>
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
        ? getGetV1MessageTypesMessageTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.message_types)[':message_type_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.message_types[':message_type_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MessageTypesMessageTypeKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.message_types)[':message_type_key']['$get']>>
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
        ? getGetV1MessageTypesMessageTypeKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.message_types)[':message_type_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.message_types[':message_type_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1MessageTypesMessageTypeKeyKey() {
  return ['v1', '/v1/message_types/:message_type_key', 'PUT'] as const
}

export function usePutV1MessageTypesMessageTypeKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.message_types)[':message_type_key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1MessageTypesMessageTypeKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.message_types)[':message_type_key']['$put']> },
      ) => parseResponse(client.v1.message_types[':message_type_key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MembersIdKey(
  args: InferRequestType<(typeof client.v1.members)[':id']['$get']>,
) {
  return ['v1', '/v1/members/:id', args] as const
}

export function useGetV1MembersId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.members)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1MembersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.members[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MembersId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.members)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1MembersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.members[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1MembersIdKey() {
  return ['v1', '/v1/members/:id', 'DELETE'] as const
}

export function useDeleteV1MembersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.members)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.members)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MembersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.members)[':id']['$delete']> },
      ) => parseResponse(client.v1.members[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AudiencesAudienceKeyKey(
  args: InferRequestType<(typeof client.v1.audiences)[':audience_key']['$get']>,
) {
  return ['v1', '/v1/audiences/:audience_key', args] as const
}

export function useGetV1AudiencesAudienceKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.audiences)[':audience_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$get']>>
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
        ? getGetV1AudiencesAudienceKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audiences[':audience_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AudiencesAudienceKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.audiences)[':audience_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$get']>>
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
        ? getGetV1AudiencesAudienceKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audiences[':audience_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AudiencesAudienceKeyKey() {
  return ['v1', '/v1/audiences/:audience_key', 'PUT'] as const
}

export function usePutV1AudiencesAudienceKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.audiences)[':audience_key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AudiencesAudienceKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.audiences)[':audience_key']['$put']> },
      ) => parseResponse(client.v1.audiences[':audience_key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AudiencesAudienceKeyKey() {
  return ['v1', '/v1/audiences/:audience_key', 'DELETE'] as const
}

export function useDeleteV1AudiencesAudienceKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.audiences)[':audience_key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AudiencesAudienceKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.audiences)[':audience_key']['$delete']> },
      ) => parseResponse(client.v1.audiences[':audience_key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WebhooksKey(args: InferRequestType<typeof client.v1.webhooks.$get>) {
  return ['v1', '/v1/webhooks', args] as const
}

export function useGetV1Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v1.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v1.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WebhooksKey() {
  return ['v1', '/v1/webhooks', 'POST'] as const
}

export function usePostV1Webhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.webhooks.$post> }) =>
        parseResponse(client.v1.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1PartialsPartialKeyDiscardKey() {
  return ['v1', '/v1/partials/:partial_key/discard', 'PUT'] as const
}

export function usePutV1PartialsPartialKeyDiscard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['discard']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.partials)[':partial_key']['discard']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PartialsPartialKeyDiscardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.partials)[':partial_key']['discard']['$put']>
        },
      ) => parseResponse(client.v1.partials[':partial_key'].discard.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PreferenceCenterKey(
  args: InferRequestType<typeof client.v1.preference_center.$get>,
) {
  return ['v1', '/v1/preference_center', args] as const
}

export function useGetV1PreferenceCenter<TError = unknown>(
  args: InferRequestType<typeof client.v1.preference_center.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$get>>>
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
        ? getGetV1PreferenceCenterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.preference_center.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PreferenceCenter<TError = unknown>(
  args: InferRequestType<typeof client.v1.preference_center.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$get>>>
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
        ? getGetV1PreferenceCenterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.preference_center.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PreferenceCenterKey() {
  return ['v1', '/v1/preference_center', 'PUT'] as const
}

export function usePutV1PreferenceCenter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.preference_center.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PreferenceCenterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.preference_center.$put> }) =>
        parseResponse(client.v1.preference_center.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CommitsKey(args: InferRequestType<typeof client.v1.commits.$get>) {
  return ['v1', '/v1/commits', args] as const
}

export function useGetV1Commits<TError = unknown>(
  args: InferRequestType<typeof client.v1.commits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CommitsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.commits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Commits<TError = unknown>(
  args: InferRequestType<typeof client.v1.commits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CommitsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.commits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CommitsKey() {
  return ['v1', '/v1/commits', 'PUT'] as const
}

export function usePutV1Commits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.commits.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.commits.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CommitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.commits.$put> }) =>
        parseResponse(client.v1.commits.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1HeadlessAccountsClaimKey() {
  return ['v1', '/v1/headless_accounts/claim', 'POST'] as const
}

export function usePostV1HeadlessAccountsClaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.headless_accounts.claim.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.headless_accounts.claim.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1HeadlessAccountsClaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.headless_accounts.claim.$post> },
      ) => parseResponse(client.v1.headless_accounts.claim.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WarehousesWarehouseKeyKey(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>,
) {
  return ['v1', '/v1/warehouses/:warehouse_key', args] as const
}

export function useGetV1WarehousesWarehouseKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>>
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
        ? getGetV1WarehousesWarehouseKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.warehouses[':warehouse_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WarehousesWarehouseKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>>
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
        ? getGetV1WarehousesWarehouseKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.warehouses[':warehouse_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BillingSummaryKey() {
  return ['v1', '/v1/billing/summary'] as const
}

export function useGetV1BillingSummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.summary.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BillingSummaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.billing.summary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BillingSummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.summary.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BillingSummaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.billing.summary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WarehouseSyncsKey(
  args: InferRequestType<typeof client.v1.warehouse_syncs.$get>,
) {
  return ['v1', '/v1/warehouse_syncs', args] as const
}

export function useGetV1WarehouseSyncs<TError = unknown>(
  args: InferRequestType<typeof client.v1.warehouse_syncs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouse_syncs.$get>>>>
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
        ? getGetV1WarehouseSyncsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouse_syncs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.warehouse_syncs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WarehouseSyncs<TError = unknown>(
  args: InferRequestType<typeof client.v1.warehouse_syncs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouse_syncs.$get>>>>
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
        ? getGetV1WarehouseSyncsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouse_syncs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.warehouse_syncs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SchemasItemTypeKey(
  args: InferRequestType<(typeof client.v1.schemas)[':item_type']['$get']>,
) {
  return ['v1', '/v1/schemas/:item_type', args] as const
}

export function useGetV1SchemasItemType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.schemas)[':item_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['$get']>>
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
        ? getGetV1SchemasItemTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.schemas[':item_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SchemasItemType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.schemas)[':item_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['$get']>>
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
        ? getGetV1SchemasItemTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.schemas[':item_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1SchemasItemTypeKey() {
  return ['v1', '/v1/schemas/:item_type', 'PUT'] as const
}

export function usePutV1SchemasItemType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.schemas)[':item_type']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SchemasItemTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.schemas)[':item_type']['$put']> },
      ) => parseResponse(client.v1.schemas[':item_type'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1BroadcastsBroadcastKeyCancelKey() {
  return ['v1', '/v1/broadcasts/:broadcast_key/cancel', 'PUT'] as const
}

export function usePutV1BroadcastsBroadcastKeyCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1BroadcastsBroadcastKeyCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['cancel']['$put']>
        },
      ) => parseResponse(client.v1.broadcasts[':broadcast_key'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ReusableRequestsKey(
  args: InferRequestType<typeof client.v1.reusable_requests.$get>,
) {
  return ['v1', '/v1/reusable_requests', args] as const
}

export function useGetV1ReusableRequests<TError = unknown>(
  args: InferRequestType<typeof client.v1.reusable_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reusable_requests.$get>>>
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
        ? getGetV1ReusableRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reusable_requests.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reusable_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReusableRequests<TError = unknown>(
  args: InferRequestType<typeof client.v1.reusable_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reusable_requests.$get>>>
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
        ? getGetV1ReusableRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reusable_requests.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reusable_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EnvironmentsEnvironmentSlugDefaultsKey(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>,
) {
  return ['v1', '/v1/environments/:environment_slug/defaults', args] as const
}

export function useGetV1EnvironmentsEnvironmentSlugDefaults<TError = unknown>(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>
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
        ? getGetV1EnvironmentsEnvironmentSlugDefaultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.environments[':environment_slug'].defaults.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EnvironmentsEnvironmentSlugDefaults<TError = unknown>(
  args: InferRequestType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>
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
        ? getGetV1EnvironmentsEnvironmentSlugDefaultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.environments)[':environment_slug']['defaults']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.environments[':environment_slug'].defaults.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1EnvironmentsEnvironmentSlugDefaultsKey() {
  return ['v1', '/v1/environments/:environment_slug/defaults', 'PUT'] as const
}

export function usePutV1EnvironmentsEnvironmentSlugDefaults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.environments)[':environment_slug']['defaults']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.environments)[':environment_slug']['defaults']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EnvironmentsEnvironmentSlugDefaultsKey()
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
            (typeof client.v1.environments)[':environment_slug']['defaults']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.environments[':environment_slug'].defaults.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1BranchesKey(args: InferRequestType<typeof client.v1.branches.$get>) {
  return ['v1', '/v1/branches', args] as const
}

export function useGetV1Branches<TError = unknown>(
  args: InferRequestType<typeof client.v1.branches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.branches.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BranchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.branches.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.branches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Branches<TError = unknown>(
  args: InferRequestType<typeof client.v1.branches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.branches.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BranchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.branches.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.branches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PartialsPartialKeyUnarchiveKey() {
  return ['v1', '/v1/partials/:partial_key/unarchive', 'PUT'] as const
}

export function usePutV1PartialsPartialKeyUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.partials)[':partial_key']['unarchive']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.partials)[':partial_key']['unarchive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PartialsPartialKeyUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.partials)[':partial_key']['unarchive']['$put']>
        },
      ) => parseResponse(client.v1.partials[':partial_key'].unarchive.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ReusableRequestsReusableRequestKeyKey(
  args: InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>,
) {
  return ['v1', '/v1/reusable_requests/:reusable_request_key', args] as const
}

export function useGetV1ReusableRequestsReusableRequestKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>
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
        ? getGetV1ReusableRequestsReusableRequestKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.reusable_requests[':reusable_request_key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReusableRequestsReusableRequestKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>
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
        ? getGetV1ReusableRequestsReusableRequestKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.reusable_requests[':reusable_request_key'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ReusableRequestsReusableRequestKeyKey() {
  return ['v1', '/v1/reusable_requests/:reusable_request_key', 'PUT'] as const
}

export function usePutV1ReusableRequestsReusableRequestKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ReusableRequestsReusableRequestKeyKey()
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
            (typeof client.v1.reusable_requests)[':reusable_request_key']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.reusable_requests[':reusable_request_key'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ReusableRequestsReusableRequestKeyKey() {
  return ['v1', '/v1/reusable_requests/:reusable_request_key', 'DELETE'] as const
}

export function useDeleteV1ReusableRequestsReusableRequestKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.reusable_requests)[':reusable_request_key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ReusableRequestsReusableRequestKeyKey()
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
            (typeof client.v1.reusable_requests)[':reusable_request_key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.reusable_requests[':reusable_request_key'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PreferenceCategoriesKey() {
  return ['v1', '/v1/preference_categories'] as const
}

export function useGetV1PreferenceCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_categories.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PreferenceCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.preference_categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PreferenceCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_categories.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PreferenceCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.preference_categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AuditLogsKey(args: InferRequestType<typeof client.v1.audit_logs.$get>) {
  return ['v1', '/v1/audit_logs', args] as const
}

export function useGetV1AuditLogs<TError = unknown>(
  args: InferRequestType<typeof client.v1.audit_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AuditLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audit_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AuditLogs<TError = unknown>(
  args: InferRequestType<typeof client.v1.audit_logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AuditLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.audit_logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audit_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EmailLayoutsEmailLayoutKeyKey(
  args: InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>,
) {
  return ['v1', '/v1/email_layouts/:email_layout_key', args] as const
}

export function useGetV1EmailLayoutsEmailLayoutKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>>
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
        ? getGetV1EmailLayoutsEmailLayoutKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.email_layouts[':email_layout_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailLayoutsEmailLayoutKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>>
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
        ? getGetV1EmailLayoutsEmailLayoutKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.email_layouts[':email_layout_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1EmailLayoutsEmailLayoutKeyKey() {
  return ['v1', '/v1/email_layouts/:email_layout_key', 'PUT'] as const
}

export function usePutV1EmailLayoutsEmailLayoutKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EmailLayoutsEmailLayoutKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['$put']> },
      ) => parseResponse(client.v1.email_layouts[':email_layout_key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyKey() {
  return ['v1', '/v1/goals/:goal_key/attachments/:resource_type/:resource_key', 'PUT'] as const
}

export function usePutV1GoalsGoalKeyAttachmentsResourceTypeResourceKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyKey()
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
            (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.goals[':goal_key'].attachments[':resource_type'][':resource_key'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyKey() {
  return ['v1', '/v1/goals/:goal_key/attachments/:resource_type/:resource_key', 'DELETE'] as const
}

export function useDeleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyKey()
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
            (typeof client.v1.goals)[':goal_key']['attachments'][':resource_type'][':resource_key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.goals[':goal_key'].attachments[':resource_type'][':resource_key'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1BroadcastsBroadcastKeyRunKey() {
  return ['v1', '/v1/broadcasts/:broadcast_key/run', 'PUT'] as const
}

export function usePutV1BroadcastsBroadcastKeyRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['run']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['run']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1BroadcastsBroadcastKeyRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['run']['$put']>
        },
      ) => parseResponse(client.v1.broadcasts[':broadcast_key'].run.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PartialsPreviewKey() {
  return ['v1', '/v1/partials/preview', 'POST'] as const
}

export function usePostV1PartialsPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.partials.preview.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.partials.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PartialsPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.partials.preview.$post> }) =>
        parseResponse(client.v1.partials.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AssetsUploadsKey() {
  return ['v1', '/v1/assets/uploads', 'POST'] as const
}

export function usePostV1AssetsUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.assets.uploads.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.assets.uploads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AssetsUploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.assets.uploads.$post> }) =>
        parseResponse(client.v1.assets.uploads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WarehousesKey(args: InferRequestType<typeof client.v1.warehouses.$get>) {
  return ['v1', '/v1/warehouses', args] as const
}

export function useGetV1Warehouses<TError = unknown>(
  args: InferRequestType<typeof client.v1.warehouses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WarehousesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.warehouses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Warehouses<TError = unknown>(
  args: InferRequestType<typeof client.v1.warehouses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WarehousesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.warehouses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1EmailLayoutsEmailLayoutKeyValidateKey() {
  return ['v1', '/v1/email_layouts/:email_layout_key/validate', 'PUT'] as const
}

export function usePutV1EmailLayoutsEmailLayoutKeyValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.email_layouts)[':email_layout_key']['validate']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.email_layouts)[':email_layout_key']['validate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EmailLayoutsEmailLayoutKeyValidateKey()
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
            (typeof client.v1.email_layouts)[':email_layout_key']['validate']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.email_layouts[':email_layout_key'].validate.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ReusableRequestsReusableRequestKeyUnarchiveKey() {
  return ['v1', '/v1/reusable_requests/:reusable_request_key/unarchive', 'PUT'] as const
}

export function usePutV1ReusableRequestsReusableRequestKeyUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.reusable_requests)[':reusable_request_key']['unarchive']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.reusable_requests)[':reusable_request_key']['unarchive']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ReusableRequestsReusableRequestKeyUnarchiveKey()
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
            (typeof client.v1.reusable_requests)[':reusable_request_key']['unarchive']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.reusable_requests[':reusable_request_key'].unarchive.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1MembersKey(args: InferRequestType<typeof client.v1.members.$get>) {
  return ['v1', '/v1/members', args] as const
}

export function useGetV1Members<TError = unknown>(
  args: InferRequestType<typeof client.v1.members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Members<TError = unknown>(
  args: InferRequestType<typeof client.v1.members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.members.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplateKey() {
  return ['v1', '/v1/workflows/:workflow_key/steps/:step_ref/preview_template', 'POST'] as const
}

export function usePostV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.workflows)[':workflow_key']['steps'][':step_ref']['preview_template']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.workflows)[':workflow_key']['steps'][':step_ref']['preview_template']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplateKey()
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
            (typeof client.v1.workflows)[':workflow_key']['steps'][':step_ref']['preview_template']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.workflows[':workflow_key'].steps[':step_ref'].preview_template.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1TranslationsLocaleCodeValidateKey() {
  return ['v1', '/v1/translations/:locale_code/validate', 'PUT'] as const
}

export function usePutV1TranslationsLocaleCodeValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.translations)[':locale_code']['validate']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.translations)[':locale_code']['validate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TranslationsLocaleCodeValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.translations)[':locale_code']['validate']['$put']>
        },
      ) => parseResponse(client.v1.translations[':locale_code'].validate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WarehouseSyncsWarehouseSyncKeyRunsKey(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>,
) {
  return ['v1', '/v1/warehouse_syncs/:warehouse_sync_key/runs', args] as const
}

export function useGetV1WarehouseSyncsWarehouseSyncKeyRuns<TError = unknown>(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>
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
        ? getGetV1WarehouseSyncsWarehouseSyncKeyRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.warehouse_syncs[':warehouse_sync_key'].runs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WarehouseSyncsWarehouseSyncKeyRuns<TError = unknown>(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>
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
        ? getGetV1WarehouseSyncsWarehouseSyncKeyRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['runs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.warehouse_syncs[':warehouse_sync_key'].runs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1PreferenceCategoriesNameKey() {
  return ['v1', '/v1/preference_categories/:name', 'PUT'] as const
}

export function usePutV1PreferenceCategoriesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.preference_categories)[':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.preference_categories)[':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PreferenceCategoriesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.preference_categories)[':name']['$put']> },
      ) => parseResponse(client.v1.preference_categories[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PreferenceCategoriesNameKey() {
  return ['v1', '/v1/preference_categories/:name', 'DELETE'] as const
}

export function useDeleteV1PreferenceCategoriesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.preference_categories)[':name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.preference_categories)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PreferenceCategoriesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.preference_categories)[':name']['$delete']> },
      ) => parseResponse(client.v1.preference_categories[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1BranchesBranchSlugRebaseKey() {
  return ['v1', '/v1/branches/:branch_slug/rebase', 'PUT'] as const
}

export function usePutV1BranchesBranchSlugRebase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['rebase']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.branches)[':branch_slug']['rebase']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1BranchesBranchSlugRebaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.branches)[':branch_slug']['rebase']['$put']> },
      ) => parseResponse(client.v1.branches[':branch_slug'].rebase.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BroadcastsKey(args: InferRequestType<typeof client.v1.broadcasts.$get>) {
  return ['v1', '/v1/broadcasts', args] as const
}

export function useGetV1Broadcasts<TError = unknown>(
  args: InferRequestType<typeof client.v1.broadcasts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.broadcasts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BroadcastsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.broadcasts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.broadcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Broadcasts<TError = unknown>(
  args: InferRequestType<typeof client.v1.broadcasts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.broadcasts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BroadcastsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.broadcasts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.broadcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowsKey(args: InferRequestType<typeof client.v1.workflows.$get>) {
  return ['v1', '/v1/workflows', args] as const
}

export function useGetV1Workflows<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WorkflowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Workflows<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WorkflowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1WorkflowsWorkflowKeyDiscardKey() {
  return ['v1', '/v1/workflows/:workflow_key/discard', 'PUT'] as const
}

export function usePutV1WorkflowsWorkflowKeyDiscard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['discard']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows)[':workflow_key']['discard']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkflowsWorkflowKeyDiscardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['discard']['$put']>
        },
      ) => parseResponse(client.v1.workflows[':workflow_key'].discard.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1GuidesGuideKeyValidateKey() {
  return ['v1', '/v1/guides/:guide_key/validate', 'PUT'] as const
}

export function usePutV1GuidesGuideKeyValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['validate']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.guides)[':guide_key']['validate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GuidesGuideKeyValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.guides)[':guide_key']['validate']['$put']> },
      ) => parseResponse(client.v1.guides[':guide_key'].validate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1WorkflowsWorkflowKeyRunKey() {
  return ['v1', '/v1/workflows/:workflow_key/run', 'PUT'] as const
}

export function usePutV1WorkflowsWorkflowKeyRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['run']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows)[':workflow_key']['run']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkflowsWorkflowKeyRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['run']['$put']> },
      ) => parseResponse(client.v1.workflows[':workflow_key'].run.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1BroadcastsBroadcastKeySendKey() {
  return ['v1', '/v1/broadcasts/:broadcast_key/send', 'PUT'] as const
}

export function usePutV1BroadcastsBroadcastKeySend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['send']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['send']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1BroadcastsBroadcastKeySendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['send']['$put']>
        },
      ) => parseResponse(client.v1.broadcasts[':broadcast_key'].send.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1BroadcastsBroadcastKeyValidateKey() {
  return ['v1', '/v1/broadcasts/:broadcast_key/validate', 'PUT'] as const
}

export function usePutV1BroadcastsBroadcastKeyValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.broadcasts)[':broadcast_key']['validate']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['validate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1BroadcastsBroadcastKeyValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.broadcasts)[':broadcast_key']['validate']['$put']>
        },
      ) => parseResponse(client.v1.broadcasts[':broadcast_key'].validate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1GuidesGuideKeyUnarchiveKey() {
  return ['v1', '/v1/guides/:guide_key/unarchive', 'PUT'] as const
}

export function usePutV1GuidesGuideKeyUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.guides)[':guide_key']['unarchive']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.guides)[':guide_key']['unarchive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GuidesGuideKeyUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.guides)[':guide_key']['unarchive']['$put']> },
      ) => parseResponse(client.v1.guides[':guide_key'].unarchive.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1SchemasItemTypeValidateKey() {
  return ['v1', '/v1/schemas/:item_type/validate', 'PUT'] as const
}

export function usePutV1SchemasItemTypeValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.schemas)[':item_type']['validate']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.schemas)[':item_type']['validate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SchemasItemTypeValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.schemas)[':item_type']['validate']['$put']> },
      ) => parseResponse(client.v1.schemas[':item_type'].validate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ChannelGroupsChannelGroupKeyKey(
  args: InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>,
) {
  return ['v1', '/v1/channel_groups/:channel_group_key', args] as const
}

export function useGetV1ChannelGroupsChannelGroupKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>>
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
        ? getGetV1ChannelGroupsChannelGroupKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.channel_groups[':channel_group_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ChannelGroupsChannelGroupKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>>
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
        ? getGetV1ChannelGroupsChannelGroupKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.channel_groups[':channel_group_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ChannelGroupsChannelGroupKeyKey() {
  return ['v1', '/v1/channel_groups/:channel_group_key', 'PUT'] as const
}

export function usePutV1ChannelGroupsChannelGroupKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ChannelGroupsChannelGroupKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$put']>
        },
      ) => parseResponse(client.v1.channel_groups[':channel_group_key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ChannelGroupsChannelGroupKeyKey() {
  return ['v1', '/v1/channel_groups/:channel_group_key', 'DELETE'] as const
}

export function useDeleteV1ChannelGroupsChannelGroupKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.channel_groups)[':channel_group_key']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ChannelGroupsChannelGroupKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.channel_groups)[':channel_group_key']['$delete']>
        },
      ) =>
        parseResponse(client.v1.channel_groups[':channel_group_key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SourcesKeyEventsKey(
  args: InferRequestType<(typeof client.v1.sources)[':key']['events']['$get']>,
) {
  return ['v1', '/v1/sources/:key/events', args] as const
}

export function useGetV1SourcesKeyEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':key']['events']['$get']>>
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
        ? getGetV1SourcesKeyEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':key']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sources[':key'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SourcesKeyEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':key']['events']['$get']>>
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
        ? getGetV1SourcesKeyEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':key']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sources[':key'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1WarehouseSyncsWarehouseSyncKeyValidateKey() {
  return ['v1', '/v1/warehouse_syncs/:warehouse_sync_key/validate', 'PUT'] as const
}

export function usePutV1WarehouseSyncsWarehouseSyncKeyValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['validate']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['validate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WarehouseSyncsWarehouseSyncKeyValidateKey()
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
            (typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['validate']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.warehouse_syncs[':warehouse_sync_key'].validate.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SourceProvidersKey() {
  return ['v1', '/v1/source_providers'] as const
}

export function useGetV1SourceProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_providers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SourceProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.source_providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SourceProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_providers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SourceProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.source_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.source_providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AudiencesAudienceKeyValidateKey() {
  return ['v1', '/v1/audiences/:audience_key/validate', 'PUT'] as const
}

export function usePutV1AudiencesAudienceKeyValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.audiences)[':audience_key']['validate']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.audiences)[':audience_key']['validate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AudiencesAudienceKeyValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.audiences)[':audience_key']['validate']['$put']>
        },
      ) => parseResponse(client.v1.audiences[':audience_key'].validate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TagsKey() {
  return ['v1', '/v1/tags'] as const
}

export function useGetV1Tags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Tags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PreferenceCenterResetKey() {
  return ['v1', '/v1/preference_center/reset', 'PUT'] as const
}

export function usePutV1PreferenceCenterReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.preference_center.reset.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.preference_center.reset.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PreferenceCenterResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.preference_center.reset.$put> },
      ) => parseResponse(client.v1.preference_center.reset.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ApiKeysExchangeKey() {
  return ['v1', '/v1/api_keys/exchange', 'POST'] as const
}

export function usePostV1ApiKeysExchange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.api_keys.exchange.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.api_keys.exchange.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApiKeysExchangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.api_keys.exchange.$post> },
      ) => parseResponse(client.v1.api_keys.exchange.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WebhooksIdKey(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
) {
  return ['v1', '/v1/webhooks/:id', args] as const
}

export function useGetV1WebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1WebhooksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1WebhooksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1WebhooksIdKey() {
  return ['v1', '/v1/webhooks/:id', 'PUT'] as const
}

export function usePutV1WebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.webhooks)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.webhooks)[':id']['$put']> },
      ) => parseResponse(client.v1.webhooks[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1WebhooksIdKey() {
  return ['v1', '/v1/webhooks/:id', 'DELETE'] as const
}

export function useDeleteV1WebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1WebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']> },
      ) => parseResponse(client.v1.webhooks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WarehouseSyncsWarehouseSyncKeyKey(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>,
) {
  return ['v1', '/v1/warehouse_syncs/:warehouse_sync_key', args] as const
}

export function useGetV1WarehouseSyncsWarehouseSyncKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>>
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
        ? getGetV1WarehouseSyncsWarehouseSyncKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.warehouse_syncs[':warehouse_sync_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WarehouseSyncsWarehouseSyncKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>>
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
        ? getGetV1WarehouseSyncsWarehouseSyncKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.warehouse_syncs[':warehouse_sync_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1WarehouseSyncsWarehouseSyncKeyKey() {
  return ['v1', '/v1/warehouse_syncs/:warehouse_sync_key', 'PUT'] as const
}

export function usePutV1WarehouseSyncsWarehouseSyncKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WarehouseSyncsWarehouseSyncKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.warehouse_syncs)[':warehouse_sync_key']['$put']>
        },
      ) => parseResponse(client.v1.warehouse_syncs[':warehouse_sync_key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1GoalsGoalKeyCloneKey() {
  return ['v1', '/v1/goals/:goal_key/clone', 'POST'] as const
}

export function usePostV1GoalsGoalKeyClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['clone']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.goals)[':goal_key']['clone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GoalsGoalKeyCloneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.goals)[':goal_key']['clone']['$post']> },
      ) => parseResponse(client.v1.goals[':goal_key'].clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1WorkflowsWorkflowKeyActivateKey() {
  return ['v1', '/v1/workflows/:workflow_key/activate', 'PUT'] as const
}

export function usePutV1WorkflowsWorkflowKeyActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':workflow_key']['activate']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows)[':workflow_key']['activate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WorkflowsWorkflowKeyActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.workflows)[':workflow_key']['activate']['$put']>
        },
      ) => parseResponse(client.v1.workflows[':workflow_key'].activate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ChannelsChannelKeyKey(
  args: InferRequestType<(typeof client.v1.channels)[':channel_key']['$get']>,
) {
  return ['v1', '/v1/channels/:channel_key', args] as const
}

export function useGetV1ChannelsChannelKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.channels)[':channel_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.channels)[':channel_key']['$get']>>
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
        ? getGetV1ChannelsChannelKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.channels)[':channel_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.channels[':channel_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ChannelsChannelKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.channels)[':channel_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.channels)[':channel_key']['$get']>>
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
        ? getGetV1ChannelsChannelKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.channels)[':channel_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.channels[':channel_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EmailLayoutsKey(
  args: InferRequestType<typeof client.v1.email_layouts.$get>,
) {
  return ['v1', '/v1/email_layouts', args] as const
}

export function useGetV1EmailLayouts<TError = unknown>(
  args: InferRequestType<typeof client.v1.email_layouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EmailLayoutsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email_layouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailLayouts<TError = unknown>(
  args: InferRequestType<typeof client.v1.email_layouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EmailLayoutsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email_layouts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email_layouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SourceProvidersKeyKey(
  args: InferRequestType<(typeof client.v1.source_providers)[':key']['$get']>,
) {
  return ['v1', '/v1/source_providers/:key', args] as const
}

export function useGetV1SourceProvidersKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.source_providers)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.source_providers)[':key']['$get']>>
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
        ? getGetV1SourceProvidersKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.source_providers)[':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.source_providers[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SourceProvidersKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1.source_providers)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.source_providers)[':key']['$get']>>
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
        ? getGetV1SourceProvidersKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.source_providers)[':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.source_providers[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BranchesBranchSlugKey(
  args: InferRequestType<(typeof client.v1.branches)[':branch_slug']['$get']>,
) {
  return ['v1', '/v1/branches/:branch_slug', args] as const
}

export function useGetV1BranchesBranchSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v1.branches)[':branch_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$get']>>
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
        ? getGetV1BranchesBranchSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.branches[':branch_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BranchesBranchSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v1.branches)[':branch_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$get']>>
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
        ? getGetV1BranchesBranchSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.branches[':branch_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BranchesBranchSlugKey() {
  return ['v1', '/v1/branches/:branch_slug', 'POST'] as const
}

export function usePostV1BranchesBranchSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.branches)[':branch_slug']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BranchesBranchSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.branches)[':branch_slug']['$post']> },
      ) => parseResponse(client.v1.branches[':branch_slug'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1BranchesBranchSlugKey() {
  return ['v1', '/v1/branches/:branch_slug', 'DELETE'] as const
}

export function useDeleteV1BranchesBranchSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.branches)[':branch_slug']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.branches)[':branch_slug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BranchesBranchSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.branches)[':branch_slug']['$delete']> },
      ) => parseResponse(client.v1.branches[':branch_slug'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SourcesKeyLogsKey(
  args: InferRequestType<(typeof client.v1.sources)[':key']['logs']['$get']>,
) {
  return ['v1', '/v1/sources/:key/logs', args] as const
}

export function useGetV1SourcesKeyLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':key']['logs']['$get']>>
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
        ? getGetV1SourcesKeyLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':key']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sources[':key'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SourcesKeyLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sources)[':key']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':key']['logs']['$get']>>
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
        ? getGetV1SourcesKeyLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sources)[':key']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sources[':key'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1GoalsGoalKeyAttachmentsKey(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>,
) {
  return ['v1', '/v1/goals/:goal_key/attachments', args] as const
}

export function useGetV1GoalsGoalKeyAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>>
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
        ? getGetV1GoalsGoalKeyAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.goals[':goal_key'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GoalsGoalKeyAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>>
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
        ? getGetV1GoalsGoalKeyAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.goals)[':goal_key']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.goals[':goal_key'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
