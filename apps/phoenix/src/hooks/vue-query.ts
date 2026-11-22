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

export function getV1AnnotationConfigsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.annotation_configs.$get>>,
) {
  return ['v1', '/v1/annotation_configs', toValue(args)] as const
}

export function getV1AnnotationConfigsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.annotation_configs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AnnotationConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.annotation_configs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AnnotationConfigs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.annotation_configs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.annotation_configs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.annotation_configs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.annotation_configs.$get>>>
            >
          >,
          ReturnType<typeof getV1AnnotationConfigsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.annotation_configs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AnnotationConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AnnotationConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.annotation_configs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AnnotationConfigsMutationKey() {
  return ['v1', '/v1/annotation_configs', 'POST'] as const
}

export function getPostV1AnnotationConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.annotation_configs.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.annotation_configs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AnnotationConfigsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.annotation_configs.$post>) {
      return parseResponse(client.v1.annotation_configs.$post(args, options))
    },
  })
}

export function usePostV1AnnotationConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.annotation_configs.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.annotation_configs.$post>,
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
  const mutationDefaults = getPostV1AnnotationConfigsMutationOptions<TError, TOnMutateResult>(
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

export function getV1AnnotationConfigsConfigIdentifierQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.annotation_configs)[':config_identifier']['$get']>
  >,
) {
  return ['v1', '/v1/annotation_configs/:config_identifier', toValue(args)] as const
}

export function getV1AnnotationConfigsConfigIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.annotation_configs)[':config_identifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AnnotationConfigsConfigIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.annotation_configs[':config_identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AnnotationConfigsConfigIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.annotation_configs)[':config_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.annotation_configs)[':config_identifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.annotation_configs)[':config_identifier']['$get']>
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
                  ReturnType<(typeof client.v1.annotation_configs)[':config_identifier']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AnnotationConfigsConfigIdentifierQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.annotation_configs)[':config_identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AnnotationConfigsConfigIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AnnotationConfigsConfigIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.annotation_configs[':config_identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1AnnotationConfigsConfigIdMutationKey() {
  return ['v1', '/v1/annotation_configs/:config_id', 'PUT'] as const
}

export function getPutV1AnnotationConfigsConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.annotation_configs)[':config_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.annotation_configs)[':config_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AnnotationConfigsConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.annotation_configs)[':config_id']['$put']>,
    ) {
      return parseResponse(client.v1.annotation_configs[':config_id'].$put(args, options))
    },
  })
}

export function usePutV1AnnotationConfigsConfigId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.annotation_configs)[':config_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.annotation_configs)[':config_id']['$put']>,
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
  const mutationDefaults = getPutV1AnnotationConfigsConfigIdMutationOptions<
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

export function getDeleteV1AnnotationConfigsConfigIdMutationKey() {
  return ['v1', '/v1/annotation_configs/:config_id', 'DELETE'] as const
}

export function getDeleteV1AnnotationConfigsConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.annotation_configs)[':config_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.annotation_configs)[':config_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AnnotationConfigsConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.annotation_configs)[':config_id']['$delete']>,
    ) {
      return parseResponse(client.v1.annotation_configs[':config_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1AnnotationConfigsConfigId<
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
                Awaited<ReturnType<(typeof client.v1.annotation_configs)[':config_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.annotation_configs)[':config_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1AnnotationConfigsConfigIdMutationOptions<
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

export function getV1ProjectsProjectIdentifierAnnotationConfigsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:project_identifier/annotation_configs', toValue(args)] as const
}

export function getV1ProjectsProjectIdentifierAnnotationConfigsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdentifierAnnotationConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_identifier'].annotation_configs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdentifierAnnotationConfigs<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$get']
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
                    (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$get']
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
                    (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdentifierAnnotationConfigsQueryKey>
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
              (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdentifierAnnotationConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdentifierAnnotationConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_identifier'].annotation_configs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ProjectsProjectIdentifierAnnotationConfigsMutationKey() {
  return ['v1', '/v1/projects/:project_identifier/annotation_configs', 'PUT'] as const
}

export function getPutV1ProjectsProjectIdentifierAnnotationConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsProjectIdentifierAnnotationConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_identifier'].annotation_configs.$put(args, options),
      )
    },
  })
}

export function usePutV1ProjectsProjectIdentifierAnnotationConfigs<
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
                    (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project_identifier']['annotation_configs']['$put']
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
  const mutationDefaults = getPutV1ProjectsProjectIdentifierAnnotationConfigsMutationOptions<
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

export function getPutV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierMutationKey() {
  return [
    'v1',
    '/v1/projects/:project_identifier/annotation_configs/:config_identifier',
    'PUT',
  ] as const
}

export function getPutV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['annotation_configs'][':config_identifier']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_identifier']['annotation_configs'][':config_identifier']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_identifier'].annotation_configs[':config_identifier'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifier<
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
                    (typeof client.v1.projects)[':project_identifier']['annotation_configs'][':config_identifier']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project_identifier']['annotation_configs'][':config_identifier']['$put']
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
    getPutV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierMutationOptions<
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

export function getDeleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierMutationKey() {
  return [
    'v1',
    '/v1/projects/:project_identifier/annotation_configs/:config_identifier',
    'DELETE',
  ] as const
}

export function getDeleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['annotation_configs'][':config_identifier']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_identifier']['annotation_configs'][':config_identifier']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_identifier'].annotation_configs[':config_identifier'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.v1.projects)[':project_identifier']['annotation_configs'][':config_identifier']['$delete']
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
    getDeleteV1ProjectsProjectIdentifierAnnotationConfigsConfigIdentifierMutationOptions<
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

export function getV1ProjectsProjectIdentifierSpanAnnotationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['span_annotations']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_identifier/span_annotations', toValue(args)] as const
}

export function getV1ProjectsProjectIdentifierSpanAnnotationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['span_annotations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdentifierSpanAnnotationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_identifier'].span_annotations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdentifierSpanAnnotations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project_identifier']['span_annotations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['span_annotations']['$get']>
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
                    (typeof client.v1.projects)[':project_identifier']['span_annotations']['$get']
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
                    (typeof client.v1.projects)[':project_identifier']['span_annotations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdentifierSpanAnnotationsQueryKey>
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
              (typeof client.v1.projects)[':project_identifier']['span_annotations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdentifierSpanAnnotationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdentifierSpanAnnotationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_identifier'].span_annotations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ProjectsProjectIdentifierSpanAnnotationsMutationKey() {
  return ['v1', '/v1/projects/:project_identifier/span_annotations', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectIdentifierSpanAnnotationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['span_annotations']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectIdentifierSpanAnnotationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_identifier']['span_annotations']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_identifier'].span_annotations.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsProjectIdentifierSpanAnnotations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.v1.projects)[':project_identifier']['span_annotations']['$delete']
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
  const mutationDefaults = getDeleteV1ProjectsProjectIdentifierSpanAnnotationsMutationOptions<
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

export function getV1ProjectsProjectIdentifierTraceAnnotationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:project_identifier/trace_annotations', toValue(args)] as const
}

export function getV1ProjectsProjectIdentifierTraceAnnotationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdentifierTraceAnnotationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_identifier'].trace_annotations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdentifierTraceAnnotations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$get']
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
                    (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$get']
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
                    (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdentifierTraceAnnotationsQueryKey>
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
              (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdentifierTraceAnnotationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdentifierTraceAnnotationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_identifier'].trace_annotations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ProjectsProjectIdentifierTraceAnnotationsMutationKey() {
  return ['v1', '/v1/projects/:project_identifier/trace_annotations', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectIdentifierTraceAnnotationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectIdentifierTraceAnnotationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_identifier'].trace_annotations.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsProjectIdentifierTraceAnnotations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.v1.projects)[':project_identifier']['trace_annotations']['$delete']
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
  const mutationDefaults = getDeleteV1ProjectsProjectIdentifierTraceAnnotationsMutationOptions<
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

export function getV1ProjectsProjectIdentifierSessionAnnotationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['session_annotations']['$get']
    >
  >,
) {
  return ['v1', '/v1/projects/:project_identifier/session_annotations', toValue(args)] as const
}

export function getV1ProjectsProjectIdentifierSessionAnnotationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['session_annotations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdentifierSessionAnnotationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_identifier'].session_annotations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdentifierSessionAnnotations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['session_annotations']['$get']
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
                    (typeof client.v1.projects)[':project_identifier']['session_annotations']['$get']
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
                    (typeof client.v1.projects)[':project_identifier']['session_annotations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdentifierSessionAnnotationsQueryKey>
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
              (typeof client.v1.projects)[':project_identifier']['session_annotations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdentifierSessionAnnotationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdentifierSessionAnnotationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_identifier'].session_annotations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ProjectsProjectIdentifierSessionAnnotationsMutationKey() {
  return ['v1', '/v1/projects/:project_identifier/session_annotations', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectIdentifierSessionAnnotationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project_identifier']['session_annotations']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectIdentifierSessionAnnotationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_identifier']['session_annotations']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_identifier'].session_annotations.$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ProjectsProjectIdentifierSessionAnnotations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.v1.projects)[':project_identifier']['session_annotations']['$delete']
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
  const mutationDefaults = getDeleteV1ProjectsProjectIdentifierSessionAnnotationsMutationOptions<
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

export function getV1DatasetLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.dataset_labels.$get>>,
) {
  return ['v1', '/v1/dataset_labels', toValue(args)] as const
}

export function getV1DatasetLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.dataset_labels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.dataset_labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatasetLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset_labels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.dataset_labels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset_labels.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset_labels.$get>>>
            >
          >,
          ReturnType<typeof getV1DatasetLabelsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset_labels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.dataset_labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DatasetLabelsMutationKey() {
  return ['v1', '/v1/dataset_labels', 'POST'] as const
}

export function getPostV1DatasetLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset_labels.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.dataset_labels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DatasetLabelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.dataset_labels.$post>) {
      return parseResponse(client.v1.dataset_labels.$post(args, options))
    },
  })
}

