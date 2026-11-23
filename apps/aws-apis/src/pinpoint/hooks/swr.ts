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

export function getGetV1AppsKey(args: InferRequestType<typeof client.v1.apps.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps', keyArgs] as const
}

export function useGetV1Apps<TError = unknown>(
  args: InferRequestType<typeof client.v1.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.apps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Apps<TError = unknown>(
  args: InferRequestType<typeof client.v1.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.apps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV1AppsKey() {
  return ['v1', '/v1/apps', 'POST'] as const
}

export function usePostV1Apps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.apps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.apps.$post> }) =>
        parseResponse(client.v1.apps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdCampaignsKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['campaigns']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/campaigns', keyArgs] as const
}

export function useGetV1AppsApplicationIdCampaigns<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['campaigns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['campaigns']['$get']>>
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
        ? getGetV1AppsApplicationIdCampaignsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['campaigns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdCampaigns<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['campaigns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['campaigns']['$get']>>
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
        ? getGetV1AppsApplicationIdCampaignsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['campaigns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AppsApplicationIdCampaignsKey() {
  return ['v1', '/v1/apps/:application-id/campaigns', 'POST'] as const
}

export function usePostV1AppsApplicationIdCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['campaigns']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['campaigns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppsApplicationIdCampaignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.apps)[':application-id']['campaigns']['$post']>
        },
      ) => parseResponse(client.v1.apps[':application-id'].campaigns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TemplatesTemplateNameEmailKey(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/templates/:template-name/email', keyArgs] as const
}

export function useGetV1TemplatesTemplateNameEmail<TError = unknown>(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['email']['$get']>>
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
        ? getGetV1TemplatesTemplateNameEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.templates[':template-name'].email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TemplatesTemplateNameEmail<TError = unknown>(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['email']['$get']>>
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
        ? getGetV1TemplatesTemplateNameEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.templates[':template-name'].email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1TemplatesTemplateNameEmailKey() {
  return ['v1', '/v1/templates/:template-name/email', 'PUT'] as const
}

export function usePutV1TemplatesTemplateNameEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['email']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TemplatesTemplateNameEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$put']>
        },
      ) => parseResponse(client.v1.templates[':template-name'].email.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TemplatesTemplateNameEmailKey() {
  return ['v1', '/v1/templates/:template-name/email', 'POST'] as const
}

export function usePostV1TemplatesTemplateNameEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['email']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TemplatesTemplateNameEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$post']>
        },
      ) => parseResponse(client.v1.templates[':template-name'].email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TemplatesTemplateNameEmailKey() {
  return ['v1', '/v1/templates/:template-name/email', 'DELETE'] as const
}

export function useDeleteV1TemplatesTemplateNameEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['email']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TemplatesTemplateNameEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.templates)[':template-name']['email']['$delete']>
        },
      ) => parseResponse(client.v1.templates[':template-name'].email.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdJobsExportKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/jobs/export', keyArgs] as const
}

export function useGetV1AppsApplicationIdJobsExport<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$get']>
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
        ? getGetV1AppsApplicationIdJobsExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].jobs.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdJobsExport<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$get']>
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
        ? getGetV1AppsApplicationIdJobsExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].jobs.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AppsApplicationIdJobsExportKey() {
  return ['v1', '/v1/apps/:application-id/jobs/export', 'POST'] as const
}

export function usePostV1AppsApplicationIdJobsExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppsApplicationIdJobsExportKey()
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
            (typeof client.v1.apps)[':application-id']['jobs']['export']['$post']
          >
        },
      ) => parseResponse(client.v1.apps[':application-id'].jobs.export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdJobsImportKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/jobs/import', keyArgs] as const
}

export function useGetV1AppsApplicationIdJobsImport<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$get']>
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
        ? getGetV1AppsApplicationIdJobsImportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].jobs.import.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdJobsImport<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$get']>
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
        ? getGetV1AppsApplicationIdJobsImportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].jobs.import.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AppsApplicationIdJobsImportKey() {
  return ['v1', '/v1/apps/:application-id/jobs/import', 'POST'] as const
}

export function usePostV1AppsApplicationIdJobsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['jobs']['import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppsApplicationIdJobsImportKey()
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
            (typeof client.v1.apps)[':application-id']['jobs']['import']['$post']
          >
        },
      ) => parseResponse(client.v1.apps[':application-id'].jobs.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TemplatesTemplateNameInappKey(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/templates/:template-name/inapp', keyArgs] as const
}

export function useGetV1TemplatesTemplateNameInapp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$get']>>
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
        ? getGetV1TemplatesTemplateNameInappKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.templates[':template-name'].inapp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TemplatesTemplateNameInapp<TError = unknown>(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$get']>>
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
        ? getGetV1TemplatesTemplateNameInappKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.templates[':template-name'].inapp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1TemplatesTemplateNameInappKey() {
  return ['v1', '/v1/templates/:template-name/inapp', 'PUT'] as const
}

export function usePutV1TemplatesTemplateNameInapp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TemplatesTemplateNameInappKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$put']>
        },
      ) => parseResponse(client.v1.templates[':template-name'].inapp.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TemplatesTemplateNameInappKey() {
  return ['v1', '/v1/templates/:template-name/inapp', 'POST'] as const
}

export function usePostV1TemplatesTemplateNameInapp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TemplatesTemplateNameInappKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$post']>
        },
      ) => parseResponse(client.v1.templates[':template-name'].inapp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TemplatesTemplateNameInappKey() {
  return ['v1', '/v1/templates/:template-name/inapp', 'DELETE'] as const
}

export function useDeleteV1TemplatesTemplateNameInapp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['inapp']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TemplatesTemplateNameInappKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.templates)[':template-name']['inapp']['$delete']>
        },
      ) => parseResponse(client.v1.templates[':template-name'].inapp.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdJourneysKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['journeys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/journeys', keyArgs] as const
}

