import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createPostCmsSourceCode202609ExtractAsync<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCmsSourceCode202609ExtractAsyncMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCmsSourceCode202609ExtractAsyncTasksTaskIdStatusQueryKey(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
  >,
) {
  return ['cms', '/cms/source-code/2026-09/extract/async/tasks/:taskId/status', args] as const
}

export function getCmsSourceCode202609ExtractAsyncTasksTaskIdStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCmsSourceCode202609ExtractAsyncTasksTaskIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms['source-code']['2026-09'].extract.async.tasks[':taskId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsSourceCode202609ExtractAsyncTasksTaskIdStatus<
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
  args: () => InferRequestType<
    (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCmsSourceCode202609ExtractAsyncTasksTaskIdStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCmsSourceCode202609EnvironmentContentPathQueryKey(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
  >,
) {
  return ['cms', '/cms/source-code/2026-09/:environment/content/:path', args] as const
}

export function getCmsSourceCode202609EnvironmentContentPathQueryOptions<
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
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCmsSourceCode202609EnvironmentContentPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms['source-code']['2026-09'][':environment'].content[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsSourceCode202609EnvironmentContentPath<
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
  args: () => InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCmsSourceCode202609EnvironmentContentPathQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutCmsSourceCode202609EnvironmentContentPath<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCmsSourceCode202609EnvironmentContentPathMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostCmsSourceCode202609EnvironmentContentPath<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCmsSourceCode202609EnvironmentContentPathMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCmsSourceCode202609EnvironmentContentPath<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCmsSourceCode202609EnvironmentContentPathMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCmsSourceCode202609EnvironmentMetadataPathQueryKey(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
  >,
) {
  return ['cms', '/cms/source-code/2026-09/:environment/metadata/:path', args] as const
}

export function getCmsSourceCode202609EnvironmentMetadataPathQueryOptions<
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
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCmsSourceCode202609EnvironmentMetadataPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms['source-code']['2026-09'][':environment'].metadata[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCmsSourceCode202609EnvironmentMetadataPath<
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
  args: () => InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCmsSourceCode202609EnvironmentMetadataPathQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostCmsSourceCode202609EnvironmentValidatePath<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCmsSourceCode202609EnvironmentValidatePathMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
