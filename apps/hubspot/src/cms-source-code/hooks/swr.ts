import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCmsKey() {
  return ['cms'] as const
}

export function getPostCmsSourceCode202609ExtractAsyncKey() {
  return ['cms', '/cms/source-code/2026-09/extract/async', 'POST'] as const
}

export function usePostCmsSourceCode202609ExtractAsync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms)['source-code']['2026-09']['extract']['async']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cms)['source-code']['2026-09']['extract']['async']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsSourceCode202609ExtractAsyncKey()
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
            (typeof client.cms)['source-code']['2026-09']['extract']['async']['$post']
          >
        },
      ) =>
        parseResponse(client.cms['source-code']['2026-09'].extract.async.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCmsSourceCode202609ExtractAsyncTasksTaskIdStatusKey(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
  >,
) {
  return ['cms', '/cms/source-code/2026-09/extract/async/tasks/:taskId/status', args] as const
}

export function useGetCmsSourceCode202609ExtractAsyncTasksTaskIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
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
        ? getGetCmsSourceCode202609ExtractAsyncTasksTaskIdStatusKey(args)
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
                (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
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
          client.cms['source-code']['2026-09'].extract.async.tasks[':taskId'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsSourceCode202609ExtractAsyncTasksTaskIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
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
        ? getGetCmsSourceCode202609ExtractAsyncTasksTaskIdStatusKey(args)
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
                (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
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
          client.cms['source-code']['2026-09'].extract.async.tasks[':taskId'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCmsSourceCode202609EnvironmentContentPathKey(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
  >,
) {
  return ['cms', '/cms/source-code/2026-09/:environment/content/:path', args] as const
}

export function useGetCmsSourceCode202609EnvironmentContentPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
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
        ? getGetCmsSourceCode202609EnvironmentContentPathKey(args)
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
                (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
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
          client.cms['source-code']['2026-09'][':environment'].content[':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsSourceCode202609EnvironmentContentPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
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
        ? getGetCmsSourceCode202609EnvironmentContentPathKey(args)
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
                (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
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
          client.cms['source-code']['2026-09'][':environment'].content[':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutCmsSourceCode202609EnvironmentContentPathKey() {
  return ['cms', '/cms/source-code/2026-09/:environment/content/:path', 'PUT'] as const
}

export function usePutCmsSourceCode202609EnvironmentContentPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCmsSourceCode202609EnvironmentContentPathKey()
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
            (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$put']
          >
        },
      ) =>
        parseResponse(
          client.cms['source-code']['2026-09'][':environment'].content[':path'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCmsSourceCode202609EnvironmentContentPathKey() {
  return ['cms', '/cms/source-code/2026-09/:environment/content/:path', 'POST'] as const
}

export function usePostCmsSourceCode202609EnvironmentContentPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsSourceCode202609EnvironmentContentPathKey()
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
            (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms['source-code']['2026-09'][':environment'].content[':path'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCmsSourceCode202609EnvironmentContentPathKey() {
  return ['cms', '/cms/source-code/2026-09/:environment/content/:path', 'DELETE'] as const
}

export function useDeleteCmsSourceCode202609EnvironmentContentPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCmsSourceCode202609EnvironmentContentPathKey()
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
            (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.cms['source-code']['2026-09'][':environment'].content[':path'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCmsSourceCode202609EnvironmentMetadataPathKey(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
  >,
) {
  return ['cms', '/cms/source-code/2026-09/:environment/metadata/:path', args] as const
}

export function useGetCmsSourceCode202609EnvironmentMetadataPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
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
        ? getGetCmsSourceCode202609EnvironmentMetadataPathKey(args)
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
                (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
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
          client.cms['source-code']['2026-09'][':environment'].metadata[':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCmsSourceCode202609EnvironmentMetadataPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
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
        ? getGetCmsSourceCode202609EnvironmentMetadataPathKey(args)
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
                (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
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
          client.cms['source-code']['2026-09'][':environment'].metadata[':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCmsSourceCode202609EnvironmentValidatePathKey() {
  return ['cms', '/cms/source-code/2026-09/:environment/validate/:path', 'POST'] as const
}

export function usePostCmsSourceCode202609EnvironmentValidatePath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms)['source-code']['2026-09'][':environment']['validate'][':path']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09'][':environment']['validate'][':path']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmsSourceCode202609EnvironmentValidatePathKey()
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
            (typeof client.cms)['source-code']['2026-09'][':environment']['validate'][':path']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cms['source-code']['2026-09'][':environment'].validate[':path'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