export function usePostV1DatasetLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.dataset_labels.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.dataset_labels.$post>,
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
  const mutationDefaults = getPostV1DatasetLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getV1DatasetLabelsLabelIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$get']>>,
) {
  return ['v1', '/v1/dataset_labels/:label_id', toValue(args)] as const
}

export function getV1DatasetLabelsLabelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetLabelsLabelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.dataset_labels[':label_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatasetLabelsLabelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.dataset_labels)[':label_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.dataset_labels)[':label_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.dataset_labels)[':label_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DatasetLabelsLabelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.dataset_labels)[':label_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetLabelsLabelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetLabelsLabelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.dataset_labels[':label_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1DatasetLabelsLabelIdMutationKey() {
  return ['v1', '/v1/dataset_labels/:label_id', 'DELETE'] as const
}

export function getDeleteV1DatasetLabelsLabelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.dataset_labels)[':label_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DatasetLabelsLabelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$delete']>,
    ) {
      return parseResponse(client.v1.dataset_labels[':label_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1DatasetLabelsLabelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.dataset_labels)[':label_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1DatasetLabelsLabelIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1DatasetLabelsLabelIdMutationKey() {
  return ['v1', '/v1/dataset_labels/:label_id', 'PATCH'] as const
}

export function getPatchV1DatasetLabelsLabelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.dataset_labels)[':label_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DatasetLabelsLabelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$patch']>,
    ) {
      return parseResponse(client.v1.dataset_labels[':label_id'].$patch(args, options))
    },
  })
}

export function usePatchV1DatasetLabelsLabelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.dataset_labels)[':label_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.dataset_labels)[':label_id']['$patch']>,
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
  const mutationDefaults = getPatchV1DatasetLabelsLabelIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1DatasetsDatasetIdentifierLabelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$get']>
  >,
) {
  return ['v1', '/v1/datasets/:dataset_identifier/labels', toValue(args)] as const
}

export function getV1DatasetsDatasetIdentifierLabelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetsDatasetIdentifierLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datasets[':dataset_identifier'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatasetsDatasetIdentifierLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$get']>
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
                  ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1DatasetsDatasetIdentifierLabelsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsDatasetIdentifierLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetsDatasetIdentifierLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datasets[':dataset_identifier'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1DatasetsDatasetIdentifierLabelsMutationKey() {
  return ['v1', '/v1/datasets/:dataset_identifier/labels', 'PUT'] as const
}

export function getPutV1DatasetsDatasetIdentifierLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1DatasetsDatasetIdentifierLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$put']>,
    ) {
      return parseResponse(client.v1.datasets[':dataset_identifier'].labels.$put(args, options))
    },
  })
}

export function usePutV1DatasetsDatasetIdentifierLabels<
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
                  ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['labels']['$put']>,
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
  const mutationDefaults = getPutV1DatasetsDatasetIdentifierLabelsMutationOptions<
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

export function getPutV1DatasetsDatasetIdentifierLabelsLabelIdMutationKey() {
  return ['v1', '/v1/datasets/:dataset_identifier/labels/:label_id', 'PUT'] as const
}

export function getPutV1DatasetsDatasetIdentifierLabelsLabelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.datasets)[':dataset_identifier']['labels'][':label_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1DatasetsDatasetIdentifierLabelsLabelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.datasets)[':dataset_identifier']['labels'][':label_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.datasets[':dataset_identifier'].labels[':label_id'].$put(args, options),
      )
    },
  })
}

export function usePutV1DatasetsDatasetIdentifierLabelsLabelId<
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
                    (typeof client.v1.datasets)[':dataset_identifier']['labels'][':label_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.datasets)[':dataset_identifier']['labels'][':label_id']['$put']
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
  const mutationDefaults = getPutV1DatasetsDatasetIdentifierLabelsLabelIdMutationOptions<
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

export function getDeleteV1DatasetsDatasetIdentifierLabelsLabelIdMutationKey() {
  return ['v1', '/v1/datasets/:dataset_identifier/labels/:label_id', 'DELETE'] as const
}

export function getDeleteV1DatasetsDatasetIdentifierLabelsLabelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.datasets)[':dataset_identifier']['labels'][':label_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DatasetsDatasetIdentifierLabelsLabelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.datasets)[':dataset_identifier']['labels'][':label_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.datasets[':dataset_identifier'].labels[':label_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1DatasetsDatasetIdentifierLabelsLabelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.v1.datasets)[':dataset_identifier']['labels'][':label_id']['$delete']
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
  const mutationDefaults = getDeleteV1DatasetsDatasetIdentifierLabelsLabelIdMutationOptions<
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

export function getV1DatasetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.datasets.$get>>,
) {
  return ['v1', '/v1/datasets', toValue(args)] as const
}

export function getV1DatasetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.datasets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datasets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Datasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.datasets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
          >,
          ReturnType<typeof getV1DatasetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DatasetsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['$get']>>,
) {
  return ['v1', '/v1/datasets/:id', toValue(args)] as const
}

export function getV1DatasetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datasets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatasetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1DatasetsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datasets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1DatasetsIdMutationKey() {
  return ['v1', '/v1/datasets/:id', 'DELETE'] as const
}

export function getDeleteV1DatasetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.datasets)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DatasetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.datasets)[':id']['$delete']>) {
      return parseResponse(client.v1.datasets[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1DatasetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.datasets)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1DatasetsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1DatasetsIdVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['versions']['$get']>>,
) {
  return ['v1', '/v1/datasets/:id/versions', toValue(args)] as const
}

export function getV1DatasetsIdVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['versions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetsIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datasets[':id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatasetsIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.datasets)[':id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['versions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.datasets)[':id']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.datasets)[':id']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DatasetsIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.datasets)[':id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetsIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datasets[':id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DatasetsUploadMutationKey() {
  return ['v1', '/v1/datasets/upload', 'POST'] as const
}

export function getPostV1DatasetsUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.upload.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.datasets.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DatasetsUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.datasets.upload.$post>) {
      return parseResponse(client.v1.datasets.upload.$post(args, options))
    },
  })
}

export function usePostV1DatasetsUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.upload.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.datasets.upload.$post>,
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
  const mutationDefaults = getPostV1DatasetsUploadMutationOptions<TError, TOnMutateResult>(
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

export function getV1DatasetsIdExamplesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['examples']['$get']>>,
) {
  return ['v1', '/v1/datasets/:id/examples', toValue(args)] as const
}

export function getV1DatasetsIdExamplesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['examples']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetsIdExamplesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datasets[':id'].examples.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatasetsIdExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.datasets)[':id']['examples']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['examples']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.datasets)[':id']['examples']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.datasets)[':id']['examples']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DatasetsIdExamplesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.datasets)[':id']['examples']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsIdExamplesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetsIdExamplesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datasets[':id'].examples.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DatasetsDatasetIdentifierSplitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$get']>
  >,
) {
  return ['v1', '/v1/datasets/:dataset_identifier/splits', toValue(args)] as const
}

export function getV1DatasetsDatasetIdentifierSplitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetsDatasetIdentifierSplitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datasets[':dataset_identifier'].splits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatasetsDatasetIdentifierSplits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$get']>
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
                  ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1DatasetsDatasetIdentifierSplitsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsDatasetIdentifierSplitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetsDatasetIdentifierSplitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datasets[':dataset_identifier'].splits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DatasetsDatasetIdentifierSplitsMutationKey() {
  return ['v1', '/v1/datasets/:dataset_identifier/splits', 'POST'] as const
}

export function getPostV1DatasetsDatasetIdentifierSplitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DatasetsDatasetIdentifierSplitsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$post']>,
    ) {
      return parseResponse(client.v1.datasets[':dataset_identifier'].splits.$post(args, options))
    },
  })
}

export function usePostV1DatasetsDatasetIdentifierSplits<
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
                  ReturnType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.datasets)[':dataset_identifier']['splits']['$post']>,
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
  const mutationDefaults = getPostV1DatasetsDatasetIdentifierSplitsMutationOptions<
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

export function getDeleteV1DatasetsDatasetIdentifierSplitsSplitIdMutationKey() {
  return ['v1', '/v1/datasets/:dataset_identifier/splits/:split_id', 'DELETE'] as const
}

export function getDeleteV1DatasetsDatasetIdentifierSplitsSplitIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.datasets)[':dataset_identifier']['splits'][':split_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DatasetsDatasetIdentifierSplitsSplitIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.datasets)[':dataset_identifier']['splits'][':split_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.datasets[':dataset_identifier'].splits[':split_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1DatasetsDatasetIdentifierSplitsSplitId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.v1.datasets)[':dataset_identifier']['splits'][':split_id']['$delete']
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
  const mutationDefaults = getDeleteV1DatasetsDatasetIdentifierSplitsSplitIdMutationOptions<
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

export function getPatchV1DatasetsDatasetIdentifierSplitsSplitIdMutationKey() {
  return ['v1', '/v1/datasets/:dataset_identifier/splits/:split_id', 'PATCH'] as const
}

export function getPatchV1DatasetsDatasetIdentifierSplitsSplitIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.datasets)[':dataset_identifier']['splits'][':split_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DatasetsDatasetIdentifierSplitsSplitIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.datasets)[':dataset_identifier']['splits'][':split_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.datasets[':dataset_identifier'].splits[':split_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1DatasetsDatasetIdentifierSplitsSplitId<
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
                    (typeof client.v1.datasets)[':dataset_identifier']['splits'][':split_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.datasets)[':dataset_identifier']['splits'][':split_id']['$patch']
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
  const mutationDefaults = getPatchV1DatasetsDatasetIdentifierSplitsSplitIdMutationOptions<
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

export function getV1DatasetsIdCsvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['csv']['$get']>>,
) {
  return ['v1', '/v1/datasets/:id/csv', toValue(args)] as const
}

export function getV1DatasetsIdCsvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['csv']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetsIdCsvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datasets[':id'].csv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatasetsIdCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['csv']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.datasets)[':id']['csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.datasets)[':id']['csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DatasetsIdCsvQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['csv']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsIdCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetsIdCsvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datasets[':id'].csv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DatasetsIdJsonlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['$get']>>,
) {
  return ['v1', '/v1/datasets/:id/jsonl', toValue(args)] as const
}

export function getV1DatasetsIdJsonlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetsIdJsonlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datasets[':id'].jsonl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatasetsIdJsonl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DatasetsIdJsonlQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsIdJsonlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetsIdJsonlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datasets[':id'].jsonl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DatasetsIdJsonlOpenaiFtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['openai_ft']['$get']>
  >,
) {
  return ['v1', '/v1/datasets/:id/jsonl/openai_ft', toValue(args)] as const
}

export function getV1DatasetsIdJsonlOpenaiFtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['openai_ft']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetsIdJsonlOpenaiFtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datasets[':id'].jsonl.openai_ft.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatasetsIdJsonlOpenaiFt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['openai_ft']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['openai_ft']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['openai_ft']['$get']>
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
                  ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['openai_ft']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1DatasetsIdJsonlOpenaiFtQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['openai_ft']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsIdJsonlOpenaiFtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetsIdJsonlOpenaiFtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datasets[':id'].jsonl.openai_ft.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DatasetsIdJsonlOpenaiEvalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['openai_evals']['$get']>
  >,
) {
  return ['v1', '/v1/datasets/:id/jsonl/openai_evals', toValue(args)] as const
}

export function getV1DatasetsIdJsonlOpenaiEvalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['openai_evals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetsIdJsonlOpenaiEvalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datasets[':id'].jsonl.openai_evals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatasetsIdJsonlOpenaiEvals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['openai_evals']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datasets)[':id']['jsonl']['openai_evals']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['openai_evals']['$get']>
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
                  ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['openai_evals']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1DatasetsIdJsonlOpenaiEvalsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.datasets)[':id']['jsonl']['openai_evals']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsIdJsonlOpenaiEvalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetsIdJsonlOpenaiEvalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datasets[':id'].jsonl.openai_evals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DatasetsDatasetIdExperimentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$get']>
  >,
) {
  return ['v1', '/v1/datasets/:dataset_id/experiments', toValue(args)] as const
}

export function getV1DatasetsDatasetIdExperimentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetsDatasetIdExperimentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datasets[':dataset_id'].experiments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatasetsDatasetIdExperiments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$get']>
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
                  ReturnType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1DatasetsDatasetIdExperimentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsDatasetIdExperimentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetsDatasetIdExperimentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datasets[':dataset_id'].experiments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1DatasetsDatasetIdExperimentsMutationKey() {
  return ['v1', '/v1/datasets/:dataset_id/experiments', 'POST'] as const
}

export function getPostV1DatasetsDatasetIdExperimentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DatasetsDatasetIdExperimentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$post']>,
    ) {
      return parseResponse(client.v1.datasets[':dataset_id'].experiments.$post(args, options))
    },
  })
}

export function usePostV1DatasetsDatasetIdExperiments<
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
                  ReturnType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.datasets)[':dataset_id']['experiments']['$post']>,
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
  const mutationDefaults = getPostV1DatasetsDatasetIdExperimentsMutationOptions<
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

export function getV1ExperimentsExperimentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$get']>
  >,
) {
  return ['v1', '/v1/experiments/:experiment_id', toValue(args)] as const
}

export function getV1ExperimentsExperimentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ExperimentsExperimentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.experiments[':experiment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ExperimentsExperimentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ExperimentsExperimentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ExperimentsExperimentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ExperimentsExperimentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.experiments[':experiment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ExperimentsExperimentIdMutationKey() {
  return ['v1', '/v1/experiments/:experiment_id', 'DELETE'] as const
}

export function getDeleteV1ExperimentsExperimentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ExperimentsExperimentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$delete']>,
    ) {
      return parseResponse(client.v1.experiments[':experiment_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1ExperimentsExperimentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1ExperimentsExperimentIdMutationOptions<
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

export function getPatchV1ExperimentsExperimentIdMutationKey() {
  return ['v1', '/v1/experiments/:experiment_id', 'PATCH'] as const
}

export function getPatchV1ExperimentsExperimentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ExperimentsExperimentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$patch']>,
    ) {
      return parseResponse(client.v1.experiments[':experiment_id'].$patch(args, options))
    },
  })
}

export function usePatchV1ExperimentsExperimentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.experiments)[':experiment_id']['$patch']>,
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
  const mutationDefaults = getPatchV1ExperimentsExperimentIdMutationOptions<
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

export function getV1ExperimentsExperimentIdIncompleteRunsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['incomplete-runs']['$get']>
  >,
) {
  return ['v1', '/v1/experiments/:experiment_id/incomplete-runs', toValue(args)] as const
}

export function getV1ExperimentsExperimentIdIncompleteRunsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['incomplete-runs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ExperimentsExperimentIdIncompleteRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.experiments[':experiment_id']['incomplete-runs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ExperimentsExperimentIdIncompleteRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.experiments)[':experiment_id']['incomplete-runs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['incomplete-runs']['$get']>
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
                    (typeof client.v1.experiments)[':experiment_id']['incomplete-runs']['$get']
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
                    (typeof client.v1.experiments)[':experiment_id']['incomplete-runs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ExperimentsExperimentIdIncompleteRunsQueryKey>
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
            ReturnType<(typeof client.v1.experiments)[':experiment_id']['incomplete-runs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ExperimentsExperimentIdIncompleteRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ExperimentsExperimentIdIncompleteRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.experiments[':experiment_id']['incomplete-runs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ExperimentsExperimentIdJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['json']['$get']>
  >,
) {
  return ['v1', '/v1/experiments/:experiment_id/json', toValue(args)] as const
}

export function getV1ExperimentsExperimentIdJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ExperimentsExperimentIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.experiments[':experiment_id'].json.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ExperimentsExperimentIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.experiments)[':experiment_id']['json']['$get']>
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
                  ReturnType<(typeof client.v1.experiments)[':experiment_id']['json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ExperimentsExperimentIdJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ExperimentsExperimentIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ExperimentsExperimentIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.experiments[':experiment_id'].json.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ExperimentsExperimentIdCsvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['csv']['$get']>
  >,
) {
  return ['v1', '/v1/experiments/:experiment_id/csv', toValue(args)] as const
}

export function getV1ExperimentsExperimentIdCsvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['csv']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ExperimentsExperimentIdCsvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.experiments[':experiment_id'].csv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ExperimentsExperimentIdCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['csv']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ExperimentsExperimentIdCsvQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ExperimentsExperimentIdCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ExperimentsExperimentIdCsvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.experiments[':experiment_id'].csv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ExperimentsExperimentIdTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['tags']['$get']>
  >,
) {
  return ['v1', '/v1/experiments/:experiment_id/tags', toValue(args)] as const
}

export function getV1ExperimentsExperimentIdTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ExperimentsExperimentIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.experiments[':experiment_id'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ExperimentsExperimentIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.experiments)[':experiment_id']['tags']['$get']>
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
                  ReturnType<(typeof client.v1.experiments)[':experiment_id']['tags']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ExperimentsExperimentIdTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ExperimentsExperimentIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ExperimentsExperimentIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.experiments[':experiment_id'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ExperimentsExperimentIdTagsMutationKey() {
  return ['v1', '/v1/experiments/:experiment_id/tags', 'POST'] as const
}

export function getPostV1ExperimentsExperimentIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ExperimentsExperimentIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['tags']['$post']>,
    ) {
      return parseResponse(client.v1.experiments[':experiment_id'].tags.$post(args, options))
    },
  })
}

export function usePostV1ExperimentsExperimentIdTags<
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
                  ReturnType<(typeof client.v1.experiments)[':experiment_id']['tags']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.experiments)[':experiment_id']['tags']['$post']>,
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
  const mutationDefaults = getPostV1ExperimentsExperimentIdTagsMutationOptions<
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

export function getDeleteV1ExperimentsExperimentIdTagsTagIdentifierMutationKey() {
  return ['v1', '/v1/experiments/:experiment_id/tags/:tag_identifier', 'DELETE'] as const
}

export function getDeleteV1ExperimentsExperimentIdTagsTagIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.experiments)[':experiment_id']['tags'][':tag_identifier']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ExperimentsExperimentIdTagsTagIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.experiments)[':experiment_id']['tags'][':tag_identifier']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.experiments[':experiment_id'].tags[':tag_identifier'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1ExperimentsExperimentIdTagsTagIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.v1.experiments)[':experiment_id']['tags'][':tag_identifier']['$delete']
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
  const mutationDefaults = getDeleteV1ExperimentsExperimentIdTagsTagIdentifierMutationOptions<
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

export function getV1ExperimentsExperimentIdRunsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['runs']['$get']>
  >,
) {
  return ['v1', '/v1/experiments/:experiment_id/runs', toValue(args)] as const
}

export function getV1ExperimentsExperimentIdRunsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['runs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ExperimentsExperimentIdRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.experiments[':experiment_id'].runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ExperimentsExperimentIdRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['runs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.experiments)[':experiment_id']['runs']['$get']>
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
                  ReturnType<(typeof client.v1.experiments)[':experiment_id']['runs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ExperimentsExperimentIdRunsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['runs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ExperimentsExperimentIdRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ExperimentsExperimentIdRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.experiments[':experiment_id'].runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ExperimentsExperimentIdRunsMutationKey() {
  return ['v1', '/v1/experiments/:experiment_id/runs', 'POST'] as const
}

export function getPostV1ExperimentsExperimentIdRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.experiments)[':experiment_id']['runs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.experiments)[':experiment_id']['runs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ExperimentsExperimentIdRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.experiments)[':experiment_id']['runs']['$post']>,
    ) {
      return parseResponse(client.v1.experiments[':experiment_id'].runs.$post(args, options))
    },
  })
}

export function usePostV1ExperimentsExperimentIdRuns<
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
                  ReturnType<(typeof client.v1.experiments)[':experiment_id']['runs']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.experiments)[':experiment_id']['runs']['$post']>,
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
  const mutationDefaults = getPostV1ExperimentsExperimentIdRunsMutationOptions<
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

export function getV1ExperimentsExperimentIdIncompleteEvaluationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.experiments)[':experiment_id']['incomplete-evaluations']['$get']
    >
  >,
) {
  return ['v1', '/v1/experiments/:experiment_id/incomplete-evaluations', toValue(args)] as const
}

export function getV1ExperimentsExperimentIdIncompleteEvaluationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.experiments)[':experiment_id']['incomplete-evaluations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ExperimentsExperimentIdIncompleteEvaluationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.experiments[':experiment_id']['incomplete-evaluations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ExperimentsExperimentIdIncompleteEvaluations<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.experiments)[':experiment_id']['incomplete-evaluations']['$get']
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
                    (typeof client.v1.experiments)[':experiment_id']['incomplete-evaluations']['$get']
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
                    (typeof client.v1.experiments)[':experiment_id']['incomplete-evaluations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ExperimentsExperimentIdIncompleteEvaluationsQueryKey>
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
              (typeof client.v1.experiments)[':experiment_id']['incomplete-evaluations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ExperimentsExperimentIdIncompleteEvaluationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ExperimentsExperimentIdIncompleteEvaluationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.experiments[':experiment_id']['incomplete-evaluations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ExperimentEvaluationsMutationKey() {
  return ['v1', '/v1/experiment_evaluations', 'POST'] as const
}

export function getPostV1ExperimentEvaluationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.experiment_evaluations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.experiment_evaluations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ExperimentEvaluationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.experiment_evaluations.$post>) {
      return parseResponse(client.v1.experiment_evaluations.$post(args, options))
    },
  })
}

export function usePostV1ExperimentEvaluations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.experiment_evaluations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.experiment_evaluations.$post>,
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
  const mutationDefaults = getPostV1ExperimentEvaluationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsProjectIdentifierTracesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['traces']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_identifier/traces', toValue(args)] as const
}

export function getV1ProjectsProjectIdentifierTracesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['traces']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdentifierTracesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_identifier'].traces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdentifierTraces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['traces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['traces']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':project_identifier']['traces']['$get']>
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
                  ReturnType<(typeof client.v1.projects)[':project_identifier']['traces']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdentifierTracesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['traces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdentifierTracesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdentifierTracesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_identifier'].traces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1ProjectsProjectIdentifierTracesMutationKey() {
  return ['v1', '/v1/projects/:project_identifier/traces', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectIdentifierTracesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['traces']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectIdentifierTracesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_identifier']['traces']['$delete']
      >,
    ) {
      return parseResponse(client.v1.projects[':project_identifier'].traces.$delete(args, options))
    },
  })
}

export function useDeleteV1ProjectsProjectIdentifierTraces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1.projects)[':project_identifier']['traces']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.projects)[':project_identifier']['traces']['$delete']>,
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
  const mutationDefaults = getDeleteV1ProjectsProjectIdentifierTracesMutationOptions<
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

export function getPostV1TraceAnnotationsMutationKey() {
  return ['v1', '/v1/trace_annotations', 'POST'] as const
}

export function getPostV1TraceAnnotationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.trace_annotations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.trace_annotations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TraceAnnotationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.trace_annotations.$post>) {
      return parseResponse(client.v1.trace_annotations.$post(args, options))
    },
  })
}

export function usePostV1TraceAnnotations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.trace_annotations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.trace_annotations.$post>,
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
  const mutationDefaults = getPostV1TraceAnnotationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1TraceNotesMutationKey() {
  return ['v1', '/v1/trace_notes', 'POST'] as const
}

export function getPostV1TraceNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.trace_notes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.trace_notes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TraceNotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.trace_notes.$post>) {
      return parseResponse(client.v1.trace_notes.$post(args, options))
    },
  })
}

export function usePostV1TraceNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.trace_notes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.trace_notes.$post>,
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
  const mutationDefaults = getPostV1TraceNotesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1TracesTransferMutationKey() {
  return ['v1', '/v1/traces/transfer', 'POST'] as const
}

export function getPostV1TracesTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.traces.transfer.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.traces.transfer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TracesTransferMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.traces.transfer.$post>) {
      return parseResponse(client.v1.traces.transfer.$post(args, options))
    },
  })
}

export function usePostV1TracesTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.traces.transfer.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.traces.transfer.$post>,
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
  const mutationDefaults = getPostV1TracesTransferMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1TracesTraceIdentifierMutationKey() {
  return ['v1', '/v1/traces/:trace_identifier', 'DELETE'] as const
}

