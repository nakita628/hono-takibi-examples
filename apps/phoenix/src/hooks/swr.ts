import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAgentsKey() {
  return ['agents'] as const
}

export function getArizePhoenixVersionKey() {
  return ['arize_phoenix_version'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getHealthzKey() {
  return ['healthz'] as const
}

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getReadyzKey() {
  return ['readyz'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1AnnotationConfigsKey(
  args: InferRequestType<typeof client.v1.annotation_configs.$get>,
) {
  return ['v1', '/v1/annotation_configs', args] as const
}

export function useGetV1AnnotationConfigs<TError = unknown>(
  args: InferRequestType<typeof client.v1.annotation_configs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.annotation_configs.$get>>>
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
        ? getGetV1AnnotationConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.annotation_configs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.annotation_configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AnnotationConfigs<TError = unknown>(
  args: InferRequestType<typeof client.v1.annotation_configs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.annotation_configs.$get>>>
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
        ? getGetV1AnnotationConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.annotation_configs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.annotation_configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AnnotationConfigsKey() {
  return ['v1', '/v1/annotation_configs', 'POST'] as const
}

export function usePostV1AnnotationConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.annotation_configs.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.annotation_configs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AnnotationConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.annotation_configs.$post> },
      ) => parseResponse(client.v1.annotation_configs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AnnotationConfigsConfigIdentifierKey(
  args: InferRequestType<(typeof client.v1.annotation_configs)[':config_identifier']['$get']>,
) {
  return ['v1', '/v1/annotation_configs/:config_identifier', args] as const
}

export function useGetV1AnnotationConfigsConfigIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.v1.annotation_configs)[':config_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.annotation_configs)[':config_identifier']['$get']>>
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
        ? getGetV1AnnotationConfigsConfigIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.annotation_configs)[':config_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.annotation_configs[':config_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AnnotationConfigsConfigIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.v1.annotation_configs)[':config_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.annotation_configs)[':config_identifier']['$get']>>
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
        ? getGetV1AnnotationConfigsConfigIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.annotation_configs)[':config_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.annotation_configs[':config_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1AnnotationConfigsConfigIdKey() {
  return ['v1', '/v1/annotation_configs/:config_id', 'PUT'] as const
}

export function usePutV1AnnotationConfigsConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.annotation_configs)[':config_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.annotation_configs)[':config_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AnnotationConfigsConfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.annotation_configs)[':config_id']['$put']> },
      ) => parseResponse(client.v1.annotation_configs[':config_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AnnotationConfigsConfigIdKey() {
  return ['v1', '/v1/annotation_configs/:config_id', 'DELETE'] as const
}

export function useDeleteV1AnnotationConfigsConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.annotation_configs)[':config_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.annotation_configs)[':config_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AnnotationConfigsConfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.annotation_configs)[':config_id']['$delete']>
        },
      ) => parseResponse(client.v1.annotation_configs[':config_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdentifierAnnotationConfigsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_identifier/annotation_configs', args] as const
}

export function useGetV1ProjectsProjectIdentifierAnnotationConfigs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$get']
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
        ? getGetV1ProjectsProjectIdentifierAnnotationConfigsKey(args)
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
                (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$get']
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
          client.v1.projects[':project_identifier'].annotation_configs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdentifierAnnotationConfigs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$get']
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
        ? getGetV1ProjectsProjectIdentifierAnnotationConfigsKey(args)
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
                (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$get']
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
          client.v1.projects[':project_identifier'].annotation_configs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsProjectIdentifierAnnotationConfigsKey() {
  return ['v1', '/v1/projects/:project_identifier/annotation_configs', 'PUT'] as const
}

export function usePutV1ProjectsProjectIdentifierAnnotationConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsProjectIdentifierAnnotationConfigsKey()
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
            (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_identifier'].annotation_configs.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierKey() {
  return [
    'v1',
    '/v1/projects/:project_identifier/annotation_configs/:config_identifier',
    'PUT',
  ] as const
}

export function usePutV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifier<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project_identifier']['annotation_configs'][':config_identifier']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['annotation_configs'][':config_identifier']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierKey()
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
            (typeof client.v1.projects)[':project_identifier']['annotation_configs'][':config_identifier']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_identifier'].annotation_configs[':config_identifier'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierKey() {
  return [
    'v1',
    '/v1/projects/:project_identifier/annotation_configs/:config_identifier',
    'DELETE',
  ] as const
}

export function useDeleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifier<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_identifier']['annotation_configs'][':config_identifier']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['annotation_configs'][':config_identifier']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierKey()
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
            (typeof client.v1.projects)[':project_identifier']['annotation_configs'][':config_identifier']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_identifier'].annotation_configs[
            ':config_identifier'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdentifierSpanAnnotationsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['span_annotations']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_identifier/span_annotations', args] as const
}

export function useGetV1ProjectsProjectIdentifierSpanAnnotations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['span_annotations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_identifier']['span_annotations']['$get']
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
        ? getGetV1ProjectsProjectIdentifierSpanAnnotationsKey(args)
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
                (typeof client.v1.projects)[':project_identifier']['span_annotations']['$get']
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
          client.v1.projects[':project_identifier'].span_annotations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdentifierSpanAnnotations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['span_annotations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_identifier']['span_annotations']['$get']
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
        ? getGetV1ProjectsProjectIdentifierSpanAnnotationsKey(args)
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
                (typeof client.v1.projects)[':project_identifier']['span_annotations']['$get']
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
          client.v1.projects[':project_identifier'].span_annotations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdentifierSpanAnnotationsKey() {
  return ['v1', '/v1/projects/:project_identifier/span_annotations', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectIdentifierSpanAnnotations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_identifier']['span_annotations']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['span_annotations']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectIdentifierSpanAnnotationsKey()
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
            (typeof client.v1.projects)[':project_identifier']['span_annotations']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_identifier'].span_annotations.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdentifierTraceAnnotationsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_identifier/trace_annotations', args] as const
}

