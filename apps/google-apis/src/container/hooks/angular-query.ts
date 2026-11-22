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

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getV1beta1ProjectsProjectIdZonesZoneClustersQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/projects/:projectId/zones/:zone/clusters', args] as const
}

export function getV1beta1ProjectsProjectIdZonesZoneClustersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ProjectsProjectIdZonesZoneClustersQueryKey>
  >({
    queryKey: getV1beta1ProjectsProjectIdZonesZoneClustersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ProjectsProjectIdZonesZoneClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ProjectsProjectIdZonesZoneClustersQueryKey>
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
      ...getV1beta1ProjectsProjectIdZonesZoneClustersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersMutationKey() {
  return ['v1beta1', '/v1beta1/projects/:projectId/zones/:zone/clusters', 'POST'] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ProjectsProjectIdZonesZoneClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters.$post(args, options),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClusters<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$post']
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
    const mutationDefaults = getPostV1beta1ProjectsProjectIdZonesZoneClustersMutationOptions<
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

export function getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId', args] as const
}

export function getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdQueryKey>
  >({
    queryKey: getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ProjectsProjectIdZonesZoneClustersClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdQueryKey>
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
      ...getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMutationKey() {
  return ['v1beta1', '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId', 'PUT'] as const
}

export function getPutV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutV1beta1ProjectsProjectIdZonesZoneClustersClusterId<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$put']
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
      getPutV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMutationOptions<
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

export function getDeleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId',
    'DELETE',
  ] as const
}

export function getDeleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV1beta1ProjectsProjectIdZonesZoneClustersClusterId<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$delete']
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
      getDeleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdAddonsMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/addons',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['addons']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['addons']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdAddonsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['addons']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].addons.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdAddons<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['addons']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['addons']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdAddonsMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLegacyAbacMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/legacyAbac',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLegacyAbacMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['legacyAbac']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['legacyAbac']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLegacyAbacMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['legacyAbac']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
          ':clusterId'
        ].legacyAbac.$post(args, options),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLegacyAbac<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['legacyAbac']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['legacyAbac']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLegacyAbacMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLocationsMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/locations',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['locations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['locations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['locations']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].locations.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLocations<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['locations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['locations']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLocationsMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLoggingMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/logging',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLoggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['logging']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['logging']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLoggingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['logging']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].logging.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLogging<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['logging']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['logging']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLoggingMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMasterMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/master',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMasterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['master']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['master']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMasterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['master']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].master.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMaster<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['master']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['master']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMasterMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMonitoringMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/monitoring',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMonitoringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['monitoring']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['monitoring']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMonitoringMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['monitoring']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
          ':clusterId'
        ].monitoring.$post(args, options),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMonitoring<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['monitoring']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['monitoring']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMonitoringMutationOptions<
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

export function getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$get']
  >,
) {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools',
    args,
  ] as const
}

export function getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsQueryKey>
  >({
    queryKey: getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsQueryKey>
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
      ...getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePools<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsMutationOptions<
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

export function getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$get']
  >,
) {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId',
    args,
  ] as const
}

export function getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdQueryKey
    >
  >({
    queryKey:
      getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
          ':nodePoolId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdQueryKey
        >
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
      ...getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId',
    'DELETE',
  ] as const
}

