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

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1OrganizationsMutationKey() {
  return ['v1', '/v1/organizations', 'POST'] as const
}

export function getPostV1OrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.organizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrganizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.organizations.$post>) {
      return parseResponse(client.v1.organizations.$post(args, options))
    },
  })
}

export function createPostV1Organizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.organizations.$post>,
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
    const mutationDefaults = getPostV1OrganizationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1InstanceReportStatusMutationKey() {
  return ['v1', '/v1/:instance:reportStatus', 'POST'] as const
}

export function getPostV1InstanceReportStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':instance:reportStatus']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':instance:reportStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InstanceReportStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':instance:reportStatus']['$post']>,
    ) {
      return parseResponse(client.v1[':instance:reportStatus'].$post(args, options))
    },
  })
}

export function createPostV1InstanceReportStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':instance:reportStatus']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':instance:reportStatus']['$post']>,
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
    const mutationDefaults = getPostV1InstanceReportStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1NameQueryKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function getV1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >({
    queryKey: getV1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1NameMutationKey() {
  return ['v1', '/v1/:name', 'PUT'] as const
}

export function getPutV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$put']>) {
      return parseResponse(client.v1[':name'].$put(args, options))
    },
  })
}

export function createPutV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$put']>>>>
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$put']>,
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
    const mutationDefaults = getPutV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameMutationKey() {
  return ['v1', '/v1/:name', 'POST'] as const
}

export function getPostV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$post']>) {
      return parseResponse(client.v1[':name'].$post(args, options))
    },
  })
}

export function createPostV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$post']>,
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
    const mutationDefaults = getPostV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1NameMutationKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function getDeleteV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$delete']>) {
      return parseResponse(client.v1[':name'].$delete(args, options))
    },
  })
}

export function createDeleteV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV1NameMutationKey() {
  return ['v1', '/v1/:name', 'PATCH'] as const
}

export function getPatchV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$patch']>) {
      return parseResponse(client.v1[':name'].$patch(args, options))
    },
  })
}

export function createPatchV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$patch']>,
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
    const mutationDefaults = getPatchV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameAttributesMutationKey() {
  return ['v1', '/v1/:name/attributes', 'POST'] as const
}

export function getPostV1NameAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name']['attributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['attributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameAttributesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['attributes']['$post']>) {
      return parseResponse(client.v1[':name'].attributes.$post(args, options))
    },
  })
}

export function createPostV1NameAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['attributes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['attributes']['$post']>,
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
    const mutationDefaults = getPostV1NameAttributesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1NameCertificateQueryKey(
  args: InferRequestType<(typeof client.v1)[':name']['certificate']['$get']>,
) {
  return ['v1', '/v1/:name/certificate', args] as const
}

export function getV1NameCertificateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['certificate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['certificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name']['certificate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameCertificateQueryKey>
  >({
    queryKey: getV1NameCertificateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].certificate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NameCertificate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['certificate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['certificate']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['certificate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameCertificateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameCertificateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1NameCsrQueryKey(
  args: InferRequestType<(typeof client.v1)[':name']['csr']['$get']>,
) {
  return ['v1', '/v1/:name/csr', args] as const
}

export function getV1NameCsrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['csr']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['csr']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['csr']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameCsrQueryKey>
  >({
    queryKey: getV1NameCsrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].csr.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1NameCsr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['csr']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['csr']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['csr']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameCsrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameCsrQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1NameDataMutationKey() {
  return ['v1', '/v1/:name/data', 'DELETE'] as const
}

export function getDeleteV1NameDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['data']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['data']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameDataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['data']['$delete']>) {
      return parseResponse(client.v1[':name'].data.$delete(args, options))
    },
  })
}

export function createDeleteV1NameData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['data']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['data']['$delete']>,
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
    const mutationDefaults = getDeleteV1NameDataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1NameDeploymentsQueryKey(
  args: InferRequestType<(typeof client.v1)[':name']['deployments']['$get']>,
) {
  return ['v1', '/v1/:name/deployments', args] as const
}

export function getV1NameDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['deployments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameDeploymentsQueryKey>
  >({
    queryKey: getV1NameDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NameDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['deployments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['deployments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['deployments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameDeploymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1NameDeploymentsMutationKey() {
  return ['v1', '/v1/:name/deployments', 'POST'] as const
}

export function getPostV1NameDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name']['deployments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['deployments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameDeploymentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['deployments']['$post']>) {
      return parseResponse(client.v1[':name'].deployments.$post(args, options))
    },
  })
}

export function createPostV1NameDeployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['deployments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['deployments']['$post']>,
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
    const mutationDefaults = getPostV1NameDeploymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1NameDeploymentsMutationKey() {
  return ['v1', '/v1/:name/deployments', 'DELETE'] as const
}

export function getDeleteV1NameDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name']['deployments']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['deployments']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':name']['deployments']['$delete']>,
    ) {
      return parseResponse(client.v1[':name'].deployments.$delete(args, options))
    },
  })
}

export function createDeleteV1NameDeployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['deployments']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['deployments']['$delete']>,
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
    const mutationDefaults = getDeleteV1NameDeploymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameDeploymentsGenerateDeployChangeReportMutationKey() {
  return ['v1', '/v1/:name/deployments:generateDeployChangeReport', 'POST'] as const
}

export function getPostV1NameDeploymentsGenerateDeployChangeReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':name']['deployments:generateDeployChangeReport']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':name']['deployments:generateDeployChangeReport']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameDeploymentsGenerateDeployChangeReportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':name']['deployments:generateDeployChangeReport']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':name']['deployments:generateDeployChangeReport'].$post(args, options),
      )
    },
  })
}

export function createPostV1NameDeploymentsGenerateDeployChangeReport<
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
                  (typeof client.v1)[':name']['deployments:generateDeployChangeReport']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)[':name']['deployments:generateDeployChangeReport']['$post']
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
    const mutationDefaults = getPostV1NameDeploymentsGenerateDeployChangeReportMutationOptions<
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

export function getPostV1NameDeploymentsGenerateUndeployChangeReportMutationKey() {
  return ['v1', '/v1/:name/deployments:generateUndeployChangeReport', 'POST'] as const
}

export function getPostV1NameDeploymentsGenerateUndeployChangeReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':name']['deployments:generateUndeployChangeReport']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':name']['deployments:generateUndeployChangeReport']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameDeploymentsGenerateUndeployChangeReportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':name']['deployments:generateUndeployChangeReport']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':name']['deployments:generateUndeployChangeReport'].$post(args, options),
      )
    },
  })
}

