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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ProjectsProjectLocationsLocationApisQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:project/locations/:location/apis', toValue(args)] as const
}

export function getV1ProjectsProjectLocationsLocationApisQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectLocationsLocationApisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectLocationsLocationApisQueryKey>
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
              (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationApisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectLocationsLocationApisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].locations[':location'].apis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:project/locations/:location/apis/:api', toValue(args)] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectLocationsLocationApisApiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiQueryKey>
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
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectLocationsLocationApisApiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/deployments',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectLocationsLocationApisApiDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].deployments.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiDeploymentsQueryKey>
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
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsProjectLocationsLocationApisApiDeploymentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].deployments.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
          ':deployment'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentQueryKey
          >
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
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
            ':deployment'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment:listRevisions',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
          ':deployment:listRevisions'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisionsQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisionsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
            ':deployment:listRevisions'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectLocationsLocationApisApiVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiVersionsQueryKey>
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
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectLocationsLocationApisApiVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1ProjectsProjectLocationsLocationApisApiVersionsVersionQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionQueryKey>
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
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsProjectLocationsLocationApisApiVersionsVersionQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].specs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsQueryKey
          >
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
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].specs[':spec'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecQueryKey
          >
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
              (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs[':spec'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec:getContents',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].specs[':spec:getContents'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContentsQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContentsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs[':spec:getContents'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec:listRevisions',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
          ':version'
        ].specs[':spec:listRevisions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs[':spec:listRevisions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:project/locations/:location/artifacts', toValue(args)] as const
}

export function getV1ProjectsProjectLocationsLocationArtifactsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectLocationsLocationArtifactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].artifacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectLocationsLocationArtifactsQueryKey>
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
              (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationArtifactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectLocationsLocationArtifactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].locations[':location'].artifacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/artifacts/:artifact',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectLocationsLocationArtifactsArtifactQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectLocationsLocationArtifactsArtifactQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].artifacts[':artifact'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectLocationsLocationArtifactsArtifactQueryKey>
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
              (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationArtifactsArtifactQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsProjectLocationsLocationArtifactsArtifactQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].locations[':location'].artifacts[':artifact'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/artifacts/:artifact:getContents',
    toValue(args),
  ] as const
}

export function getV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project'].locations[':location'].artifacts[
          ':artifact:getContents'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
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
                    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsQueryKey
          >
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
              (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project'].locations[':location'].artifacts[
            ':artifact:getContents'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}