export function getDeleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
          ':nodePoolId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolId<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$delete']
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
      getDeleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdAutoscalingMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId/autoscaling',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdAutoscalingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['autoscaling']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['autoscaling']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdAutoscalingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['autoscaling']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
          ':nodePoolId'
        ].autoscaling.$post(args, options),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdAutoscaling<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['autoscaling']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['autoscaling']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdAutoscalingMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetManagementMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId/setManagement',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetManagementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setManagement']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setManagement']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetManagementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setManagement']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
          ':nodePoolId'
        ].setManagement.$post(args, options),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetManagement<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setManagement']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setManagement']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetManagementMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetSizeMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId/setSize',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetSizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setSize']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setSize']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetSizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setSize']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
          ':nodePoolId'
        ].setSize.$post(args, options),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetSize<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setSize']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setSize']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetSizeMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdUpdateMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId/update',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
          ':nodePoolId'
        ].update.$post(args, options),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdUpdate<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['update']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['update']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdUpdateMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRollbackMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId:rollback',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRollbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId:rollback']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId:rollback']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRollbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId:rollback']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
          ':nodePoolId:rollback'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRollback<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId:rollback']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId:rollback']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRollbackMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdResourceLabelsMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/resourceLabels',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdResourceLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['resourceLabels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['resourceLabels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdResourceLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['resourceLabels']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
          ':clusterId'
        ].resourceLabels.$post(args, options),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdResourceLabels<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['resourceLabels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['resourceLabels']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdResourceLabelsMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdCompleteIpRotationMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId:completeIpRotation',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdCompleteIpRotationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:completeIpRotation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:completeIpRotation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdCompleteIpRotationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:completeIpRotation']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
          ':clusterId:completeIpRotation'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdCompleteIpRotation<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:completeIpRotation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:completeIpRotation']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdCompleteIpRotationMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMaintenancePolicyMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId:setMaintenancePolicy',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMaintenancePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMaintenancePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMaintenancePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMaintenancePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMaintenancePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
          ':clusterId:setMaintenancePolicy'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMaintenancePolicy<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMaintenancePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMaintenancePolicy']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMaintenancePolicyMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMasterAuthMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId:setMasterAuth',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMasterAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMasterAuth']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMasterAuth']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMasterAuthMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMasterAuth']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
          ':clusterId:setMasterAuth'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMasterAuth<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMasterAuth']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMasterAuth']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMasterAuthMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetNetworkPolicyMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId:setNetworkPolicy',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetNetworkPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setNetworkPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setNetworkPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetNetworkPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setNetworkPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
          ':clusterId:setNetworkPolicy'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetNetworkPolicy<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setNetworkPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setNetworkPolicy']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetNetworkPolicyMutationOptions<
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

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdStartIpRotationMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId:startIpRotation',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdStartIpRotationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:startIpRotation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:startIpRotation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdStartIpRotationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:startIpRotation']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
          ':clusterId:startIpRotation'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdStartIpRotation<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:startIpRotation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:startIpRotation']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdStartIpRotationMutationOptions<
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

export function getV1beta1ProjectsProjectIdZonesZoneOperationsQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/projects/:projectId/zones/:zone/operations', args] as const
}

export function getV1beta1ProjectsProjectIdZonesZoneOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ProjectsProjectIdZonesZoneOperationsQueryKey>
  >({
    queryKey: getV1beta1ProjectsProjectIdZonesZoneOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ProjectsProjectIdZonesZoneOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ProjectsProjectIdZonesZoneOperationsQueryKey>
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
      ...getV1beta1ProjectsProjectIdZonesZoneOperationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId']['$get']
  >,
) {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/operations/:operationId',
    args,
  ] as const
}

export function getV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdQueryKey>
  >({
    queryKey: getV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].operations[':operationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ProjectsProjectIdZonesZoneOperationsOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdQueryKey>
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
      ...getV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdCancelMutationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/operations/:operationId:cancel',
    'POST',
  ] as const
}

export function getPostV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId:cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId:cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId:cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].operations[
          ':operationId:cancel'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdCancel<
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
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId:cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId:cancel']['$post']
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
      getPostV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdCancelMutationOptions<
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

export function getV1beta1ProjectsProjectIdZonesZoneServerconfigQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['serverconfig']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/projects/:projectId/zones/:zone/serverconfig', args] as const
}

export function getV1beta1ProjectsProjectIdZonesZoneServerconfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['serverconfig']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['serverconfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['serverconfig']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ProjectsProjectIdZonesZoneServerconfigQueryKey>
  >({
    queryKey: getV1beta1ProjectsProjectIdZonesZoneServerconfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.projects[':projectId'].zones[':zone'].serverconfig.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ProjectsProjectIdZonesZoneServerconfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['serverconfig']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['serverconfig']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['serverconfig']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ProjectsProjectIdZonesZoneServerconfigQueryKey>
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
      ...getV1beta1ProjectsProjectIdZonesZoneServerconfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1beta1NameQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name', args] as const
}

export function getV1beta1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameQueryKey>
  >({
    queryKey: getV1beta1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'PUT'] as const
}

export function getPutV1beta1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$put']>) {
      return parseResponse(client.v1beta1[':name'].$put(args, options))
    },
  })
}

export function injectPutV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name']['$put']>,
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
    const mutationDefaults = getPutV1beta1NameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'DELETE'] as const
}