export function getDeleteV1TracesTraceIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.traces)[':trace_identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.traces)[':trace_identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TracesTraceIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.traces)[':trace_identifier']['$delete']>,
    ) {
      return parseResponse(client.v1.traces[':trace_identifier'].$delete(args, options))
    },
  })
}

export function useDeleteV1TracesTraceIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.traces)[':trace_identifier']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.traces)[':trace_identifier']['$delete']>,
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
  const mutationDefaults = getDeleteV1TracesTraceIdentifierMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsProjectIdentifierSpansOtlpv1QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['spans']['otlpv1']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_identifier/spans/otlpv1', toValue(args)] as const
}

export function getV1ProjectsProjectIdentifierSpansOtlpv1QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['spans']['otlpv1']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdentifierSpansOtlpv1QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_identifier'].spans.otlpv1.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdentifierSpansOtlpv1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project_identifier']['spans']['otlpv1']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['spans']['otlpv1']['$get']>
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
                    (typeof client.v1.projects)[':project_identifier']['spans']['otlpv1']['$get']
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
                    (typeof client.v1.projects)[':project_identifier']['spans']['otlpv1']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdentifierSpansOtlpv1QueryKey>
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
              (typeof client.v1.projects)[':project_identifier']['spans']['otlpv1']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdentifierSpansOtlpv1QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdentifierSpansOtlpv1QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_identifier'].spans.otlpv1.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdentifierSpansQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['spans']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_identifier/spans', toValue(args)] as const
}

export function getV1ProjectsProjectIdentifierSpansQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['spans']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdentifierSpansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_identifier'].spans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdentifierSpans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['spans']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['spans']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':project_identifier']['spans']['$get']>
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
                  ReturnType<(typeof client.v1.projects)[':project_identifier']['spans']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdentifierSpansQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['spans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdentifierSpansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdentifierSpansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_identifier'].spans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsProjectIdentifierSpansMutationKey() {
  return ['v1', '/v1/projects/:project_identifier/spans', 'POST'] as const
}

export function getPostV1ProjectsProjectIdentifierSpansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['spans']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['spans']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectIdentifierSpansMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['spans']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':project_identifier'].spans.$post(args, options))
    },
  })
}

export function usePostV1ProjectsProjectIdentifierSpans<
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
                  ReturnType<(typeof client.v1.projects)[':project_identifier']['spans']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':project_identifier']['spans']['$post']>,
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
  const mutationDefaults = getPostV1ProjectsProjectIdentifierSpansMutationOptions<
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

export function getPostV1SpanAnnotationsMutationKey() {
  return ['v1', '/v1/span_annotations', 'POST'] as const
}

export function getPostV1SpanAnnotationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.span_annotations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.span_annotations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SpanAnnotationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.span_annotations.$post>) {
      return parseResponse(client.v1.span_annotations.$post(args, options))
    },
  })
}

export function usePostV1SpanAnnotations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.span_annotations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.span_annotations.$post>,
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
  const mutationDefaults = getPostV1SpanAnnotationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SpanNotesMutationKey() {
  return ['v1', '/v1/span_notes', 'POST'] as const
}

export function getPostV1SpanNotesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.span_notes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.span_notes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SpanNotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.span_notes.$post>) {
      return parseResponse(client.v1.span_notes.$post(args, options))
    },
  })
}

export function usePostV1SpanNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.span_notes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.span_notes.$post>,
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
  const mutationDefaults = getPostV1SpanNotesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1SpansSpanIdentifierMutationKey() {
  return ['v1', '/v1/spans/:span_identifier', 'DELETE'] as const
}

export function getDeleteV1SpansSpanIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.spans)[':span_identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.spans)[':span_identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SpansSpanIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.spans)[':span_identifier']['$delete']>,
    ) {
      return parseResponse(client.v1.spans[':span_identifier'].$delete(args, options))
    },
  })
}

export function useDeleteV1SpansSpanIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.spans)[':span_identifier']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.spans)[':span_identifier']['$delete']>,
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
  const mutationDefaults = getDeleteV1SpansSpanIdentifierMutationOptions<TError, TOnMutateResult>(
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

export function getV1PromptsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.prompts.$get>>,
) {
  return ['v1', '/v1/prompts', toValue(args)] as const
}

export function getV1PromptsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.prompts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PromptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.prompts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Prompts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prompts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.prompts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prompts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prompts.$get>>>>
          >,
          ReturnType<typeof getV1PromptsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prompts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1PromptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PromptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.prompts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PromptsMutationKey() {
  return ['v1', '/v1/prompts', 'POST'] as const
}

export function getPostV1PromptsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prompts.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.prompts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PromptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.prompts.$post>) {
      return parseResponse(client.v1.prompts.$post(args, options))
    },
  })
}

export function usePostV1Prompts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prompts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.prompts.$post>,
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
  const mutationDefaults = getPostV1PromptsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1PromptsPromptIdentifierVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$get']>
  >,
) {
  return ['v1', '/v1/prompts/:prompt_identifier/versions', toValue(args)] as const
}

export function getV1PromptsPromptIdentifierVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PromptsPromptIdentifierVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.prompts[':prompt_identifier'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PromptsPromptIdentifierVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$get']>
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
                  ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PromptsPromptIdentifierVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PromptsPromptIdentifierVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PromptsPromptIdentifierVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.prompts[':prompt_identifier'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PromptsPromptIdentifierVersionsMutationKey() {
  return ['v1', '/v1/prompts/:prompt_identifier/versions', 'POST'] as const
}

export function getPostV1PromptsPromptIdentifierVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PromptsPromptIdentifierVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$post']>,
    ) {
      return parseResponse(client.v1.prompts[':prompt_identifier'].versions.$post(args, options))
    },
  })
}

export function usePostV1PromptsPromptIdentifierVersions<
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
                  ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['versions']['$post']>,
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
  const mutationDefaults = getPostV1PromptsPromptIdentifierVersionsMutationOptions<
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

export function getV1PromptVersionsPromptVersionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['$get']>
  >,
) {
  return ['v1', '/v1/prompt_versions/:prompt_version_id', toValue(args)] as const
}

export function getV1PromptVersionsPromptVersionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PromptVersionsPromptVersionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.prompt_versions[':prompt_version_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PromptVersionsPromptVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.prompt_versions)[':prompt_version_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.prompt_versions)[':prompt_version_id']['$get']>
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
                  ReturnType<(typeof client.v1.prompt_versions)[':prompt_version_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PromptVersionsPromptVersionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.prompt_versions)[':prompt_version_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PromptVersionsPromptVersionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PromptVersionsPromptVersionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.prompt_versions[':prompt_version_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PromptsPromptIdentifierTagsTagNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['tags'][':tag_name']['$get']>
  >,
) {
  return ['v1', '/v1/prompts/:prompt_identifier/tags/:tag_name', toValue(args)] as const
}

export function getV1PromptsPromptIdentifierTagsTagNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['tags'][':tag_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PromptsPromptIdentifierTagsTagNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.prompts[':prompt_identifier'].tags[':tag_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PromptsPromptIdentifierTagsTagName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['tags'][':tag_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['tags'][':tag_name']['$get']>
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
                    (typeof client.v1.prompts)[':prompt_identifier']['tags'][':tag_name']['$get']
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
                    (typeof client.v1.prompts)[':prompt_identifier']['tags'][':tag_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PromptsPromptIdentifierTagsTagNameQueryKey>
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
              (typeof client.v1.prompts)[':prompt_identifier']['tags'][':tag_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PromptsPromptIdentifierTagsTagNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PromptsPromptIdentifierTagsTagNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.prompts[':prompt_identifier'].tags[':tag_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PromptsPromptIdentifierLatestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['latest']['$get']>
  >,
) {
  return ['v1', '/v1/prompts/:prompt_identifier/latest', toValue(args)] as const
}

export function getV1PromptsPromptIdentifierLatestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['latest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PromptsPromptIdentifierLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.prompts[':prompt_identifier'].latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PromptsPromptIdentifierLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['latest']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['latest']['$get']>
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
                  ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['latest']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PromptsPromptIdentifierLatestQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['latest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PromptsPromptIdentifierLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PromptsPromptIdentifierLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.prompts[':prompt_identifier'].latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PromptVersionsPromptVersionIdTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$get']>
  >,
) {
  return ['v1', '/v1/prompt_versions/:prompt_version_id/tags', toValue(args)] as const
}

export function getV1PromptVersionsPromptVersionIdTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PromptVersionsPromptVersionIdTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.prompt_versions[':prompt_version_id'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PromptVersionsPromptVersionIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$get']>
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
                    (typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$get']
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
                    (typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PromptVersionsPromptVersionIdTagsQueryKey>
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
            ReturnType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PromptVersionsPromptVersionIdTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PromptVersionsPromptVersionIdTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.prompt_versions[':prompt_version_id'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PromptVersionsPromptVersionIdTagsMutationKey() {
  return ['v1', '/v1/prompt_versions/:prompt_version_id/tags', 'POST'] as const
}

export function getPostV1PromptVersionsPromptVersionIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PromptVersionsPromptVersionIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.prompt_versions[':prompt_version_id'].tags.$post(args, options),
      )
    },
  })
}

export function usePostV1PromptVersionsPromptVersionIdTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.prompt_versions)[':prompt_version_id']['tags']['$post']
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
  const mutationDefaults = getPostV1PromptVersionsPromptVersionIdTagsMutationOptions<
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

export function getDeleteV1PromptVersionsPromptVersionIdTagsTagNameMutationKey() {
  return ['v1', '/v1/prompt_versions/:prompt_version_id/tags/:tag_name', 'DELETE'] as const
}

export function getDeleteV1PromptVersionsPromptVersionIdTagsTagNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.prompt_versions)[':prompt_version_id']['tags'][':tag_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PromptVersionsPromptVersionIdTagsTagNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.prompt_versions)[':prompt_version_id']['tags'][':tag_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.prompt_versions[':prompt_version_id'].tags[':tag_name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1PromptVersionsPromptVersionIdTagsTagName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.v1.prompt_versions)[':prompt_version_id']['tags'][':tag_name']['$delete']
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
  const mutationDefaults = getDeleteV1PromptVersionsPromptVersionIdTagsTagNameMutationOptions<
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

export function getDeleteV1PromptsPromptIdentifierMutationKey() {
  return ['v1', '/v1/prompts/:prompt_identifier', 'DELETE'] as const
}

export function getDeleteV1PromptsPromptIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PromptsPromptIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['$delete']>,
    ) {
      return parseResponse(client.v1.prompts[':prompt_identifier'].$delete(args, options))
    },
  })
}