export function createPostV1NameDeploymentsGenerateUndeployChangeReport<
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
                  (typeof client.v1)[':name']['deployments:generateUndeployChangeReport']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)[':name']['deployments:generateUndeployChangeReport']['$post']
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
    const mutationDefaults = getPostV1NameDeploymentsGenerateUndeployChangeReportMutationOptions<
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

export function getV1NameOperationsQueryKey(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
) {
  return ['v1', '/v1/:name/operations', args] as const
}

export function getV1NameOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameOperationsQueryKey>
  >({
    queryKey: getV1NameOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameOperationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameOperationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1NameActivateMutationKey() {
  return ['v1', '/v1/:name:activate', 'POST'] as const
}

export function getPostV1NameActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:activate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameActivateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:activate']['$post']>) {
      return parseResponse(client.v1[':name:activate'].$post(args, options))
    },
  })
}

export function createPostV1NameActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:activate']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:activate']['$post']>,
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
    const mutationDefaults = getPostV1NameActivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameAdjustMutationKey() {
  return ['v1', '/v1/:name:adjust', 'POST'] as const
}

export function getPostV1NameAdjustMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:adjust']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:adjust']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameAdjustMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:adjust']['$post']>) {
      return parseResponse(client.v1[':name:adjust'].$post(args, options))
    },
  })
}

export function createPostV1NameAdjust<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:adjust']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:adjust']['$post']>,
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
    const mutationDefaults = getPostV1NameAdjustMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameCreditMutationKey() {
  return ['v1', '/v1/:name:credit', 'POST'] as const
}

export function getPostV1NameCreditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:credit']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:credit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameCreditMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:credit']['$post']>) {
      return parseResponse(client.v1[':name:credit'].$post(args, options))
    },
  })
}

export function createPostV1NameCredit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:credit']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:credit']['$post']>,
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
    const mutationDefaults = getPostV1NameCreditMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameExpireMutationKey() {
  return ['v1', '/v1/:name:expire', 'POST'] as const
}

export function getPostV1NameExpireMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:expire']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:expire']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameExpireMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:expire']['$post']>) {
      return parseResponse(client.v1[':name:expire'].$post(args, options))
    },
  })
}

export function createPostV1NameExpire<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:expire']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:expire']['$post']>,
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
    const mutationDefaults = getPostV1NameExpireMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameGenerateDownloadUrlMutationKey() {
  return ['v1', '/v1/:name:generateDownloadUrl', 'POST'] as const
}

export function getPostV1NameGenerateDownloadUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:generateDownloadUrl']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:generateDownloadUrl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameGenerateDownloadUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':name:generateDownloadUrl']['$post']>,
    ) {
      return parseResponse(client.v1[':name:generateDownloadUrl'].$post(args, options))
    },
  })
}

export function createPostV1NameGenerateDownloadUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name:generateDownloadUrl']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:generateDownloadUrl']['$post']>,
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
    const mutationDefaults = getPostV1NameGenerateDownloadUrlMutationOptions<
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

export function getV1NameGetProjectMappingQueryKey(
  args: InferRequestType<(typeof client.v1)[':name:getProjectMapping']['$get']>,
) {
  return ['v1', '/v1/:name:getProjectMapping', args] as const
}

export function getV1NameGetProjectMappingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':name:getProjectMapping']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name:getProjectMapping']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:getProjectMapping']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameGetProjectMappingQueryKey>
  >({
    queryKey: getV1NameGetProjectMappingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name:getProjectMapping'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NameGetProjectMapping<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':name:getProjectMapping']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name:getProjectMapping']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name:getProjectMapping']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameGetProjectMappingQueryKey>
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
      ...getV1NameGetProjectMappingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1NameGetSyncAuthorizationMutationKey() {
  return ['v1', '/v1/:name:getSyncAuthorization', 'POST'] as const
}

export function getPostV1NameGetSyncAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:getSyncAuthorization']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:getSyncAuthorization']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameGetSyncAuthorizationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':name:getSyncAuthorization']['$post']>,
    ) {
      return parseResponse(client.v1[':name:getSyncAuthorization'].$post(args, options))
    },
  })
}

export function createPostV1NameGetSyncAuthorization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name:getSyncAuthorization']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:getSyncAuthorization']['$post']>,
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
    const mutationDefaults = getPostV1NameGetSyncAuthorizationMutationOptions<
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

export function getV1NameListRevisionsQueryKey(
  args: InferRequestType<(typeof client.v1)[':name:listRevisions']['$get']>,
) {
  return ['v1', '/v1/:name:listRevisions', args] as const
}

export function getV1NameListRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:listRevisions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name:listRevisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:listRevisions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameListRevisionsQueryKey>
  >({
    queryKey: getV1NameListRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name:listRevisions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NameListRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:listRevisions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name:listRevisions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name:listRevisions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameListRevisionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameListRevisionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1NameSetSyncAuthorizationMutationKey() {
  return ['v1', '/v1/:name:setSyncAuthorization', 'POST'] as const
}

export function getPostV1NameSetSyncAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:setSyncAuthorization']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:setSyncAuthorization']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameSetSyncAuthorizationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':name:setSyncAuthorization']['$post']>,
    ) {
      return parseResponse(client.v1[':name:setSyncAuthorization'].$post(args, options))
    },
  })
}

export function createPostV1NameSetSyncAuthorization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name:setSyncAuthorization']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:setSyncAuthorization']['$post']>,
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
    const mutationDefaults = getPostV1NameSetSyncAuthorizationMutationOptions<
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

export function getPostV1OrgenvSecurityStatsQueryTabularStatsMutationKey() {
  return ['v1', '/v1/:orgenv/securityStats:queryTabularStats', 'POST'] as const
}

export function getPostV1OrgenvSecurityStatsQueryTabularStatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)[':orgenv']['securityStats:queryTabularStats']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':orgenv']['securityStats:queryTabularStats']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrgenvSecurityStatsQueryTabularStatsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':orgenv']['securityStats:queryTabularStats']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':orgenv']['securityStats:queryTabularStats'].$post(args, options),
      )
    },
  })
}

export function createPostV1OrgenvSecurityStatsQueryTabularStats<
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
                  (typeof client.v1)[':orgenv']['securityStats:queryTabularStats']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':orgenv']['securityStats:queryTabularStats']['$post']>,
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
    const mutationDefaults = getPostV1OrgenvSecurityStatsQueryTabularStatsMutationOptions<
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