export function useGetV1AppsApplicationIdJourneys<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['journeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['journeys']['$get']>>
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
        ? getGetV1AppsApplicationIdJourneysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['journeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].journeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdJourneys<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['journeys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['journeys']['$get']>>
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
        ? getGetV1AppsApplicationIdJourneysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['journeys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].journeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AppsApplicationIdJourneysKey() {
  return ['v1', '/v1/apps/:application-id/journeys', 'POST'] as const
}

export function usePostV1AppsApplicationIdJourneys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['journeys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['journeys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppsApplicationIdJourneysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.apps)[':application-id']['journeys']['$post']>
        },
      ) => parseResponse(client.v1.apps[':application-id'].journeys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TemplatesTemplateNamePushKey(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/templates/:template-name/push', keyArgs] as const
}

export function useGetV1TemplatesTemplateNamePush<TError = unknown>(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['push']['$get']>>
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
        ? getGetV1TemplatesTemplateNamePushKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['push']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.templates[':template-name'].push.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TemplatesTemplateNamePush<TError = unknown>(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['push']['$get']>>
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
        ? getGetV1TemplatesTemplateNamePushKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['push']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.templates[':template-name'].push.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1TemplatesTemplateNamePushKey() {
  return ['v1', '/v1/templates/:template-name/push', 'PUT'] as const
}

export function usePutV1TemplatesTemplateNamePush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['push']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TemplatesTemplateNamePushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$put']>
        },
      ) => parseResponse(client.v1.templates[':template-name'].push.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TemplatesTemplateNamePushKey() {
  return ['v1', '/v1/templates/:template-name/push', 'POST'] as const
}

export function usePostV1TemplatesTemplateNamePush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['push']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TemplatesTemplateNamePushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$post']>
        },
      ) => parseResponse(client.v1.templates[':template-name'].push.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TemplatesTemplateNamePushKey() {
  return ['v1', '/v1/templates/:template-name/push', 'DELETE'] as const
}

export function useDeleteV1TemplatesTemplateNamePush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['push']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TemplatesTemplateNamePushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.templates)[':template-name']['push']['$delete']>
        },
      ) => parseResponse(client.v1.templates[':template-name'].push.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RecommendersKey(
  args: InferRequestType<typeof client.v1.recommenders.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/recommenders', keyArgs] as const
}

export function useGetV1Recommenders<TError = unknown>(
  args: InferRequestType<typeof client.v1.recommenders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.recommenders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1RecommendersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.recommenders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.recommenders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Recommenders<TError = unknown>(
  args: InferRequestType<typeof client.v1.recommenders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.recommenders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1RecommendersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.recommenders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.recommenders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1RecommendersKey() {
  return ['v1', '/v1/recommenders', 'POST'] as const
}

export function usePostV1Recommenders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.recommenders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.recommenders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RecommendersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.recommenders.$post> }) =>
        parseResponse(client.v1.recommenders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdSegmentsKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['segments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/segments', keyArgs] as const
}

export function useGetV1AppsApplicationIdSegments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['segments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['segments']['$get']>>
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
        ? getGetV1AppsApplicationIdSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['segments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdSegments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['segments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['segments']['$get']>>
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
        ? getGetV1AppsApplicationIdSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['segments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AppsApplicationIdSegmentsKey() {
  return ['v1', '/v1/apps/:application-id/segments', 'POST'] as const
}

export function usePostV1AppsApplicationIdSegments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['segments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['segments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppsApplicationIdSegmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.apps)[':application-id']['segments']['$post']>
        },
      ) => parseResponse(client.v1.apps[':application-id'].segments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TemplatesTemplateNameSmsKey(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/templates/:template-name/sms', keyArgs] as const
}

export function useGetV1TemplatesTemplateNameSms<TError = unknown>(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$get']>>
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
        ? getGetV1TemplatesTemplateNameSmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.templates[':template-name'].sms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TemplatesTemplateNameSms<TError = unknown>(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$get']>>
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
        ? getGetV1TemplatesTemplateNameSmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.templates[':template-name'].sms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1TemplatesTemplateNameSmsKey() {
  return ['v1', '/v1/templates/:template-name/sms', 'PUT'] as const
}

export function usePutV1TemplatesTemplateNameSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TemplatesTemplateNameSmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$put']> },
      ) => parseResponse(client.v1.templates[':template-name'].sms.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TemplatesTemplateNameSmsKey() {
  return ['v1', '/v1/templates/:template-name/sms', 'POST'] as const
}

export function usePostV1TemplatesTemplateNameSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TemplatesTemplateNameSmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$post']>
        },
      ) => parseResponse(client.v1.templates[':template-name'].sms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TemplatesTemplateNameSmsKey() {
  return ['v1', '/v1/templates/:template-name/sms', 'DELETE'] as const
}

export function useDeleteV1TemplatesTemplateNameSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['sms']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TemplatesTemplateNameSmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.templates)[':template-name']['sms']['$delete']>
        },
      ) => parseResponse(client.v1.templates[':template-name'].sms.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TemplatesTemplateNameVoiceKey(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/templates/:template-name/voice', keyArgs] as const
}

export function useGetV1TemplatesTemplateNameVoice<TError = unknown>(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$get']>>
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
        ? getGetV1TemplatesTemplateNameVoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.templates[':template-name'].voice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TemplatesTemplateNameVoice<TError = unknown>(
  args: InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$get']>>
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
        ? getGetV1TemplatesTemplateNameVoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.templates[':template-name'].voice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1TemplatesTemplateNameVoiceKey() {
  return ['v1', '/v1/templates/:template-name/voice', 'PUT'] as const
}

export function usePutV1TemplatesTemplateNameVoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TemplatesTemplateNameVoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$put']>
        },
      ) => parseResponse(client.v1.templates[':template-name'].voice.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TemplatesTemplateNameVoiceKey() {
  return ['v1', '/v1/templates/:template-name/voice', 'POST'] as const
}

export function usePostV1TemplatesTemplateNameVoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TemplatesTemplateNameVoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$post']>
        },
      ) => parseResponse(client.v1.templates[':template-name'].voice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TemplatesTemplateNameVoiceKey() {
  return ['v1', '/v1/templates/:template-name/voice', 'DELETE'] as const
}

export function useDeleteV1TemplatesTemplateNameVoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.templates)[':template-name']['voice']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TemplatesTemplateNameVoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.templates)[':template-name']['voice']['$delete']>
        },
      ) => parseResponse(client.v1.templates[':template-name'].voice.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdChannelsAdmKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/channels/adm', keyArgs] as const
}

