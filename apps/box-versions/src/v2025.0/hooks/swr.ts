import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getArchivesKey() {
  return ['archives'] as const
}

export function getDocgenBatchJobsKey() {
  return ['docgen_batch_jobs'] as const
}

export function getDocgenBatchesKey() {
  return ['docgen_batches'] as const
}

export function getDocgenJobsKey() {
  return ['docgen_jobs'] as const
}

export function getDocgenTemplateJobsKey() {
  return ['docgen_template_jobs'] as const
}

export function getDocgenTemplatesKey() {
  return ['docgen_templates'] as const
}

export function getEnterpriseConfigurationsKey() {
  return ['enterprise_configurations'] as const
}

export function getEnterpriseHubsKey() {
  return ['enterprise_hubs'] as const
}

export function getExternalUsersKey() {
  return ['external_users'] as const
}

export function getHubCollaborationsKey() {
  return ['hub_collaborations'] as const
}

export function getHubDocumentBlocksKey() {
  return ['hub_document_blocks'] as const
}

export function getHubDocumentPagesKey() {
  return ['hub_document_pages'] as const
}

export function getHubItemsKey() {
  return ['hub_items'] as const
}

export function getHubsKey() {
  return ['hubs'] as const
}

export function getShieldListsKey() {
  return ['shield_lists'] as const
}

export function getGetDocgenTemplatesKey(
  args: InferRequestType<typeof client.docgen_templates.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['docgen_templates', '/docgen_templates', keyArgs] as const
}

export function useGetDocgenTemplates<TError = unknown>(
  args: InferRequestType<typeof client.docgen_templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_templates.$get>>>>
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
        ? getGetDocgenTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docgen_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocgenTemplates<TError = unknown>(
  args: InferRequestType<typeof client.docgen_templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_templates.$get>>>>
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
        ? getGetDocgenTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docgen_templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDocgenTemplatesKey() {
  return ['docgen_templates', '/docgen_templates', 'POST'] as const
}

export function usePostDocgenTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_templates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.docgen_templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocgenTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.docgen_templates.$post> }) =>
        parseResponse(client.docgen_templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocgenTemplatesTemplateIdKey(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docgen_templates', '/docgen_templates/:template_id', keyArgs] as const
}

export function useGetDocgenTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['$get']>>
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
        ? getGetDocgenTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docgen_templates[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocgenTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['$get']>>
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
        ? getGetDocgenTemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docgen_templates[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDocgenTemplatesTemplateIdKey() {
  return ['docgen_templates', '/docgen_templates/:template_id', 'DELETE'] as const
}

export function useDeleteDocgenTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.docgen_templates)[':template_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDocgenTemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.docgen_templates)[':template_id']['$delete']> },
      ) => parseResponse(client.docgen_templates[':template_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocgenTemplatesTemplateIdTagsKey(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docgen_templates', '/docgen_templates/:template_id/tags', keyArgs] as const
}

export function useGetDocgenTemplatesTemplateIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>>
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
        ? getGetDocgenTemplatesTemplateIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.docgen_templates[':template_id'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocgenTemplatesTemplateIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>>
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
        ? getGetDocgenTemplatesTemplateIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.docgen_templates[':template_id'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocgenJobsJobIdKey(
  args: InferRequestType<(typeof client.docgen_jobs)[':job_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docgen_jobs', '/docgen_jobs/:job_id', keyArgs] as const
}

export function useGetDocgenJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.docgen_jobs)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.docgen_jobs)[':job_id']['$get']>>>
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
        ? getGetDocgenJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.docgen_jobs)[':job_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docgen_jobs[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocgenJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.docgen_jobs)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.docgen_jobs)[':job_id']['$get']>>>
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
        ? getGetDocgenJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.docgen_jobs)[':job_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docgen_jobs[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocgenJobsKey(args: InferRequestType<typeof client.docgen_jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['docgen_jobs', '/docgen_jobs', keyArgs] as const
}

export function useGetDocgenJobs<TError = unknown>(
  args: InferRequestType<typeof client.docgen_jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocgenJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docgen_jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocgenJobs<TError = unknown>(
  args: InferRequestType<typeof client.docgen_jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_jobs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocgenJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docgen_jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocgenTemplateJobsTemplateIdKey(
  args: InferRequestType<(typeof client.docgen_template_jobs)[':template_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docgen_template_jobs', '/docgen_template_jobs/:template_id', keyArgs] as const
}

export function useGetDocgenTemplateJobsTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.docgen_template_jobs)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_template_jobs)[':template_id']['$get']>>
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
        ? getGetDocgenTemplateJobsTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_template_jobs)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.docgen_template_jobs[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocgenTemplateJobsTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.docgen_template_jobs)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_template_jobs)[':template_id']['$get']>>
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
        ? getGetDocgenTemplateJobsTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_template_jobs)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.docgen_template_jobs[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocgenBatchJobsBatchIdKey(
  args: InferRequestType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docgen_batch_jobs', '/docgen_batch_jobs/:batch_id', keyArgs] as const
}

export function useGetDocgenBatchJobsBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>>
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
        ? getGetDocgenBatchJobsBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docgen_batch_jobs[':batch_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocgenBatchJobsBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>>
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
        ? getGetDocgenBatchJobsBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docgen_batch_jobs[':batch_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDocgenBatchesKey() {
  return ['docgen_batches', '/docgen_batches', 'POST'] as const
}

export function usePostDocgenBatches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docgen_batches.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.docgen_batches.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocgenBatchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.docgen_batches.$post> }) =>
        parseResponse(client.docgen_batches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnterpriseConfigurationsEnterpriseIdKey(
  args: InferRequestType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'enterprise_configurations',
    '/enterprise_configurations/:enterprise_id',
    keyArgs,
  ] as const
}

