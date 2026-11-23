import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPutProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProjectsProjectNamePlacementsQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectName']['placements']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['projects', '/projects/:projectName/placements', keyArgs] as const
}

export function getProjectsProjectNamePlacementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectName']['placements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectName']['placements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectNamePlacementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectName'].placements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProjectsProjectNamePlacements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectName']['placements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectName']['placements']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectNamePlacementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostProjectsProjectNamePlacements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectNamePlacementsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProjectsQueryKey(args: InferRequestType<typeof client.projects.$get>) {
  const { header: _, ...keyArgs } = args
  return ['projects', '/projects', keyArgs] as const
}

export function getProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >({
    queryKey: getProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.projects.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.projects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProjectsProjectNamePlacementsPlacementNameQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectName']['placements'][':placementName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['projects', '/projects/:projectName/placements/:placementName', keyArgs] as const
}

export function getProjectsProjectNamePlacementsPlacementNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':projectName']['placements'][':placementName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectNamePlacementsPlacementNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectName'].placements[':placementName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProjectsProjectNamePlacementsPlacementName<
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
  args: () => InferRequestType<
    (typeof client.projects)[':projectName']['placements'][':placementName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectNamePlacementsPlacementNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutProjectsProjectNamePlacementsPlacementName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProjectsProjectNamePlacementsPlacementNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteProjectsProjectNamePlacementsPlacementName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectsProjectNamePlacementsPlacementNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProjectsProjectNameQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['projects', '/projects/:projectName', keyArgs] as const
}

export function getProjectsProjectNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectNameQueryKey>
  >({
    queryKey: getProjectsProjectNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProjectsProjectName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsProjectNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutProjectsProjectName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProjectsProjectNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteProjectsProjectName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectsProjectNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProjectsProjectNamePlacementsPlacementNameDevicesQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectName']['placements'][':placementName']['devices']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['projects', '/projects/:projectName/placements/:placementName/devices', keyArgs] as const
}

export function getProjectsProjectNamePlacementsPlacementNameDevicesQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':projectName']['placements'][':placementName']['devices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectNamePlacementsPlacementNameDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectName'].placements[':placementName'].devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProjectsProjectNamePlacementsPlacementNameDevices<
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
  args: () => InferRequestType<
    (typeof client.projects)[':projectName']['placements'][':placementName']['devices']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectNamePlacementsPlacementNameDevicesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
