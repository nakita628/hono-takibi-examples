import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ProjectsProjectLocationsLocationApisQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/locations/:location/apis', args] as const
}

export function getV1ProjectsProjectLocationsLocationApisQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationApisQueryKey>
  >({
    queryKey: getV1ProjectsProjectLocationsLocationApisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsProjectLocationsLocationApis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationApisQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationApisQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsProjectLocationsLocationApis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationApisQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationApisQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectLocationsLocationApisMutationKey() {
  return ['v1', '/v1/projects/:project/locations/:location/apis', 'POST'] as const
}

export function getPostV1ProjectsProjectLocationsLocationApisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectLocationsLocationApisMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectLocationsLocationApis<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectLocationsLocationApisMutationOptions<
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

export function getV1ProjectsProjectLocationsLocationApisApiQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/locations/:location/apis/:api', args] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiQueryKey>
  >({
    queryKey: getV1ProjectsProjectLocationsLocationApisApiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsProjectLocationsLocationApisApi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationApisApiQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsProjectLocationsLocationApisApi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationApisApiQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1ProjectsProjectLocationsLocationApisApiMutationKey() {
  return ['v1', '/v1/projects/:project/locations/:location/apis/:api', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectLocationsLocationApisApiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectLocationsLocationApisApiMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsProjectLocationsLocationApisApi<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$delete']
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
  const mutationDefaults = getDeleteV1ProjectsProjectLocationsLocationApisApiMutationOptions<
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

export function getPatchV1ProjectsProjectLocationsLocationApisApiMutationKey() {
  return ['v1', '/v1/projects/:project/locations/:location/apis/:api', 'PATCH'] as const
}

export function getPatchV1ProjectsProjectLocationsLocationApisApiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsProjectLocationsLocationApisApiMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1ProjectsProjectLocationsLocationApisApi<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$patch']
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
  const mutationDefaults = getPatchV1ProjectsProjectLocationsLocationApisApiMutationOptions<
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

export function getV1ProjectsProjectLocationsLocationApisApiDeploymentsQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/locations/:location/apis/:api/deployments', args] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiDeploymentsQueryKey>
  >({
    queryKey: getV1ProjectsProjectLocationsLocationApisApiDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsProjectLocationsLocationApisApiDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiDeploymentsQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationApisApiDeploymentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsProjectLocationsLocationApisApiDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiDeploymentsQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationApisApiDeploymentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsMutationKey() {
  return ['v1', '/v1/projects/:project/locations/:location/apis/:api/deployments', 'POST'] as const
}

export function getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].deployments.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ProjectsProjectLocationsLocationApisApiDeployments<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$post']
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
    getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsMutationOptions<
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

export function getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment',
    args,
  ] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentQueryKey>
  >({
    queryKey: getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
          ':deployment'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ProjectsProjectLocationsLocationApisApiDeploymentsDeployment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsProjectLocationsLocationApisApiDeploymentsDeployment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment',
    'DELETE',
  ] as const
}

export function getDeleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
          ':deployment'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeployment<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$delete']
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
    getDeleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentMutationOptions<
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

export function getPatchV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment',
    'PATCH',
  ] as const
}

export function getPatchV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
          ':deployment'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchV1ProjectsProjectLocationsLocationApisApiDeploymentsDeployment<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$patch']
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
    getPatchV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentMutationOptions<
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

export function getDeleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentDeleteRevisionMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment:deleteRevision',
    'DELETE',
  ] as const
}

export function getDeleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentDeleteRevisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:deleteRevision']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:deleteRevision']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentDeleteRevisionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:deleteRevision']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
          ':deployment:deleteRevision'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentDeleteRevision<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:deleteRevision']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:deleteRevision']['$delete']
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
    getDeleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentDeleteRevisionMutationOptions<
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