export function useGetV1ProjectsProjectIdentifierTraceAnnotations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$get']
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
        ? getGetV1ProjectsProjectIdentifierTraceAnnotationsKey(args)
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
                (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$get']
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
          client.v1.projects[':project_identifier'].trace_annotations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdentifierTraceAnnotations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$get']
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
        ? getGetV1ProjectsProjectIdentifierTraceAnnotationsKey(args)
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
                (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$get']
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
          client.v1.projects[':project_identifier'].trace_annotations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdentifierTraceAnnotationsKey() {
  return ['v1', '/v1/projects/:project_identifier/trace_annotations', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectIdentifierTraceAnnotations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectIdentifierTraceAnnotationsKey()
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
            (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_identifier'].trace_annotations.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdentifierSessionAnnotationsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['session_annotations']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_identifier/session_annotations', args] as const
}

export function useGetV1ProjectsProjectIdentifierSessionAnnotations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['session_annotations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_identifier']['session_annotations']['$get']
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
        ? getGetV1ProjectsProjectIdentifierSessionAnnotationsKey(args)
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
                (typeof client.v1.projects)[':project_identifier']['session_annotations']['$get']
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
          client.v1.projects[':project_identifier'].session_annotations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdentifierSessionAnnotations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['session_annotations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_identifier']['session_annotations']['$get']
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
        ? getGetV1ProjectsProjectIdentifierSessionAnnotationsKey(args)
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
                (typeof client.v1.projects)[':project_identifier']['session_annotations']['$get']
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
          client.v1.projects[':project_identifier'].session_annotations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdentifierSessionAnnotationsKey() {
  return ['v1', '/v1/projects/:project_identifier/session_annotations', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectIdentifierSessionAnnotations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_identifier']['session_annotations']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['session_annotations']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectIdentifierSessionAnnotationsKey()
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
            (typeof client.v1.projects)[':project_identifier']['session_annotations']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_identifier'].session_annotations.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1DatasetLabelsKey(
  args: InferRequestType<typeof client.v1.dataset_labels.$get>,
) {
  return ['v1', '/v1/dataset_labels', args] as const
}

export function useGetV1DatasetLabels<TError = unknown>(
  args: InferRequestType<typeof client.v1.dataset_labels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset_labels.$get>>>>
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
        ? getGetV1DatasetLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset_labels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.dataset_labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatasetLabels<TError = unknown>(
  args: InferRequestType<typeof client.v1.dataset_labels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset_labels.$get>>>>
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
        ? getGetV1DatasetLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset_labels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.dataset_labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DatasetLabelsKey() {
  return ['v1', '/v1/dataset_labels', 'POST'] as const
}

export function usePostV1DatasetLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset_labels.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.dataset_labels.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DatasetLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.dataset_labels.$post> }) =>
        parseResponse(client.v1.dataset_labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DatasetLabelsLabelIdKey(
  args: InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$get']>,
) {
  return ['v1', '/v1/dataset_labels/:label_id', args] as const
}

export function useGetV1DatasetLabelsLabelId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.dataset_labels)[':label_id']['$get']>>
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
        ? getGetV1DatasetLabelsLabelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.dataset_labels)[':label_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.dataset_labels[':label_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatasetLabelsLabelId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.dataset_labels)[':label_id']['$get']>>
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
        ? getGetV1DatasetLabelsLabelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.dataset_labels)[':label_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.dataset_labels[':label_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1DatasetLabelsLabelIdKey() {
  return ['v1', '/v1/dataset_labels/:label_id', 'DELETE'] as const
}

export function useDeleteV1DatasetLabelsLabelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.dataset_labels)[':label_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DatasetLabelsLabelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$delete']> },
      ) => parseResponse(client.v1.dataset_labels[':label_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1DatasetLabelsLabelIdKey() {
  return ['v1', '/v1/dataset_labels/:label_id', 'PATCH'] as const
}

export function usePatchV1DatasetLabelsLabelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.dataset_labels)[':label_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DatasetLabelsLabelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$patch']> },
      ) => parseResponse(client.v1.dataset_labels[':label_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DatasetsDatasetIdentifierLabelsKey(
  args: InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$get']>,
) {
  return ['v1', '/v1/datasets/:dataset_identifier/labels', args] as const
}

export function useGetV1DatasetsDatasetIdentifierLabels<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$get']>
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
        ? getGetV1DatasetsDatasetIdentifierLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.datasets[':dataset_identifier'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatasetsDatasetIdentifierLabels<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$get']>
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
        ? getGetV1DatasetsDatasetIdentifierLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.datasets[':dataset_identifier'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1DatasetsDatasetIdentifierLabelsKey() {
  return ['v1', '/v1/datasets/:dataset_identifier/labels', 'PUT'] as const
}

export function usePutV1DatasetsDatasetIdentifierLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DatasetsDatasetIdentifierLabelsKey()
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
            (typeof client.v1.datasets)[':dataset_identifier']['labels']['$put']
          >
        },
      ) => parseResponse(client.v1.datasets[':dataset_identifier'].labels.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1DatasetsDatasetIdentifierLabelsLabelIdKey() {
  return ['v1', '/v1/datasets/:dataset_identifier/labels/:label_id', 'PUT'] as const
}

export function usePutV1DatasetsDatasetIdentifierLabelsLabelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.datasets)[':dataset_identifier']['labels'][':label_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.datasets)[':dataset_identifier']['labels'][':label_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1DatasetsDatasetIdentifierLabelsLabelIdKey()
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
            (typeof client.v1.datasets)[':dataset_identifier']['labels'][':label_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.datasets[':dataset_identifier'].labels[':label_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DatasetsDatasetIdentifierLabelsLabelIdKey() {
  return ['v1', '/v1/datasets/:dataset_identifier/labels/:label_id', 'DELETE'] as const
}

export function useDeleteV1DatasetsDatasetIdentifierLabelsLabelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.datasets)[':dataset_identifier']['labels'][':label_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.datasets)[':dataset_identifier']['labels'][':label_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DatasetsDatasetIdentifierLabelsLabelIdKey()
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
            (typeof client.v1.datasets)[':dataset_identifier']['labels'][':label_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.datasets[':dataset_identifier'].labels[':label_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1DatasetsKey(args: InferRequestType<typeof client.v1.datasets.$get>) {
  return ['v1', '/v1/datasets', args] as const
}

export function useGetV1Datasets<TError = unknown>(
  args: InferRequestType<typeof client.v1.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DatasetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Datasets<TError = unknown>(
  args: InferRequestType<typeof client.v1.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DatasetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DatasetsIdKey(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['$get']>,
) {
  return ['v1', '/v1/datasets/:id', args] as const
}

export function useGetV1DatasetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1DatasetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatasetsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1DatasetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1DatasetsIdKey() {
  return ['v1', '/v1/datasets/:id', 'DELETE'] as const
}

export function useDeleteV1DatasetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.datasets)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DatasetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.datasets)[':id']['$delete']> },
      ) => parseResponse(client.v1.datasets[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DatasetsIdVersionsKey(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['versions']['$get']>,
) {
  return ['v1', '/v1/datasets/:id/versions', args] as const
}

export function useGetV1DatasetsIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['versions']['$get']>>
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
        ? getGetV1DatasetsIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets[':id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatasetsIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['versions']['$get']>>
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
        ? getGetV1DatasetsIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets[':id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DatasetsUploadKey() {
  return ['v1', '/v1/datasets/upload', 'POST'] as const
}

export function usePostV1DatasetsUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.upload.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.datasets.upload.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DatasetsUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.datasets.upload.$post> }) =>
        parseResponse(client.v1.datasets.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DatasetsIdExamplesKey(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['examples']['$get']>,
) {
  return ['v1', '/v1/datasets/:id/examples', args] as const
}

export function useGetV1DatasetsIdExamples<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['examples']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['examples']['$get']>>
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
        ? getGetV1DatasetsIdExamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['examples']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets[':id'].examples.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatasetsIdExamples<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['examples']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['examples']['$get']>>
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
        ? getGetV1DatasetsIdExamplesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['examples']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets[':id'].examples.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DatasetsDatasetIdentifierSplitsKey(
  args: InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$get']>,
) {
  return ['v1', '/v1/datasets/:dataset_identifier/splits', args] as const
}

export function useGetV1DatasetsDatasetIdentifierSplits<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$get']>
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
        ? getGetV1DatasetsDatasetIdentifierSplitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.datasets[':dataset_identifier'].splits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatasetsDatasetIdentifierSplits<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$get']>
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
        ? getGetV1DatasetsDatasetIdentifierSplitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.datasets[':dataset_identifier'].splits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DatasetsDatasetIdentifierSplitsKey() {
  return ['v1', '/v1/datasets/:dataset_identifier/splits', 'POST'] as const
}

export function usePostV1DatasetsDatasetIdentifierSplits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DatasetsDatasetIdentifierSplitsKey()
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
            (typeof client.v1.datasets)[':dataset_identifier']['splits']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.datasets[':dataset_identifier'].splits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1DatasetsDatasetIdentifierSplitsSplitIdKey() {
  return ['v1', '/v1/datasets/:dataset_identifier/splits/:split_id', 'DELETE'] as const
}

export function useDeleteV1DatasetsDatasetIdentifierSplitsSplitId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.datasets)[':dataset_identifier']['splits'][':split_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.datasets)[':dataset_identifier']['splits'][':split_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DatasetsDatasetIdentifierSplitsSplitIdKey()
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
            (typeof client.v1.datasets)[':dataset_identifier']['splits'][':split_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.datasets[':dataset_identifier'].splits[':split_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1DatasetsDatasetIdentifierSplitsSplitIdKey() {
  return ['v1', '/v1/datasets/:dataset_identifier/splits/:split_id', 'PATCH'] as const
}

export function usePatchV1DatasetsDatasetIdentifierSplitsSplitId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.datasets)[':dataset_identifier']['splits'][':split_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.datasets)[':dataset_identifier']['splits'][':split_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DatasetsDatasetIdentifierSplitsSplitIdKey()
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
            (typeof client.v1.datasets)[':dataset_identifier']['splits'][':split_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.datasets[':dataset_identifier'].splits[':split_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1DatasetsIdCsvKey(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['csv']['$get']>,
) {
  return ['v1', '/v1/datasets/:id/csv', args] as const
}

export function useGetV1DatasetsIdCsv<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['csv']['$get']>>
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
        ? getGetV1DatasetsIdCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets[':id'].csv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatasetsIdCsv<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['csv']['$get']>>
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
        ? getGetV1DatasetsIdCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets[':id'].csv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DatasetsIdJsonlKey(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['$get']>,
) {
  return ['v1', '/v1/datasets/:id/jsonl', args] as const
}

export function useGetV1DatasetsIdJsonl<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['$get']>>
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
        ? getGetV1DatasetsIdJsonlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets[':id'].jsonl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatasetsIdJsonl<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['$get']>>
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
        ? getGetV1DatasetsIdJsonlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.datasets[':id'].jsonl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DatasetsIdJsonlOpenaiFtKey(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['openai_ft']['$get']>,
) {
  return ['v1', '/v1/datasets/:id/jsonl/openai_ft', args] as const
}

export function useGetV1DatasetsIdJsonlOpenaiFt<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['openai_ft']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['openai_ft']['$get']>>
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
        ? getGetV1DatasetsIdJsonlOpenaiFtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['openai_ft']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.datasets[':id'].jsonl.openai_ft.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatasetsIdJsonlOpenaiFt<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['openai_ft']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['openai_ft']['$get']>>
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
        ? getGetV1DatasetsIdJsonlOpenaiFtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['openai_ft']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.datasets[':id'].jsonl.openai_ft.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DatasetsIdJsonlOpenaiEvalsKey(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['openai_evals']['$get']>,
) {
  return ['v1', '/v1/datasets/:id/jsonl/openai_evals', args] as const
}

export function useGetV1DatasetsIdJsonlOpenaiEvals<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['openai_evals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['openai_evals']['$get']>>
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
        ? getGetV1DatasetsIdJsonlOpenaiEvalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['openai_evals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.datasets[':id'].jsonl.openai_evals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatasetsIdJsonlOpenaiEvals<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['openai_evals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['openai_evals']['$get']>>
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
        ? getGetV1DatasetsIdJsonlOpenaiEvalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['openai_evals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.datasets[':id'].jsonl.openai_evals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DatasetsDatasetIdExperimentsKey(
  args: InferRequestType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$get']>,
) {
  return ['v1', '/v1/datasets/:dataset_id/experiments', args] as const
}

export function useGetV1DatasetsDatasetIdExperiments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$get']>>
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
        ? getGetV1DatasetsDatasetIdExperimentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.datasets[':dataset_id'].experiments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DatasetsDatasetIdExperiments<TError = unknown>(
  args: InferRequestType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$get']>>
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
        ? getGetV1DatasetsDatasetIdExperimentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.datasets[':dataset_id'].experiments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DatasetsDatasetIdExperimentsKey() {
  return ['v1', '/v1/datasets/:dataset_id/experiments', 'POST'] as const
}

export function usePostV1DatasetsDatasetIdExperiments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DatasetsDatasetIdExperimentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$post']>
        },
      ) => parseResponse(client.v1.datasets[':dataset_id'].experiments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ExperimentsExperimentIdKey(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$get']>,
) {
  return ['v1', '/v1/experiments/:experiment_id', args] as const
}

export function useGetV1ExperimentsExperimentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['$get']>>
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
        ? getGetV1ExperimentsExperimentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.experiments[':experiment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExperimentsExperimentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['$get']>>
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
        ? getGetV1ExperimentsExperimentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.experiments[':experiment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ExperimentsExperimentIdKey() {
  return ['v1', '/v1/experiments/:experiment_id', 'DELETE'] as const
}

export function useDeleteV1ExperimentsExperimentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ExperimentsExperimentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$delete']> },
      ) => parseResponse(client.v1.experiments[':experiment_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ExperimentsExperimentIdKey() {
  return ['v1', '/v1/experiments/:experiment_id', 'PATCH'] as const
}

export function usePatchV1ExperimentsExperimentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ExperimentsExperimentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$patch']> },
      ) => parseResponse(client.v1.experiments[':experiment_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ExperimentsExperimentIdIncompleteRunsKey(
  args: InferRequestType<
    (typeof client.v1.experiments)[':experiment_id']['incomplete-runs']['$get']
  >,
) {
  return ['v1', '/v1/experiments/:experiment_id/incomplete-runs', args] as const
}

export function useGetV1ExperimentsExperimentIdIncompleteRuns<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.experiments)[':experiment_id']['incomplete-runs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.experiments)[':experiment_id']['incomplete-runs']['$get']
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
        ? getGetV1ExperimentsExperimentIdIncompleteRunsKey(args)
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
                (typeof client.v1.experiments)[':experiment_id']['incomplete-runs']['$get']
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
          client.v1.experiments[':experiment_id']['incomplete-runs'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExperimentsExperimentIdIncompleteRuns<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.experiments)[':experiment_id']['incomplete-runs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.experiments)[':experiment_id']['incomplete-runs']['$get']
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
        ? getGetV1ExperimentsExperimentIdIncompleteRunsKey(args)
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
                (typeof client.v1.experiments)[':experiment_id']['incomplete-runs']['$get']
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
          client.v1.experiments[':experiment_id']['incomplete-runs'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ExperimentsExperimentIdJsonKey(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['json']['$get']>,
) {
  return ['v1', '/v1/experiments/:experiment_id/json', args] as const
}

export function useGetV1ExperimentsExperimentIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['json']['$get']>>
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
        ? getGetV1ExperimentsExperimentIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.experiments[':experiment_id'].json.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExperimentsExperimentIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['json']['$get']>>
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
        ? getGetV1ExperimentsExperimentIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.experiments[':experiment_id'].json.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ExperimentsExperimentIdCsvKey(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['csv']['$get']>,
) {
  return ['v1', '/v1/experiments/:experiment_id/csv', args] as const
}

export function useGetV1ExperimentsExperimentIdCsv<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['csv']['$get']>>
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
        ? getGetV1ExperimentsExperimentIdCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.experiments[':experiment_id'].csv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExperimentsExperimentIdCsv<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['csv']['$get']>>
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
        ? getGetV1ExperimentsExperimentIdCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.experiments[':experiment_id'].csv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ExperimentsExperimentIdTagsKey(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['tags']['$get']>,
) {
  return ['v1', '/v1/experiments/:experiment_id/tags', args] as const
}

export function useGetV1ExperimentsExperimentIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['tags']['$get']>>
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
        ? getGetV1ExperimentsExperimentIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.experiments[':experiment_id'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExperimentsExperimentIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['tags']['$get']>>
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
        ? getGetV1ExperimentsExperimentIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.experiments[':experiment_id'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ExperimentsExperimentIdTagsKey() {
  return ['v1', '/v1/experiments/:experiment_id/tags', 'POST'] as const
}

export function usePostV1ExperimentsExperimentIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentsExperimentIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['tags']['$post']>
        },
      ) => parseResponse(client.v1.experiments[':experiment_id'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ExperimentsExperimentIdTagsTagIdentifierKey() {
  return ['v1', '/v1/experiments/:experiment_id/tags/:tag_identifier', 'DELETE'] as const
}

export function useDeleteV1ExperimentsExperimentIdTagsTagIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.experiments)[':experiment_id']['tags'][':tag_identifier']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.experiments)[':experiment_id']['tags'][':tag_identifier']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ExperimentsExperimentIdTagsTagIdentifierKey()
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
            (typeof client.v1.experiments)[':experiment_id']['tags'][':tag_identifier']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.experiments[':experiment_id'].tags[':tag_identifier'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ExperimentsExperimentIdRunsKey(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['runs']['$get']>,
) {
  return ['v1', '/v1/experiments/:experiment_id/runs', args] as const
}

export function useGetV1ExperimentsExperimentIdRuns<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['runs']['$get']>>
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
        ? getGetV1ExperimentsExperimentIdRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['runs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.experiments[':experiment_id'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExperimentsExperimentIdRuns<TError = unknown>(
  args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['runs']['$get']>>
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
        ? getGetV1ExperimentsExperimentIdRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['runs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.experiments[':experiment_id'].runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ExperimentsExperimentIdRunsKey() {
  return ['v1', '/v1/experiments/:experiment_id/runs', 'POST'] as const
}

export function usePostV1ExperimentsExperimentIdRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['runs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['runs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentsExperimentIdRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['runs']['$post']>
        },
      ) => parseResponse(client.v1.experiments[':experiment_id'].runs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ExperimentsExperimentIdIncompleteEvaluationsKey(
  args: InferRequestType<
    (typeof client.v1.experiments)[':experiment_id']['incomplete-evaluations']['$get']
  >,
) {
  return ['v1', '/v1/experiments/:experiment_id/incomplete-evaluations', args] as const
}

export function useGetV1ExperimentsExperimentIdIncompleteEvaluations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.experiments)[':experiment_id']['incomplete-evaluations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.experiments)[':experiment_id']['incomplete-evaluations']['$get']
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
        ? getGetV1ExperimentsExperimentIdIncompleteEvaluationsKey(args)
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
                (typeof client.v1.experiments)[':experiment_id']['incomplete-evaluations']['$get']
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
          client.v1.experiments[':experiment_id']['incomplete-evaluations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExperimentsExperimentIdIncompleteEvaluations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.experiments)[':experiment_id']['incomplete-evaluations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.experiments)[':experiment_id']['incomplete-evaluations']['$get']
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
        ? getGetV1ExperimentsExperimentIdIncompleteEvaluationsKey(args)
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
                (typeof client.v1.experiments)[':experiment_id']['incomplete-evaluations']['$get']
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
          client.v1.experiments[':experiment_id']['incomplete-evaluations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ExperimentEvaluationsKey() {
  return ['v1', '/v1/experiment_evaluations', 'POST'] as const
}

export function usePostV1ExperimentEvaluations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.experiment_evaluations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.experiment_evaluations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExperimentEvaluationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.experiment_evaluations.$post> },
      ) => parseResponse(client.v1.experiment_evaluations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdentifierTracesKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['traces']['$get']>,
) {
  return ['v1', '/v1/projects/:project_identifier/traces', args] as const
}

export function useGetV1ProjectsProjectIdentifierTraces<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['traces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_identifier']['traces']['$get']>
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
        ? getGetV1ProjectsProjectIdentifierTracesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_identifier']['traces']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_identifier'].traces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdentifierTraces<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['traces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_identifier']['traces']['$get']>
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
        ? getGetV1ProjectsProjectIdentifierTracesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_identifier']['traces']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_identifier'].traces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdentifierTracesKey() {
  return ['v1', '/v1/projects/:project_identifier/traces', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectIdentifierTraces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_identifier']['traces']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['traces']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectIdentifierTracesKey()
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
            (typeof client.v1.projects)[':project_identifier']['traces']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.projects[':project_identifier'].traces.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TraceAnnotationsKey() {
  return ['v1', '/v1/trace_annotations', 'POST'] as const
}

export function usePostV1TraceAnnotations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.trace_annotations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.trace_annotations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TraceAnnotationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.trace_annotations.$post> },
      ) => parseResponse(client.v1.trace_annotations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TraceNotesKey() {
  return ['v1', '/v1/trace_notes', 'POST'] as const
}

export function usePostV1TraceNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.trace_notes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.trace_notes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TraceNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.trace_notes.$post> }) =>
        parseResponse(client.v1.trace_notes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TracesTransferKey() {
  return ['v1', '/v1/traces/transfer', 'POST'] as const
}

export function usePostV1TracesTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.traces.transfer.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.traces.transfer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TracesTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.traces.transfer.$post> }) =>
        parseResponse(client.v1.traces.transfer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TracesTraceIdentifierKey() {
  return ['v1', '/v1/traces/:trace_identifier', 'DELETE'] as const
}

export function useDeleteV1TracesTraceIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.traces)[':trace_identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.traces)[':trace_identifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TracesTraceIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.traces)[':trace_identifier']['$delete']> },
      ) => parseResponse(client.v1.traces[':trace_identifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdentifierSpansOtlpv1Key(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['spans']['otlpv1']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project_identifier/spans/otlpv1', args] as const
}

export function useGetV1ProjectsProjectIdentifierSpansOtlpv1<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['spans']['otlpv1']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_identifier']['spans']['otlpv1']['$get']
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
        ? getGetV1ProjectsProjectIdentifierSpansOtlpv1Key(args)
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
                (typeof client.v1.projects)[':project_identifier']['spans']['otlpv1']['$get']
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
          client.v1.projects[':project_identifier'].spans.otlpv1.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdentifierSpansOtlpv1<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project_identifier']['spans']['otlpv1']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project_identifier']['spans']['otlpv1']['$get']
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
        ? getGetV1ProjectsProjectIdentifierSpansOtlpv1Key(args)
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
                (typeof client.v1.projects)[':project_identifier']['spans']['otlpv1']['$get']
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
          client.v1.projects[':project_identifier'].spans.otlpv1.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdentifierSpansKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['spans']['$get']>,
) {
  return ['v1', '/v1/projects/:project_identifier/spans', args] as const
}

export function useGetV1ProjectsProjectIdentifierSpans<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['spans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['spans']['$get']>>
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
        ? getGetV1ProjectsProjectIdentifierSpansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['spans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_identifier'].spans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdentifierSpans<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['spans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['spans']['$get']>>
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
        ? getGetV1ProjectsProjectIdentifierSpansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['spans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_identifier'].spans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectIdentifierSpansKey() {
  return ['v1', '/v1/projects/:project_identifier/spans', 'POST'] as const
}

export function usePostV1ProjectsProjectIdentifierSpans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['spans']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['spans']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectIdentifierSpansKey()
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
            (typeof client.v1.projects)[':project_identifier']['spans']['$post']
          >
        },
      ) => parseResponse(client.v1.projects[':project_identifier'].spans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SpanAnnotationsKey() {
  return ['v1', '/v1/span_annotations', 'POST'] as const
}

export function usePostV1SpanAnnotations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.span_annotations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.span_annotations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SpanAnnotationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.span_annotations.$post> }) =>
        parseResponse(client.v1.span_annotations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SpanNotesKey() {
  return ['v1', '/v1/span_notes', 'POST'] as const
}

export function usePostV1SpanNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.span_notes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.span_notes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SpanNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.span_notes.$post> }) =>
        parseResponse(client.v1.span_notes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SpansSpanIdentifierKey() {
  return ['v1', '/v1/spans/:span_identifier', 'DELETE'] as const
}

export function useDeleteV1SpansSpanIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.spans)[':span_identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.spans)[':span_identifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SpansSpanIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.spans)[':span_identifier']['$delete']> },
      ) => parseResponse(client.v1.spans[':span_identifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PromptsKey(args: InferRequestType<typeof client.v1.prompts.$get>) {
  return ['v1', '/v1/prompts', args] as const
}

export function useGetV1Prompts<TError = unknown>(
  args: InferRequestType<typeof client.v1.prompts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prompts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PromptsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prompts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.prompts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Prompts<TError = unknown>(
  args: InferRequestType<typeof client.v1.prompts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prompts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PromptsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prompts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.prompts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PromptsKey() {
  return ['v1', '/v1/prompts', 'POST'] as const
}

export function usePostV1Prompts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prompts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.prompts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PromptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.prompts.$post> }) =>
        parseResponse(client.v1.prompts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PromptsPromptIdentifierVersionsKey(
  args: InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$get']>,
) {
  return ['v1', '/v1/prompts/:prompt_identifier/versions', args] as const
}

export function useGetV1PromptsPromptIdentifierVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$get']>
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
        ? getGetV1PromptsPromptIdentifierVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.prompts[':prompt_identifier'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PromptsPromptIdentifierVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$get']>
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
        ? getGetV1PromptsPromptIdentifierVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.prompts[':prompt_identifier'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PromptsPromptIdentifierVersionsKey() {
  return ['v1', '/v1/prompts/:prompt_identifier/versions', 'POST'] as const
}

export function usePostV1PromptsPromptIdentifierVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PromptsPromptIdentifierVersionsKey()
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
            (typeof client.v1.prompts)[':prompt_identifier']['versions']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.prompts[':prompt_identifier'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PromptVersionsPromptVersionIdKey(
  args: InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['$get']>,
) {
  return ['v1', '/v1/prompt_versions/:prompt_version_id', args] as const
}

export function useGetV1PromptVersionsPromptVersionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.prompt_versions)[':prompt_version_id']['$get']>>
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
        ? getGetV1PromptVersionsPromptVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.prompt_versions)[':prompt_version_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.prompt_versions[':prompt_version_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PromptVersionsPromptVersionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.prompt_versions)[':prompt_version_id']['$get']>>
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
        ? getGetV1PromptVersionsPromptVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.prompt_versions)[':prompt_version_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.prompt_versions[':prompt_version_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PromptsPromptIdentifierTagsTagNameKey(
  args: InferRequestType<
    (typeof client.v1.prompts)[':prompt_identifier']['tags'][':tag_name']['$get']
  >,
) {
  return ['v1', '/v1/prompts/:prompt_identifier/tags/:tag_name', args] as const
}

export function useGetV1PromptsPromptIdentifierTagsTagName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.prompts)[':prompt_identifier']['tags'][':tag_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.prompts)[':prompt_identifier']['tags'][':tag_name']['$get']
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
        ? getGetV1PromptsPromptIdentifierTagsTagNameKey(args)
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
                (typeof client.v1.prompts)[':prompt_identifier']['tags'][':tag_name']['$get']
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
          client.v1.prompts[':prompt_identifier'].tags[':tag_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PromptsPromptIdentifierTagsTagName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.prompts)[':prompt_identifier']['tags'][':tag_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.prompts)[':prompt_identifier']['tags'][':tag_name']['$get']
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
        ? getGetV1PromptsPromptIdentifierTagsTagNameKey(args)
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
                (typeof client.v1.prompts)[':prompt_identifier']['tags'][':tag_name']['$get']
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
          client.v1.prompts[':prompt_identifier'].tags[':tag_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PromptsPromptIdentifierLatestKey(
  args: InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['latest']['$get']>,
) {
  return ['v1', '/v1/prompts/:prompt_identifier/latest', args] as const
}

export function useGetV1PromptsPromptIdentifierLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['latest']['$get']>>
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
        ? getGetV1PromptsPromptIdentifierLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.prompts[':prompt_identifier'].latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PromptsPromptIdentifierLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['latest']['$get']>>
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
        ? getGetV1PromptsPromptIdentifierLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.prompts[':prompt_identifier'].latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PromptVersionsPromptVersionIdTagsKey(
  args: InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$get']>,
) {
  return ['v1', '/v1/prompt_versions/:prompt_version_id/tags', args] as const
}

export function useGetV1PromptVersionsPromptVersionIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$get']>
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
        ? getGetV1PromptVersionsPromptVersionIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.prompt_versions[':prompt_version_id'].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PromptVersionsPromptVersionIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$get']>
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
        ? getGetV1PromptVersionsPromptVersionIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.prompt_versions[':prompt_version_id'].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PromptVersionsPromptVersionIdTagsKey() {
  return ['v1', '/v1/prompt_versions/:prompt_version_id/tags', 'POST'] as const
}

export function usePostV1PromptVersionsPromptVersionIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PromptVersionsPromptVersionIdTagsKey()
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
            (typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.prompt_versions[':prompt_version_id'].tags.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PromptVersionsPromptVersionIdTagsTagNameKey() {
  return ['v1', '/v1/prompt_versions/:prompt_version_id/tags/:tag_name', 'DELETE'] as const
}

export function useDeleteV1PromptVersionsPromptVersionIdTagsTagName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.prompt_versions)[':prompt_version_id']['tags'][':tag_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.prompt_versions)[':prompt_version_id']['tags'][':tag_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PromptVersionsPromptVersionIdTagsTagNameKey()
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
            (typeof client.v1.prompt_versions)[':prompt_version_id']['tags'][':tag_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.prompt_versions[':prompt_version_id'].tags[':tag_name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PromptsPromptIdentifierKey() {
  return ['v1', '/v1/prompts/:prompt_identifier', 'DELETE'] as const
}

export function useDeleteV1PromptsPromptIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PromptsPromptIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['$delete']> },
      ) => parseResponse(client.v1.prompts[':prompt_identifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1PromptsPromptIdentifierKey() {
  return ['v1', '/v1/prompts/:prompt_identifier', 'PATCH'] as const
}

export function usePatchV1PromptsPromptIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1PromptsPromptIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['$patch']> },
      ) => parseResponse(client.v1.prompts[':prompt_identifier'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsKey(args: InferRequestType<typeof client.v1.projects.$get>) {
  return ['v1', '/v1/projects', args] as const
}

export function useGetV1Projects<TError = unknown>(
  args: InferRequestType<typeof client.v1.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Projects<TError = unknown>(
  args: InferRequestType<typeof client.v1.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsKey() {
  return ['v1', '/v1/projects', 'POST'] as const
}

export function usePostV1Projects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.projects.$post> }) =>
        parseResponse(client.v1.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdentifierKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['$get']>,
) {
  return ['v1', '/v1/projects/:project_identifier', args] as const
}

export function useGetV1ProjectsProjectIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['$get']>>
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
        ? getGetV1ProjectsProjectIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['$get']>>
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
        ? getGetV1ProjectsProjectIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsProjectIdentifierKey() {
  return ['v1', '/v1/projects/:project_identifier', 'PUT'] as const
}

export function usePutV1ProjectsProjectIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsProjectIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':project_identifier']['$put']> },
      ) => parseResponse(client.v1.projects[':project_identifier'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdentifierKey() {
  return ['v1', '/v1/projects/:project_identifier', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':project_identifier']['$delete']> },
      ) => parseResponse(client.v1.projects[':project_identifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsProjectIdentifierRetentionKey() {
  return ['v1', '/v1/projects/:project_identifier/retention', 'PATCH'] as const
}

export function usePatchV1ProjectsProjectIdentifierRetention<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project_identifier']['retention']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['retention']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsProjectIdentifierRetentionKey()
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
            (typeof client.v1.projects)[':project_identifier']['retention']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project_identifier'].retention.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ModelProvidersKey() {
  return ['v1', '/v1/model_providers'] as const
}

export function useGetV1ModelProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.model_providers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ModelProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.model_providers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.model_providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ModelProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.model_providers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ModelProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.model_providers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.model_providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomModelProvidersKey(
  args: InferRequestType<typeof client.v1.custom_model_providers.$get>,
) {
  return ['v1', '/v1/custom_model_providers', args] as const
}

export function useGetV1CustomModelProviders<TError = unknown>(
  args: InferRequestType<typeof client.v1.custom_model_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.custom_model_providers.$get>>>
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
        ? getGetV1CustomModelProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.custom_model_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.custom_model_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomModelProviders<TError = unknown>(
  args: InferRequestType<typeof client.v1.custom_model_providers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.custom_model_providers.$get>>>
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
        ? getGetV1CustomModelProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.custom_model_providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.custom_model_providers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SessionsSessionIdentifierKey(
  args: InferRequestType<(typeof client.v1.sessions)[':session_identifier']['$get']>,
) {
  return ['v1', '/v1/sessions/:session_identifier', args] as const
}

export function useGetV1SessionsSessionIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sessions)[':session_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sessions)[':session_identifier']['$get']>>
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
        ? getGetV1SessionsSessionIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sessions)[':session_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.sessions[':session_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SessionsSessionIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sessions)[':session_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sessions)[':session_identifier']['$get']>>
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
        ? getGetV1SessionsSessionIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sessions)[':session_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.sessions[':session_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1SessionsSessionIdentifierKey() {
  return ['v1', '/v1/sessions/:session_identifier', 'DELETE'] as const
}

export function useDeleteV1SessionsSessionIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sessions)[':session_identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.sessions)[':session_identifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SessionsSessionIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.sessions)[':session_identifier']['$delete']> },
      ) => parseResponse(client.v1.sessions[':session_identifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SessionsDeleteKey() {
  return ['v1', '/v1/sessions/delete', 'POST'] as const
}

export function usePostV1SessionsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.delete.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.sessions.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SessionsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sessions.delete.$post> }) =>
        parseResponse(client.v1.sessions.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdentifierSessionsKey(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['sessions']['$get']>,
) {
  return ['v1', '/v1/projects/:project_identifier/sessions', args] as const
}

export function useGetV1ProjectsProjectIdentifierSessions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_identifier']['sessions']['$get']>
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
        ? getGetV1ProjectsProjectIdentifierSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_identifier']['sessions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_identifier'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdentifierSessions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_identifier']['sessions']['$get']>
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
        ? getGetV1ProjectsProjectIdentifierSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project_identifier']['sessions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project_identifier'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SessionAnnotationsKey() {
  return ['v1', '/v1/session_annotations', 'POST'] as const
}