export function getPostV1OrgenvSecurityStatsQueryTimeSeriesStatsMutationKey() {
  return ['v1', '/v1/:orgenv/securityStats:queryTimeSeriesStats', 'POST'] as const
}

export function getPostV1OrgenvSecurityStatsQueryTimeSeriesStatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)[':orgenv']['securityStats:queryTimeSeriesStats']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':orgenv']['securityStats:queryTimeSeriesStats']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrgenvSecurityStatsQueryTimeSeriesStatsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':orgenv']['securityStats:queryTimeSeriesStats']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':orgenv']['securityStats:queryTimeSeriesStats'].$post(args, options),
      )
    },
  })
}

export function createPostV1OrgenvSecurityStatsQueryTimeSeriesStats<
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
                  (typeof client.v1)[':orgenv']['securityStats:queryTimeSeriesStats']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)[':orgenv']['securityStats:queryTimeSeriesStats']['$post']
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
    const mutationDefaults = getPostV1OrgenvSecurityStatsQueryTimeSeriesStatsMutationOptions<
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

export function getPostV1OrgSetAddonsMutationKey() {
  return ['v1', '/v1/:org:setAddons', 'POST'] as const
}

export function getPostV1OrgSetAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':org:setAddons']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':org:setAddons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OrgSetAddonsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':org:setAddons']['$post']>) {
      return parseResponse(client.v1[':org:setAddons'].$post(args, options))
    },
  })
}

export function createPostV1OrgSetAddons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':org:setAddons']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':org:setAddons']['$post']>,
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
    const mutationDefaults = getPostV1OrgSetAddonsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentQueryKey(args: InferRequestType<(typeof client.v1)[':parent']['$get']>) {
  return ['v1', '/v1/:parent', args] as const
}

export function getV1ParentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)[':parent']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentQueryKey>
  >({
    queryKey: getV1ParentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Parent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentAliasesMutationKey() {
  return ['v1', '/v1/:parent/aliases', 'POST'] as const
}

export function getPostV1ParentAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['aliases']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['aliases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentAliasesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['aliases']['$post']>) {
      return parseResponse(client.v1[':parent'].aliases.$post(args, options))
    },
  })
}

export function createPostV1ParentAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['aliases']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['aliases']['$post']>,
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
    const mutationDefaults = getPostV1ParentAliasesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentAnalyticsDatastoresQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['analytics']['datastores']['$get']>,
) {
  return ['v1', '/v1/:parent/analytics/datastores', args] as const
}

export function getV1ParentAnalyticsDatastoresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['analytics']['datastores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['analytics']['datastores']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['analytics']['datastores']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentAnalyticsDatastoresQueryKey>
  >({
    queryKey: getV1ParentAnalyticsDatastoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].analytics.datastores.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentAnalyticsDatastores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['analytics']['datastores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['analytics']['datastores']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['analytics']['datastores']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentAnalyticsDatastoresQueryKey>
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
      ...getV1ParentAnalyticsDatastoresQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentAnalyticsDatastoresMutationKey() {
  return ['v1', '/v1/:parent/analytics/datastores', 'POST'] as const
}

export function getPostV1ParentAnalyticsDatastoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['analytics']['datastores']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['analytics']['datastores']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentAnalyticsDatastoresMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['analytics']['datastores']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].analytics.datastores.$post(args, options))
    },
  })
}

export function createPostV1ParentAnalyticsDatastores<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['analytics']['datastores']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['analytics']['datastores']['$post']>,
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
    const mutationDefaults = getPostV1ParentAnalyticsDatastoresMutationOptions<
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

export function getPostV1ParentAnalyticsDatastoresTestMutationKey() {
  return ['v1', '/v1/:parent/analytics/datastores:test', 'POST'] as const
}

export function getPostV1ParentAnalyticsDatastoresTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)[':parent']['analytics']['datastores:test']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['analytics']['datastores:test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentAnalyticsDatastoresTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':parent']['analytics']['datastores:test']['$post']
      >,
    ) {
      return parseResponse(client.v1[':parent'].analytics['datastores:test'].$post(args, options))
    },
  })
}

export function createPostV1ParentAnalyticsDatastoresTest<
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
                ReturnType<(typeof client.v1)[':parent']['analytics']['datastores:test']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['analytics']['datastores:test']['$post']>,
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
    const mutationDefaults = getPostV1ParentAnalyticsDatastoresTestMutationOptions<
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

export function getV1ParentAnalyticsExportsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['analytics']['exports']['$get']>,
) {
  return ['v1', '/v1/:parent/analytics/exports', args] as const
}

export function getV1ParentAnalyticsExportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['analytics']['exports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['analytics']['exports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['analytics']['exports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentAnalyticsExportsQueryKey>
  >({
    queryKey: getV1ParentAnalyticsExportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].analytics.exports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentAnalyticsExports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['analytics']['exports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['analytics']['exports']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['analytics']['exports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentAnalyticsExportsQueryKey>
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
      ...getV1ParentAnalyticsExportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentAnalyticsExportsMutationKey() {
  return ['v1', '/v1/:parent/analytics/exports', 'POST'] as const
}

export function getPostV1ParentAnalyticsExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['analytics']['exports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['analytics']['exports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentAnalyticsExportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['analytics']['exports']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].analytics.exports.$post(args, options))
    },
  })
}

export function createPostV1ParentAnalyticsExports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['analytics']['exports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['analytics']['exports']['$post']>,
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
    const mutationDefaults = getPostV1ParentAnalyticsExportsMutationOptions<
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

export function getV1ParentApicategoriesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['apicategories']['$get']>,
) {
  return ['v1', '/v1/:parent/apicategories', args] as const
}

export function getV1ParentApicategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['apicategories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['apicategories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['apicategories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentApicategoriesQueryKey>
  >({
    queryKey: getV1ParentApicategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].apicategories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentApicategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['apicategories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['apicategories']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['apicategories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentApicategoriesQueryKey>
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
      ...getV1ParentApicategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentApicategoriesMutationKey() {
  return ['v1', '/v1/:parent/apicategories', 'POST'] as const
}

export function getPostV1ParentApicategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['apicategories']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['apicategories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentApicategoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['apicategories']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].apicategories.$post(args, options))
    },
  })
}

export function createPostV1ParentApicategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['apicategories']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['apicategories']['$post']>,
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
    const mutationDefaults = getPostV1ParentApicategoriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentApiproductsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['apiproducts']['$get']>,
) {
  return ['v1', '/v1/:parent/apiproducts', args] as const
}