export function useGetV1AppsApplicationIdChannelsAdm<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$get']>
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
        ? getGetV1AppsApplicationIdChannelsAdmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].channels.adm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdChannelsAdm<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$get']>
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
        ? getGetV1AppsApplicationIdChannelsAdmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].channels.adm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdChannelsAdmKey() {
  return ['v1', '/v1/apps/:application-id/channels/adm', 'PUT'] as const
}

export function usePutV1AppsApplicationIdChannelsAdm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdChannelsAdmKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['adm']['$put']
          >
        },
      ) => parseResponse(client.v1.apps[':application-id'].channels.adm.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdChannelsAdmKey() {
  return ['v1', '/v1/apps/:application-id/channels/adm', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationIdChannelsAdm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['adm']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdChannelsAdmKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['adm']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.apps[':application-id'].channels.adm.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdChannelsApnsKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/channels/apns', keyArgs] as const
}

export function useGetV1AppsApplicationIdChannelsApns<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$get']>
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
        ? getGetV1AppsApplicationIdChannelsApnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].channels.apns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdChannelsApns<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$get']>
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
        ? getGetV1AppsApplicationIdChannelsApnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].channels.apns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdChannelsApnsKey() {
  return ['v1', '/v1/apps/:application-id/channels/apns', 'PUT'] as const
}

