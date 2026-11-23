import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDeploymentmanagerKey() {
  return ['deploymentmanager'] as const
}

export function getGetDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/compositeTypes',
    args,
  ] as const
}

export function useGetDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/compositeTypes',
    'POST',
  ] as const
}

export function usePostDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesKey()
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
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/compositeTypes/:compositeType',
    args,
  ] as const
}

export function useGetDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes[
            ':compositeType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes[
            ':compositeType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/compositeTypes/:compositeType',
    'PUT',
  ] as const
}

export function usePutDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeKey()
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
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$put']
          >
        },
      ) =>
        parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes[
            ':compositeType'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/compositeTypes/:compositeType',
    'DELETE',
  ] as const
}

export function useDeleteDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeKey()
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
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes[
            ':compositeType'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/compositeTypes/:compositeType',
    'PATCH',
  ] as const
}

export function usePatchDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeKey()
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
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes[
            ':compositeType'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments',
    args,
  ] as const
}

export function useGetDeploymentmanagerV2betaProjectsProjectGlobalDeployments<TError = unknown>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.deployments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentmanagerV2betaProjectsProjectGlobalDeployments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.deployments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments',
    'POST',
  ] as const
}

export function usePostDeploymentmanagerV2betaProjectsProjectGlobalDeployments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsKey()
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
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.deployments.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment',
    args,
  ] as const
}

export function useGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeployment<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeployment<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment',
    'PUT',
  ] as const
}

export function usePutDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeployment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentKey()
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
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$put']
          >
        },
      ) =>
        parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment',
    'DELETE',
  ] as const
}

export function useDeleteDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeployment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentKey()
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
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment',
    'PATCH',
  ] as const
}

export function usePatchDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeployment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentKey()
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
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentCancelPreviewKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/cancelPreview',
    'POST',
  ] as const
}

export function usePostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentCancelPreview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['cancelPreview']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['cancelPreview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentCancelPreviewKey()
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
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['cancelPreview']['$post']
          >
        },
      ) =>
        parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].cancelPreview.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/manifests',
    args,
  ] as const
}

export function useGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifests<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].manifests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifests<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].manifests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/manifests/:manifest',
    args,
  ] as const
}

export function useGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifest<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestKey(
            args,
          )
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].manifests[':manifest'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifest<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifestKey(
            args,
          )
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].manifests[':manifest'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/resources',
    args,
  ] as const
}

export function useGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResources<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].resources.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResources<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].resources.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/resources/:resource',
    args,
  ] as const
}

export function useGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResource<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceKey(
            args,
          )
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].resources[':resource'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResource<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResourceKey(
            args,
          )
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].resources[':resource'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentStopKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:deployment/stop',
    'POST',
  ] as const
}

export function usePostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentStop<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['stop']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentStopKey()
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
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['stop']['$post']
          >
        },
      ) =>
        parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':deployment'
          ].stop.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:resource/getIamPolicy',
    args,
  ] as const
}

export function useGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicy<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':resource'
          ].getIamPolicy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicy<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicyKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':resource'
          ].getIamPolicy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceSetIamPolicyKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:resource/setIamPolicy',
    'POST',
  ] as const
}

export function usePostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceSetIamPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['setIamPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['setIamPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceSetIamPolicyKey()
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
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['setIamPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':resource'
          ].setIamPolicy.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceTestIamPermissionsKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/deployments/:resource/testIamPermissions',
    'POST',
  ] as const
}

export function usePostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceTestIamPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['testIamPermissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['testIamPermissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceTestIamPermissionsKey()
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
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['testIamPermissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.deployments[
            ':resource'
          ].testIamPermissions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDeploymentmanagerV2betaProjectsProjectGlobalOperationsKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/operations',
    args,
  ] as const
}

export function useGetDeploymentmanagerV2betaProjectsProjectGlobalOperations<TError = unknown>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalOperationsKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.operations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentmanagerV2betaProjectsProjectGlobalOperations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalOperationsKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.operations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/operations/:operation',
    args,
  ] as const
}

export function useGetDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperation<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.operations[':operation'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperation<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperationKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.operations[':operation'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders',
    args,
  ] as const
}

export function useGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProviders<TError = unknown>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.typeProviders.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProviders<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.typeProviders.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders',
    'POST',
  ] as const
}

export function usePostDeploymentmanagerV2betaProjectsProjectGlobalTypeProviders<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersKey()
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
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$post']
          >
        },
      ) =>
        parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.typeProviders.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider',
    args,
  ] as const
}

export function useGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProvider<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
            ':typeProvider'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProvider<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
            ':typeProvider'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider',
    'PUT',
  ] as const
}

export function usePutDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProvider<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderKey()
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
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$put']
          >
        },
      ) =>
        parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
            ':typeProvider'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider',
    'DELETE',
  ] as const
}

export function useDeleteDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProvider<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderKey()
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
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
            ':typeProvider'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderKey() {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider',
    'PATCH',
  ] as const
}

export function usePatchDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProvider<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderKey()
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
            (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
            ':typeProvider'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider/types',
    args,
  ] as const
}

export function useGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
            ':typeProvider'
          ].types.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
            ':typeProvider'
          ].types.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/typeProviders/:typeProvider/types/:type',
    args,
  ] as const
}

export function useGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeKey(
            args,
          )
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
            ':typeProvider'
          ].types[':type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeKey(
            args,
          )
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
            ':typeProvider'
          ].types[':type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDeploymentmanagerV2betaProjectsProjectGlobalTypesKey(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
  >,
) {
  return [
    'deploymentmanager',
    '/deploymentmanager/v2beta/projects/:project/global/types',
    args,
  ] as const
}

export function useGetDeploymentmanagerV2betaProjectsProjectGlobalTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalTypesKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.types.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentmanagerV2betaProjectsProjectGlobalTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
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
        ? getGetDeploymentmanagerV2betaProjectsProjectGlobalTypesKey(args)
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
                (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
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
          client.deploymentmanager.v2beta.projects[':project'].global.types.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