export function getV1ParentApiproductsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['apiproducts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['apiproducts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['apiproducts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentApiproductsQueryKey>
  >({
    queryKey: getV1ParentApiproductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].apiproducts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentApiproducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['apiproducts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['apiproducts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['apiproducts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentApiproductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentApiproductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentApiproductsMutationKey() {
  return ['v1', '/v1/:parent/apiproducts', 'POST'] as const
}

export function getPostV1ParentApiproductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['apiproducts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['apiproducts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentApiproductsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['apiproducts']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].apiproducts.$post(args, options))
    },
  })
}

export function createPostV1ParentApiproducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['apiproducts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['apiproducts']['$post']>,
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
    const mutationDefaults = getPostV1ParentApiproductsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentApisQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['apis']['$get']>,
) {
  return ['v1', '/v1/:parent/apis', args] as const
}

export function getV1ParentApisQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['apis']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['apis']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['apis']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentApisQueryKey>
  >({
    queryKey: getV1ParentApisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].apis.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ParentApis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['apis']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['apis']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['apis']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentApisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentApisQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentApisMutationKey() {
  return ['v1', '/v1/:parent/apis', 'POST'] as const
}

export function getPostV1ParentApisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['apis']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['apis']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentApisMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['apis']['$post']>) {
      return parseResponse(client.v1[':parent'].apis.$post(args, options))
    },
  })
}

export function createPostV1ParentApis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['apis']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['apis']['$post']>,
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
    const mutationDefaults = getPostV1ParentApisMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentAppsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['apps']['$get']>,
) {
  return ['v1', '/v1/:parent/apps', args] as const
}

export function getV1ParentAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['apps']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['apps']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentAppsQueryKey>
  >({
    queryKey: getV1ParentAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].apps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ParentApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['apps']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['apps']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['apps']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentAppsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentAppsMutationKey() {
  return ['v1', '/v1/:parent/apps', 'POST'] as const
}

export function getPostV1ParentAppsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['apps']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['apps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentAppsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['apps']['$post']>) {
      return parseResponse(client.v1[':parent'].apps.$post(args, options))
    },
  })
}

export function createPostV1ParentApps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['apps']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['apps']['$post']>,
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
    const mutationDefaults = getPostV1ParentAppsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentArchiveDeploymentsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['archiveDeployments']['$get']>,
) {
  return ['v1', '/v1/:parent/archiveDeployments', args] as const
}

export function getV1ParentArchiveDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['archiveDeployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['archiveDeployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['archiveDeployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentArchiveDeploymentsQueryKey>
  >({
    queryKey: getV1ParentArchiveDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].archiveDeployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentArchiveDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['archiveDeployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['archiveDeployments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['archiveDeployments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentArchiveDeploymentsQueryKey>
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
      ...getV1ParentArchiveDeploymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentArchiveDeploymentsMutationKey() {
  return ['v1', '/v1/:parent/archiveDeployments', 'POST'] as const
}

export function getPostV1ParentArchiveDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['archiveDeployments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['archiveDeployments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentArchiveDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['archiveDeployments']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].archiveDeployments.$post(args, options))
    },
  })
}

export function createPostV1ParentArchiveDeployments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['archiveDeployments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['archiveDeployments']['$post']>,
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
    const mutationDefaults = getPostV1ParentArchiveDeploymentsMutationOptions<
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

export function getPostV1ParentArchiveDeploymentsGenerateUploadUrlMutationKey() {
  return ['v1', '/v1/:parent/archiveDeployments:generateUploadUrl', 'POST'] as const
}

export function getPostV1ParentArchiveDeploymentsGenerateUploadUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':parent']['archiveDeployments:generateUploadUrl']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':parent']['archiveDeployments:generateUploadUrl']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentArchiveDeploymentsGenerateUploadUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':parent']['archiveDeployments:generateUploadUrl']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':parent']['archiveDeployments:generateUploadUrl'].$post(args, options),
      )
    },
  })
}

export function createPostV1ParentArchiveDeploymentsGenerateUploadUrl<
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
                  (typeof client.v1)[':parent']['archiveDeployments:generateUploadUrl']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)[':parent']['archiveDeployments:generateUploadUrl']['$post']
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
    const mutationDefaults = getPostV1ParentArchiveDeploymentsGenerateUploadUrlMutationOptions<
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

export function getV1ParentAttachmentsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['attachments']['$get']>,
) {
  return ['v1', '/v1/:parent/attachments', args] as const
}

export function getV1ParentAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentAttachmentsQueryKey>
  >({
    queryKey: getV1ParentAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['attachments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentAttachmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentAttachmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentAttachmentsMutationKey() {
  return ['v1', '/v1/:parent/attachments', 'POST'] as const
}

export function getPostV1ParentAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['attachments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['attachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['attachments']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].attachments.$post(args, options))
    },
  })
}

export function createPostV1ParentAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['attachments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['attachments']['$post']>,
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
    const mutationDefaults = getPostV1ParentAttachmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentAttributesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['attributes']['$get']>,
) {
  return ['v1', '/v1/:parent/attributes', args] as const
}

export function getV1ParentAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['attributes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['attributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['attributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentAttributesQueryKey>
  >({
    queryKey: getV1ParentAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].attributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['attributes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['attributes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['attributes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentAttributesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentAttributesMutationKey() {
  return ['v1', '/v1/:parent/attributes', 'POST'] as const
}

export function getPostV1ParentAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['attributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['attributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentAttributesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['attributes']['$post']>) {
      return parseResponse(client.v1[':parent'].attributes.$post(args, options))
    },
  })
}

export function createPostV1ParentAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['attributes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['attributes']['$post']>,
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
    const mutationDefaults = getPostV1ParentAttributesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ParentCanaryevaluationsMutationKey() {
  return ['v1', '/v1/:parent/canaryevaluations', 'POST'] as const
}

export function getPostV1ParentCanaryevaluationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['canaryevaluations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['canaryevaluations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentCanaryevaluationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['canaryevaluations']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].canaryevaluations.$post(args, options))
    },
  })
}

export function createPostV1ParentCanaryevaluations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['canaryevaluations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['canaryevaluations']['$post']>,
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
    const mutationDefaults = getPostV1ParentCanaryevaluationsMutationOptions<
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

export function getV1ParentDatacollectorsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['datacollectors']['$get']>,
) {
  return ['v1', '/v1/:parent/datacollectors', args] as const
}