export function useGetEnterpriseConfigurationsEnterpriseId<TError = unknown>(
  args: InferRequestType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>>
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
        ? getGetEnterpriseConfigurationsEnterpriseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enterprise_configurations[':enterprise_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterpriseConfigurationsEnterpriseId<TError = unknown>(
  args: InferRequestType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>>
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
        ? getGetEnterpriseConfigurationsEnterpriseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enterprise_configurations[':enterprise_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHubsKey(args: InferRequestType<typeof client.hubs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['hubs', '/hubs', keyArgs] as const
}

export function useGetHubs<TError = unknown>(
  args: InferRequestType<typeof client.hubs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hubs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHubsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hubs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hubs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetHubs<TError = unknown>(
  args: InferRequestType<typeof client.hubs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hubs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHubsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hubs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hubs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostHubsKey() {
  return ['hubs', '/hubs', 'POST'] as const
}

export function usePostHubs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hubs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.hubs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHubsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hubs.$post> }) =>
        parseResponse(client.hubs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnterpriseHubsKey(
  args: InferRequestType<typeof client.enterprise_hubs.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['enterprise_hubs', '/enterprise_hubs', keyArgs] as const
}

export function useGetEnterpriseHubs<TError = unknown>(
  args: InferRequestType<typeof client.enterprise_hubs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_hubs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnterpriseHubsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_hubs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprise_hubs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterpriseHubs<TError = unknown>(
  args: InferRequestType<typeof client.enterprise_hubs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_hubs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnterpriseHubsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.enterprise_hubs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprise_hubs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHubsHubIdKey(
  args: InferRequestType<(typeof client.hubs)[':hub_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hubs', '/hubs/:hub_id', keyArgs] as const
}

export function useGetHubsHubId<TError = unknown>(
  args: InferRequestType<(typeof client.hubs)[':hub_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetHubsHubIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hubs[':hub_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHubsHubId<TError = unknown>(
  args: InferRequestType<(typeof client.hubs)[':hub_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetHubsHubIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hubs[':hub_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutHubsHubIdKey() {
  return ['hubs', '/hubs/:hub_id', 'PUT'] as const
}

export function usePutHubsHubId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hubs)[':hub_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutHubsHubIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.hubs)[':hub_id']['$put']> }) =>
        parseResponse(client.hubs[':hub_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteHubsHubIdKey() {
  return ['hubs', '/hubs/:hub_id', 'DELETE'] as const
}

export function useDeleteHubsHubId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.hubs)[':hub_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteHubsHubIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.hubs)[':hub_id']['$delete']> },
      ) => parseResponse(client.hubs[':hub_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHubsHubIdCopyKey() {
  return ['hubs', '/hubs/:hub_id/copy', 'POST'] as const
}

export function usePostHubsHubIdCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hubs)[':hub_id']['copy']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hubs)[':hub_id']['copy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHubsHubIdCopyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.hubs)[':hub_id']['copy']['$post']> },
      ) => parseResponse(client.hubs[':hub_id'].copy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHubCollaborationsKey(
  args: InferRequestType<typeof client.hub_collaborations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['hub_collaborations', '/hub_collaborations', keyArgs] as const
}

export function useGetHubCollaborations<TError = unknown>(
  args: InferRequestType<typeof client.hub_collaborations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_collaborations.$get>>>>
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
        ? getGetHubCollaborationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_collaborations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hub_collaborations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHubCollaborations<TError = unknown>(
  args: InferRequestType<typeof client.hub_collaborations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_collaborations.$get>>>>
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
        ? getGetHubCollaborationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_collaborations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hub_collaborations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHubCollaborationsKey() {
  return ['hub_collaborations', '/hub_collaborations', 'POST'] as const
}

export function usePostHubCollaborations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_collaborations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.hub_collaborations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHubCollaborationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hub_collaborations.$post> }) =>
        parseResponse(client.hub_collaborations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHubCollaborationsHubCollaborationIdKey(
  args: InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['hub_collaborations', '/hub_collaborations/:hub_collaboration_id', keyArgs] as const
}

export function useGetHubCollaborationsHubCollaborationId<TError = unknown>(
  args: InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>>
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
        ? getGetHubCollaborationsHubCollaborationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hub_collaborations[':hub_collaboration_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHubCollaborationsHubCollaborationId<TError = unknown>(
  args: InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>>
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
        ? getGetHubCollaborationsHubCollaborationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.hub_collaborations[':hub_collaboration_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutHubCollaborationsHubCollaborationIdKey() {
  return ['hub_collaborations', '/hub_collaborations/:hub_collaboration_id', 'PUT'] as const
}

export function usePutHubCollaborationsHubCollaborationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutHubCollaborationsHubCollaborationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$put']>
        },
      ) =>
        parseResponse(client.hub_collaborations[':hub_collaboration_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteHubCollaborationsHubCollaborationIdKey() {
  return ['hub_collaborations', '/hub_collaborations/:hub_collaboration_id', 'DELETE'] as const
}

export function useDeleteHubCollaborationsHubCollaborationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteHubCollaborationsHubCollaborationIdKey()
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
            (typeof client.hub_collaborations)[':hub_collaboration_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.hub_collaborations[':hub_collaboration_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetHubItemsKey(args: InferRequestType<typeof client.hub_items.$get>) {
  const { header: _, ...keyArgs } = args
  return ['hub_items', '/hub_items', keyArgs] as const
}

export function useGetHubItems<TError = unknown>(
  args: InferRequestType<typeof client.hub_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_items.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHubItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_items.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hub_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHubItems<TError = unknown>(
  args: InferRequestType<typeof client.hub_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_items.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHubItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_items.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hub_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHubsHubIdManageItemsKey() {
  return ['hubs', '/hubs/:hub_id/manage_items', 'POST'] as const
}

export function usePostHubsHubIdManageItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hubs)[':hub_id']['manage_items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hubs)[':hub_id']['manage_items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHubsHubIdManageItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.hubs)[':hub_id']['manage_items']['$post']> },
      ) => parseResponse(client.hubs[':hub_id'].manage_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHubDocumentPagesKey(
  args: InferRequestType<typeof client.hub_document_pages.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['hub_document_pages', '/hub_document_pages', keyArgs] as const
}

export function useGetHubDocumentPages<TError = unknown>(
  args: InferRequestType<typeof client.hub_document_pages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_pages.$get>>>>
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
        ? getGetHubDocumentPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_pages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hub_document_pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHubDocumentPages<TError = unknown>(
  args: InferRequestType<typeof client.hub_document_pages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_pages.$get>>>>
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
        ? getGetHubDocumentPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_pages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hub_document_pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHubDocumentBlocksKey(
  args: InferRequestType<typeof client.hub_document_blocks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['hub_document_blocks', '/hub_document_blocks', keyArgs] as const
}

export function useGetHubDocumentBlocks<TError = unknown>(
  args: InferRequestType<typeof client.hub_document_blocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_blocks.$get>>>
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
        ? getGetHubDocumentBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_blocks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hub_document_blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHubDocumentBlocks<TError = unknown>(
  args: InferRequestType<typeof client.hub_document_blocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_blocks.$get>>>
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
        ? getGetHubDocumentBlocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.hub_document_blocks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hub_document_blocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShieldListsKey(args: InferRequestType<typeof client.shield_lists.$get>) {
  const { header: _, ...keyArgs } = args
  return ['shield_lists', '/shield_lists', keyArgs] as const
}

export function useGetShieldLists<TError = unknown>(
  args: InferRequestType<typeof client.shield_lists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shield_lists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShieldListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shield_lists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shield_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShieldLists<TError = unknown>(
  args: InferRequestType<typeof client.shield_lists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shield_lists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShieldListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shield_lists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shield_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShieldListsKey() {
  return ['shield_lists', '/shield_lists', 'POST'] as const
}

export function usePostShieldLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shield_lists.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.shield_lists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShieldListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.shield_lists.$post> }) =>
        parseResponse(client.shield_lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShieldListsShieldListIdKey(
  args: InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shield_lists', '/shield_lists/:shield_list_id', keyArgs] as const
}

export function useGetShieldListsShieldListId<TError = unknown>(
  args: InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shield_lists)[':shield_list_id']['$get']>>
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
        ? getGetShieldListsShieldListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shield_lists)[':shield_list_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shield_lists[':shield_list_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShieldListsShieldListId<TError = unknown>(
  args: InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shield_lists)[':shield_list_id']['$get']>>
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
        ? getGetShieldListsShieldListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shield_lists)[':shield_list_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shield_lists[':shield_list_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutShieldListsShieldListIdKey() {
  return ['shield_lists', '/shield_lists/:shield_list_id', 'PUT'] as const
}

export function usePutShieldListsShieldListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shield_lists)[':shield_list_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutShieldListsShieldListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$put']> },
      ) => parseResponse(client.shield_lists[':shield_list_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteShieldListsShieldListIdKey() {
  return ['shield_lists', '/shield_lists/:shield_list_id', 'DELETE'] as const
}

export function useDeleteShieldListsShieldListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shield_lists)[':shield_list_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteShieldListsShieldListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$delete']> },
      ) => parseResponse(client.shield_lists[':shield_list_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetArchivesKey(args: InferRequestType<typeof client.archives.$get>) {
  const { header: _, ...keyArgs } = args
  return ['archives', '/archives', keyArgs] as const
}

export function useGetArchives<TError = unknown>(
  args: InferRequestType<typeof client.archives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArchivesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.archives.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetArchives<TError = unknown>(
  args: InferRequestType<typeof client.archives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArchivesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.archives.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostArchivesKey() {
  return ['archives', '/archives', 'POST'] as const
}

export function usePostArchives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.archives.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostArchivesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.archives.$post> }) =>
        parseResponse(client.archives.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutArchivesArchiveIdKey() {
  return ['archives', '/archives/:archive_id', 'PUT'] as const
}

export function usePutArchivesArchiveId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.archives)[':archive_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.archives)[':archive_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutArchivesArchiveIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.archives)[':archive_id']['$put']> },
      ) => parseResponse(client.archives[':archive_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteArchivesArchiveIdKey() {
  return ['archives', '/archives/:archive_id', 'DELETE'] as const
}

export function useDeleteArchivesArchiveId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.archives)[':archive_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.archives)[':archive_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteArchivesArchiveIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.archives)[':archive_id']['$delete']> },
      ) => parseResponse(client.archives[':archive_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExternalUsersSubmitDeleteJobKey() {
  return ['external_users', '/external_users/submit_delete_job', 'POST'] as const
}

export function usePostExternalUsersSubmitDeleteJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.external_users.submit_delete_job.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.external_users.submit_delete_job.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExternalUsersSubmitDeleteJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.external_users.submit_delete_job.$post> },
      ) => parseResponse(client.external_users.submit_delete_job.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