export function getDeleteV1beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>) {
      return parseResponse(client.v1beta1[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1beta1NameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1beta1NameServerConfigQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':name']['serverConfig']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name/serverConfig', args] as const
}

export function getV1beta1NameServerConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name']['serverConfig']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['serverConfig']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name']['serverConfig']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameServerConfigQueryKey>
  >({
    queryKey: getV1beta1NameServerConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':name'].serverConfig.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1NameServerConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name']['serverConfig']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':name']['serverConfig']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name']['serverConfig']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1NameServerConfigQueryKey>
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
      ...getV1beta1NameServerConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1beta1NameCancelMutationKey() {
  return ['v1beta1', '/v1beta1/:name:cancel', 'POST'] as const
}

export function getPostV1beta1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>) {
      return parseResponse(client.v1beta1[':name:cancel'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1beta1NameCheckAutopilotCompatibilityQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':name:checkAutopilotCompatibility']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name:checkAutopilotCompatibility', args] as const
}

export function getV1beta1NameCheckAutopilotCompatibilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name:checkAutopilotCompatibility']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name:checkAutopilotCompatibility']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:checkAutopilotCompatibility']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameCheckAutopilotCompatibilityQueryKey>
  >({
    queryKey: getV1beta1NameCheckAutopilotCompatibilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':name:checkAutopilotCompatibility'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1NameCheckAutopilotCompatibility<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name:checkAutopilotCompatibility']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1)[':name:checkAutopilotCompatibility']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1beta1)[':name:checkAutopilotCompatibility']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1NameCheckAutopilotCompatibilityQueryKey>
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
      ...getV1beta1NameCheckAutopilotCompatibilityQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1beta1NameCompleteIpRotationMutationKey() {
  return ['v1beta1', '/v1beta1/:name:completeIpRotation', 'POST'] as const
}

export function getPostV1beta1NameCompleteIpRotationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:completeIpRotation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:completeIpRotation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameCompleteIpRotationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:completeIpRotation']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:completeIpRotation'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameCompleteIpRotation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:completeIpRotation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:completeIpRotation']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameCompleteIpRotationMutationOptions<
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

export function getPostV1beta1NameCompleteUpgradeMutationKey() {
  return ['v1beta1', '/v1beta1/:name:completeUpgrade', 'POST'] as const
}

export function getPostV1beta1NameCompleteUpgradeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:completeUpgrade']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:completeUpgrade']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameCompleteUpgradeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:completeUpgrade']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:completeUpgrade'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameCompleteUpgrade<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:completeUpgrade']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:completeUpgrade']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameCompleteUpgradeMutationOptions<
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

export function getPostV1beta1NameRollbackMutationKey() {
  return ['v1beta1', '/v1beta1/:name:rollback', 'POST'] as const
}

export function getPostV1beta1NameRollbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:rollback']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:rollback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameRollbackMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:rollback']['$post']>) {
      return parseResponse(client.v1beta1[':name:rollback'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameRollback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:rollback']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:rollback']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameRollbackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1beta1NameSetAddonsMutationKey() {
  return ['v1beta1', '/v1beta1/:name:setAddons', 'POST'] as const
}

export function getPostV1beta1NameSetAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setAddons']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:setAddons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameSetAddonsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:setAddons']['$post']>) {
      return parseResponse(client.v1beta1[':name:setAddons'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameSetAddons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:setAddons']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:setAddons']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameSetAddonsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1beta1NameSetAutoscalingMutationKey() {
  return ['v1beta1', '/v1beta1/:name:setAutoscaling', 'POST'] as const
}

export function getPostV1beta1NameSetAutoscalingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setAutoscaling']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:setAutoscaling']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameSetAutoscalingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:setAutoscaling']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:setAutoscaling'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameSetAutoscaling<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:setAutoscaling']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:setAutoscaling']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameSetAutoscalingMutationOptions<
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

export function getPostV1beta1NameSetLegacyAbacMutationKey() {
  return ['v1beta1', '/v1beta1/:name:setLegacyAbac', 'POST'] as const
}

export function getPostV1beta1NameSetLegacyAbacMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setLegacyAbac']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:setLegacyAbac']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameSetLegacyAbacMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:setLegacyAbac']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:setLegacyAbac'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameSetLegacyAbac<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:setLegacyAbac']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:setLegacyAbac']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameSetLegacyAbacMutationOptions<
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

export function getPostV1beta1NameSetLocationsMutationKey() {
  return ['v1beta1', '/v1beta1/:name:setLocations', 'POST'] as const
}

export function getPostV1beta1NameSetLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setLocations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:setLocations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameSetLocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:setLocations']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:setLocations'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameSetLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:setLocations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:setLocations']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameSetLocationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1beta1NameSetLoggingMutationKey() {
  return ['v1beta1', '/v1beta1/:name:setLogging', 'POST'] as const
}