export function getV1ParentDatacollectorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['datacollectors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['datacollectors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['datacollectors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentDatacollectorsQueryKey>
  >({
    queryKey: getV1ParentDatacollectorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].datacollectors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentDatacollectors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['datacollectors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['datacollectors']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['datacollectors']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentDatacollectorsQueryKey>
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
      ...getV1ParentDatacollectorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentDatacollectorsMutationKey() {
  return ['v1', '/v1/:parent/datacollectors', 'POST'] as const
}

export function getPostV1ParentDatacollectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['datacollectors']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['datacollectors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentDatacollectorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['datacollectors']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].datacollectors.$post(args, options))
    },
  })
}

export function createPostV1ParentDatacollectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['datacollectors']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['datacollectors']['$post']>,
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
    const mutationDefaults = getPostV1ParentDatacollectorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentDebugsessionsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['debugsessions']['$get']>,
) {
  return ['v1', '/v1/:parent/debugsessions', args] as const
}

export function getV1ParentDebugsessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['debugsessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['debugsessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['debugsessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentDebugsessionsQueryKey>
  >({
    queryKey: getV1ParentDebugsessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].debugsessions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentDebugsessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['debugsessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['debugsessions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['debugsessions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentDebugsessionsQueryKey>
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
      ...getV1ParentDebugsessionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentDebugsessionsMutationKey() {
  return ['v1', '/v1/:parent/debugsessions', 'POST'] as const
}

export function getPostV1ParentDebugsessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['debugsessions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['debugsessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentDebugsessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['debugsessions']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].debugsessions.$post(args, options))
    },
  })
}

export function createPostV1ParentDebugsessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['debugsessions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['debugsessions']['$post']>,
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
    const mutationDefaults = getPostV1ParentDebugsessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentDeploymentsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['deployments']['$get']>,
) {
  return ['v1', '/v1/:parent/deployments', args] as const
}

export function getV1ParentDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentDeploymentsQueryKey>
  >({
    queryKey: getV1ParentDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['deployments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['deployments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentDeploymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ParentDevelopersQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['developers']['$get']>,
) {
  return ['v1', '/v1/:parent/developers', args] as const
}

export function getV1ParentDevelopersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['developers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['developers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['developers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentDevelopersQueryKey>
  >({
    queryKey: getV1ParentDevelopersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].developers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentDevelopers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['developers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['developers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['developers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentDevelopersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentDevelopersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentDevelopersMutationKey() {
  return ['v1', '/v1/:parent/developers', 'POST'] as const
}

export function getPostV1ParentDevelopersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['developers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['developers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentDevelopersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['developers']['$post']>) {
      return parseResponse(client.v1[':parent'].developers.$post(args, options))
    },
  })
}

export function createPostV1ParentDevelopers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['developers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['developers']['$post']>,
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
    const mutationDefaults = getPostV1ParentDevelopersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentEndpointAttachmentsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['endpointAttachments']['$get']>,
) {
  return ['v1', '/v1/:parent/endpointAttachments', args] as const
}

export function getV1ParentEndpointAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['endpointAttachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['endpointAttachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['endpointAttachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentEndpointAttachmentsQueryKey>
  >({
    queryKey: getV1ParentEndpointAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].endpointAttachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentEndpointAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['endpointAttachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['endpointAttachments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['endpointAttachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentEndpointAttachmentsQueryKey>
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
      ...getV1ParentEndpointAttachmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentEndpointAttachmentsMutationKey() {
  return ['v1', '/v1/:parent/endpointAttachments', 'POST'] as const
}

export function getPostV1ParentEndpointAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['endpointAttachments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['endpointAttachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentEndpointAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['endpointAttachments']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].endpointAttachments.$post(args, options))
    },
  })
}

export function createPostV1ParentEndpointAttachments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['endpointAttachments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['endpointAttachments']['$post']>,
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
    const mutationDefaults = getPostV1ParentEndpointAttachmentsMutationOptions<
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

export function getV1ParentEntriesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['entries']['$get']>,
) {
  return ['v1', '/v1/:parent/entries', args] as const
}

export function getV1ParentEntriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['entries']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['entries']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentEntriesQueryKey>
  >({
    queryKey: getV1ParentEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].entries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ParentEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['entries']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['entries']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['entries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentEntriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentEntriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentEntriesMutationKey() {
  return ['v1', '/v1/:parent/entries', 'POST'] as const
}

export function getPostV1ParentEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['entries']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['entries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentEntriesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['entries']['$post']>) {
      return parseResponse(client.v1[':parent'].entries.$post(args, options))
    },
  })
}

export function createPostV1ParentEntries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['entries']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['entries']['$post']>,
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
    const mutationDefaults = getPostV1ParentEntriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentEnvgroupsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['envgroups']['$get']>,
) {
  return ['v1', '/v1/:parent/envgroups', args] as const
}

export function getV1ParentEnvgroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['envgroups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['envgroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['envgroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentEnvgroupsQueryKey>
  >({
    queryKey: getV1ParentEnvgroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].envgroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentEnvgroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['envgroups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['envgroups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['envgroups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentEnvgroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentEnvgroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentEnvgroupsMutationKey() {
  return ['v1', '/v1/:parent/envgroups', 'POST'] as const
}

export function getPostV1ParentEnvgroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['envgroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['envgroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentEnvgroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['envgroups']['$post']>) {
      return parseResponse(client.v1[':parent'].envgroups.$post(args, options))
    },
  })
}

export function createPostV1ParentEnvgroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['envgroups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['envgroups']['$post']>,
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
    const mutationDefaults = getPostV1ParentEnvgroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ParentEnvironmentsMutationKey() {
  return ['v1', '/v1/:parent/environments', 'POST'] as const
}

export function getPostV1ParentEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['environments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['environments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['environments']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].environments.$post(args, options))
    },
  })
}

export function createPostV1ParentEnvironments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['environments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['environments']['$post']>,
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
    const mutationDefaults = getPostV1ParentEnvironmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentHostQueriesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['hostQueries']['$get']>,
) {
  return ['v1', '/v1/:parent/hostQueries', args] as const
}

export function getV1ParentHostQueriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['hostQueries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['hostQueries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['hostQueries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentHostQueriesQueryKey>
  >({
    queryKey: getV1ParentHostQueriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].hostQueries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentHostQueries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['hostQueries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['hostQueries']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['hostQueries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentHostQueriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentHostQueriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentHostQueriesMutationKey() {
  return ['v1', '/v1/:parent/hostQueries', 'POST'] as const
}

export function getPostV1ParentHostQueriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['hostQueries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['hostQueries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentHostQueriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['hostQueries']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].hostQueries.$post(args, options))
    },
  })
}

