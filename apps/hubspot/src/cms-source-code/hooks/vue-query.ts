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

export function getCmsKey() {
  return ['cms'] as const
}

export function getPostCmsSourceCode202609ExtractAsyncMutationKey() {
  return ['cms', '/cms/source-code/2026-09/extract/async', 'POST'] as const
}

export function getPostCmsSourceCode202609ExtractAsyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.cms)['source-code']['2026-09']['extract']['async']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsSourceCode202609ExtractAsyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['source-code']['2026-09']['extract']['async']['$post']
      >,
    ) {
      return parseResponse(client.cms['source-code']['2026-09'].extract.async.$post(args, options))
    },
  })
}

export function usePostCmsSourceCode202609ExtractAsync<
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
                    (typeof client.cms)['source-code']['2026-09']['extract']['async']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms)['source-code']['2026-09']['extract']['async']['$post']
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
  const mutationDefaults = getPostCmsSourceCode202609ExtractAsyncMutationOptions<
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

export function getCmsSourceCode202609ExtractAsyncTasksTaskIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
    >
  >,
) {
  return [
    'cms',
    '/cms/source-code/2026-09/extract/async/tasks/:taskId/status',
    toValue(args),
  ] as const
}

export function getCmsSourceCode202609ExtractAsyncTasksTaskIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsSourceCode202609ExtractAsyncTasksTaskIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms['source-code']['2026-09'].extract.async.tasks[':taskId'].status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCmsSourceCode202609ExtractAsyncTasksTaskIdStatus<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
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
                    (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
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
                    (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsSourceCode202609ExtractAsyncTasksTaskIdStatusQueryKey>
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
              (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsSourceCode202609ExtractAsyncTasksTaskIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsSourceCode202609ExtractAsyncTasksTaskIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms['source-code']['2026-09'].extract.async.tasks[':taskId'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCmsSourceCode202609EnvironmentContentPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
    >
  >,
) {
  return ['cms', '/cms/source-code/2026-09/:environment/content/:path', toValue(args)] as const
}

export function getCmsSourceCode202609EnvironmentContentPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsSourceCode202609EnvironmentContentPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms['source-code']['2026-09'][':environment'].content[':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsSourceCode202609EnvironmentContentPath<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
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
                    (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
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
                    (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsSourceCode202609EnvironmentContentPathQueryKey>
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
              (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsSourceCode202609EnvironmentContentPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsSourceCode202609EnvironmentContentPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms['source-code']['2026-09'][':environment'].content[':path'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutCmsSourceCode202609EnvironmentContentPathMutationKey() {
  return ['cms', '/cms/source-code/2026-09/:environment/content/:path', 'PUT'] as const
}

export function getPutCmsSourceCode202609EnvironmentContentPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCmsSourceCode202609EnvironmentContentPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$put']
      >,
    ) {
      return parseResponse(
        client.cms['source-code']['2026-09'][':environment'].content[':path'].$put(args, options),
      )
    },
  })
}

export function usePutCmsSourceCode202609EnvironmentContentPath<
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
                    (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$put']
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
  const mutationDefaults = getPutCmsSourceCode202609EnvironmentContentPathMutationOptions<
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

export function getPostCmsSourceCode202609EnvironmentContentPathMutationKey() {
  return ['cms', '/cms/source-code/2026-09/:environment/content/:path', 'POST'] as const
}

export function getPostCmsSourceCode202609EnvironmentContentPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsSourceCode202609EnvironmentContentPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$post']
      >,
    ) {
      return parseResponse(
        client.cms['source-code']['2026-09'][':environment'].content[':path'].$post(args, options),
      )
    },
  })
}

export function usePostCmsSourceCode202609EnvironmentContentPath<
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
                    (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$post']
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
  const mutationDefaults = getPostCmsSourceCode202609EnvironmentContentPathMutationOptions<
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

export function getDeleteCmsSourceCode202609EnvironmentContentPathMutationKey() {
  return ['cms', '/cms/source-code/2026-09/:environment/content/:path', 'DELETE'] as const
}

export function getDeleteCmsSourceCode202609EnvironmentContentPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCmsSourceCode202609EnvironmentContentPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$delete']
      >,
    ) {
      return parseResponse(
        client.cms['source-code']['2026-09'][':environment'].content[':path'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCmsSourceCode202609EnvironmentContentPath<
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
                      (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$delete']
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
  const mutationDefaults = getDeleteCmsSourceCode202609EnvironmentContentPathMutationOptions<
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

export function getCmsSourceCode202609EnvironmentMetadataPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
    >
  >,
) {
  return ['cms', '/cms/source-code/2026-09/:environment/metadata/:path', toValue(args)] as const
}

export function getCmsSourceCode202609EnvironmentMetadataPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsSourceCode202609EnvironmentMetadataPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms['source-code']['2026-09'][':environment'].metadata[':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsSourceCode202609EnvironmentMetadataPath<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
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
                    (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
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
                    (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsSourceCode202609EnvironmentMetadataPathQueryKey>
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
              (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsSourceCode202609EnvironmentMetadataPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsSourceCode202609EnvironmentMetadataPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms['source-code']['2026-09'][':environment'].metadata[':path'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostCmsSourceCode202609EnvironmentValidatePathMutationKey() {
  return ['cms', '/cms/source-code/2026-09/:environment/validate/:path', 'POST'] as const
}

export function getPostCmsSourceCode202609EnvironmentValidatePathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cms)['source-code']['2026-09'][':environment']['validate'][':path']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCmsSourceCode202609EnvironmentValidatePathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['source-code']['2026-09'][':environment']['validate'][':path']['$post']
      >,
    ) {
      return parseResponse(
        client.cms['source-code']['2026-09'][':environment'].validate[':path'].$post(args, options),
      )
    },
  })
}

export function usePostCmsSourceCode202609EnvironmentValidatePath<
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
                    (typeof client.cms)['source-code']['2026-09'][':environment']['validate'][':path']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms)['source-code']['2026-09'][':environment']['validate'][':path']['$post']
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
  const mutationDefaults = getPostCmsSourceCode202609EnvironmentValidatePathMutationOptions<
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
