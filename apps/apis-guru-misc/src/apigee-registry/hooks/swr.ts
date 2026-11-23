import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1ProjectsProjectLocationsLocationApisKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/locations/:location/apis', args] as const
}

export function useGetV1ProjectsProjectLocationsLocationApis<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectLocationsLocationApis<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectLocationsLocationApisKey() {
  return ['v1', '/v1/projects/:project/locations/:location/apis', 'POST'] as const
}

export function usePostV1ProjectsProjectLocationsLocationApis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectLocationsLocationApisKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectLocationsLocationApisApiKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/locations/:location/apis/:api', args] as const
}

export function useGetV1ProjectsProjectLocationsLocationApisApi<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectLocationsLocationApisApi<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectLocationsLocationApisApiKey() {
  return ['v1', '/v1/projects/:project/locations/:location/apis/:api', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectLocationsLocationApisApi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectLocationsLocationApisApiKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsProjectLocationsLocationApisApiKey() {
  return ['v1', '/v1/projects/:project/locations/:location/apis/:api', 'PATCH'] as const
}

export function usePatchV1ProjectsProjectLocationsLocationApisApi<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsProjectLocationsLocationApisApiKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectLocationsLocationApisApiDeploymentsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/locations/:location/apis/:api/deployments', args] as const
}

export function useGetV1ProjectsProjectLocationsLocationApisApiDeployments<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiDeploymentsKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].deployments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectLocationsLocationApisApiDeployments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiDeploymentsKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].deployments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsKey() {
  return ['v1', '/v1/projects/:project/locations/:location/apis/:api/deployments', 'POST'] as const
}

export function usePostV1ProjectsProjectLocationsLocationApisApiDeployments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].deployments.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentKey(
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

export function useGetV1ProjectsProjectLocationsLocationApisApiDeploymentsDeployment<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
            ':deployment'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectLocationsLocationApisApiDeploymentsDeployment<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
            ':deployment'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment',
    'DELETE',
  ] as const
}

export function useDeleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeployment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
            ':deployment'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment',
    'PATCH',
  ] as const
}

export function usePatchV1ProjectsProjectLocationsLocationApisApiDeploymentsDeployment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
            ':deployment'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentDeleteRevisionKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment:deleteRevision',
    'DELETE',
  ] as const
}

export function useDeleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentDeleteRevision<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:deleteRevision']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentDeleteRevisionKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:deleteRevision']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
            ':deployment:deleteRevision'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisionsKey(
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

export function useGetV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisionsKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
            ':deployment:listRevisions'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisionsKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:listRevisions']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
            ':deployment:listRevisions'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentRollbackKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment:rollback',
    'POST',
  ] as const
}

export function usePostV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentRollback<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:rollback']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentRollbackKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:rollback']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
            ':deployment:rollback'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentTagRevisionKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/deployments/:deployment:tagRevision',
    'POST',
  ] as const
}

export function usePostV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentTagRevision<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:tagRevision']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentTagRevisionKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['deployments'][':deployment:tagRevision']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].deployments[
            ':deployment:tagRevision'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectLocationsLocationApisApiVersionsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/locations/:location/apis/:api/versions', args] as const
}

export function useGetV1ProjectsProjectLocationsLocationApisApiVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiVersionsKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectLocationsLocationApisApiVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiVersionsKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectLocationsLocationApisApiVersionsKey() {
  return ['v1', '/v1/projects/:project/locations/:location/apis/:api/versions', 'POST'] as const
}

export function usePostV1ProjectsProjectLocationsLocationApisApiVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectLocationsLocationApisApiVersionsKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionKey(
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

export function useGetV1ProjectsProjectLocationsLocationApisApiVersionsVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectLocationsLocationApisApiVersionsVersion<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version',
    'DELETE',
  ] as const
}

export function useDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsProjectLocationsLocationApisApiVersionsVersionKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version',
    'PATCH',
  ] as const
}