export function createPostV1ParentHostQueries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['hostQueries']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['hostQueries']['$post']>,
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
    const mutationDefaults = getPostV1ParentHostQueriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentHostSecurityReportsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['hostSecurityReports']['$get']>,
) {
  return ['v1', '/v1/:parent/hostSecurityReports', args] as const
}

export function getV1ParentHostSecurityReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['hostSecurityReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['hostSecurityReports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['hostSecurityReports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentHostSecurityReportsQueryKey>
  >({
    queryKey: getV1ParentHostSecurityReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].hostSecurityReports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentHostSecurityReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['hostSecurityReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['hostSecurityReports']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['hostSecurityReports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentHostSecurityReportsQueryKey>
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
      ...getV1ParentHostSecurityReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentHostSecurityReportsMutationKey() {
  return ['v1', '/v1/:parent/hostSecurityReports', 'POST'] as const
}

export function getPostV1ParentHostSecurityReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['hostSecurityReports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['hostSecurityReports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentHostSecurityReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['hostSecurityReports']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].hostSecurityReports.$post(args, options))
    },
  })
}

export function createPostV1ParentHostSecurityReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['hostSecurityReports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['hostSecurityReports']['$post']>,
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
    const mutationDefaults = getPostV1ParentHostSecurityReportsMutationOptions<
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

export function getV1ParentInstancesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['instances']['$get']>,
) {
  return ['v1', '/v1/:parent/instances', args] as const
}

export function getV1ParentInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentInstancesQueryKey>
  >({
    queryKey: getV1ParentInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['instances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentInstancesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentInstancesMutationKey() {
  return ['v1', '/v1/:parent/instances', 'POST'] as const
}

export function getPostV1ParentInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['instances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentInstancesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['instances']['$post']>) {
      return parseResponse(client.v1[':parent'].instances.$post(args, options))
    },
  })
}

export function createPostV1ParentInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['instances']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['instances']['$post']>,
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
    const mutationDefaults = getPostV1ParentInstancesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ParentKeysMutationKey() {
  return ['v1', '/v1/:parent/keys', 'POST'] as const
}

export function getPostV1ParentKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['keys']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['keys']['$post']>) {
      return parseResponse(client.v1[':parent'].keys.$post(args, options))
    },
  })
}

export function createPostV1ParentKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['keys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['keys']['$post']>,
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
    const mutationDefaults = getPostV1ParentKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ParentKeysCreateMutationKey() {
  return ['v1', '/v1/:parent/keys/create', 'POST'] as const
}

export function getPostV1ParentKeysCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['keys']['create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['keys']['create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentKeysCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['keys']['create']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].keys.create.$post(args, options))
    },
  })
}

export function createPostV1ParentKeysCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['keys']['create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['keys']['create']['$post']>,
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
    const mutationDefaults = getPostV1ParentKeysCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ParentKeystoresMutationKey() {
  return ['v1', '/v1/:parent/keystores', 'POST'] as const
}

export function getPostV1ParentKeystoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['keystores']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['keystores']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentKeystoresMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['keystores']['$post']>) {
      return parseResponse(client.v1[':parent'].keystores.$post(args, options))
    },
  })
}

export function createPostV1ParentKeystores<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['keystores']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['keystores']['$post']>,
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
    const mutationDefaults = getPostV1ParentKeystoresMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ParentKeyvaluemapsMutationKey() {
  return ['v1', '/v1/:parent/keyvaluemaps', 'POST'] as const
}

export function getPostV1ParentKeyvaluemapsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['keyvaluemaps']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['keyvaluemaps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentKeyvaluemapsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['keyvaluemaps']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].keyvaluemaps.$post(args, options))
    },
  })
}

export function createPostV1ParentKeyvaluemaps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['keyvaluemaps']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['keyvaluemaps']['$post']>,
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
    const mutationDefaults = getPostV1ParentKeyvaluemapsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentNatAddressesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['natAddresses']['$get']>,
) {
  return ['v1', '/v1/:parent/natAddresses', args] as const
}

export function getV1ParentNatAddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['natAddresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['natAddresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['natAddresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentNatAddressesQueryKey>
  >({
    queryKey: getV1ParentNatAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].natAddresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentNatAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['natAddresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['natAddresses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['natAddresses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentNatAddressesQueryKey>
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
      ...getV1ParentNatAddressesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentNatAddressesMutationKey() {
  return ['v1', '/v1/:parent/natAddresses', 'POST'] as const
}

export function getPostV1ParentNatAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['natAddresses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['natAddresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentNatAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['natAddresses']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].natAddresses.$post(args, options))
    },
  })
}

export function createPostV1ParentNatAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['natAddresses']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['natAddresses']['$post']>,
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
    const mutationDefaults = getPostV1ParentNatAddressesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentOverridesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['overrides']['$get']>,
) {
  return ['v1', '/v1/:parent/overrides', args] as const
}

export function getV1ParentOverridesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['overrides']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['overrides']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['overrides']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentOverridesQueryKey>
  >({
    queryKey: getV1ParentOverridesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].overrides.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentOverrides<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['overrides']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['overrides']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['overrides']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentOverridesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentOverridesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentOverridesMutationKey() {
  return ['v1', '/v1/:parent/overrides', 'POST'] as const
}

export function getPostV1ParentOverridesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['overrides']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['overrides']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentOverridesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['overrides']['$post']>) {
      return parseResponse(client.v1[':parent'].overrides.$post(args, options))
    },
  })
}

export function createPostV1ParentOverrides<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['overrides']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['overrides']['$post']>,
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
    const mutationDefaults = getPostV1ParentOverridesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentQueriesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['queries']['$get']>,
) {
  return ['v1', '/v1/:parent/queries', args] as const
}

export function getV1ParentQueriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['queries']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['queries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['queries']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentQueriesQueryKey>
  >({
    queryKey: getV1ParentQueriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].queries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ParentQueries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['queries']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['queries']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['queries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentQueriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentQueriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentQueriesMutationKey() {
  return ['v1', '/v1/:parent/queries', 'POST'] as const
}

export function getPostV1ParentQueriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['queries']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['queries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentQueriesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['queries']['$post']>) {
      return parseResponse(client.v1[':parent'].queries.$post(args, options))
    },
  })
}

export function createPostV1ParentQueries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['queries']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['queries']['$post']>,
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
    const mutationDefaults = getPostV1ParentQueriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentRateplansQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['rateplans']['$get']>,
) {
  return ['v1', '/v1/:parent/rateplans', args] as const
}

