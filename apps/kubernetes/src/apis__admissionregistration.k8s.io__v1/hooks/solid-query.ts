import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getApisAdmissionregistrationK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/admissionregistration.k8s.io/v1/'] as const
}

export function getApisAdmissionregistrationK8sIoV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['admissionregistration.k8s.io']['v1']['index']['$get']>
        >
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
            ReturnType<(typeof client.apis)['admissionregistration.k8s.io']['v1']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAdmissionregistrationK8sIoV1IndexQueryKey>
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['admissionregistration.k8s.io']['v1']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['index']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisAdmissionregistrationK8sIoV1IndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1IndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$get']
  >,
) {
  return ['apis', '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies', args] as const
}

export function getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesQueryKey>
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies',
    'POST',
  ] as const
}

export function getPostApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies',
    'DELETE',
  ] as const
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/:name',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameQueryKey>
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies[':name'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/:name',
    'PUT',
  ] as const
}

export function getPutApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/:name',
    'PATCH',
  ] as const
}

export function getPatchApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatchApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsQueryKey>
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicybindings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings',
    'POST',
  ] as const
}

export function getPostApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicybindings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings',
    'DELETE',
  ] as const
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicybindings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/:name',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameQueryKey
    >
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/:name',
    'PUT',
  ] as const
}

export function getPutApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings[
          ':name'
        ].$put(args, options),
      )
    },
  })
}

export function createPutApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings[
          ':name'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/:name',
    'PATCH',
  ] as const
}

export function getPatchApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings[
          ':name'
        ].$patch(args, options),
      )
    },
  })
}

export function createPatchApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsQueryKey>
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1Mutatingwebhookconfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations',
    'POST',
  ] as const
}

export function getPostApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApisAdmissionregistrationK8sIoV1Mutatingwebhookconfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations',
    'DELETE',
  ] as const
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApisAdmissionregistrationK8sIoV1Mutatingwebhookconfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameQueryKey>
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations[':name'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name',
    'PUT',
  ] as const
}

export function getPutApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations[
          ':name'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name',
    'PATCH',
  ] as const
}

export function getPatchApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations[
          ':name'
        ].$patch(args, options),
      )
    },
  })
}

export function createPatchApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesQueryKey>
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1Validatingadmissionpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies',
    'POST',
  ] as const
}

export function getPostApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApisAdmissionregistrationK8sIoV1Validatingadmissionpolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies',
    'DELETE',
  ] as const
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApisAdmissionregistrationK8sIoV1Validatingadmissionpolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameQueryKey>
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[':name'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name',
    'PUT',
  ] as const
}

export function getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name',
    'PATCH',
  ] as const
}

export function getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[':name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusQueryKey
    >
  >({
    queryKey:
      getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[
          ':name'
        ].status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status',
    'PUT',
  ] as const
}

export function getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[
          ':name'
        ].status.$put(args, options),
      )
    },
  })
}

export function createPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[
          ':name'
        ].status.$patch(args, options),
      )
    },
  })
}

export function createPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsQueryKey>
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1Validatingadmissionpolicybindings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings',
    'POST',
  ] as const
}

export function getPostApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApisAdmissionregistrationK8sIoV1Validatingadmissionpolicybindings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings',
    'DELETE',
  ] as const
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApisAdmissionregistrationK8sIoV1Validatingadmissionpolicybindings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameQueryKey
    >
  >({
    queryKey:
      getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name',
    'PUT',
  ] as const
}

export function getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings[
          ':name'
        ].$put(args, options),
      )
    },
  })
}

export function createPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings[
          ':name'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name',
    'PATCH',
  ] as const
}

export function getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings[
          ':name'
        ].$patch(args, options),
      )
    },
  })
}

export function createPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsQueryKey>
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1Validatingwebhookconfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations',
    'POST',
  ] as const
}

export function getPostApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApisAdmissionregistrationK8sIoV1Validatingwebhookconfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations',
    'DELETE',
  ] as const
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApisAdmissionregistrationK8sIoV1Validatingwebhookconfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameQueryKey
    >
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name',
    'PUT',
  ] as const
}

export function getPutApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations[
          ':name'
        ].$put(args, options),
      )
    },
  })
}

export function createPutApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations[
          ':name'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameMutationKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name',
    'PATCH',
  ] as const
}

export function getPatchApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations[
          ':name'
        ].$patch(args, options),
      )
    },
  })
}

export function createPatchApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/watch/mutatingadmissionpolicies',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesQueryKey>
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.watch.mutatingadmissionpolicies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/watch/mutatingadmissionpolicies/:name',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesNameQueryKey>
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.watch.mutatingadmissionpolicies[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesNameQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/watch/mutatingadmissionpolicybindings',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsQueryKey
    >
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.watch.mutatingadmissionpolicybindings.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/watch/mutatingadmissionpolicybindings/:name',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsNameQueryKey
    >
  >({
    queryKey:
      getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.watch.mutatingadmissionpolicybindings[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsNameQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsQueryKey>
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.watch.mutatingwebhookconfigurations.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/:name',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsNameQueryKey
    >
  >({
    queryKey:
      getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.watch.mutatingwebhookconfigurations[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsNameQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesQueryKey>
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.watch.validatingadmissionpolicies.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies/:name',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesNameQueryKey
    >
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.watch.validatingadmissionpolicies[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesNameQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsQueryKey
    >
  >({
    queryKey:
      getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.watch.validatingadmissionpolicybindings.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings/:name',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsNameQueryKey
    >
  >({
    queryKey:
      getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.watch.validatingadmissionpolicybindings[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsNameQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsQueryKey
    >
  >({
    queryKey: getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.watch.validatingwebhookconfigurations.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/:name',
    args,
  ] as const
}

export function getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsNameQueryKey
    >
  >({
    queryKey:
      getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['admissionregistration.k8s.io'].v1.watch.validatingwebhookconfigurations[
          ':name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsNameQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