export function usePostV1SessionAnnotations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.session_annotations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.session_annotations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SessionAnnotationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.session_annotations.$post> },
      ) => parseResponse(client.v1.session_annotations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SessionNotesKey() {
  return ['v1', '/v1/session_notes', 'POST'] as const
}

export function usePostV1SessionNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.session_notes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.session_notes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SessionNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.session_notes.$post> }) =>
        parseResponse(client.v1.session_notes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DocumentAnnotationsKey() {
  return ['v1', '/v1/document_annotations', 'POST'] as const
}

export function usePostV1DocumentAnnotations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.document_annotations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.document_annotations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DocumentAnnotationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.document_annotations.$post> },
      ) => parseResponse(client.v1.document_annotations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UserKey() {
  return ['v1', '/v1/user'] as const
}

export function useGetV1User<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1User<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UsersKey(args: InferRequestType<typeof client.v1.users.$get>) {
  return ['v1', '/v1/users', args] as const
}

export function useGetV1Users<TError = unknown>(
  args: InferRequestType<typeof client.v1.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Users<TError = unknown>(
  args: InferRequestType<typeof client.v1.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV1UsersKey() {
  return ['v1', '/v1/users', 'POST'] as const
}

export function usePostV1Users<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.users.$post> }) =>
        parseResponse(client.v1.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1UsersUserIdKey() {
  return ['v1', '/v1/users/:user_id', 'DELETE'] as const
}

export function useDeleteV1UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.users)[':user_id']['$delete']> },
      ) => parseResponse(client.v1.users[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1SecretsKey() {
  return ['v1', '/v1/secrets', 'PUT'] as const
}

export function usePutV1Secrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.secrets.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.secrets.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.secrets.$put> }) =>
        parseResponse(client.v1.secrets.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UserApiKeysKey() {
  return ['v1', '/v1/user/api_keys'] as const
}

export function useGetV1UserApiKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.api_keys.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UserApiKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.api_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.user.api_keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UserApiKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.api_keys.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UserApiKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.api_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.user.api_keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1UserApiKeysKey() {
  return ['v1', '/v1/user/api_keys', 'POST'] as const
}

export function usePostV1UserApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.api_keys.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.user.api_keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UserApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.user.api_keys.$post> }) =>
        parseResponse(client.v1.user.api_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UsersApiKeysKey(
  args: InferRequestType<typeof client.v1.users.api_keys.$get>,
) {
  return ['v1', '/v1/users/api_keys', args] as const
}

export function useGetV1UsersApiKeys<TError = unknown>(
  args: InferRequestType<typeof client.v1.users.api_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.api_keys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsersApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.api_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users.api_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersApiKeys<TError = unknown>(
  args: InferRequestType<typeof client.v1.users.api_keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.api_keys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsersApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.api_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users.api_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1UserApiKeysApiKeyIdKey() {
  return ['v1', '/v1/user/api_keys/:api_key_id', 'DELETE'] as const
}

export function useDeleteV1UserApiKeysApiKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.user.api_keys)[':api_key_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.user.api_keys)[':api_key_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UserApiKeysApiKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.user.api_keys)[':api_key_id']['$delete']> },
      ) => parseResponse(client.v1.user.api_keys[':api_key_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SystemApiKeysKey() {
  return ['v1', '/v1/system/api_keys'] as const
}

export function useGetV1SystemApiKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.system.api_keys.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SystemApiKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.system.api_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.system.api_keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SystemApiKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.system.api_keys.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SystemApiKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.system.api_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.system.api_keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SystemApiKeysKey() {
  return ['v1', '/v1/system/api_keys', 'POST'] as const
}

export function usePostV1SystemApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.system.api_keys.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.system.api_keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SystemApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.system.api_keys.$post> }) =>
        parseResponse(client.v1.system.api_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SystemApiKeysApiKeyIdKey() {
  return ['v1', '/v1/system/api_keys/:api_key_id', 'DELETE'] as const
}

export function useDeleteV1SystemApiKeysApiKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.system.api_keys)[':api_key_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.system.api_keys)[':api_key_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SystemApiKeysApiKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.system.api_keys)[':api_key_id']['$delete']> },
      ) => parseResponse(client.v1.system.api_keys[':api_key_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ChatCompletionsKey() {
  return ['v1', '/v1/chat/completions', 'POST'] as const
}

export function usePostV1ChatCompletions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.completions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.chat.completions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ChatCompletionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.chat.completions.$post> }) =>
        parseResponse(client.v1.chat.completions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthLoginKey() {
  return ['auth', '/auth/login', 'POST'] as const
}

export function usePostAuthLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.login.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth.login.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthLogoutKey() {
  return ['auth', '/auth/logout'] as const
}

export function useGetAuthLogout<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthLogoutKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.logout.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthLogout<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthLogoutKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.logout.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthRefreshKey() {
  return ['auth', '/auth/refresh', 'POST'] as const
}

export function usePostAuthRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth.refresh.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthPasswordResetEmailKey() {
  return ['auth', '/auth/password-reset-email', 'POST'] as const
}

export function usePostAuthPasswordResetEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth)['password-reset-email']['$post']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthPasswordResetEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.auth['password-reset-email'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthPasswordResetKey() {
  return ['auth', '/auth/password-reset', 'POST'] as const
}

export function usePostAuthPasswordReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['password-reset']['$post']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthPasswordResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth['password-reset'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthLdapLoginKey() {
  return ['auth', '/auth/ldap/login', 'POST'] as const
}

export function usePostAuthLdapLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.ldap.login.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthLdapLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth.ldap.login.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauth2IdpNameLoginKey(
  args: InferRequestType<(typeof client.oauth2)[':idp_name']['login']['$get']>,
) {
  return ['oauth2', '/oauth2/:idp_name/login', args] as const
}

export function useGetOauth2IdpNameLogin<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2)[':idp_name']['login']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['login']['$get']>>
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
        ? getGetOauth2IdpNameLoginKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['login']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2[':idp_name'].login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth2IdpNameLogin<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2)[':idp_name']['login']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['login']['$get']>>
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
        ? getGetOauth2IdpNameLoginKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['login']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2[':idp_name'].login.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauth2IdpNameLoginKey() {
  return ['oauth2', '/oauth2/:idp_name/login', 'POST'] as const
}