export function getV1ParentRateplansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['rateplans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['rateplans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['rateplans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentRateplansQueryKey>
  >({
    queryKey: getV1ParentRateplansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].rateplans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentRateplans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['rateplans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['rateplans']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['rateplans']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentRateplansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentRateplansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentRateplansMutationKey() {
  return ['v1', '/v1/:parent/rateplans', 'POST'] as const
}

export function getPostV1ParentRateplansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['rateplans']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['rateplans']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentRateplansMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['rateplans']['$post']>) {
      return parseResponse(client.v1[':parent'].rateplans.$post(args, options))
    },
  })
}

export function createPostV1ParentRateplans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['rateplans']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['rateplans']['$post']>,
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
    const mutationDefaults = getPostV1ParentRateplansMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ParentReferencesMutationKey() {
  return ['v1', '/v1/:parent/references', 'POST'] as const
}

export function getPostV1ParentReferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['references']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['references']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentReferencesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['references']['$post']>) {
      return parseResponse(client.v1[':parent'].references.$post(args, options))
    },
  })
}

export function createPostV1ParentReferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['references']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['references']['$post']>,
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
    const mutationDefaults = getPostV1ParentReferencesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentReportsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['reports']['$get']>,
) {
  return ['v1', '/v1/:parent/reports', args] as const
}

export function getV1ParentReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['reports']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['reports']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentReportsQueryKey>
  >({
    queryKey: getV1ParentReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ParentReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['reports']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['reports']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['reports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentReportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentReportsMutationKey() {
  return ['v1', '/v1/:parent/reports', 'POST'] as const
}

export function getPostV1ParentReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['reports']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['reports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentReportsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['reports']['$post']>) {
      return parseResponse(client.v1[':parent'].reports.$post(args, options))
    },
  })
}

export function createPostV1ParentReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['reports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['reports']['$post']>,
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
    const mutationDefaults = getPostV1ParentReportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentResourcefilesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['resourcefiles']['$get']>,
) {
  return ['v1', '/v1/:parent/resourcefiles', args] as const
}

export function getV1ParentResourcefilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['resourcefiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['resourcefiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['resourcefiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentResourcefilesQueryKey>
  >({
    queryKey: getV1ParentResourcefilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].resourcefiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentResourcefiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['resourcefiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['resourcefiles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['resourcefiles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentResourcefilesQueryKey>
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
      ...getV1ParentResourcefilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentResourcefilesMutationKey() {
  return ['v1', '/v1/:parent/resourcefiles', 'POST'] as const
}

export function getPostV1ParentResourcefilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['resourcefiles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['resourcefiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentResourcefilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['resourcefiles']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].resourcefiles.$post(args, options))
    },
  })
}

export function createPostV1ParentResourcefiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['resourcefiles']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['resourcefiles']['$post']>,
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
    const mutationDefaults = getPostV1ParentResourcefilesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentResourcefilesTypeQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['resourcefiles'][':type']['$get']>,
) {
  return ['v1', '/v1/:parent/resourcefiles/:type', args] as const
}

export function getV1ParentResourcefilesTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['resourcefiles'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['resourcefiles'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['resourcefiles'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentResourcefilesTypeQueryKey>
  >({
    queryKey: getV1ParentResourcefilesTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].resourcefiles[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentResourcefilesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['resourcefiles'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['resourcefiles'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['resourcefiles'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentResourcefilesTypeQueryKey>
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
      ...getV1ParentResourcefilesTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ParentResourcefilesTypeNameQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$get']>,
) {
  return ['v1', '/v1/:parent/resourcefiles/:type/:name', args] as const
}

export function getV1ParentResourcefilesTypeNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentResourcefilesTypeNameQueryKey>
  >({
    queryKey: getV1ParentResourcefilesTypeNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].resourcefiles[':type'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentResourcefilesTypeName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentResourcefilesTypeNameQueryKey>
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
      ...getV1ParentResourcefilesTypeNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1ParentResourcefilesTypeNameMutationKey() {
  return ['v1', '/v1/:parent/resourcefiles/:type/:name', 'PUT'] as const
}

export function getPutV1ParentResourcefilesTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ParentResourcefilesTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$put']
      >,
    ) {
      return parseResponse(client.v1[':parent'].resourcefiles[':type'][':name'].$put(args, options))
    },
  })
}

export function createPutV1ParentResourcefilesTypeName<
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
                ReturnType<(typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$put']>,
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
    const mutationDefaults = getPutV1ParentResourcefilesTypeNameMutationOptions<
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

export function getDeleteV1ParentResourcefilesTypeNameMutationKey() {
  return ['v1', '/v1/:parent/resourcefiles/:type/:name', 'DELETE'] as const
}

export function getDeleteV1ParentResourcefilesTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ParentResourcefilesTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1[':parent'].resourcefiles[':type'][':name'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1ParentResourcefilesTypeName<
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
                  (typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$delete']
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
    const mutationDefaults = getDeleteV1ParentResourcefilesTypeNameMutationOptions<
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

export function getV1ParentSecurityIncidentsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['securityIncidents']['$get']>,
) {
  return ['v1', '/v1/:parent/securityIncidents', args] as const
}

export function getV1ParentSecurityIncidentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['securityIncidents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['securityIncidents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['securityIncidents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentSecurityIncidentsQueryKey>
  >({
    queryKey: getV1ParentSecurityIncidentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].securityIncidents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentSecurityIncidents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['securityIncidents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['securityIncidents']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['securityIncidents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentSecurityIncidentsQueryKey>
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
      ...getV1ParentSecurityIncidentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ParentSecurityProfilesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['securityProfiles']['$get']>,
) {
  return ['v1', '/v1/:parent/securityProfiles', args] as const
}

export function getV1ParentSecurityProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['securityProfiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['securityProfiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['securityProfiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentSecurityProfilesQueryKey>
  >({
    queryKey: getV1ParentSecurityProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].securityProfiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentSecurityProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['securityProfiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['securityProfiles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['securityProfiles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentSecurityProfilesQueryKey>
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
      ...getV1ParentSecurityProfilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1ParentSecurityReportsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['securityReports']['$get']>,
) {
  return ['v1', '/v1/:parent/securityReports', args] as const
}

export function getV1ParentSecurityReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['securityReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['securityReports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['securityReports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentSecurityReportsQueryKey>
  >({
    queryKey: getV1ParentSecurityReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].securityReports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentSecurityReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['securityReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['securityReports']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['securityReports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentSecurityReportsQueryKey>
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
      ...getV1ParentSecurityReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentSecurityReportsMutationKey() {
  return ['v1', '/v1/:parent/securityReports', 'POST'] as const
}

export function getPostV1ParentSecurityReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['securityReports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['securityReports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentSecurityReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['securityReports']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].securityReports.$post(args, options))
    },
  })
}

export function createPostV1ParentSecurityReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['securityReports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['securityReports']['$post']>,
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
    const mutationDefaults = getPostV1ParentSecurityReportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentSharedflowsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['sharedflows']['$get']>,
) {
  return ['v1', '/v1/:parent/sharedflows', args] as const
}

export function getV1ParentSharedflowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['sharedflows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['sharedflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['sharedflows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentSharedflowsQueryKey>
  >({
    queryKey: getV1ParentSharedflowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].sharedflows.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentSharedflows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['sharedflows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['sharedflows']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['sharedflows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentSharedflowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentSharedflowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentSharedflowsMutationKey() {
  return ['v1', '/v1/:parent/sharedflows', 'POST'] as const
}

export function getPostV1ParentSharedflowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['sharedflows']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['sharedflows']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentSharedflowsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['sharedflows']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].sharedflows.$post(args, options))
    },
  })
}

export function createPostV1ParentSharedflows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['sharedflows']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['sharedflows']['$post']>,
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
    const mutationDefaults = getPostV1ParentSharedflowsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentSubscriptionsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['subscriptions']['$get']>,
) {
  return ['v1', '/v1/:parent/subscriptions', args] as const
}

export function getV1ParentSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['subscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentSubscriptionsQueryKey>
  >({
    queryKey: getV1ParentSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['subscriptions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['subscriptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentSubscriptionsQueryKey>
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
      ...getV1ParentSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentSubscriptionsMutationKey() {
  return ['v1', '/v1/:parent/subscriptions', 'POST'] as const
}

export function getPostV1ParentSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['subscriptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['subscriptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['subscriptions']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].subscriptions.$post(args, options))
    },
  })
}

export function createPostV1ParentSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['subscriptions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['subscriptions']['$post']>,
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
    const mutationDefaults = getPostV1ParentSubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ParentTargetserversMutationKey() {
  return ['v1', '/v1/:parent/targetservers', 'POST'] as const
}

export function getPostV1ParentTargetserversMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['targetservers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['targetservers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentTargetserversMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['targetservers']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].targetservers.$post(args, options))
    },
  })
}

export function createPostV1ParentTargetservers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['targetservers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['targetservers']['$post']>,
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
    const mutationDefaults = getPostV1ParentTargetserversMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ParentSubscribeMutationKey() {
  return ['v1', '/v1/:parent:subscribe', 'POST'] as const
}

export function getPostV1ParentSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent:subscribe']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent:subscribe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentSubscribeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent:subscribe']['$post']>) {
      return parseResponse(client.v1[':parent:subscribe'].$post(args, options))
    },
  })
}

export function createPostV1ParentSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent:subscribe']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent:subscribe']['$post']>,
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
    const mutationDefaults = getPostV1ParentSubscribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ParentUnsubscribeMutationKey() {
  return ['v1', '/v1/:parent:unsubscribe', 'POST'] as const
}