export function getPostV1beta1NameSetLoggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setLogging']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:setLogging']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameSetLoggingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:setLogging']['$post']>) {
      return parseResponse(client.v1beta1[':name:setLogging'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameSetLogging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:setLogging']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:setLogging']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameSetLoggingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1beta1NameSetMaintenancePolicyMutationKey() {
  return ['v1beta1', '/v1beta1/:name:setMaintenancePolicy', 'POST'] as const
}

export function getPostV1beta1NameSetMaintenancePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setMaintenancePolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:setMaintenancePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameSetMaintenancePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:setMaintenancePolicy']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:setMaintenancePolicy'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameSetMaintenancePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:setMaintenancePolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:setMaintenancePolicy']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameSetMaintenancePolicyMutationOptions<
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

export function getPostV1beta1NameSetManagementMutationKey() {
  return ['v1beta1', '/v1beta1/:name:setManagement', 'POST'] as const
}

export function getPostV1beta1NameSetManagementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setManagement']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:setManagement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameSetManagementMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:setManagement']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:setManagement'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameSetManagement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:setManagement']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:setManagement']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameSetManagementMutationOptions<
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

export function getPostV1beta1NameSetMasterAuthMutationKey() {
  return ['v1beta1', '/v1beta1/:name:setMasterAuth', 'POST'] as const
}

export function getPostV1beta1NameSetMasterAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setMasterAuth']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:setMasterAuth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameSetMasterAuthMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:setMasterAuth']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:setMasterAuth'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameSetMasterAuth<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:setMasterAuth']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:setMasterAuth']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameSetMasterAuthMutationOptions<
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

export function getPostV1beta1NameSetMonitoringMutationKey() {
  return ['v1beta1', '/v1beta1/:name:setMonitoring', 'POST'] as const
}

export function getPostV1beta1NameSetMonitoringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setMonitoring']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:setMonitoring']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameSetMonitoringMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:setMonitoring']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:setMonitoring'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameSetMonitoring<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:setMonitoring']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:setMonitoring']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameSetMonitoringMutationOptions<
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

export function getPostV1beta1NameSetNetworkPolicyMutationKey() {
  return ['v1beta1', '/v1beta1/:name:setNetworkPolicy', 'POST'] as const
}

export function getPostV1beta1NameSetNetworkPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setNetworkPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:setNetworkPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameSetNetworkPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:setNetworkPolicy']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:setNetworkPolicy'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameSetNetworkPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:setNetworkPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:setNetworkPolicy']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameSetNetworkPolicyMutationOptions<
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

export function getPostV1beta1NameSetResourceLabelsMutationKey() {
  return ['v1beta1', '/v1beta1/:name:setResourceLabels', 'POST'] as const
}

export function getPostV1beta1NameSetResourceLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setResourceLabels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:setResourceLabels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameSetResourceLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:setResourceLabels']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:setResourceLabels'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameSetResourceLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:setResourceLabels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:setResourceLabels']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameSetResourceLabelsMutationOptions<
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

export function getPostV1beta1NameSetSizeMutationKey() {
  return ['v1beta1', '/v1beta1/:name:setSize', 'POST'] as const
}

export function getPostV1beta1NameSetSizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:setSize']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:setSize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameSetSizeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:setSize']['$post']>) {
      return parseResponse(client.v1beta1[':name:setSize'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameSetSize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:setSize']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:setSize']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameSetSizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1beta1NameStartIpRotationMutationKey() {
  return ['v1beta1', '/v1beta1/:name:startIpRotation', 'POST'] as const
}

export function getPostV1beta1NameStartIpRotationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:startIpRotation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:startIpRotation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameStartIpRotationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:startIpRotation']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:startIpRotation'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameStartIpRotation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:startIpRotation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:startIpRotation']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameStartIpRotationMutationOptions<
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

export function getPostV1beta1NameUpdateMasterMutationKey() {
  return ['v1beta1', '/v1beta1/:name:updateMaster', 'POST'] as const
}

export function getPostV1beta1NameUpdateMasterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:updateMaster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:updateMaster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameUpdateMasterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:updateMaster']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:updateMaster'].$post(args, options))
    },
  })
}

