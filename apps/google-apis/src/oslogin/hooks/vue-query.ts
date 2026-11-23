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

export function getV1betaKey() {
  return ['v1beta'] as const
}

export function getV1betaNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':name']['$get']>>,
) {
  return ['v1beta', '/v1beta/:name', toValue(args)] as const
}

export function getV1betaNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1betaNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1betaNameMutationKey() {
  return ['v1beta', '/v1beta/:name', 'DELETE'] as const
}

export function getDeleteV1betaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1betaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name']['$delete']>) {
      return parseResponse(client.v1beta[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1betaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1betaNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1betaNameMutationKey() {
  return ['v1beta', '/v1beta/:name', 'PATCH'] as const
}

export function getPatchV1betaNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1betaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name']['$patch']>) {
      return parseResponse(client.v1beta[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1betaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1betaNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1betaNameLoginProfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':name']['loginProfile']['$get']>>,
) {
  return ['v1beta', '/v1beta/:name/loginProfile', toValue(args)] as const
}

export function getV1betaNameLoginProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':name']['loginProfile']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaNameLoginProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta[':name'].loginProfile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaNameLoginProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':name']['loginProfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':name']['loginProfile']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':name']['loginProfile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':name']['loginProfile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1betaNameLoginProfileQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta)[':name']['loginProfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaNameLoginProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaNameLoginProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta[':name'].loginProfile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1betaParentSshPublicKeysMutationKey() {
  return ['v1beta', '/v1beta/:parent/sshPublicKeys', 'POST'] as const
}

export function getPostV1betaParentSshPublicKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['sshPublicKeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['sshPublicKeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentSshPublicKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['sshPublicKeys']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent'].sshPublicKeys.$post(args, options))
    },
  })
}

export function usePostV1betaParentSshPublicKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['sshPublicKeys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':parent']['sshPublicKeys']['$post']>,
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
  const mutationDefaults = getPostV1betaParentSshPublicKeysMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1betaParentImportSshPublicKeyMutationKey() {
  return ['v1beta', '/v1beta/:parent:importSshPublicKey', 'POST'] as const
}

export function getPostV1betaParentImportSshPublicKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent:importSshPublicKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent:importSshPublicKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentImportSshPublicKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent:importSshPublicKey']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent:importSshPublicKey'].$post(args, options))
    },
  })
}

export function usePostV1betaParentImportSshPublicKey<
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
                Awaited<ReturnType<(typeof client.v1beta)[':parent:importSshPublicKey']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':parent:importSshPublicKey']['$post']>,
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
  const mutationDefaults = getPostV1betaParentImportSshPublicKeyMutationOptions<
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