export function getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment:listRevisions',
    args,
  ] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisionsQueryKey
    >
  >({
    queryKey:
      getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
          ':deployment:listRevisions'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisionsQueryKey
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
      ...getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisionsQueryKey
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
      ...getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentRollbackMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment:rollback',
    'POST',
  ] as const
}

export function getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentRollbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:rollback']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:rollback']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentRollbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:rollback']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
          ':deployment:rollback'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentRollback<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:rollback']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:rollback']['$post']
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
    getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentRollbackMutationOptions<
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

export function getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentTagRevisionMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment:tagRevision',
    'POST',
  ] as const
}

export function getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentTagRevisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:tagRevision']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:tagRevision']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentTagRevisionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:tagRevision']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
          ':deployment:tagRevision'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentTagRevision<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:tagRevision']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:tagRevision']['$post']
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
    getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentTagRevisionMutationOptions<
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

export function getV1ProjectsProjectLocationsLocationApisApiVersionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/locations/:location/apis/:api/versions', args] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiVersionsQueryKey>
  >({
    queryKey: getV1ProjectsProjectLocationsLocationApisApiVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsProjectLocationsLocationApisApiVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiVersionsQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationApisApiVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsProjectLocationsLocationApisApiVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiVersionsQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationApisApiVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectLocationsLocationApisApiVersionsMutationKey() {
  return ['v1', '/v1/projects/:project/locations/:location/apis/:api/versions', 'POST'] as const
}

export function getPostV1ProjectsProjectLocationsLocationApisApiVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectLocationsLocationApisApiVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1ProjectsProjectLocationsLocationApisApiVersions<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectLocationsLocationApisApiVersionsMutationOptions<
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

export function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version',
    args,
  ] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionQueryKey>
  >({
    queryKey: getV1ProjectsProjectLocationsLocationApisApiVersionsVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ProjectsProjectLocationsLocationApisApiVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationApisApiVersionsVersionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsProjectLocationsLocationApisApiVersionsVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationApisApiVersionsVersionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version',
    'DELETE',
  ] as const
}

export function getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersion<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$delete']
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
    getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionMutationOptions<
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

export function getPatchV1ProjectsProjectLocationsLocationApisApiVersionsVersionMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version',
    'PATCH',
  ] as const
}

export function getPatchV1ProjectsProjectLocationsLocationApisApiVersionsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsProjectLocationsLocationApisApiVersionsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchV1ProjectsProjectLocationsLocationApisApiVersionsVersion<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$patch']
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
    getPatchV1ProjectsProjectLocationsLocationApisApiVersionsVersionMutationOptions<
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

export function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs',
    args,
  ] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsQueryKey>
  >({
    queryKey: getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].specs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs',
    'POST',
  ] as const
}

export function getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].specs.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecs<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$post']
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
    getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsMutationOptions<
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

export function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec',
    args,
  ] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecQueryKey>
  >({
    queryKey: getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].specs[':spec'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecQueryKey
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
      ...getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecQueryKey
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
      ...getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec',
    'DELETE',
  ] as const
}

export function getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].specs[':spec'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpec<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$delete']
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
    getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecMutationOptions<
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

export function getPatchV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec',
    'PATCH',
  ] as const
}

export function getPatchV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].specs[':spec'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpec<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$patch']
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
    getPatchV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecMutationOptions<
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

export function getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecDeleteRevisionMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec:deleteRevision',
    'DELETE',
  ] as const
}

export function getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecDeleteRevisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:deleteRevision']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:deleteRevision']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecDeleteRevisionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:deleteRevision']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].specs[':spec:deleteRevision'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecDeleteRevision<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:deleteRevision']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:deleteRevision']['$delete']
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
    getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecDeleteRevisionMutationOptions<
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