export function usePostOauth2IdpNameLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['login']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth2)[':idp_name']['login']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2IdpNameLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.oauth2)[':idp_name']['login']['$post']> },
      ) => parseResponse(client.oauth2[':idp_name'].login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauth2IdpNameTokensKey(
  args: InferRequestType<(typeof client.oauth2)[':idp_name']['tokens']['$get']>,
) {
  const { cookie: _, ...keyArgs } = args
  return ['oauth2', '/oauth2/:idp_name/tokens', keyArgs] as const
}

export function useGetOauth2IdpNameTokens<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2)[':idp_name']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['tokens']['$get']>>
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
        ? getGetOauth2IdpNameTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2[':idp_name'].tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauth2IdpNameTokens<TError = unknown>(
  args: InferRequestType<(typeof client.oauth2)[':idp_name']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['tokens']['$get']>>
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
        ? getGetOauth2IdpNameTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth2[':idp_name'].tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAgentsServerSessionsSessionIdChatKey() {
  return ['agents', '/agents/server/sessions/:session_id/chat', 'POST'] as const
}

export function usePostAgentsServerSessionsSessionIdChat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.agents.server.sessions)[':session_id']['chat']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agents.server.sessions)[':session_id']['chat']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentsServerSessionsSessionIdChatKey()
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
            (typeof client.agents.server.sessions)[':session_id']['chat']['$post']
          >
        },
      ) =>
        parseResponse(client.agents.server.sessions[':session_id'].chat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AgentSessionsKey(
  args: InferRequestType<typeof client.v1.agent_sessions.$get>,
) {
  return ['v1', '/v1/agent_sessions', args] as const
}

export function useGetV1AgentSessions<TError = unknown>(
  args: InferRequestType<typeof client.v1.agent_sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent_sessions.$get>>>>
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
        ? getGetV1AgentSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent_sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agent_sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AgentSessions<TError = unknown>(
  args: InferRequestType<typeof client.v1.agent_sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent_sessions.$get>>>>
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
        ? getGetV1AgentSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent_sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agent_sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AgentSessionsKey() {
  return ['v1', '/v1/agent_sessions', 'POST'] as const
}

export function usePostV1AgentSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent_sessions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.agent_sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AgentSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.agent_sessions.$post> }) =>
        parseResponse(client.v1.agent_sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AgentSessionsSessionIdKey(
  args: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['$get']>,
) {
  return ['v1', '/v1/agent_sessions/:session_id', args] as const
}

export function useGetV1AgentSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['$get']>>
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
        ? getGetV1AgentSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agent_sessions[':session_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AgentSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['$get']>>
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
        ? getGetV1AgentSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agent_sessions[':session_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1AgentSessionsSessionIdKey() {
  return ['v1', '/v1/agent_sessions/:session_id', 'PATCH'] as const
}

export function usePatchV1AgentSessionsSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AgentSessionsSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['$patch']> },
      ) => parseResponse(client.v1.agent_sessions[':session_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AgentSessionsSessionIdMessagesKey(
  args: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['messages']['$get']>,
) {
  return ['v1', '/v1/agent_sessions/:session_id/messages', args] as const
}

export function useGetV1AgentSessionsSessionIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.agent_sessions)[':session_id']['messages']['$get']>
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
        ? getGetV1AgentSessionsSessionIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.agent_sessions)[':session_id']['messages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.agent_sessions[':session_id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AgentSessionsSessionIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.agent_sessions)[':session_id']['messages']['$get']>
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
        ? getGetV1AgentSessionsSessionIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.agent_sessions)[':session_id']['messages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.agent_sessions[':session_id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AgentSessionsSessionIdCompactKey() {
  return ['v1', '/v1/agent_sessions/:session_id/compact', 'POST'] as const
}

export function usePostV1AgentSessionsSessionIdCompact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['compact']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['compact']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AgentSessionsSessionIdCompactKey()
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
            (typeof client.v1.agent_sessions)[':session_id']['compact']['$post']
          >
        },
      ) => parseResponse(client.v1.agent_sessions[':session_id'].compact.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AgentSessionsSessionIdToolOutputsKey() {
  return ['v1', '/v1/agent_sessions/:session_id/tool_outputs', 'POST'] as const
}

export function usePostV1AgentSessionsSessionIdToolOutputs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.agent_sessions)[':session_id']['tool_outputs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['tool_outputs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AgentSessionsSessionIdToolOutputsKey()
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
            (typeof client.v1.agent_sessions)[':session_id']['tool_outputs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.agent_sessions[':session_id'].tool_outputs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AgentSessionsSessionIdToolApprovalsKey() {
  return ['v1', '/v1/agent_sessions/:session_id/tool_approvals', 'POST'] as const
}

export function usePostV1AgentSessionsSessionIdToolApprovals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.agent_sessions)[':session_id']['tool_approvals']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['tool_approvals']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AgentSessionsSessionIdToolApprovalsKey()
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
            (typeof client.v1.agent_sessions)[':session_id']['tool_approvals']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.agent_sessions[':session_id'].tool_approvals.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AgentSessionsSessionIdChatKey() {
  return ['v1', '/v1/agent_sessions/:session_id/chat', 'POST'] as const
}

export function usePostV1AgentSessionsSessionIdChat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['chat']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['chat']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AgentSessionsSessionIdChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['chat']['$post']>
        },
      ) => parseResponse(client.v1.agent_sessions[':session_id'].chat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetArizePhoenixVersionKey() {
  return ['arize_phoenix_version', '/arize_phoenix_version'] as const
}

export function useGetArizePhoenixVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.arize_phoenix_version.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetArizePhoenixVersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.arize_phoenix_version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.arize_phoenix_version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArizePhoenixVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.arize_phoenix_version.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetArizePhoenixVersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.arize_phoenix_version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.arize_phoenix_version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthzKey() {
  return ['healthz', '/healthz'] as const
}

export function useGetHealthz<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthzKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.healthz.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthz<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthzKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.healthz.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReadyzKey() {
  return ['readyz', '/readyz'] as const
}

export function useGetReadyz<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReadyzKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.readyz.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReadyz<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReadyzKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.readyz.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
