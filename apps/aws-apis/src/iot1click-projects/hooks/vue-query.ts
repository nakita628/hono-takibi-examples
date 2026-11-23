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

export function getProjectsKey() {
  return ['projects'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPutProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameMutationKey() {
  return [
    'projects',
    '/projects/:projectName/placements/:placementName/devices/:deviceTemplateName',
    'PUT',
  ] as const
}

export function getPutProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectName']['placements'][':placementName']['devices'][':deviceTemplateName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectName']['placements'][':placementName']['devices'][':deviceTemplateName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectName']['placements'][':placementName']['devices'][':deviceTemplateName']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':projectName'].placements[':placementName'].devices[
          ':deviceTemplateName'
        ].$put(args, options),
      )
    },
  })
}

export function usePutProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateName<
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
                    (typeof client.projects)[':projectName']['placements'][':placementName']['devices'][':deviceTemplateName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectName']['placements'][':placementName']['devices'][':deviceTemplateName']['$put']
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
    getPutProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameMutationOptions<
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

export function getDeleteProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameMutationKey() {
  return [
    'projects',
    '/projects/:projectName/placements/:placementName/devices/:deviceTemplateName',
    'DELETE',
  ] as const
}

export function getDeleteProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectName']['placements'][':placementName']['devices'][':deviceTemplateName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectName']['placements'][':placementName']['devices'][':deviceTemplateName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectName']['placements'][':placementName']['devices'][':deviceTemplateName']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':projectName'].placements[':placementName'].devices[
          ':deviceTemplateName'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateName<
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
                    (typeof client.projects)[':projectName']['placements'][':placementName']['devices'][':deviceTemplateName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectName']['placements'][':placementName']['devices'][':deviceTemplateName']['$delete']
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
    getDeleteProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameMutationOptions<
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

export function getProjectsProjectNamePlacementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectName']['placements']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['projects', '/projects/:projectName/placements', keyArgs] as const
}

export function getProjectsProjectNamePlacementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectName']['placements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectNamePlacementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectName'].placements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectNamePlacements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectName']['placements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectName']['placements']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectName']['placements']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectName']['placements']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectNamePlacementsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectName']['placements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectNamePlacementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectNamePlacementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectName'].placements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectNamePlacementsMutationKey() {
  return ['projects', '/projects/:projectName/placements', 'POST'] as const
}

export function getPostProjectsProjectNamePlacementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectName']['placements']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectName']['placements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectNamePlacementsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectName']['placements']['$post']>,
    ) {
      return parseResponse(client.projects[':projectName'].placements.$post(args, options))
    },
  })
}

export function usePostProjectsProjectNamePlacements<
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
                Awaited<ReturnType<(typeof client.projects)[':projectName']['placements']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectName']['placements']['$post']>,
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
  const mutationDefaults = getPostProjectsProjectNamePlacementsMutationOptions<
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

export function getProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['projects', '/projects', keyArgs] as const
}

export function getProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          ReturnType<typeof getProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsMutationKey() {
  return ['projects', '/projects', 'POST'] as const
}

export function getPostProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.projects.$post>) {
      return parseResponse(client.projects.$post(args, options))
    },
  })
}

export function usePostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.projects.$post>,
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
  const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProjectsProjectNamePlacementsPlacementNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectName']['placements'][':placementName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['projects', '/projects/:projectName/placements/:placementName', keyArgs] as const
}

export function getProjectsProjectNamePlacementsPlacementNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectName']['placements'][':placementName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectNamePlacementsPlacementNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectName'].placements[':placementName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectNamePlacementsPlacementName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectName']['placements'][':placementName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectName']['placements'][':placementName']['$get']
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
                    (typeof client.projects)[':projectName']['placements'][':placementName']['$get']
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
                    (typeof client.projects)[':projectName']['placements'][':placementName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectNamePlacementsPlacementNameQueryKey>
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
              (typeof client.projects)[':projectName']['placements'][':placementName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectNamePlacementsPlacementNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectNamePlacementsPlacementNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectName'].placements[':placementName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProjectsProjectNamePlacementsPlacementNameMutationKey() {
  return ['projects', '/projects/:projectName/placements/:placementName', 'PUT'] as const
}

export function getPutProjectsProjectNamePlacementsPlacementNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectName']['placements'][':placementName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectName']['placements'][':placementName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectNamePlacementsPlacementNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectName']['placements'][':placementName']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':projectName'].placements[':placementName'].$put(args, options),
      )
    },
  })
}

export function usePutProjectsProjectNamePlacementsPlacementName<
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
                    (typeof client.projects)[':projectName']['placements'][':placementName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectName']['placements'][':placementName']['$put']
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
  const mutationDefaults = getPutProjectsProjectNamePlacementsPlacementNameMutationOptions<
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

export function getDeleteProjectsProjectNamePlacementsPlacementNameMutationKey() {
  return ['projects', '/projects/:projectName/placements/:placementName', 'DELETE'] as const
}

export function getDeleteProjectsProjectNamePlacementsPlacementNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectName']['placements'][':placementName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectName']['placements'][':placementName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectNamePlacementsPlacementNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectName']['placements'][':placementName']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':projectName'].placements[':placementName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectsProjectNamePlacementsPlacementName<
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
                    (typeof client.projects)[':projectName']['placements'][':placementName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectName']['placements'][':placementName']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectNamePlacementsPlacementNameMutationOptions<
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

export function getProjectsProjectNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['projects', '/projects/:projectName', keyArgs] as const
}

export function getProjectsProjectNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProjectsProjectNameMutationKey() {
  return ['projects', '/projects/:projectName', 'PUT'] as const
}

export function getPutProjectsProjectNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectName']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':projectName']['$put']>) {
      return parseResponse(client.projects[':projectName'].$put(args, options))
    },
  })
}

export function usePutProjectsProjectName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectName']['$put']>,
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
  const mutationDefaults = getPutProjectsProjectNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteProjectsProjectNameMutationKey() {
  return ['projects', '/projects/:projectName', 'DELETE'] as const
}

export function getDeleteProjectsProjectNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':projectName']['$delete']>) {
      return parseResponse(client.projects[':projectName'].$delete(args, options))
    },
  })
}

export function useDeleteProjectsProjectName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectName']['$delete']>,
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
  const mutationDefaults = getDeleteProjectsProjectNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProjectsProjectNamePlacementsPlacementNameDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectName']['placements'][':placementName']['devices']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['projects', '/projects/:projectName/placements/:placementName/devices', keyArgs] as const
}

export function getProjectsProjectNamePlacementsPlacementNameDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectName']['placements'][':placementName']['devices']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectNamePlacementsPlacementNameDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectName'].placements[':placementName'].devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectNamePlacementsPlacementNameDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectName']['placements'][':placementName']['devices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectName']['placements'][':placementName']['devices']['$get']
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
                    (typeof client.projects)[':projectName']['placements'][':placementName']['devices']['$get']
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
                    (typeof client.projects)[':projectName']['placements'][':placementName']['devices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectNamePlacementsPlacementNameDevicesQueryKey>
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
              (typeof client.projects)[':projectName']['placements'][':placementName']['devices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectNamePlacementsPlacementNameDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectNamePlacementsPlacementNameDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectName'].placements[':placementName'].devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