export function usePutV1AppsApplicationIdChannelsApns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdChannelsApnsKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['apns']['$put']
          >
        },
      ) => parseResponse(client.v1.apps[':application-id'].channels.apns.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdChannelsApnsKey() {
  return ['v1', '/v1/apps/:application-id/channels/apns', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationIdChannelsApns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdChannelsApnsKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['apns']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.apps[':application-id'].channels.apns.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdChannelsApnsSandboxKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/channels/apns_sandbox', keyArgs] as const
}

export function useGetV1AppsApplicationIdChannelsApnsSandbox<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$get']
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
        ? getGetV1AppsApplicationIdChannelsApnsSandboxKey(args)
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
                (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$get']
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
          client.v1.apps[':application-id'].channels.apns_sandbox.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdChannelsApnsSandbox<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$get']
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
        ? getGetV1AppsApplicationIdChannelsApnsSandboxKey(args)
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
                (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$get']
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
          client.v1.apps[':application-id'].channels.apns_sandbox.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdChannelsApnsSandboxKey() {
  return ['v1', '/v1/apps/:application-id/channels/apns_sandbox', 'PUT'] as const
}

export function usePutV1AppsApplicationIdChannelsApnsSandbox<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdChannelsApnsSandboxKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].channels.apns_sandbox.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdChannelsApnsSandboxKey() {
  return ['v1', '/v1/apps/:application-id/channels/apns_sandbox', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationIdChannelsApnsSandbox<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdChannelsApnsSandboxKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['apns_sandbox']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].channels.apns_sandbox.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdChannelsApnsVoipKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/channels/apns_voip', keyArgs] as const
}

export function useGetV1AppsApplicationIdChannelsApnsVoip<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$get']
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
        ? getGetV1AppsApplicationIdChannelsApnsVoipKey(args)
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
                (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$get']
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
          client.v1.apps[':application-id'].channels.apns_voip.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdChannelsApnsVoip<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$get']
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
        ? getGetV1AppsApplicationIdChannelsApnsVoipKey(args)
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
                (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$get']
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
          client.v1.apps[':application-id'].channels.apns_voip.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdChannelsApnsVoipKey() {
  return ['v1', '/v1/apps/:application-id/channels/apns_voip', 'PUT'] as const
}

export function usePutV1AppsApplicationIdChannelsApnsVoip<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdChannelsApnsVoipKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].channels.apns_voip.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdChannelsApnsVoipKey() {
  return ['v1', '/v1/apps/:application-id/channels/apns_voip', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationIdChannelsApnsVoip<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdChannelsApnsVoipKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['apns_voip']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].channels.apns_voip.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdChannelsApnsVoipSandboxKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/channels/apns_voip_sandbox', keyArgs] as const
}

export function useGetV1AppsApplicationIdChannelsApnsVoipSandbox<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$get']
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
        ? getGetV1AppsApplicationIdChannelsApnsVoipSandboxKey(args)
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
                (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$get']
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
          client.v1.apps[':application-id'].channels.apns_voip_sandbox.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdChannelsApnsVoipSandbox<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$get']
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
        ? getGetV1AppsApplicationIdChannelsApnsVoipSandboxKey(args)
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
                (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$get']
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
          client.v1.apps[':application-id'].channels.apns_voip_sandbox.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdChannelsApnsVoipSandboxKey() {
  return ['v1', '/v1/apps/:application-id/channels/apns_voip_sandbox', 'PUT'] as const
}

export function usePutV1AppsApplicationIdChannelsApnsVoipSandbox<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdChannelsApnsVoipSandboxKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].channels.apns_voip_sandbox.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdChannelsApnsVoipSandboxKey() {
  return ['v1', '/v1/apps/:application-id/channels/apns_voip_sandbox', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationIdChannelsApnsVoipSandbox<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdChannelsApnsVoipSandboxKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['apns_voip_sandbox']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].channels.apns_voip_sandbox.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id', keyArgs] as const
}

export function useGetV1AppsApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['$get']>>
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
        ? getGetV1AppsApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':application-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['$get']>>
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
        ? getGetV1AppsApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps[':application-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdKey() {
  return ['v1', '/v1/apps/:application-id', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.apps)[':application-id']['$delete']> },
      ) => parseResponse(client.v1.apps[':application-id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdChannelsBaiduKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/channels/baidu', keyArgs] as const
}

export function useGetV1AppsApplicationIdChannelsBaidu<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$get']>
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
        ? getGetV1AppsApplicationIdChannelsBaiduKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].channels.baidu.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdChannelsBaidu<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$get']>
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
        ? getGetV1AppsApplicationIdChannelsBaiduKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].channels.baidu.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdChannelsBaiduKey() {
  return ['v1', '/v1/apps/:application-id/channels/baidu', 'PUT'] as const
}

export function usePutV1AppsApplicationIdChannelsBaidu<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdChannelsBaiduKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['baidu']['$put']
          >
        },
      ) => parseResponse(client.v1.apps[':application-id'].channels.baidu.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdChannelsBaiduKey() {
  return ['v1', '/v1/apps/:application-id/channels/baidu', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationIdChannelsBaidu<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['baidu']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdChannelsBaiduKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['baidu']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.apps[':application-id'].channels.baidu.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdCampaignsCampaignIdKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/campaigns/:campaign-id', keyArgs] as const
}

export function useGetV1AppsApplicationIdCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$get']
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
        ? getGetV1AppsApplicationIdCampaignsCampaignIdKey(args)
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
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$get']
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
          client.v1.apps[':application-id'].campaigns[':campaign-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$get']
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
        ? getGetV1AppsApplicationIdCampaignsCampaignIdKey(args)
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
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$get']
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
          client.v1.apps[':application-id'].campaigns[':campaign-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdCampaignsCampaignIdKey() {
  return ['v1', '/v1/apps/:application-id/campaigns/:campaign-id', 'PUT'] as const
}

export function usePutV1AppsApplicationIdCampaignsCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdCampaignsCampaignIdKey()
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
            (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].campaigns[':campaign-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdCampaignsCampaignIdKey() {
  return ['v1', '/v1/apps/:application-id/campaigns/:campaign-id', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationIdCampaignsCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdCampaignsCampaignIdKey()
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
            (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].campaigns[':campaign-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdChannelsEmailKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['email']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/channels/email', keyArgs] as const
}

export function useGetV1AppsApplicationIdChannelsEmail<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['email']['$get']>
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
        ? getGetV1AppsApplicationIdChannelsEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['email']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].channels.email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdChannelsEmail<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['email']['$get']>
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
        ? getGetV1AppsApplicationIdChannelsEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['email']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].channels.email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdChannelsEmailKey() {
  return ['v1', '/v1/apps/:application-id/channels/email', 'PUT'] as const
}

export function usePutV1AppsApplicationIdChannelsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['email']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['email']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdChannelsEmailKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['email']['$put']
          >
        },
      ) => parseResponse(client.v1.apps[':application-id'].channels.email.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdChannelsEmailKey() {
  return ['v1', '/v1/apps/:application-id/channels/email', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationIdChannelsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['email']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['email']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdChannelsEmailKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['email']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.apps[':application-id'].channels.email.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdEndpointsEndpointIdKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/endpoints/:endpoint-id', keyArgs] as const
}

export function useGetV1AppsApplicationIdEndpointsEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$get']
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
        ? getGetV1AppsApplicationIdEndpointsEndpointIdKey(args)
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
                (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$get']
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
          client.v1.apps[':application-id'].endpoints[':endpoint-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdEndpointsEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$get']
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
        ? getGetV1AppsApplicationIdEndpointsEndpointIdKey(args)
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
                (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$get']
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
          client.v1.apps[':application-id'].endpoints[':endpoint-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdEndpointsEndpointIdKey() {
  return ['v1', '/v1/apps/:application-id/endpoints/:endpoint-id', 'PUT'] as const
}

export function usePutV1AppsApplicationIdEndpointsEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdEndpointsEndpointIdKey()
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
            (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].endpoints[':endpoint-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdEndpointsEndpointIdKey() {
  return ['v1', '/v1/apps/:application-id/endpoints/:endpoint-id', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationIdEndpointsEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdEndpointsEndpointIdKey()
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
            (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].endpoints[':endpoint-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdEventstreamKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/eventstream', keyArgs] as const
}

export function useGetV1AppsApplicationIdEventstream<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['eventstream']['$get']>>
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
        ? getGetV1AppsApplicationIdEventstreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['eventstream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].eventstream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdEventstream<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['eventstream']['$get']>>
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
        ? getGetV1AppsApplicationIdEventstreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['eventstream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].eventstream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AppsApplicationIdEventstreamKey() {
  return ['v1', '/v1/apps/:application-id/eventstream', 'POST'] as const
}

export function usePostV1AppsApplicationIdEventstream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['eventstream']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppsApplicationIdEventstreamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$post']>
        },
      ) => parseResponse(client.v1.apps[':application-id'].eventstream.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdEventstreamKey() {
  return ['v1', '/v1/apps/:application-id/eventstream', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationIdEventstream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['eventstream']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['eventstream']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdEventstreamKey()
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
            (typeof client.v1.apps)[':application-id']['eventstream']['$delete']
          >
        },
      ) => parseResponse(client.v1.apps[':application-id'].eventstream.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdChannelsGcmKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/channels/gcm', keyArgs] as const
}

export function useGetV1AppsApplicationIdChannelsGcm<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$get']>
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
        ? getGetV1AppsApplicationIdChannelsGcmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].channels.gcm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdChannelsGcm<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$get']>
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
        ? getGetV1AppsApplicationIdChannelsGcmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].channels.gcm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdChannelsGcmKey() {
  return ['v1', '/v1/apps/:application-id/channels/gcm', 'PUT'] as const
}

export function usePutV1AppsApplicationIdChannelsGcm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdChannelsGcmKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['gcm']['$put']
          >
        },
      ) => parseResponse(client.v1.apps[':application-id'].channels.gcm.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdChannelsGcmKey() {
  return ['v1', '/v1/apps/:application-id/channels/gcm', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationIdChannelsGcm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['gcm']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdChannelsGcmKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['gcm']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.apps[':application-id'].channels.gcm.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdJourneysJourneyIdKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/journeys/:journey-id', keyArgs] as const
}

export function useGetV1AppsApplicationIdJourneysJourneyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$get']
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
        ? getGetV1AppsApplicationIdJourneysJourneyIdKey(args)
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
                (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$get']
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
          client.v1.apps[':application-id'].journeys[':journey-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdJourneysJourneyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$get']
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
        ? getGetV1AppsApplicationIdJourneysJourneyIdKey(args)
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
                (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$get']
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
          client.v1.apps[':application-id'].journeys[':journey-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdJourneysJourneyIdKey() {
  return ['v1', '/v1/apps/:application-id/journeys/:journey-id', 'PUT'] as const
}

export function usePutV1AppsApplicationIdJourneysJourneyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdJourneysJourneyIdKey()
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
            (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].journeys[':journey-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdJourneysJourneyIdKey() {
  return ['v1', '/v1/apps/:application-id/journeys/:journey-id', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationIdJourneysJourneyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdJourneysJourneyIdKey()
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
            (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].journeys[':journey-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1RecommendersRecommenderIdKey(
  args: InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/recommenders/:recommender-id', keyArgs] as const
}

export function useGetV1RecommendersRecommenderId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.recommenders)[':recommender-id']['$get']>>
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
        ? getGetV1RecommendersRecommenderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.recommenders)[':recommender-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.recommenders[':recommender-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RecommendersRecommenderId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.recommenders)[':recommender-id']['$get']>>
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
        ? getGetV1RecommendersRecommenderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.recommenders)[':recommender-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.recommenders[':recommender-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1RecommendersRecommenderIdKey() {
  return ['v1', '/v1/recommenders/:recommender-id', 'PUT'] as const
}

export function usePutV1RecommendersRecommenderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.recommenders)[':recommender-id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1RecommendersRecommenderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$put']> },
      ) => parseResponse(client.v1.recommenders[':recommender-id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1RecommendersRecommenderIdKey() {
  return ['v1', '/v1/recommenders/:recommender-id', 'DELETE'] as const
}

export function useDeleteV1RecommendersRecommenderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.recommenders)[':recommender-id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1RecommendersRecommenderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.recommenders)[':recommender-id']['$delete']> },
      ) => parseResponse(client.v1.recommenders[':recommender-id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdSegmentsSegmentIdKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/segments/:segment-id', keyArgs] as const
}

export function useGetV1AppsApplicationIdSegmentsSegmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$get']
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
        ? getGetV1AppsApplicationIdSegmentsSegmentIdKey(args)
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
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$get']
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
          client.v1.apps[':application-id'].segments[':segment-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdSegmentsSegmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$get']
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
        ? getGetV1AppsApplicationIdSegmentsSegmentIdKey(args)
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
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$get']
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
          client.v1.apps[':application-id'].segments[':segment-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdSegmentsSegmentIdKey() {
  return ['v1', '/v1/apps/:application-id/segments/:segment-id', 'PUT'] as const
}

export function usePutV1AppsApplicationIdSegmentsSegmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdSegmentsSegmentIdKey()
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
            (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].segments[':segment-id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdSegmentsSegmentIdKey() {
  return ['v1', '/v1/apps/:application-id/segments/:segment-id', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationIdSegmentsSegmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdSegmentsSegmentIdKey()
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
            (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].segments[':segment-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdChannelsSmsKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/channels/sms', keyArgs] as const
}

export function useGetV1AppsApplicationIdChannelsSms<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$get']>
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
        ? getGetV1AppsApplicationIdChannelsSmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].channels.sms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdChannelsSms<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$get']>
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
        ? getGetV1AppsApplicationIdChannelsSmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].channels.sms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdChannelsSmsKey() {
  return ['v1', '/v1/apps/:application-id/channels/sms', 'PUT'] as const
}

export function usePutV1AppsApplicationIdChannelsSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdChannelsSmsKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['sms']['$put']
          >
        },
      ) => parseResponse(client.v1.apps[':application-id'].channels.sms.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdChannelsSmsKey() {
  return ['v1', '/v1/apps/:application-id/channels/sms', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationIdChannelsSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['sms']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdChannelsSmsKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['sms']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.apps[':application-id'].channels.sms.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdUsersUserIdKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/users/:user-id', keyArgs] as const
}

export function useGetV1AppsApplicationIdUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$get']>
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
        ? getGetV1AppsApplicationIdUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.apps[':application-id'].users[':user-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$get']>
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
        ? getGetV1AppsApplicationIdUsersUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.apps[':application-id'].users[':user-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdUsersUserIdKey() {
  return ['v1', '/v1/apps/:application-id/users/:user-id', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['users'][':user-id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdUsersUserIdKey()
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
            (typeof client.v1.apps)[':application-id']['users'][':user-id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].users[':user-id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdChannelsVoiceKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/channels/voice', keyArgs] as const
}

export function useGetV1AppsApplicationIdChannelsVoice<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$get']>
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
        ? getGetV1AppsApplicationIdChannelsVoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].channels.voice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdChannelsVoice<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$get']>
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
        ? getGetV1AppsApplicationIdChannelsVoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].channels.voice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdChannelsVoiceKey() {
  return ['v1', '/v1/apps/:application-id/channels/voice', 'PUT'] as const
}

export function usePutV1AppsApplicationIdChannelsVoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdChannelsVoiceKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['voice']['$put']
          >
        },
      ) => parseResponse(client.v1.apps[':application-id'].channels.voice.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AppsApplicationIdChannelsVoiceKey() {
  return ['v1', '/v1/apps/:application-id/channels/voice', 'DELETE'] as const
}

export function useDeleteV1AppsApplicationIdChannelsVoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['voice']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AppsApplicationIdChannelsVoiceKey()
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
            (typeof client.v1.apps)[':application-id']['channels']['voice']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.apps[':application-id'].channels.voice.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdKpisDaterangeKpiNameKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['kpis']['daterange'][':kpi-name']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/kpis/daterange/:kpi-name', keyArgs] as const
}

export function useGetV1AppsApplicationIdKpisDaterangeKpiName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['kpis']['daterange'][':kpi-name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['kpis']['daterange'][':kpi-name']['$get']
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
        ? getGetV1AppsApplicationIdKpisDaterangeKpiNameKey(args)
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
                (typeof client.v1.apps)[':application-id']['kpis']['daterange'][':kpi-name']['$get']
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
          client.v1.apps[':application-id'].kpis.daterange[':kpi-name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdKpisDaterangeKpiName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['kpis']['daterange'][':kpi-name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['kpis']['daterange'][':kpi-name']['$get']
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
        ? getGetV1AppsApplicationIdKpisDaterangeKpiNameKey(args)
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
                (typeof client.v1.apps)[':application-id']['kpis']['daterange'][':kpi-name']['$get']
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
          client.v1.apps[':application-id'].kpis.daterange[':kpi-name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdSettingsKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/settings', keyArgs] as const
}

export function useGetV1AppsApplicationIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['settings']['$get']>>
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
        ? getGetV1AppsApplicationIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['settings']['$get']>>
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
        ? getGetV1AppsApplicationIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdSettingsKey() {
  return ['v1', '/v1/apps/:application-id/settings', 'PUT'] as const
}

export function usePutV1AppsApplicationIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.apps)[':application-id']['settings']['$put']>
        },
      ) => parseResponse(client.v1.apps[':application-id'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdCampaignsCampaignIdActivitiesKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['activities']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/campaigns/:campaign-id/activities', keyArgs] as const
}

export function useGetV1AppsApplicationIdCampaignsCampaignIdActivities<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['activities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['activities']['$get']
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
        ? getGetV1AppsApplicationIdCampaignsCampaignIdActivitiesKey(args)
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
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['activities']['$get']
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
          client.v1.apps[':application-id'].campaigns[':campaign-id'].activities.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdCampaignsCampaignIdActivities<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['activities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['activities']['$get']
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
        ? getGetV1AppsApplicationIdCampaignsCampaignIdActivitiesKey(args)
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
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['activities']['$get']
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
          client.v1.apps[':application-id'].campaigns[':campaign-id'].activities.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['kpis']['daterange'][':kpi-name']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/apps/:application-id/campaigns/:campaign-id/kpis/daterange/:kpi-name',
    keyArgs,
  ] as const
}

export function useGetV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['kpis']['daterange'][':kpi-name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['kpis']['daterange'][':kpi-name']['$get']
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
        ? getGetV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameKey(args)
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
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['kpis']['daterange'][':kpi-name']['$get']
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
          client.v1.apps[':application-id'].campaigns[':campaign-id'].kpis.daterange[
            ':kpi-name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['kpis']['daterange'][':kpi-name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['kpis']['daterange'][':kpi-name']['$get']
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
        ? getGetV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameKey(args)
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
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['kpis']['daterange'][':kpi-name']['$get']
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
          client.v1.apps[':application-id'].campaigns[':campaign-id'].kpis.daterange[
            ':kpi-name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdCampaignsCampaignIdVersionsVersionKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions'][':version']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/apps/:application-id/campaigns/:campaign-id/versions/:version',
    keyArgs,
  ] as const
}

export function useGetV1AppsApplicationIdCampaignsCampaignIdVersionsVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions'][':version']['$get']
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
        ? getGetV1AppsApplicationIdCampaignsCampaignIdVersionsVersionKey(args)
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
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions'][':version']['$get']
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
          client.v1.apps[':application-id'].campaigns[':campaign-id'].versions[':version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdCampaignsCampaignIdVersionsVersion<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions'][':version']['$get']
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
        ? getGetV1AppsApplicationIdCampaignsCampaignIdVersionsVersionKey(args)
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
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions'][':version']['$get']
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
          client.v1.apps[':application-id'].campaigns[':campaign-id'].versions[':version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdCampaignsCampaignIdVersionsKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/campaigns/:campaign-id/versions', keyArgs] as const
}