export function useDeleteV1PromptsPromptIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['$delete']>,
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
  const mutationDefaults = getDeleteV1PromptsPromptIdentifierMutationOptions<
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

export function getPatchV1PromptsPromptIdentifierMutationKey() {
  return ['v1', '/v1/prompts/:prompt_identifier', 'PATCH'] as const
}

export function getPatchV1PromptsPromptIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1PromptsPromptIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['$patch']>,
    ) {
      return parseResponse(client.v1.prompts[':prompt_identifier'].$patch(args, options))
    },
  })
}

export function usePatchV1PromptsPromptIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.prompts)[':prompt_identifier']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.prompts)[':prompt_identifier']['$patch']>,
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
  const mutationDefaults = getPatchV1PromptsPromptIdentifierMutationOptions<
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

export function getV1ProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.projects.$get>>,
) {
  return ['v1', '/v1/projects', toValue(args)] as const
}

export function getV1ProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>
          >,
          ReturnType<typeof getV1ProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ProjectsMutationKey() {
  return ['v1', '/v1/projects', 'POST'] as const
}

export function getPostV1ProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.projects.$post>) {
      return parseResponse(client.v1.projects.$post(args, options))
    },
  })
}

export function usePostV1Projects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.projects.$post>,
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
  const mutationDefaults = getPostV1ProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ProjectsProjectIdentifierQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_identifier', toValue(args)] as const
}

export function getV1ProjectsProjectIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdentifierQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1ProjectsProjectIdentifierMutationKey() {
  return ['v1', '/v1/projects/:project_identifier', 'PUT'] as const
}

export function getPutV1ProjectsProjectIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsProjectIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['$put']>,
    ) {
      return parseResponse(client.v1.projects[':project_identifier'].$put(args, options))
    },
  })
}

export function usePutV1ProjectsProjectIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.projects)[':project_identifier']['$put']>,
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
  const mutationDefaults = getPutV1ProjectsProjectIdentifierMutationOptions<
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

export function getDeleteV1ProjectsProjectIdentifierMutationKey() {
  return ['v1', '/v1/projects/:project_identifier', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':project_identifier']['$delete']>,
    ) {
      return parseResponse(client.v1.projects[':project_identifier'].$delete(args, options))
    },
  })
}

export function useDeleteV1ProjectsProjectIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.projects)[':project_identifier']['$delete']>,
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
  const mutationDefaults = getDeleteV1ProjectsProjectIdentifierMutationOptions<
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

export function getPatchV1ProjectsProjectIdentifierRetentionMutationKey() {
  return ['v1', '/v1/projects/:project_identifier/retention', 'PATCH'] as const
}

export function getPatchV1ProjectsProjectIdentifierRetentionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['retention']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsProjectIdentifierRetentionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project_identifier']['retention']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project_identifier'].retention.$patch(args, options),
      )
    },
  })
}

export function usePatchV1ProjectsProjectIdentifierRetention<
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
                    (typeof client.v1.projects)[':project_identifier']['retention']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.projects)[':project_identifier']['retention']['$patch']
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
  const mutationDefaults = getPatchV1ProjectsProjectIdentifierRetentionMutationOptions<
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

export function getV1ModelProvidersQueryKey() {
  return ['v1', '/v1/model_providers'] as const
}

export function getV1ModelProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ModelProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.model_providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ModelProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.model_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.model_providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.model_providers.$get>>>
            >
          >,
          ReturnType<typeof getV1ModelProvidersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.model_providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ModelProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ModelProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.model_providers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CustomModelProvidersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.custom_model_providers.$get>>,
) {
  return ['v1', '/v1/custom_model_providers', toValue(args)] as const
}

export function getV1CustomModelProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.custom_model_providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CustomModelProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.custom_model_providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CustomModelProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.custom_model_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.custom_model_providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.custom_model_providers.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.custom_model_providers.$get>>
              >
            >
          >,
          ReturnType<typeof getV1CustomModelProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.custom_model_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomModelProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CustomModelProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.custom_model_providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SessionsSessionIdentifierQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.sessions)[':session_identifier']['$get']>
  >,
) {
  return ['v1', '/v1/sessions/:session_identifier', toValue(args)] as const
}

export function getV1SessionsSessionIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.sessions)[':session_identifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SessionsSessionIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.sessions[':session_identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SessionsSessionIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.sessions)[':session_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.sessions)[':session_identifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.sessions)[':session_identifier']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.sessions)[':session_identifier']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SessionsSessionIdentifierQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.sessions)[':session_identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SessionsSessionIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SessionsSessionIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.sessions[':session_identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1SessionsSessionIdentifierMutationKey() {
  return ['v1', '/v1/sessions/:session_identifier', 'DELETE'] as const
}

export function getDeleteV1SessionsSessionIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.sessions)[':session_identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.sessions)[':session_identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SessionsSessionIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.sessions)[':session_identifier']['$delete']>,
    ) {
      return parseResponse(client.v1.sessions[':session_identifier'].$delete(args, options))
    },
  })
}

export function useDeleteV1SessionsSessionIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.sessions)[':session_identifier']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.sessions)[':session_identifier']['$delete']>,
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
  const mutationDefaults = getDeleteV1SessionsSessionIdentifierMutationOptions<
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

export function getPostV1SessionsDeleteMutationKey() {
  return ['v1', '/v1/sessions/delete', 'POST'] as const
}

export function getPostV1SessionsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.delete.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.sessions.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SessionsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.sessions.delete.$post>) {
      return parseResponse(client.v1.sessions.delete.$post(args, options))
    },
  })
}

export function usePostV1SessionsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v1.sessions.delete.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.sessions.delete.$post>,
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
  const mutationDefaults = getPostV1SessionsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsProjectIdentifierSessionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['sessions']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:project_identifier/sessions', toValue(args)] as const
}

export function getV1ProjectsProjectIdentifierSessionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['sessions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsProjectIdentifierSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':project_identifier'].sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProjectsProjectIdentifierSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project_identifier']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':project_identifier']['sessions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.projects)[':project_identifier']['sessions']['$get']>
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
                  ReturnType<(typeof client.v1.projects)[':project_identifier']['sessions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProjectsProjectIdentifierSessionsQueryKey>
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
            ReturnType<(typeof client.v1.projects)[':project_identifier']['sessions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectIdentifierSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsProjectIdentifierSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':project_identifier'].sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1SessionAnnotationsMutationKey() {
  return ['v1', '/v1/session_annotations', 'POST'] as const
}

export function getPostV1SessionAnnotationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.session_annotations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.session_annotations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SessionAnnotationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.session_annotations.$post>) {
      return parseResponse(client.v1.session_annotations.$post(args, options))
    },
  })
}

