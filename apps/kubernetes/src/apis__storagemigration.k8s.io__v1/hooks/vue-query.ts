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

export function getApisKey() {
  return ['apis'] as const
}

export function getApisStoragemigrationK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/storagemigration.k8s.io/v1/'] as const
}

export function getApisStoragemigrationK8sIoV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisStoragemigrationK8sIoV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStoragemigrationK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['storagemigration.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['storagemigration.k8s.io']['v1']['index']['$get']>
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
                  ReturnType<(typeof client.apis)['storagemigration.k8s.io']['v1']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisStoragemigrationK8sIoV1IndexQueryKey>
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
            ReturnType<(typeof client.apis)['storagemigration.k8s.io']['v1']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStoragemigrationK8sIoV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisStoragemigrationK8sIoV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storagemigration.k8s.io'].v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisStoragemigrationK8sIoV1StorageversionmigrationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/storageversionmigrations',
    toValue(args),
  ] as const
}

export function getApisStoragemigrationK8sIoV1StorageversionmigrationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisStoragemigrationK8sIoV1StorageversionmigrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.storageversionmigrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisStoragemigrationK8sIoV1Storageversionmigrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStoragemigrationK8sIoV1StorageversionmigrationsQueryKey>
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
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStoragemigrationK8sIoV1StorageversionmigrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisStoragemigrationK8sIoV1StorageversionmigrationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storagemigration.k8s.io'].v1.storageversionmigrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisStoragemigrationK8sIoV1StorageversionmigrationsMutationKey() {
  return ['apis', '/apis/storagemigration.k8s.io/v1/storageversionmigrations', 'POST'] as const
}

export function getPostApisStoragemigrationK8sIoV1StorageversionmigrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisStoragemigrationK8sIoV1StorageversionmigrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.storageversionmigrations.$post(args, options),
      )
    },
  })
}

export function usePostApisStoragemigrationK8sIoV1Storageversionmigrations<
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$post']
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
    getPostApisStoragemigrationK8sIoV1StorageversionmigrationsMutationOptions<
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

export function getDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsMutationKey() {
  return ['apis', '/apis/storagemigration.k8s.io/v1/storageversionmigrations', 'DELETE'] as const
}

export function getDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.storageversionmigrations.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisStoragemigrationK8sIoV1Storageversionmigrations<
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$delete']
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
    getDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsMutationOptions<
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

export function getApisStoragemigrationK8sIoV1StorageversionmigrationsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/storageversionmigrations/:name',
    toValue(args),
  ] as const
}

export function getApisStoragemigrationK8sIoV1StorageversionmigrationsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisStoragemigrationK8sIoV1StorageversionmigrationsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisStoragemigrationK8sIoV1StorageversionmigrationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStoragemigrationK8sIoV1StorageversionmigrationsNameQueryKey>
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
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStoragemigrationK8sIoV1StorageversionmigrationsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisStoragemigrationK8sIoV1StorageversionmigrationsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisStoragemigrationK8sIoV1StorageversionmigrationsNameMutationKey() {
  return ['apis', '/apis/storagemigration.k8s.io/v1/storageversionmigrations/:name', 'PUT'] as const
}

export function getPutApisStoragemigrationK8sIoV1StorageversionmigrationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisStoragemigrationK8sIoV1StorageversionmigrationsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisStoragemigrationK8sIoV1StorageversionmigrationsName<
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$put']
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
    getPutApisStoragemigrationK8sIoV1StorageversionmigrationsNameMutationOptions<
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

export function getDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsNameMutationKey() {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/storageversionmigrations/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsName<
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$delete']
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
    getDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsNameMutationOptions<
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

export function getPatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameMutationKey() {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/storageversionmigrations/:name',
    'PATCH',
  ] as const
}

export function getPatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisStoragemigrationK8sIoV1StorageversionmigrationsName<
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$patch']
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
    getPatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameMutationOptions<
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

export function getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/storageversionmigrations/:name/status',
    toValue(args),
  ] as const
}

export function getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusQueryKey
          >
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
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusMutationKey() {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/storageversionmigrations/:name/status',
    'PUT',
  ] as const
}

export function getPutApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].status.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatus<
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$put']
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
    getPutApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusMutationOptions<
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

export function getPatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusMutationKey() {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/storageversionmigrations/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].status.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatus<
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$patch']
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
    getPatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusMutationOptions<
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

export function getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/watch/storageversionmigrations',
    toValue(args),
  ] as const
}

export function getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.watch.storageversionmigrations.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisStoragemigrationK8sIoV1WatchStorageversionmigrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsQueryKey>
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
              (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storagemigration.k8s.io'].v1.watch.storageversionmigrations.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/watch/storageversionmigrations/:name',
    toValue(args),
  ] as const
}

export function getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.watch.storageversionmigrations[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisStoragemigrationK8sIoV1WatchStorageversionmigrationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
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
                    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameQueryKey>
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
              (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['storagemigration.k8s.io'].v1.watch.storageversionmigrations[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}