export function injectPostV1beta1NameUpdateMaster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:updateMaster']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:updateMaster']['$post']>,
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
    const mutationDefaults = getPostV1beta1NameUpdateMasterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1beta1ParentWellKnownOpenidConfigurationQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['.well-known']['openid-configuration']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/.well-known/openid-configuration', args] as const
}

export function getV1beta1ParentWellKnownOpenidConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':parent']['.well-known']['openid-configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['.well-known']['openid-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1)[':parent']['.well-known']['openid-configuration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentWellKnownOpenidConfigurationQueryKey>
  >({
    queryKey: getV1beta1ParentWellKnownOpenidConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent']['.well-known']['openid-configuration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentWellKnownOpenidConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1beta1)[':parent']['.well-known']['openid-configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1)[':parent']['.well-known']['openid-configuration']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':parent']['.well-known']['openid-configuration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentWellKnownOpenidConfigurationQueryKey>
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
      ...getV1beta1ParentWellKnownOpenidConfigurationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1beta1ParentAggregatedUsableSubnetworksQueryKey(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['aggregated']['usableSubnetworks']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/aggregated/usableSubnetworks', args] as const
}

export function getV1beta1ParentAggregatedUsableSubnetworksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1)[':parent']['aggregated']['usableSubnetworks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['aggregated']['usableSubnetworks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1)[':parent']['aggregated']['usableSubnetworks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentAggregatedUsableSubnetworksQueryKey>
  >({
    queryKey: getV1beta1ParentAggregatedUsableSubnetworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent'].aggregated.usableSubnetworks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentAggregatedUsableSubnetworks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1)[':parent']['aggregated']['usableSubnetworks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1)[':parent']['aggregated']['usableSubnetworks']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1beta1)[':parent']['aggregated']['usableSubnetworks']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentAggregatedUsableSubnetworksQueryKey>
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
      ...getV1beta1ParentAggregatedUsableSubnetworksQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1beta1ParentClustersQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['clusters']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/clusters', args] as const
}

export function getV1beta1ParentClustersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['clusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['clusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['clusters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentClustersQueryKey>
  >({
    queryKey: getV1beta1ParentClustersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent'].clusters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['clusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':parent']['clusters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['clusters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentClustersQueryKey>
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
      ...getV1beta1ParentClustersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1beta1ParentClustersMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/clusters', 'POST'] as const
}

export function getPostV1beta1ParentClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['clusters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['clusters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['clusters']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent'].clusters.$post(args, options))
    },
  })
}

export function injectPostV1beta1ParentClusters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['clusters']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':parent']['clusters']['$post']>,
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
    const mutationDefaults = getPostV1beta1ParentClustersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1beta1ParentJwksQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['jwks']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/jwks', args] as const
}

export function getV1beta1ParentJwksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':parent']['jwks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['jwks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['jwks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentJwksQueryKey>
  >({
    queryKey: getV1beta1ParentJwksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent'].jwks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentJwks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':parent']['jwks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':parent']['jwks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['jwks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentJwksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1ParentJwksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1beta1ParentLocationsQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['locations']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/locations', args] as const
}

export function getV1beta1ParentLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentLocationsQueryKey>
  >({
    queryKey: getV1beta1ParentLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent'].locations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':parent']['locations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentLocationsQueryKey>
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
      ...getV1beta1ParentLocationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1beta1ParentNodePoolsQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['nodePools']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/nodePools', args] as const
}

export function getV1beta1ParentNodePoolsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['nodePools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['nodePools']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['nodePools']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentNodePoolsQueryKey>
  >({
    queryKey: getV1beta1ParentNodePoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent'].nodePools.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentNodePools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['nodePools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':parent']['nodePools']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['nodePools']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentNodePoolsQueryKey>
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
      ...getV1beta1ParentNodePoolsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1beta1ParentNodePoolsMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/nodePools', 'POST'] as const
}

export function getPostV1beta1ParentNodePoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['nodePools']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['nodePools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentNodePoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['nodePools']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent'].nodePools.$post(args, options))
    },
  })
}

export function injectPostV1beta1ParentNodePools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['nodePools']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':parent']['nodePools']['$post']>,
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
    const mutationDefaults = getPostV1beta1ParentNodePoolsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1beta1ParentOperationsQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['operations']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/operations', args] as const
}

export function getV1beta1ParentOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentOperationsQueryKey>
  >({
    queryKey: getV1beta1ParentOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1beta1ParentOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1)[':parent']['operations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentOperationsQueryKey>
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
      ...getV1beta1ParentOperationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