export function usePostV1SessionAnnotations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.session_annotations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.session_annotations.$post>,
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
  const mutationDefaults = getPostV1SessionAnnotationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SessionNotesMutationKey() {
  return ['v1', '/v1/session_notes', 'POST'] as const
}

export function getPostV1SessionNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.session_notes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.session_notes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SessionNotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.session_notes.$post>) {
      return parseResponse(client.v1.session_notes.$post(args, options))
    },
  })
}

export function usePostV1SessionNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.session_notes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.session_notes.$post>,
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
  const mutationDefaults = getPostV1SessionNotesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DocumentAnnotationsMutationKey() {
  return ['v1', '/v1/document_annotations', 'POST'] as const
}

export function getPostV1DocumentAnnotationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.document_annotations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.document_annotations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DocumentAnnotationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.document_annotations.$post>) {
      return parseResponse(client.v1.document_annotations.$post(args, options))
    },
  })
}

export function usePostV1DocumentAnnotations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.document_annotations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.document_annotations.$post>,
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
  const mutationDefaults = getPostV1DocumentAnnotationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1UserQueryKey() {
  return ['v1', '/v1/user'] as const
}

export function getV1UserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1UserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1User<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$get>>>>
          >,
          ReturnType<typeof getV1UserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1UserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1UserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.user.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.$get>>,
) {
  return ['v1', '/v1/users', toValue(args)] as const
}

export function getV1UsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>
          >,
          ReturnType<typeof getV1UsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1UsersMutationKey() {
  return ['v1', '/v1/users', 'POST'] as const
}

export function getPostV1UsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.users.$post>) {
      return parseResponse(client.v1.users.$post(args, options))
    },
  })
}

export function usePostV1Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.users.$post>,
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
  const mutationDefaults = getPostV1UsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1UsersUserIdMutationKey() {
  return ['v1', '/v1/users/:user_id', 'DELETE'] as const
}

export function getDeleteV1UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.users)[':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.users)[':user_id']['$delete']>) {
      return parseResponse(client.v1.users[':user_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.users)[':user_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1UsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1SecretsMutationKey() {
  return ['v1', '/v1/secrets', 'PUT'] as const
}

export function getPutV1SecretsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.secrets.$put>>>>>,
    TError,
    InferRequestType<typeof client.v1.secrets.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SecretsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.secrets.$put>) {
      return parseResponse(client.v1.secrets.$put(args, options))
    },
  })
}

export function usePutV1Secrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.secrets.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.secrets.$put>,
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
  const mutationDefaults = getPutV1SecretsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1UserApiKeysQueryKey() {
  return ['v1', '/v1/user/api_keys'] as const
}

export function getV1UserApiKeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1UserApiKeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.user.api_keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1UserApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.api_keys.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.api_keys.$get>>>
            >
          >,
          ReturnType<typeof getV1UserApiKeysQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.api_keys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserApiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1UserApiKeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.user.api_keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1UserApiKeysMutationKey() {
  return ['v1', '/v1/user/api_keys', 'POST'] as const
}

export function getPostV1UserApiKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.api_keys.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.user.api_keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1UserApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.user.api_keys.$post>) {
      return parseResponse(client.v1.user.api_keys.$post(args, options))
    },
  })
}

export function usePostV1UserApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.api_keys.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.user.api_keys.$post>,
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
  const mutationDefaults = getPostV1UserApiKeysMutationOptions<TError, TOnMutateResult>(
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

export function getV1UsersApiKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.api_keys.$get>>,
) {
  return ['v1', '/v1/users/api_keys', toValue(args)] as const
}

export function getV1UsersApiKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.api_keys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UsersApiKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.users.api_keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UsersApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.users.api_keys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.api_keys.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.api_keys.$get>>>
            >
          >,
          ReturnType<typeof getV1UsersApiKeysQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.api_keys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1UsersApiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UsersApiKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.users.api_keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1UserApiKeysApiKeyIdMutationKey() {
  return ['v1', '/v1/user/api_keys/:api_key_id', 'DELETE'] as const
}

export function getDeleteV1UserApiKeysApiKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.user.api_keys)[':api_key_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.user.api_keys)[':api_key_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UserApiKeysApiKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.user.api_keys)[':api_key_id']['$delete']>,
    ) {
      return parseResponse(client.v1.user.api_keys[':api_key_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1UserApiKeysApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.user.api_keys)[':api_key_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.user.api_keys)[':api_key_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1UserApiKeysApiKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1SystemApiKeysQueryKey() {
  return ['v1', '/v1/system/api_keys'] as const
}

export function getV1SystemApiKeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1SystemApiKeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.system.api_keys.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SystemApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.system.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.system.api_keys.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.system.api_keys.$get>>>
            >
          >,
          ReturnType<typeof getV1SystemApiKeysQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.system.api_keys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SystemApiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1SystemApiKeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.system.api_keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1SystemApiKeysMutationKey() {
  return ['v1', '/v1/system/api_keys', 'POST'] as const
}

export function getPostV1SystemApiKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.system.api_keys.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.system.api_keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SystemApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.system.api_keys.$post>) {
      return parseResponse(client.v1.system.api_keys.$post(args, options))
    },
  })
}

export function usePostV1SystemApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.system.api_keys.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.system.api_keys.$post>,
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
  const mutationDefaults = getPostV1SystemApiKeysMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1SystemApiKeysApiKeyIdMutationKey() {
  return ['v1', '/v1/system/api_keys/:api_key_id', 'DELETE'] as const
}

export function getDeleteV1SystemApiKeysApiKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.system.api_keys)[':api_key_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.system.api_keys)[':api_key_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SystemApiKeysApiKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.system.api_keys)[':api_key_id']['$delete']>,
    ) {
      return parseResponse(client.v1.system.api_keys[':api_key_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1SystemApiKeysApiKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.system.api_keys)[':api_key_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.system.api_keys)[':api_key_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1SystemApiKeysApiKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ChatCompletionsMutationKey() {
  return ['v1', '/v1/chat/completions', 'POST'] as const
}

export function getPostV1ChatCompletionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.completions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.chat.completions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ChatCompletionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.chat.completions.$post>) {
      return parseResponse(client.v1.chat.completions.$post(args, options))
    },
  })
}

export function usePostV1ChatCompletions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.completions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.chat.completions.$post>,
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
  const mutationDefaults = getPostV1ChatCompletionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthLoginMutationKey() {
  return ['auth', '/auth/login', 'POST'] as const
}

export function getPostAuthLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.login.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthLoginMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.login.$post(undefined, options))
    },
  })
}

export function usePostAuthLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.login.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAuthLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAuthLogoutQueryKey() {
  return ['auth', '/auth/logout'] as const
}

export function getAuthLogoutQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthLogoutQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.logout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthLogout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$get>>>>
          >,
          ReturnType<typeof getAuthLogoutQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthLogoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthLogoutQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.logout.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAuthRefreshMutationKey() {
  return ['auth', '/auth/refresh', 'POST'] as const
}

export function getPostAuthRefreshMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthRefreshMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.refresh.$post(undefined, options))
    },
  })
}

export function usePostAuthRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAuthRefreshMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthPasswordResetEmailMutationKey() {
  return ['auth', '/auth/password-reset-email', 'POST'] as const
}

export function getPostAuthPasswordResetEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth)['password-reset-email']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthPasswordResetEmailMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth['password-reset-email'].$post(undefined, options))
    },
  })
}

export function usePostAuthPasswordResetEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth)['password-reset-email']['$post']>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAuthPasswordResetEmailMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthPasswordResetMutationKey() {
  return ['auth', '/auth/password-reset', 'POST'] as const
}

export function getPostAuthPasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['password-reset']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthPasswordResetMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth['password-reset'].$post(undefined, options))
    },
  })
}

export function usePostAuthPasswordReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth)['password-reset']['$post']>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAuthPasswordResetMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthLdapLoginMutationKey() {
  return ['auth', '/auth/ldap/login', 'POST'] as const
}

export function getPostAuthLdapLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.ldap.login.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthLdapLoginMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.ldap.login.$post(undefined, options))
    },
  })
}

export function usePostAuthLdapLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.ldap.login.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAuthLdapLoginMutationOptions<TError, TOnMutateResult>(
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

export function getOauth2IdpNameLoginQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)[':idp_name']['login']['$get']>>,
) {
  return ['oauth2', '/oauth2/:idp_name/login', toValue(args)] as const
}