export function usePatchV1ProjectsProjectLocationsLocationApisApiVersionsVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsProjectLocationsLocationApisApiVersionsVersionKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsKey(
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

export function useGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs',
    'POST',
  ] as const
}

export function usePostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecKey(
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

export function useGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpec<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs[':spec'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpec<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs[':spec'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec',
    'DELETE',
  ] as const
}

export function useDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpec<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs[':spec'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec',
    'PATCH',
  ] as const
}

export function usePatchV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpec<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs[':spec'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecDeleteRevisionKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec:deleteRevision',
    'DELETE',
  ] as const
}

export function useDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecDeleteRevision<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:deleteRevision']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecDeleteRevisionKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:deleteRevision']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs[':spec:deleteRevision'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContentsKey(
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

export function useGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContents<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContentsKey(
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs[':spec:getContents'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContents<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContentsKey(
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:getContents']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs[':spec:getContents'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsKey(
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

export function useGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsKey(
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs[':spec:listRevisions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsKey(
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
                (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:listRevisions']['$get']
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
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs[':spec:listRevisions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecRollbackKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec:rollback',
    'POST',
  ] as const
}

export function usePostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecRollback<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:rollback']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecRollbackKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:rollback']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs[':spec:rollback'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecTagRevisionKey() {
  return [
    'v1',
    '/v1/projects/:project/locations/:location/apis/:api/versions/:version/specs/:spec:tagRevision',
    'POST',
  ] as const
}

export function usePostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecTagRevision<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:tagRevision']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecTagRevisionKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['apis'][':api']['versions'][':version']['specs'][':spec:tagRevision']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].apis[':api'].versions[
            ':version'
          ].specs[':spec:tagRevision'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectLocationsLocationArtifactsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/locations/:location/artifacts', args] as const
}

export function useGetV1ProjectsProjectLocationsLocationArtifacts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationArtifactsKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
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
          client.v1.projects[':project'].locations[':location'].artifacts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectLocationsLocationArtifacts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationArtifactsKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$get']
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
          client.v1.projects[':project'].locations[':location'].artifacts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectLocationsLocationArtifactsKey() {
  return ['v1', '/v1/projects/:project/locations/:location/artifacts', 'POST'] as const
}

export function usePostV1ProjectsProjectLocationsLocationArtifacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectLocationsLocationArtifactsKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['artifacts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].artifacts.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectLocationsLocationArtifactsArtifactKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/locations/:location/artifacts/:artifact', args] as const
}

export function useGetV1ProjectsProjectLocationsLocationArtifactsArtifact<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationArtifactsArtifactKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
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
          client.v1.projects[':project'].locations[':location'].artifacts[':artifact'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectLocationsLocationArtifactsArtifact<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationArtifactsArtifactKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$get']
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
          client.v1.projects[':project'].locations[':location'].artifacts[':artifact'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsProjectLocationsLocationArtifactsArtifactKey() {
  return ['v1', '/v1/projects/:project/locations/:location/artifacts/:artifact', 'PUT'] as const
}

export function usePutV1ProjectsProjectLocationsLocationArtifactsArtifact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsProjectLocationsLocationArtifactsArtifactKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].artifacts[':artifact'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectLocationsLocationArtifactsArtifactKey() {
  return ['v1', '/v1/projects/:project/locations/:location/artifacts/:artifact', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectLocationsLocationArtifactsArtifact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectLocationsLocationArtifactsArtifactKey()
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
            (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].locations[':location'].artifacts[':artifact'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsKey(
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

export function useGetV1ProjectsProjectLocationsLocationArtifactsArtifactGetContents<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
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
          client.v1.projects[':project'].locations[':location'].artifacts[
            ':artifact:getContents'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectLocationsLocationArtifactsArtifactGetContents<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsKey(args)
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
                (typeof client.v1.projects)[':project']['locations'][':location']['artifacts'][':artifact:getContents']['$get']
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
          client.v1.projects[':project'].locations[':location'].artifacts[
            ':artifact:getContents'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
