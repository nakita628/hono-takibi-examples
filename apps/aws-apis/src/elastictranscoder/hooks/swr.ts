import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2012_09_25Key() {
  return ['2012-09-25'] as const
}

export function getGet20120925JobsIdKey(
  args: InferRequestType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2012-09-25', '/2012-09-25/jobs/:Id', keyArgs] as const
}

export function useGet20120925JobsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet20120925JobsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2012-09-25'].jobs[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20120925JobsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet20120925JobsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2012-09-25'].jobs[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete20120925JobsIdKey() {
  return ['2012-09-25', '/2012-09-25/jobs/:Id', 'DELETE'] as const
}

export function useDelete20120925JobsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['jobs'][':Id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2012-09-25']['jobs'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20120925JobsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2012-09-25']['jobs'][':Id']['$delete']> },
      ) => parseResponse(client['2012-09-25'].jobs[':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20120925JobsKey() {
  return ['2012-09-25', '/2012-09-25/jobs', 'POST'] as const
}

export function usePost20120925Jobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2012-09-25']['jobs']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2012-09-25']['jobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20120925JobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2012-09-25']['jobs']['$post']> },
      ) => parseResponse(client['2012-09-25'].jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20120925PipelinesKey(
  args: InferRequestType<(typeof client)['2012-09-25']['pipelines']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2012-09-25', '/2012-09-25/pipelines', keyArgs] as const
}

export function useGet20120925Pipelines<TError = unknown>(
  args: InferRequestType<(typeof client)['2012-09-25']['pipelines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines']['$get']>>
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
        ? getGet20120925PipelinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2012-09-25'].pipelines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20120925Pipelines<TError = unknown>(
  args: InferRequestType<(typeof client)['2012-09-25']['pipelines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines']['$get']>>
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
        ? getGet20120925PipelinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2012-09-25'].pipelines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20120925PipelinesKey() {
  return ['2012-09-25', '/2012-09-25/pipelines', 'POST'] as const
}

export function usePost20120925Pipelines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2012-09-25']['pipelines']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20120925PipelinesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2012-09-25']['pipelines']['$post']> },
      ) => parseResponse(client['2012-09-25'].pipelines.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20120925PresetsKey(
  args: InferRequestType<(typeof client)['2012-09-25']['presets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2012-09-25', '/2012-09-25/presets', keyArgs] as const
}

export function useGet20120925Presets<TError = unknown>(
  args: InferRequestType<(typeof client)['2012-09-25']['presets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['presets']['$get']>>
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
        ? getGet20120925PresetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['presets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2012-09-25'].presets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20120925Presets<TError = unknown>(
  args: InferRequestType<(typeof client)['2012-09-25']['presets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['presets']['$get']>>
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
        ? getGet20120925PresetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['presets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2012-09-25'].presets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20120925PresetsKey() {
  return ['2012-09-25', '/2012-09-25/presets', 'POST'] as const
}

export function usePost20120925Presets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2012-09-25']['presets']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2012-09-25']['presets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20120925PresetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2012-09-25']['presets']['$post']> },
      ) => parseResponse(client['2012-09-25'].presets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20120925PipelinesIdKey(
  args: InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2012-09-25', '/2012-09-25/pipelines/:Id', keyArgs] as const
}

export function useGet20120925PipelinesId<TError = unknown>(
  args: InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>>
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
        ? getGet20120925PipelinesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2012-09-25'].pipelines[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20120925PipelinesId<TError = unknown>(
  args: InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>>
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
        ? getGet20120925PipelinesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2012-09-25'].pipelines[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut20120925PipelinesIdKey() {
  return ['2012-09-25', '/2012-09-25/pipelines/:Id', 'PUT'] as const
}

export function usePut20120925PipelinesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20120925PipelinesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$put']> },
      ) => parseResponse(client['2012-09-25'].pipelines[':Id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20120925PipelinesIdKey() {
  return ['2012-09-25', '/2012-09-25/pipelines/:Id', 'DELETE'] as const
}

export function useDelete20120925PipelinesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20120925PipelinesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$delete']> },
      ) => parseResponse(client['2012-09-25'].pipelines[':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20120925PresetsIdKey(
  args: InferRequestType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2012-09-25', '/2012-09-25/presets/:Id', keyArgs] as const
}

export function useGet20120925PresetsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>>
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
        ? getGet20120925PresetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2012-09-25'].presets[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20120925PresetsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>>
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
        ? getGet20120925PresetsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2012-09-25'].presets[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete20120925PresetsIdKey() {
  return ['2012-09-25', '/2012-09-25/presets/:Id', 'DELETE'] as const
}

export function useDelete20120925PresetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['presets'][':Id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2012-09-25']['presets'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20120925PresetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2012-09-25']['presets'][':Id']['$delete']> },
      ) => parseResponse(client['2012-09-25'].presets[':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20120925JobsByPipelinePipelineIdKey(
  args: InferRequestType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2012-09-25', '/2012-09-25/jobsByPipeline/:PipelineId', keyArgs] as const
}

export function useGet20120925JobsByPipelinePipelineId<TError = unknown>(
  args: InferRequestType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>
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
        ? getGet20120925JobsByPipelinePipelineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2012-09-25'].jobsByPipeline[':PipelineId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20120925JobsByPipelinePipelineId<TError = unknown>(
  args: InferRequestType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>
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
        ? getGet20120925JobsByPipelinePipelineIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2012-09-25'].jobsByPipeline[':PipelineId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20120925JobsByStatusStatusKey(
  args: InferRequestType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2012-09-25', '/2012-09-25/jobsByStatus/:Status', keyArgs] as const
}

export function useGet20120925JobsByStatusStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>>
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
        ? getGet20120925JobsByStatusStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2012-09-25'].jobsByStatus[':Status'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20120925JobsByStatusStatus<TError = unknown>(
  args: InferRequestType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>>
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
        ? getGet20120925JobsByStatusStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2012-09-25'].jobsByStatus[':Status'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20120925RoleTestsKey() {
  return ['2012-09-25', '/2012-09-25/roleTests', 'POST'] as const
}

export function usePost20120925RoleTests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['roleTests']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2012-09-25']['roleTests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20120925RoleTestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2012-09-25']['roleTests']['$post']> },
      ) => parseResponse(client['2012-09-25'].roleTests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20120925PipelinesIdNotificationsKey() {
  return ['2012-09-25', '/2012-09-25/pipelines/:Id/notifications', 'POST'] as const
}

export function usePost20120925PipelinesIdNotifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['notifications']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['notifications']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20120925PipelinesIdNotificationsKey()
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
            (typeof client)['2012-09-25']['pipelines'][':Id']['notifications']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2012-09-25'].pipelines[':Id'].notifications.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20120925PipelinesIdStatusKey() {
  return ['2012-09-25', '/2012-09-25/pipelines/:Id/status', 'POST'] as const
}

export function usePost20120925PipelinesIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2012-09-25']['pipelines'][':Id']['status']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20120925PipelinesIdStatusKey()
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
            (typeof client)['2012-09-25']['pipelines'][':Id']['status']['$post']
          >
        },
      ) => parseResponse(client['2012-09-25'].pipelines[':Id'].status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