export function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContentsQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec:getContents',
    args,
  ] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContentsQueryKey
    >
  >({
    queryKey:
      getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].specs[':spec:getContents'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContentsQueryKey
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
      ...getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContentsQueryKey
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
      ...getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec:listRevisions',
    args,
  ] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsQueryKey
    >
  >({
    queryKey:
      getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].specs[':spec:listRevisions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsQueryKey
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
      ...getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsQueryKey
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
      ...getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecRollbackMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec:rollback',
    'POST',
  ] as const
}

export function getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecRollbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:rollback']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:rollback']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecRollbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:rollback']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].specs[':spec:rollback'].$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecRollback<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:rollback']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:rollback']['$post']
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
    getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecRollbackMutationOptions<
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

export function getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecTagRevisionMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec:tagRevision',
    'POST',
  ] as const
}

export function getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecTagRevisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:tagRevision']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:tagRevision']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecTagRevisionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:tagRevision']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].specs[':spec:tagRevision'].$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecTagRevision<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:tagRevision']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:tagRevision']['$post']
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
    getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecTagRevisionMutationOptions<
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

export function getV1ProjectsProjectLocationsLocationArtifactsQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/locations/:location/artifacts', args] as const
}

export function getV1ProjectsProjectLocationsLocationArtifactsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationArtifactsQueryKey>
  >({
    queryKey: getV1ProjectsProjectLocationsLocationArtifactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].artifacts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsProjectLocationsLocationArtifacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationArtifactsQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationArtifactsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsProjectLocationsLocationArtifacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationArtifactsQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationArtifactsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectLocationsLocationArtifactsMutationKey() {
  return ['v1', '/v1/projects/:project/locations/:location/artifacts', 'POST'] as const
}

export function getPostV1ProjectsProjectLocationsLocationArtifactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectLocationsLocationArtifactsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].artifacts.$post(args, options),
      )
    },
  })
}

export function usePostV1ProjectsProjectLocationsLocationArtifacts<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$post']
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
  const mutationDefaults = getPostV1ProjectsProjectLocationsLocationArtifactsMutationOptions<
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

export function getV1ProjectsProjectLocationsLocationArtifactsArtifactQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/locations/:location/artifacts/:artifact', args] as const
}

export function getV1ProjectsProjectLocationsLocationArtifactsArtifactQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationArtifactsArtifactQueryKey>
  >({
    queryKey: getV1ProjectsProjectLocationsLocationArtifactsArtifactQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].artifacts[':artifact'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsProjectLocationsLocationArtifactsArtifact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationArtifactsArtifactQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationArtifactsArtifactQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsProjectLocationsLocationArtifactsArtifact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationArtifactsArtifactQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationArtifactsArtifactQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1ProjectsProjectLocationsLocationArtifactsArtifactMutationKey() {
  return ['v1', '/v1/projects/:project/locations/:location/artifacts/:artifact', 'PUT'] as const
}

export function getPutV1ProjectsProjectLocationsLocationArtifactsArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsProjectLocationsLocationArtifactsArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].artifacts[':artifact'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1ProjectsProjectLocationsLocationArtifactsArtifact<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$put']
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
  const mutationDefaults = getPutV1ProjectsProjectLocationsLocationArtifactsArtifactMutationOptions<
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

export function getDeleteV1ProjectsProjectLocationsLocationArtifactsArtifactMutationKey() {
  return ['v1', '/v1/projects/:project/locations/:location/artifacts/:artifact', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectLocationsLocationArtifactsArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectLocationsLocationArtifactsArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].artifacts[':artifact'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1ProjectsProjectLocationsLocationArtifactsArtifact<
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
                  (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$delete']
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
    getDeleteV1ProjectsProjectLocationsLocationArtifactsArtifactMutationOptions<
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

export function getV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/artifacts/:artifact:getContents',
    args,
  ] as const
}

export function getV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsQueryKey>
  >({
    queryKey: getV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].artifacts[
          ':artifact:getContents'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ProjectsProjectLocationsLocationArtifactsArtifactGetContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsProjectLocationsLocationArtifactsArtifactGetContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsQueryKey>
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
      ...getV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