export function getPostV1ParentUnsubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent:unsubscribe']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent:unsubscribe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentUnsubscribeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent:unsubscribe']['$post']>) {
      return parseResponse(client.v1[':parent:unsubscribe'].$post(args, options))
    },
  })
}

export function createPostV1ParentUnsubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent:unsubscribe']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent:unsubscribe']['$post']>,
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
    const mutationDefaults = getPostV1ParentUnsubscribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ProfileEnvironmentComputeEnvironmentScoresMutationKey() {
  return ['v1', '/v1/:profileEnvironment:computeEnvironmentScores', 'POST'] as const
}

export function getPostV1ProfileEnvironmentComputeEnvironmentScoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)[':profileEnvironment:computeEnvironmentScores']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':profileEnvironment:computeEnvironmentScores']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProfileEnvironmentComputeEnvironmentScoresMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':profileEnvironment:computeEnvironmentScores']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':profileEnvironment:computeEnvironmentScores'].$post(args, options),
      )
    },
  })
}

export function createPostV1ProfileEnvironmentComputeEnvironmentScores<
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
                  (typeof client.v1)[':profileEnvironment:computeEnvironmentScores']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)[':profileEnvironment:computeEnvironmentScores']['$post']
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
    const mutationDefaults = getPostV1ProfileEnvironmentComputeEnvironmentScoresMutationOptions<
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

export function getPostV1ProjectProvisionOrganizationMutationKey() {
  return ['v1', '/v1/:project:provisionOrganization', 'POST'] as const
}

export function getPostV1ProjectProvisionOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':project:provisionOrganization']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':project:provisionOrganization']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectProvisionOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':project:provisionOrganization']['$post']>,
    ) {
      return parseResponse(client.v1[':project:provisionOrganization'].$post(args, options))
    },
  })
}

export function createPostV1ProjectProvisionOrganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':project:provisionOrganization']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':project:provisionOrganization']['$post']>,
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
    const mutationDefaults = getPostV1ProjectProvisionOrganizationMutationOptions<
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

export function getV1ResourceGetIamPolicyQueryKey(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>,
) {
  return ['v1', '/v1/:resource:getIamPolicy', args] as const
}

export function getV1ResourceGetIamPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':resource:getIamPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resource:getIamPolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ResourceGetIamPolicyQueryKey>
  >({
    queryKey: getV1ResourceGetIamPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':resource:getIamPolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ResourceGetIamPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':resource:getIamPolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':resource:getIamPolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ResourceGetIamPolicyQueryKey>
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
      ...getV1ResourceGetIamPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ResourceSetIamPolicyMutationKey() {
  return ['v1', '/v1/:resource:setIamPolicy', 'POST'] as const
}

export function getPostV1ResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ResourceSetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v1[':resource:setIamPolicy'].$post(args, options))
    },
  })
}

export function createPostV1ResourceSetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':resource:setIamPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
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
    const mutationDefaults = getPostV1ResourceSetIamPolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ResourceTestIamPermissionsMutationKey() {
  return ['v1', '/v1/:resource:testIamPermissions', 'POST'] as const
}

export function getPostV1ResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
    ) {
      return parseResponse(client.v1[':resource:testIamPermissions'].$post(args, options))
    },
  })
}

export function createPostV1ResourceTestIamPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':resource:testIamPermissions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
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
    const mutationDefaults = getPostV1ResourceTestIamPermissionsMutationOptions<
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