export function useGetV1AppsApplicationIdCampaignsCampaignIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions']['$get']
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
        ? getGetV1AppsApplicationIdCampaignsCampaignIdVersionsKey(args)
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
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions']['$get']
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
          client.v1.apps[':application-id'].campaigns[':campaign-id'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdCampaignsCampaignIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions']['$get']
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
        ? getGetV1AppsApplicationIdCampaignsCampaignIdVersionsKey(args)
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
                (typeof client.v1.apps)[':application-id']['campaigns'][':campaign-id']['versions']['$get']
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
          client.v1.apps[':application-id'].campaigns[':campaign-id'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdChannelsKey(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/channels', keyArgs] as const
}

export function useGetV1AppsApplicationIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['$get']>>
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
        ? getGetV1AppsApplicationIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apps)[':application-id']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['$get']>>
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
        ? getGetV1AppsApplicationIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.apps[':application-id'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdJobsExportJobIdKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['jobs']['export'][':job-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/jobs/export/:job-id', keyArgs] as const
}

export function useGetV1AppsApplicationIdJobsExportJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['jobs']['export'][':job-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['jobs']['export'][':job-id']['$get']
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
        ? getGetV1AppsApplicationIdJobsExportJobIdKey(args)
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
                (typeof client.v1.apps)[':application-id']['jobs']['export'][':job-id']['$get']
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
          client.v1.apps[':application-id'].jobs.export[':job-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdJobsExportJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['jobs']['export'][':job-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['jobs']['export'][':job-id']['$get']
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
        ? getGetV1AppsApplicationIdJobsExportJobIdKey(args)
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
                (typeof client.v1.apps)[':application-id']['jobs']['export'][':job-id']['$get']
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
          client.v1.apps[':application-id'].jobs.export[':job-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdJobsImportJobIdKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['jobs']['import'][':job-id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/jobs/import/:job-id', keyArgs] as const
}

export function useGetV1AppsApplicationIdJobsImportJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['jobs']['import'][':job-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['jobs']['import'][':job-id']['$get']
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
        ? getGetV1AppsApplicationIdJobsImportJobIdKey(args)
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
                (typeof client.v1.apps)[':application-id']['jobs']['import'][':job-id']['$get']
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
          client.v1.apps[':application-id'].jobs.import[':job-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdJobsImportJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['jobs']['import'][':job-id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['jobs']['import'][':job-id']['$get']
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
        ? getGetV1AppsApplicationIdJobsImportJobIdKey(args)
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
                (typeof client.v1.apps)[':application-id']['jobs']['import'][':job-id']['$get']
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
          client.v1.apps[':application-id'].jobs.import[':job-id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdEndpointsEndpointIdInappmessagesKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['inappmessages']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/endpoints/:endpoint-id/inappmessages', keyArgs] as const
}

export function useGetV1AppsApplicationIdEndpointsEndpointIdInappmessages<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['inappmessages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['inappmessages']['$get']
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
        ? getGetV1AppsApplicationIdEndpointsEndpointIdInappmessagesKey(args)
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
                (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['inappmessages']['$get']
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
          client.v1.apps[':application-id'].endpoints[':endpoint-id'].inappmessages.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdEndpointsEndpointIdInappmessages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['inappmessages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['inappmessages']['$get']
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
        ? getGetV1AppsApplicationIdEndpointsEndpointIdInappmessagesKey(args)
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
                (typeof client.v1.apps)[':application-id']['endpoints'][':endpoint-id']['inappmessages']['$get']
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
          client.v1.apps[':application-id'].endpoints[':endpoint-id'].inappmessages.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['kpis']['daterange'][':kpi-name']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/apps/:application-id/journeys/:journey-id/kpis/daterange/:kpi-name',
    keyArgs,
  ] as const
}

export function useGetV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['kpis']['daterange'][':kpi-name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['kpis']['daterange'][':kpi-name']['$get']
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
        ? getGetV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameKey(args)
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
                (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['kpis']['daterange'][':kpi-name']['$get']
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
          client.v1.apps[':application-id'].journeys[':journey-id'].kpis.daterange[
            ':kpi-name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['kpis']['daterange'][':kpi-name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['kpis']['daterange'][':kpi-name']['$get']
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
        ? getGetV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameKey(args)
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
                (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['kpis']['daterange'][':kpi-name']['$get']
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
          client.v1.apps[':application-id'].journeys[':journey-id'].kpis.daterange[
            ':kpi-name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['activities'][':journey-activity-id']['execution-metrics']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/apps/:application-id/journeys/:journey-id/activities/:journey-activity-id/execution-metrics',
    keyArgs,
  ] as const
}

export function useGetV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetrics<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['activities'][':journey-activity-id']['execution-metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['activities'][':journey-activity-id']['execution-metrics']['$get']
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
        ? getGetV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsKey(
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
                (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['activities'][':journey-activity-id']['execution-metrics']['$get']
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
          client.v1.apps[':application-id'].journeys[':journey-id'].activities[
            ':journey-activity-id'
          ]['execution-metrics'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetrics<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['activities'][':journey-activity-id']['execution-metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['activities'][':journey-activity-id']['execution-metrics']['$get']
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
        ? getGetV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsKey(
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
                (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['activities'][':journey-activity-id']['execution-metrics']['$get']
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
          client.v1.apps[':application-id'].journeys[':journey-id'].activities[
            ':journey-activity-id'
          ]['execution-metrics'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdJourneysJourneyIdExecutionMetricsKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['execution-metrics']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/journeys/:journey-id/execution-metrics', keyArgs] as const
}

export function useGetV1AppsApplicationIdJourneysJourneyIdExecutionMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['execution-metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['execution-metrics']['$get']
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
        ? getGetV1AppsApplicationIdJourneysJourneyIdExecutionMetricsKey(args)
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
                (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['execution-metrics']['$get']
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
          client.v1.apps[':application-id'].journeys[':journey-id']['execution-metrics'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdJourneysJourneyIdExecutionMetrics<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['execution-metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['execution-metrics']['$get']
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
        ? getGetV1AppsApplicationIdJourneysJourneyIdExecutionMetricsKey(args)
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
                (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['execution-metrics']['$get']
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
          client.v1.apps[':application-id'].journeys[':journey-id']['execution-metrics'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdSegmentsSegmentIdJobsExportKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['export']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/segments/:segment-id/jobs/export', keyArgs] as const
}

export function useGetV1AppsApplicationIdSegmentsSegmentIdJobsExport<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['export']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['export']['$get']
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
        ? getGetV1AppsApplicationIdSegmentsSegmentIdJobsExportKey(args)
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
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['export']['$get']
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
          client.v1.apps[':application-id'].segments[':segment-id'].jobs.export.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdSegmentsSegmentIdJobsExport<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['export']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['export']['$get']
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
        ? getGetV1AppsApplicationIdSegmentsSegmentIdJobsExportKey(args)
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
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['export']['$get']
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
          client.v1.apps[':application-id'].segments[':segment-id'].jobs.export.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdSegmentsSegmentIdJobsImportKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['import']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/segments/:segment-id/jobs/import', keyArgs] as const
}

export function useGetV1AppsApplicationIdSegmentsSegmentIdJobsImport<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['import']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['import']['$get']
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
        ? getGetV1AppsApplicationIdSegmentsSegmentIdJobsImportKey(args)
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
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['import']['$get']
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
          client.v1.apps[':application-id'].segments[':segment-id'].jobs.import.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdSegmentsSegmentIdJobsImport<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['import']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['import']['$get']
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
        ? getGetV1AppsApplicationIdSegmentsSegmentIdJobsImportKey(args)
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
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['jobs']['import']['$get']
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
          client.v1.apps[':application-id'].segments[':segment-id'].jobs.import.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdSegmentsSegmentIdVersionsVersionKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions'][':version']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/segments/:segment-id/versions/:version', keyArgs] as const
}

export function useGetV1AppsApplicationIdSegmentsSegmentIdVersionsVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions'][':version']['$get']
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
        ? getGetV1AppsApplicationIdSegmentsSegmentIdVersionsVersionKey(args)
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
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions'][':version']['$get']
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
          client.v1.apps[':application-id'].segments[':segment-id'].versions[':version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdSegmentsSegmentIdVersionsVersion<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions'][':version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions'][':version']['$get']
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
        ? getGetV1AppsApplicationIdSegmentsSegmentIdVersionsVersionKey(args)
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
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions'][':version']['$get']
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
          client.v1.apps[':application-id'].segments[':segment-id'].versions[':version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1AppsApplicationIdSegmentsSegmentIdVersionsKey(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/apps/:application-id/segments/:segment-id/versions', keyArgs] as const
}

export function useGetV1AppsApplicationIdSegmentsSegmentIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions']['$get']
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
        ? getGetV1AppsApplicationIdSegmentsSegmentIdVersionsKey(args)
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
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions']['$get']
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
          client.v1.apps[':application-id'].segments[':segment-id'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsApplicationIdSegmentsSegmentIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions']['$get']
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
        ? getGetV1AppsApplicationIdSegmentsSegmentIdVersionsKey(args)
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
                (typeof client.v1.apps)[':application-id']['segments'][':segment-id']['versions']['$get']
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
          client.v1.apps[':application-id'].segments[':segment-id'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1TagsResourceArnKey(
  args: InferRequestType<(typeof client.v1.tags)[':resource-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/tags/:resource-arn', keyArgs] as const
}

export function useGetV1TagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tags)[':resource-arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$get']>>
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
        ? getGetV1TagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tags[':resource-arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tags)[':resource-arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$get']>>
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
        ? getGetV1TagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tags[':resource-arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TagsResourceArnKey() {
  return ['v1', '/v1/tags/:resource-arn', 'POST'] as const
}

export function usePostV1TagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tags)[':resource-arn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.tags)[':resource-arn']['$post']> },
      ) => parseResponse(client.v1.tags[':resource-arn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TemplatesTemplateNameTemplateTypeVersionsKey(
  args: InferRequestType<
    (typeof client.v1.templates)[':template-name'][':template-type']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/templates/:template-name/:template-type/versions', keyArgs] as const
}

export function useGetV1TemplatesTemplateNameTemplateTypeVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.templates)[':template-name'][':template-type']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.templates)[':template-name'][':template-type']['versions']['$get']
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
        ? getGetV1TemplatesTemplateNameTemplateTypeVersionsKey(args)
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
                (typeof client.v1.templates)[':template-name'][':template-type']['versions']['$get']
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
          client.v1.templates[':template-name'][':template-type'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TemplatesTemplateNameTemplateTypeVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.templates)[':template-name'][':template-type']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.templates)[':template-name'][':template-type']['versions']['$get']
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
        ? getGetV1TemplatesTemplateNameTemplateTypeVersionsKey(args)
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
                (typeof client.v1.templates)[':template-name'][':template-type']['versions']['$get']
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
          client.v1.templates[':template-name'][':template-type'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1TemplatesKey(args: InferRequestType<typeof client.v1.templates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/templates', keyArgs] as const
}

export function useGetV1Templates<TError = unknown>(
  args: InferRequestType<typeof client.v1.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Templates<TError = unknown>(
  args: InferRequestType<typeof client.v1.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PhoneNumberValidateKey() {
  return ['v1', '/v1/phone/number/validate', 'POST'] as const
}

export function usePostV1PhoneNumberValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.phone.number.validate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.phone.number.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PhoneNumberValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.phone.number.validate.$post> },
      ) => parseResponse(client.v1.phone.number.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppsApplicationIdEventsKey() {
  return ['v1', '/v1/apps/:application-id/events', 'POST'] as const
}

export function usePostV1AppsApplicationIdEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['events']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['events']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppsApplicationIdEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.apps)[':application-id']['events']['$post']> },
      ) => parseResponse(client.v1.apps[':application-id'].events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdAttributesAttributeTypeKey() {
  return ['v1', '/v1/apps/:application-id/attributes/:attribute-type', 'PUT'] as const
}

export function usePutV1AppsApplicationIdAttributesAttributeType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['attributes'][':attribute-type']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['attributes'][':attribute-type']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdAttributesAttributeTypeKey()
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
            (typeof client.v1.apps)[':application-id']['attributes'][':attribute-type']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].attributes[':attribute-type'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppsApplicationIdMessagesKey() {
  return ['v1', '/v1/apps/:application-id/messages', 'POST'] as const
}

export function usePostV1AppsApplicationIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['messages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppsApplicationIdMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.apps)[':application-id']['messages']['$post']>
        },
      ) => parseResponse(client.v1.apps[':application-id'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppsApplicationIdOtpKey() {
  return ['v1', '/v1/apps/:application-id/otp', 'POST'] as const
}

export function usePostV1AppsApplicationIdOtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['otp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['otp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppsApplicationIdOtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.apps)[':application-id']['otp']['$post']> },
      ) => parseResponse(client.v1.apps[':application-id'].otp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppsApplicationIdUsersMessagesKey() {
  return ['v1', '/v1/apps/:application-id/users-messages', 'POST'] as const
}

export function usePostV1AppsApplicationIdUsersMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['users-messages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['users-messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppsApplicationIdUsersMessagesKey()
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
            (typeof client.v1.apps)[':application-id']['users-messages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id']['users-messages'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TagsResourceArnTagKeysKey() {
  return ['v1', '/v1/tags/:resource-arn#tagKeys', 'DELETE'] as const
}

export function useDeleteV1TagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':resource-arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tags)[':resource-arn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.tags)[':resource-arn#tagKeys']['$delete']> },
      ) => parseResponse(client.v1.tags[':resource-arn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdEndpointsKey() {
  return ['v1', '/v1/apps/:application-id/endpoints', 'PUT'] as const
}

export function usePutV1AppsApplicationIdEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['endpoints']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['endpoints']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.apps)[':application-id']['endpoints']['$put']>
        },
      ) => parseResponse(client.v1.apps[':application-id'].endpoints.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1AppsApplicationIdJourneysJourneyIdStateKey() {
  return ['v1', '/v1/apps/:application-id/journeys/:journey-id/state', 'PUT'] as const
}

export function usePutV1AppsApplicationIdJourneysJourneyIdState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['state']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['state']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AppsApplicationIdJourneysJourneyIdStateKey()
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
            (typeof client.v1.apps)[':application-id']['journeys'][':journey-id']['state']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.apps[':application-id'].journeys[':journey-id'].state.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1TemplatesTemplateNameTemplateTypeActiveVersionKey() {
  return ['v1', '/v1/templates/:template-name/:template-type/active-version', 'PUT'] as const
}

export function usePutV1TemplatesTemplateNameTemplateTypeActiveVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.templates)[':template-name'][':template-type']['active-version']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.templates)[':template-name'][':template-type']['active-version']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TemplatesTemplateNameTemplateTypeActiveVersionKey()
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
            (typeof client.v1.templates)[':template-name'][':template-type']['active-version']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.templates[':template-name'][':template-type']['active-version'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppsApplicationIdVerifyOtpKey() {
  return ['v1', '/v1/apps/:application-id/verify-otp', 'POST'] as const
}

export function usePostV1AppsApplicationIdVerifyOtp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apps)[':application-id']['verify-otp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apps)[':application-id']['verify-otp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppsApplicationIdVerifyOtpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.apps)[':application-id']['verify-otp']['$post']>
        },
      ) => parseResponse(client.v1.apps[':application-id']['verify-otp'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
