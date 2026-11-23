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

export function getApisKey() {
  return ['apis'] as const
}

export function getApisStoragemigrationK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/storagemigration.k8s.io/v1/'] as const
}

export function getApisStoragemigrationK8sIoV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['storagemigration.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getApisStoragemigrationK8sIoV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisStoragemigrationK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['storagemigration.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApisStoragemigrationK8sIoV1IndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApisStoragemigrationK8sIoV1StorageversionmigrationsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
  >,
) {
  return ['apis', '/apis/storagemigration.k8s.io/v1/storageversionmigrations', args] as const
}

export function getApisStoragemigrationK8sIoV1StorageversionmigrationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisStoragemigrationK8sIoV1StorageversionmigrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.storageversionmigrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisStoragemigrationK8sIoV1Storageversionmigrations<
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
  args: () => InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApisStoragemigrationK8sIoV1StorageversionmigrationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostApisStoragemigrationK8sIoV1Storageversionmigrations<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApisStoragemigrationK8sIoV1StorageversionmigrationsMutationOptions<
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

export function injectDeleteApisStoragemigrationK8sIoV1Storageversionmigrations<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsMutationOptions<
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

export function getApisStoragemigrationK8sIoV1StorageversionmigrationsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
  >,
) {
  return ['apis', '/apis/storagemigration.k8s.io/v1/storageversionmigrations/:name', args] as const
}

export function getApisStoragemigrationK8sIoV1StorageversionmigrationsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisStoragemigrationK8sIoV1StorageversionmigrationsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisStoragemigrationK8sIoV1StorageversionmigrationsName<
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
  args: () => InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApisStoragemigrationK8sIoV1StorageversionmigrationsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutApisStoragemigrationK8sIoV1StorageversionmigrationsName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApisStoragemigrationK8sIoV1StorageversionmigrationsNameMutationOptions<
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

export function injectDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisStoragemigrationK8sIoV1StorageversionmigrationsNameMutationOptions<
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

export function injectPatchApisStoragemigrationK8sIoV1StorageversionmigrationsName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameMutationOptions<
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

export function getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/storageversionmigrations/:name/status',
    args,
  ] as const
}

export function getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.storageversionmigrations[':name'].status.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatus<
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
  args: () => InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['storageversionmigrations'][':name']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatus<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusMutationOptions<
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

export function injectPatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatus<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApisStoragemigrationK8sIoV1StorageversionmigrationsNameStatusMutationOptions<
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

export function getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
  >,
) {
  return ['apis', '/apis/storagemigration.k8s.io/v1/watch/storageversionmigrations', args] as const
}

export function getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.watch.storageversionmigrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApisStoragemigrationK8sIoV1WatchStorageversionmigrations<
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
  args: () => InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/storagemigration.k8s.io/v1/watch/storageversionmigrations/:name',
    args,
  ] as const
}

export function getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['storagemigration.k8s.io'].v1.watch.storageversionmigrations[':name'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectApisStoragemigrationK8sIoV1WatchStorageversionmigrationsName<
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
  args: () => InferRequestType<
    (typeof client.apis)['storagemigration.k8s.io']['v1']['watch']['storageversionmigrations'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApisStoragemigrationK8sIoV1WatchStorageversionmigrationsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}
