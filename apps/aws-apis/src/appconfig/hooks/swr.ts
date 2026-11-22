import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApplicationsKey() {
  return ['applications'] as const
}

export function getDeployementstrategiesKey() {
  return ['deployementstrategies'] as const
}

export function getDeploymentstrategiesKey() {
  return ['deploymentstrategies'] as const
}

export function getExtensionassociationsKey() {
  return ['extensionassociations'] as const
}

export function getExtensionsKey() {
  return ['extensions'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getGetApplicationsKey(args: InferRequestType<typeof client.applications.$get>) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications', keyArgs] as const
}

export function useGetApplications<TError = unknown>(
  args: InferRequestType<typeof client.applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApplicationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplications<TError = unknown>(
  args: InferRequestType<typeof client.applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApplicationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApplicationsKey() {
  return ['applications', '/applications', 'POST'] as const
}

export function usePostApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.applications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.applications.$post> }) =>
        parseResponse(client.applications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdConfigurationprofilesKey(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications/:ApplicationId/configurationprofiles', keyArgs] as const
}

export function useGetApplicationsApplicationIdConfigurationprofiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
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
        ? getGetApplicationsApplicationIdConfigurationprofilesKey(args)
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
                (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
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
          client.applications[':ApplicationId'].configurationprofiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdConfigurationprofiles<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
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
        ? getGetApplicationsApplicationIdConfigurationprofilesKey(args)
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
                (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
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
          client.applications[':ApplicationId'].configurationprofiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApplicationsApplicationIdConfigurationprofilesKey() {
  return ['applications', '/applications/:ApplicationId/configurationprofiles', 'POST'] as const
}

export function usePostApplicationsApplicationIdConfigurationprofiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['configurationprofiles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApplicationsApplicationIdConfigurationprofilesKey()
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
            (typeof client.applications)[':ApplicationId']['configurationprofiles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.applications[':ApplicationId'].configurationprofiles.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDeploymentstrategiesKey(
  args: InferRequestType<typeof client.deploymentstrategies.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['deploymentstrategies', '/deploymentstrategies', keyArgs] as const
}

export function useGetDeploymentstrategies<TError = unknown>(
  args: InferRequestType<typeof client.deploymentstrategies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$get>>>
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
        ? getGetDeploymentstrategiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deploymentstrategies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentstrategies<TError = unknown>(
  args: InferRequestType<typeof client.deploymentstrategies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$get>>>
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
        ? getGetDeploymentstrategiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deploymentstrategies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeploymentstrategiesKey() {
  return ['deploymentstrategies', '/deploymentstrategies', 'POST'] as const
}

export function usePostDeploymentstrategies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deploymentstrategies.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.deploymentstrategies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeploymentstrategiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.deploymentstrategies.$post> },
      ) => parseResponse(client.deploymentstrategies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdEnvironmentsKey(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['environments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications/:ApplicationId/environments', keyArgs] as const
}

export function useGetApplicationsApplicationIdEnvironments<TError = unknown>(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['environments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.applications)[':ApplicationId']['environments']['$get']>
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
        ? getGetApplicationsApplicationIdEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.applications)[':ApplicationId']['environments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.applications[':ApplicationId'].environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdEnvironments<TError = unknown>(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['environments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.applications)[':ApplicationId']['environments']['$get']>
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
        ? getGetApplicationsApplicationIdEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.applications)[':ApplicationId']['environments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.applications[':ApplicationId'].environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApplicationsApplicationIdEnvironmentsKey() {
  return ['applications', '/applications/:ApplicationId/environments', 'POST'] as const
}

export function usePostApplicationsApplicationIdEnvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.applications)[':ApplicationId']['environments']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.applications)[':ApplicationId']['environments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApplicationsApplicationIdEnvironmentsKey()
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
            (typeof client.applications)[':ApplicationId']['environments']['$post']
          >
        },
      ) =>
        parseResponse(client.applications[':ApplicationId'].environments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtensionsKey(args: InferRequestType<typeof client.extensions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['extensions', '/extensions', keyArgs] as const
}

export function useGetExtensions<TError = unknown>(
  args: InferRequestType<typeof client.extensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExtensionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtensions<TError = unknown>(
  args: InferRequestType<typeof client.extensions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExtensionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExtensionsKey() {
  return ['extensions', '/extensions', 'POST'] as const
}

export function usePostExtensions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extensions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.extensions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExtensionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.extensions.$post> }) =>
        parseResponse(client.extensions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtensionassociationsKey(
  args: InferRequestType<typeof client.extensionassociations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['extensionassociations', '/extensionassociations', keyArgs] as const
}

export function useGetExtensionassociations<TError = unknown>(
  args: InferRequestType<typeof client.extensionassociations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$get>>>
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
        ? getGetExtensionassociationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensionassociations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtensionassociations<TError = unknown>(
  args: InferRequestType<typeof client.extensionassociations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$get>>>
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
        ? getGetExtensionassociationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.extensionassociations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExtensionassociationsKey() {
  return ['extensionassociations', '/extensionassociations', 'POST'] as const
}

export function usePostExtensionassociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.extensionassociations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.extensionassociations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExtensionassociationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.extensionassociations.$post> },
      ) => parseResponse(client.extensionassociations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsContentTypeKey() {
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId/hostedconfigurationversions#Content-Type',
    'POST',
  ] as const
}

export function usePostApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsContentType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions#Content-Type']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions#Content-Type']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsContentTypeKey()
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
            (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions#Content-Type']['$post']
          >
        },
      ) =>
        parseResponse(
          client.applications[':ApplicationId'].configurationprofiles[':ConfigurationProfileId'][
            'hostedconfigurationversions#Content-Type'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdKey(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['applications', '/applications/:ApplicationId', keyArgs] as const
}

export function useGetApplicationsApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$get']>>
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
        ? getGetApplicationsApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.applications[':ApplicationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$get']>>
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
        ? getGetApplicationsApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.applications[':ApplicationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApplicationsApplicationIdKey() {
  return ['applications', '/applications/:ApplicationId', 'DELETE'] as const
}

export function useDeleteApplicationsApplicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.applications)[':ApplicationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApplicationsApplicationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.applications)[':ApplicationId']['$delete']> },
      ) => parseResponse(client.applications[':ApplicationId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApplicationsApplicationIdKey() {
  return ['applications', '/applications/:ApplicationId', 'PATCH'] as const
}

export function usePatchApplicationsApplicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':ApplicationId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.applications)[':ApplicationId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApplicationsApplicationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.applications)[':ApplicationId']['$patch']> },
      ) => parseResponse(client.applications[':ApplicationId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdKey(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId',
    keyArgs,
  ] as const
}

export function useGetApplicationsApplicationIdConfigurationprofilesConfigurationProfileId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
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
        ? getGetApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdKey(args)
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
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
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
          client.applications[':ApplicationId'].configurationprofiles[
            ':ConfigurationProfileId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdConfigurationprofilesConfigurationProfileId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
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
        ? getGetApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdKey(args)
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
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
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
          client.applications[':ApplicationId'].configurationprofiles[
            ':ConfigurationProfileId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdKey() {
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId',
    'DELETE',
  ] as const
}

export function useDeleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdKey()
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
            (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.applications[':ApplicationId'].configurationprofiles[
            ':ConfigurationProfileId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdKey() {
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId',
    'PATCH',
  ] as const
}

export function usePatchApplicationsApplicationIdConfigurationprofilesConfigurationProfileId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdKey()
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
            (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.applications[':ApplicationId'].configurationprofiles[
            ':ConfigurationProfileId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeployementstrategiesDeploymentStrategyIdKey() {
  return [
    'deployementstrategies',
    '/deployementstrategies/:DeploymentStrategyId',
    'DELETE',
  ] as const
}

export function useDeleteDeployementstrategiesDeploymentStrategyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.deployementstrategies)[':DeploymentStrategyId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.deployementstrategies)[':DeploymentStrategyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeployementstrategiesDeploymentStrategyIdKey()
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
            (typeof client.deployementstrategies)[':DeploymentStrategyId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.deployementstrategies[':DeploymentStrategyId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdEnvironmentsEnvironmentIdKey(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId',
    keyArgs,
  ] as const
}

export function useGetApplicationsApplicationIdEnvironmentsEnvironmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
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
        ? getGetApplicationsApplicationIdEnvironmentsEnvironmentIdKey(args)
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
                (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
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
          client.applications[':ApplicationId'].environments[':EnvironmentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdEnvironmentsEnvironmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
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
        ? getGetApplicationsApplicationIdEnvironmentsEnvironmentIdKey(args)
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
                (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
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
          client.applications[':ApplicationId'].environments[':EnvironmentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApplicationsApplicationIdEnvironmentsEnvironmentIdKey() {
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId',
    'DELETE',
  ] as const
}

export function useDeleteApplicationsApplicationIdEnvironmentsEnvironmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApplicationsApplicationIdEnvironmentsEnvironmentIdKey()
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
            (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.applications[':ApplicationId'].environments[':EnvironmentId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApplicationsApplicationIdEnvironmentsEnvironmentIdKey() {
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId',
    'PATCH',
  ] as const
}

export function usePatchApplicationsApplicationIdEnvironmentsEnvironmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApplicationsApplicationIdEnvironmentsEnvironmentIdKey()
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
            (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.applications[':ApplicationId'].environments[':EnvironmentId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetExtensionsExtensionIdentifierKey(
  args: InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['extensions', '/extensions/:ExtensionIdentifier', keyArgs] as const
}

export function useGetExtensionsExtensionIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>>
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
        ? getGetExtensionsExtensionIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.extensions[':ExtensionIdentifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtensionsExtensionIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>>
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
        ? getGetExtensionsExtensionIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.extensions[':ExtensionIdentifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteExtensionsExtensionIdentifierKey() {
  return ['extensions', '/extensions/:ExtensionIdentifier', 'DELETE'] as const
}

export function useDeleteExtensionsExtensionIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteExtensionsExtensionIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$delete']> },
      ) => parseResponse(client.extensions[':ExtensionIdentifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchExtensionsExtensionIdentifierKey() {
  return ['extensions', '/extensions/:ExtensionIdentifier', 'PATCH'] as const
}

export function usePatchExtensionsExtensionIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.extensions)[':ExtensionIdentifier']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchExtensionsExtensionIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$patch']> },
      ) => parseResponse(client.extensions[':ExtensionIdentifier'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExtensionassociationsExtensionAssociationIdKey(
  args: InferRequestType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'extensionassociations',
    '/extensionassociations/:ExtensionAssociationId',
    keyArgs,
  ] as const
}

export function useGetExtensionassociationsExtensionAssociationId<TError = unknown>(
  args: InferRequestType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>
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
        ? getGetExtensionassociationsExtensionAssociationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.extensionassociations[':ExtensionAssociationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExtensionassociationsExtensionAssociationId<TError = unknown>(
  args: InferRequestType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>
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
        ? getGetExtensionassociationsExtensionAssociationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.extensionassociations[':ExtensionAssociationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteExtensionassociationsExtensionAssociationIdKey() {
  return [
    'extensionassociations',
    '/extensionassociations/:ExtensionAssociationId',
    'DELETE',
  ] as const
}

export function useDeleteExtensionassociationsExtensionAssociationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.extensionassociations)[':ExtensionAssociationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteExtensionassociationsExtensionAssociationIdKey()
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
            (typeof client.extensionassociations)[':ExtensionAssociationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.extensionassociations[':ExtensionAssociationId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchExtensionassociationsExtensionAssociationIdKey() {
  return [
    'extensionassociations',
    '/extensionassociations/:ExtensionAssociationId',
    'PATCH',
  ] as const
}

export function usePatchExtensionassociationsExtensionAssociationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchExtensionassociationsExtensionAssociationIdKey()
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
            (typeof client.extensionassociations)[':ExtensionAssociationId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.extensionassociations[':ExtensionAssociationId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberKey(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId/hostedconfigurationversions/:VersionNumber',
    keyArgs,
  ] as const
}

export function useGetApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
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
        ? getGetApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberKey(
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
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
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
          client.applications[':ApplicationId'].configurationprofiles[
            ':ConfigurationProfileId'
          ].hostedconfigurationversions[':VersionNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
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
        ? getGetApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberKey(
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
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
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
          client.applications[':ApplicationId'].configurationprofiles[
            ':ConfigurationProfileId'
          ].hostedconfigurationversions[':VersionNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberKey() {
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId/hostedconfigurationversions/:VersionNumber',
    'DELETE',
  ] as const
}

export function useDeleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberKey()
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
            (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.applications[':ApplicationId'].configurationprofiles[
            ':ConfigurationProfileId'
          ].hostedconfigurationversions[':VersionNumber'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdKey(
  args: InferRequestType<
    (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'applications',
    '/applications/:Application/environments/:Environment/configurations/:Configuration#client_id',
    keyArgs,
  ] as const
}

export function useGetApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
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
        ? getGetApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdKey(
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
                (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
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
          client.applications[':Application'].environments[':Environment'].configurations[
            ':Configuration#client_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
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
        ? getGetApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdKey(
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
                (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
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
          client.applications[':Application'].environments[':Environment'].configurations[
            ':Configuration#client_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberKey(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId/deployments/:DeploymentNumber',
    keyArgs,
  ] as const
}

export function useGetApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
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
        ? getGetApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberKey(
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
                (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
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
          client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments[
            ':DeploymentNumber'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumber<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
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
        ? getGetApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberKey(
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
                (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
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
          client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments[
            ':DeploymentNumber'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberKey() {
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId/deployments/:DeploymentNumber',
    'DELETE',
  ] as const
}

export function useDeleteApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberKey()
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
            (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments[
            ':DeploymentNumber'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDeploymentstrategiesDeploymentStrategyIdKey(
  args: InferRequestType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['deploymentstrategies', '/deploymentstrategies/:DeploymentStrategyId', keyArgs] as const
}

export function useGetDeploymentstrategiesDeploymentStrategyId<TError = unknown>(
  args: InferRequestType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>
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
        ? getGetDeploymentstrategiesDeploymentStrategyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.deploymentstrategies[':DeploymentStrategyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentstrategiesDeploymentStrategyId<TError = unknown>(
  args: InferRequestType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>
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
        ? getGetDeploymentstrategiesDeploymentStrategyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.deploymentstrategies[':DeploymentStrategyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchDeploymentstrategiesDeploymentStrategyIdKey() {
  return ['deploymentstrategies', '/deploymentstrategies/:DeploymentStrategyId', 'PATCH'] as const
}

export function usePatchDeploymentstrategiesDeploymentStrategyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDeploymentstrategiesDeploymentStrategyIdKey()
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
            (typeof client.deploymentstrategies)[':DeploymentStrategyId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.deploymentstrategies[':DeploymentStrategyId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsKey(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId/deployments',
    keyArgs,
  ] as const
}

export function useGetApplicationsApplicationIdEnvironmentsEnvironmentIdDeployments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
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
        ? getGetApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsKey(args)
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
                (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
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
          client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdEnvironmentsEnvironmentIdDeployments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
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
        ? getGetApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsKey(args)
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
                (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
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
          client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsKey() {
  return [
    'applications',
    '/applications/:ApplicationId/environments/:EnvironmentId/deployments',
    'POST',
  ] as const
}

export function usePostApplicationsApplicationIdEnvironmentsEnvironmentIdDeployments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsKey()
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
            (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsKey(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId/hostedconfigurationversions',
    keyArgs,
  ] as const
}

export function useGetApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
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
        ? getGetApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsKey(
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
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
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
          client.applications[':ApplicationId'].configurationprofiles[
            ':ConfigurationProfileId'
          ].hostedconfigurationversions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
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
        ? getGetApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsKey(
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
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
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
          client.applications[':ApplicationId'].configurationprofiles[
            ':ConfigurationProfileId'
          ].hostedconfigurationversions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:ResourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']> },
      ) => parseResponse(client.tags[':ResourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdValidatorsConfigurationVersionKey() {
  return [
    'applications',
    '/applications/:ApplicationId/configurationprofiles/:ConfigurationProfileId/validators#configuration_version',
    'POST',
  ] as const
}

export function usePostApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdValidatorsConfigurationVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['validators#configuration_version']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['validators#configuration_version']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdValidatorsConfigurationVersionKey()
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
            (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['validators#configuration_version']['$post']
          >
        },
      ) =>
        parseResponse(
          client.applications[':ApplicationId'].configurationprofiles[':ConfigurationProfileId'][
            'validators#configuration_version'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
