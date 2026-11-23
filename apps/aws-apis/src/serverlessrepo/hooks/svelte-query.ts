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

export function getApplicationsKey() {
  return ['applications'] as const
}

export function getApplicationsQueryKey(args: InferRequestType<typeof client.applications.$get>) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications', keyArgs] as const
}

export function getApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.applications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApplicationsQueryKey>
  >({
    queryKey: getApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.applications.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApplicationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApplicationsMutationKey() {
  return ['applications', '/applications', 'POST'] as const
}

export function getPostApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.applications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.applications.$post>) {
      return parseResponse(client.applications.$post(args, options))
    },
  })
}

export function createPostApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.applications.$post>,
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
    const mutationDefaults = getPostApplicationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutApplicationsApplicationIdVersionsSemanticVersionMutationKey() {
  return ['applications', '/applications/:applicationId/versions/:semanticVersion', 'PUT'] as const
}

export function getPutApplicationsApplicationIdVersionsSemanticVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':applicationId']['versions'][':semanticVersion']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':applicationId']['versions'][':semanticVersion']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApplicationsApplicationIdVersionsSemanticVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':applicationId']['versions'][':semanticVersion']['$put']
      >,
    ) {
      return parseResponse(
        client.applications[':applicationId'].versions[':semanticVersion'].$put(args, options),
      )
    },
  })
}

export function createPutApplicationsApplicationIdVersionsSemanticVersion<
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
                  (typeof client.applications)[':applicationId']['versions'][':semanticVersion']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.applications)[':applicationId']['versions'][':semanticVersion']['$put']
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
    const mutationDefaults = getPutApplicationsApplicationIdVersionsSemanticVersionMutationOptions<
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

export function getPostApplicationsApplicationIdChangesetsMutationKey() {
  return ['applications', '/applications/:applicationId/changesets', 'POST'] as const
}

export function getPostApplicationsApplicationIdChangesetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':applicationId']['changesets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':applicationId']['changesets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsApplicationIdChangesetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':applicationId']['changesets']['$post']>,
    ) {
      return parseResponse(client.applications[':applicationId'].changesets.$post(args, options))
    },
  })
}

export function createPostApplicationsApplicationIdChangesets<
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
                ReturnType<(typeof client.applications)[':applicationId']['changesets']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.applications)[':applicationId']['changesets']['$post']>,
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
    const mutationDefaults = getPostApplicationsApplicationIdChangesetsMutationOptions<
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

export function getPostApplicationsApplicationIdTemplatesMutationKey() {
  return ['applications', '/applications/:applicationId/templates', 'POST'] as const
}

export function getPostApplicationsApplicationIdTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':applicationId']['templates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':applicationId']['templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsApplicationIdTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':applicationId']['templates']['$post']>,
    ) {
      return parseResponse(client.applications[':applicationId'].templates.$post(args, options))
    },
  })
}

export function createPostApplicationsApplicationIdTemplates<
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
                ReturnType<(typeof client.applications)[':applicationId']['templates']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.applications)[':applicationId']['templates']['$post']>,
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
    const mutationDefaults = getPostApplicationsApplicationIdTemplatesMutationOptions<
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

export function getApplicationsApplicationIdQueryKey(
  args: InferRequestType<(typeof client.applications)[':applicationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications/:applicationId', keyArgs] as const
}

export function getApplicationsApplicationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':applicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':applicationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':applicationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdQueryKey>
  >({
    queryKey: getApplicationsApplicationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':applicationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApplicationsApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':applicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.applications)[':applicationId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':applicationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationIdQueryKey>
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
      ...getApplicationsApplicationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApplicationsApplicationIdMutationKey() {
  return ['applications', '/applications/:applicationId', 'DELETE'] as const
}

export function getDeleteApplicationsApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':applicationId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.applications)[':applicationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApplicationsApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':applicationId']['$delete']>,
    ) {
      return parseResponse(client.applications[':applicationId'].$delete(args, options))
    },
  })
}

export function createDeleteApplicationsApplicationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.applications)[':applicationId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.applications)[':applicationId']['$delete']>,
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
    const mutationDefaults = getDeleteApplicationsApplicationIdMutationOptions<
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

export function getPatchApplicationsApplicationIdMutationKey() {
  return ['applications', '/applications/:applicationId', 'PATCH'] as const
}

export function getPatchApplicationsApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':applicationId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':applicationId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApplicationsApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':applicationId']['$patch']>,
    ) {
      return parseResponse(client.applications[':applicationId'].$patch(args, options))
    },
  })
}

export function createPatchApplicationsApplicationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':applicationId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.applications)[':applicationId']['$patch']>,
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
    const mutationDefaults = getPatchApplicationsApplicationIdMutationOptions<
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

export function getApplicationsApplicationIdPolicyQueryKey(
  args: InferRequestType<(typeof client.applications)[':applicationId']['policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications/:applicationId/policy', keyArgs] as const
}

export function getApplicationsApplicationIdPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':applicationId']['policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':applicationId']['policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':applicationId']['policy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdPolicyQueryKey>
  >({
    queryKey: getApplicationsApplicationIdPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':applicationId'].policy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApplicationsApplicationIdPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':applicationId']['policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.applications)[':applicationId']['policy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':applicationId']['policy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationIdPolicyQueryKey>
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
      ...getApplicationsApplicationIdPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApplicationsApplicationIdPolicyMutationKey() {
  return ['applications', '/applications/:applicationId/policy', 'PUT'] as const
}

export function getPutApplicationsApplicationIdPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':applicationId']['policy']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':applicationId']['policy']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApplicationsApplicationIdPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':applicationId']['policy']['$put']>,
    ) {
      return parseResponse(client.applications[':applicationId'].policy.$put(args, options))
    },
  })
}

export function createPutApplicationsApplicationIdPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':applicationId']['policy']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.applications)[':applicationId']['policy']['$put']>,
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
    const mutationDefaults = getPutApplicationsApplicationIdPolicyMutationOptions<
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

export function getApplicationsApplicationIdTemplatesTemplateIdQueryKey(
  args: InferRequestType<
    (typeof client.applications)[':applicationId']['templates'][':templateId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications/:applicationId/templates/:templateId', keyArgs] as const
}

export function getApplicationsApplicationIdTemplatesTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':applicationId']['templates'][':templateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.applications)[':applicationId']['templates'][':templateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':applicationId']['templates'][':templateId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdTemplatesTemplateIdQueryKey>
  >({
    queryKey: getApplicationsApplicationIdTemplatesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':applicationId'].templates[':templateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApplicationsApplicationIdTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':applicationId']['templates'][':templateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.applications)[':applicationId']['templates'][':templateId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.applications)[':applicationId']['templates'][':templateId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationIdTemplatesTemplateIdQueryKey>
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
      ...getApplicationsApplicationIdTemplatesTemplateIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApplicationsApplicationIdDependenciesQueryKey(
  args: InferRequestType<(typeof client.applications)[':applicationId']['dependencies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications/:applicationId/dependencies', keyArgs] as const
}

export function getApplicationsApplicationIdDependenciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':applicationId']['dependencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':applicationId']['dependencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.applications)[':applicationId']['dependencies']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdDependenciesQueryKey>
  >({
    queryKey: getApplicationsApplicationIdDependenciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':applicationId'].dependencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApplicationsApplicationIdDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':applicationId']['dependencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.applications)[':applicationId']['dependencies']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.applications)[':applicationId']['dependencies']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationIdDependenciesQueryKey>
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
      ...getApplicationsApplicationIdDependenciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApplicationsApplicationIdVersionsQueryKey(
  args: InferRequestType<(typeof client.applications)[':applicationId']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications/:applicationId/versions', keyArgs] as const
}

export function getApplicationsApplicationIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':applicationId']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':applicationId']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':applicationId']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdVersionsQueryKey>
  >({
    queryKey: getApplicationsApplicationIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':applicationId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApplicationsApplicationIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':applicationId']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.applications)[':applicationId']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.applications)[':applicationId']['versions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsApplicationIdVersionsQueryKey>
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
      ...getApplicationsApplicationIdVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApplicationsApplicationIdUnshareMutationKey() {
  return ['applications', '/applications/:applicationId/unshare', 'POST'] as const
}

export function getPostApplicationsApplicationIdUnshareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':applicationId']['unshare']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.applications)[':applicationId']['unshare']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsApplicationIdUnshareMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':applicationId']['unshare']['$post']>,
    ) {
      return parseResponse(client.applications[':applicationId'].unshare.$post(args, options))
    },
  })
}

export function createPostApplicationsApplicationIdUnshare<
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
                  ReturnType<(typeof client.applications)[':applicationId']['unshare']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.applications)[':applicationId']['unshare']['$post']>,
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
    const mutationDefaults = getPostApplicationsApplicationIdUnshareMutationOptions<
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