export function getOauth2IdpNameLoginQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)[':idp_name']['login']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauth2IdpNameLoginQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2[':idp_name'].login.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauth2IdpNameLogin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['login']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)[':idp_name']['login']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['login']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['login']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOauth2IdpNameLoginQueryKey>
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
          Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['login']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth2IdpNameLoginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauth2IdpNameLoginQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2[':idp_name'].login.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOauth2IdpNameLoginMutationKey() {
  return ['oauth2', '/oauth2/:idp_name/login', 'POST'] as const
}

export function getPostOauth2IdpNameLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['login']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth2)[':idp_name']['login']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2IdpNameLoginMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.oauth2)[':idp_name']['login']['$post']>,
    ) {
      return parseResponse(client.oauth2[':idp_name'].login.$post(args, options))
    },
  })
}

export function usePostOauth2IdpNameLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['login']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth2)[':idp_name']['login']['$post']>,
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
  const mutationDefaults = getPostOauth2IdpNameLoginMutationOptions<TError, TOnMutateResult>(
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

export function getOauth2IdpNameTokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)[':idp_name']['tokens']['$get']>>,
) {
  const { cookie: _, ...keyArgs } = toValue(args)
  return ['oauth2', '/oauth2/:idp_name/tokens', keyArgs] as const
}

export function getOauth2IdpNameTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)[':idp_name']['tokens']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauth2IdpNameTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth2[':idp_name'].tokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauth2IdpNameTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth2)[':idp_name']['tokens']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['tokens']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['tokens']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOauth2IdpNameTokensQueryKey>
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
          Awaited<ReturnType<(typeof client.oauth2)[':idp_name']['tokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauth2IdpNameTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauth2IdpNameTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth2[':idp_name'].tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentsServerSessionsSessionIdChatMutationKey() {
  return ['agents', '/agents/server/sessions/:session_id/chat', 'POST'] as const
}

export function getPostAgentsServerSessionsSessionIdChatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.agents.server.sessions)[':session_id']['chat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentsServerSessionsSessionIdChatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.agents.server.sessions)[':session_id']['chat']['$post']
      >,
    ) {
      return parseResponse(client.agents.server.sessions[':session_id'].chat.$post(args, options))
    },
  })
}

export function usePostAgentsServerSessionsSessionIdChat<
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
                  ReturnType<(typeof client.agents.server.sessions)[':session_id']['chat']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agents.server.sessions)[':session_id']['chat']['$post']>,
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
  const mutationDefaults = getPostAgentsServerSessionsSessionIdChatMutationOptions<
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

export function getV1AgentSessionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.agent_sessions.$get>>,
) {
  return ['v1', '/v1/agent_sessions', toValue(args)] as const
}

export function getV1AgentSessionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.agent_sessions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AgentSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.agent_sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AgentSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent_sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.agent_sessions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent_sessions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent_sessions.$get>>>
            >
          >,
          ReturnType<typeof getV1AgentSessionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent_sessions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AgentSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.agent_sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AgentSessionsMutationKey() {
  return ['v1', '/v1/agent_sessions', 'POST'] as const
}

export function getPostV1AgentSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent_sessions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.agent_sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.agent_sessions.$post>) {
      return parseResponse(client.v1.agent_sessions.$post(args, options))
    },
  })
}

export function usePostV1AgentSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.agent_sessions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.agent_sessions.$post>,
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
  const mutationDefaults = getPostV1AgentSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getV1AgentSessionsSessionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['$get']>
  >,
) {
  return ['v1', '/v1/agent_sessions/:session_id', toValue(args)] as const
}

export function getV1AgentSessionsSessionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AgentSessionsSessionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.agent_sessions[':session_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AgentSessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AgentSessionsSessionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentSessionsSessionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AgentSessionsSessionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.agent_sessions[':session_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1AgentSessionsSessionIdMutationKey() {
  return ['v1', '/v1/agent_sessions/:session_id', 'PATCH'] as const
}

export function getPatchV1AgentSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AgentSessionsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['$patch']>,
    ) {
      return parseResponse(client.v1.agent_sessions[':session_id'].$patch(args, options))
    },
  })
}

export function usePatchV1AgentSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['$patch']>,
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
  const mutationDefaults = getPatchV1AgentSessionsSessionIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1AgentSessionsSessionIdMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['messages']['$get']>
  >,
) {
  return ['v1', '/v1/agent_sessions/:session_id/messages', toValue(args)] as const
}

export function getV1AgentSessionsSessionIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AgentSessionsSessionIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.agent_sessions[':session_id'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AgentSessionsSessionIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.agent_sessions)[':session_id']['messages']['$get']>
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
                  ReturnType<(typeof client.v1.agent_sessions)[':session_id']['messages']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AgentSessionsSessionIdMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentSessionsSessionIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AgentSessionsSessionIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.agent_sessions[':session_id'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AgentSessionsSessionIdCompactMutationKey() {
  return ['v1', '/v1/agent_sessions/:session_id/compact', 'POST'] as const
}

export function getPostV1AgentSessionsSessionIdCompactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['compact']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['compact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentSessionsSessionIdCompactMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['compact']['$post']>,
    ) {
      return parseResponse(client.v1.agent_sessions[':session_id'].compact.$post(args, options))
    },
  })
}

export function usePostV1AgentSessionsSessionIdCompact<
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
                  ReturnType<(typeof client.v1.agent_sessions)[':session_id']['compact']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['compact']['$post']>,
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
  const mutationDefaults = getPostV1AgentSessionsSessionIdCompactMutationOptions<
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

export function getPostV1AgentSessionsSessionIdToolOutputsMutationKey() {
  return ['v1', '/v1/agent_sessions/:session_id/tool_outputs', 'POST'] as const
}

export function getPostV1AgentSessionsSessionIdToolOutputsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['tool_outputs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentSessionsSessionIdToolOutputsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.agent_sessions)[':session_id']['tool_outputs']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.agent_sessions[':session_id'].tool_outputs.$post(args, options),
      )
    },
  })
}

export function usePostV1AgentSessionsSessionIdToolOutputs<
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
                    (typeof client.v1.agent_sessions)[':session_id']['tool_outputs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.agent_sessions)[':session_id']['tool_outputs']['$post']
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
  const mutationDefaults = getPostV1AgentSessionsSessionIdToolOutputsMutationOptions<
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

export function getPostV1AgentSessionsSessionIdToolApprovalsMutationKey() {
  return ['v1', '/v1/agent_sessions/:session_id/tool_approvals', 'POST'] as const
}

export function getPostV1AgentSessionsSessionIdToolApprovalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['tool_approvals']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentSessionsSessionIdToolApprovalsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.agent_sessions)[':session_id']['tool_approvals']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.agent_sessions[':session_id'].tool_approvals.$post(args, options),
      )
    },
  })
}

export function usePostV1AgentSessionsSessionIdToolApprovals<
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
                    (typeof client.v1.agent_sessions)[':session_id']['tool_approvals']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.agent_sessions)[':session_id']['tool_approvals']['$post']
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
  const mutationDefaults = getPostV1AgentSessionsSessionIdToolApprovalsMutationOptions<
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

export function getPostV1AgentSessionsSessionIdChatMutationKey() {
  return ['v1', '/v1/agent_sessions/:session_id/chat', 'POST'] as const
}

export function getPostV1AgentSessionsSessionIdChatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agent_sessions)[':session_id']['chat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['chat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentSessionsSessionIdChatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['chat']['$post']>,
    ) {
      return parseResponse(client.v1.agent_sessions[':session_id'].chat.$post(args, options))
    },
  })
}

export function usePostV1AgentSessionsSessionIdChat<
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
                  ReturnType<(typeof client.v1.agent_sessions)[':session_id']['chat']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.agent_sessions)[':session_id']['chat']['$post']>,
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
  const mutationDefaults = getPostV1AgentSessionsSessionIdChatMutationOptions<
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

export function getArizePhoenixVersionQueryKey() {
  return ['arize_phoenix_version', '/arize_phoenix_version'] as const
}

export function getArizePhoenixVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getArizePhoenixVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.arize_phoenix_version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArizePhoenixVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.arize_phoenix_version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.arize_phoenix_version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.arize_phoenix_version.$get>>>
            >
          >,
          ReturnType<typeof getArizePhoenixVersionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.arize_phoenix_version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArizePhoenixVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getArizePhoenixVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.arize_phoenix_version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthzQueryKey() {
  return ['healthz', '/healthz'] as const
}

export function getHealthzQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthzQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.healthz.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthz<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
          >,
          ReturnType<typeof getHealthzQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthzQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthzQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.healthz.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReadyzQueryKey() {
  return ['readyz', '/readyz'] as const
}

export function getReadyzQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReadyzQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.readyz.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReadyz<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
          ReturnType<typeof getReadyzQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readyz.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReadyzQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReadyzQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.readyz.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
