import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getGetApisAdmissionregistrationK8sIoV1IndexKey() {
  return ['apis', '/apis/admissionregistration.k8s.io/v1/'] as const
}

export function useGetApisAdmissionregistrationK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['admissionregistration.k8s.io']['v1']['index']['$get']>
          >
        >
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
        ? getGetApisAdmissionregistrationK8sIoV1IndexKey()
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['index']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['admissionregistration.k8s.io']['v1']['index']['$get']>
          >
        >
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
        ? getGetApisAdmissionregistrationK8sIoV1IndexKey()
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['index']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesKey(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$get']
  >,
) {
  return ['apis', '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies', args] as const
}

export function useGetApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies',
    'POST',
  ] as const
}

export function usePostApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies',
    'DELETE',
  ] as const
}

export function useDeleteApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameKey(
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

export function useGetApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/:name',
    'PUT',
  ] as const
}

export function usePutApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicies/:name',
    'PATCH',
  ] as const
}

export function usePatchApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisAdmissionregistrationK8sIoV1MutatingadmissionpoliciesNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicies'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicies[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsKey(
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

export function useGetApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicybindings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicybindings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings',
    'POST',
  ] as const
}

export function usePostApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicybindings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings',
    'DELETE',
  ] as const
}

export function useDeleteApisAdmissionregistrationK8sIoV1Mutatingadmissionpolicybindings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameKey(
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

export function useGetApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/:name',
    'PUT',
  ] as const
}

export function usePutApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings[
            ':name'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings[
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingadmissionpolicybindings/:name',
    'PATCH',
  ] as const
}

export function usePatchApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisAdmissionregistrationK8sIoV1MutatingadmissionpolicybindingsNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingadmissionpolicybindings'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.mutatingadmissionpolicybindings[
            ':name'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsKey(
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

export function useGetApisAdmissionregistrationK8sIoV1Mutatingwebhookconfigurations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1Mutatingwebhookconfigurations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations',
    'POST',
  ] as const
}

export function usePostApisAdmissionregistrationK8sIoV1Mutatingwebhookconfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations',
    'DELETE',
  ] as const
}

export function useDeleteApisAdmissionregistrationK8sIoV1Mutatingwebhookconfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameKey(
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

export function useGetApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name',
    'PUT',
  ] as const
}

export function usePutApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations[
            ':name'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations[
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name',
    'PATCH',
  ] as const
}

export function usePatchApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisAdmissionregistrationK8sIoV1MutatingwebhookconfigurationsNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['mutatingwebhookconfigurations'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.mutatingwebhookconfigurations[
            ':name'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesKey(
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

export function useGetApisAdmissionregistrationK8sIoV1Validatingadmissionpolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1Validatingadmissionpolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies',
    'POST',
  ] as const
}

export function usePostApisAdmissionregistrationK8sIoV1Validatingadmissionpolicies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies',
    'DELETE',
  ] as const
}

export function useDeleteApisAdmissionregistrationK8sIoV1Validatingadmissionpolicies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameKey(
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

export function useGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name',
    'PUT',
  ] as const
}

export function usePutApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name',
    'PATCH',
  ] as const
}

export function usePatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[
            ':name'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusKey(
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

export function useGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[
            ':name'
          ].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[
            ':name'
          ].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status',
    'PUT',
  ] as const
}

export function usePutApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[
            ':name'
          ].status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status',
    'PATCH',
  ] as const
}

export function usePatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpoliciesNameStatusKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicies'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicies[
            ':name'
          ].status.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsKey(
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

export function useGetApisAdmissionregistrationK8sIoV1Validatingadmissionpolicybindings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1Validatingadmissionpolicybindings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings',
    'POST',
  ] as const
}

export function usePostApisAdmissionregistrationK8sIoV1Validatingadmissionpolicybindings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings',
    'DELETE',
  ] as const
}

export function useDeleteApisAdmissionregistrationK8sIoV1Validatingadmissionpolicybindings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameKey(
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

export function useGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name',
    'PUT',
  ] as const
}

export function usePutApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings[
            ':name'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings[
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name',
    'PATCH',
  ] as const
}

export function usePatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisAdmissionregistrationK8sIoV1ValidatingadmissionpolicybindingsNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingadmissionpolicybindings'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingadmissionpolicybindings[
            ':name'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsKey(
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

export function useGetApisAdmissionregistrationK8sIoV1Validatingwebhookconfigurations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1Validatingwebhookconfigurations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations',
    'POST',
  ] as const
}

export function usePostApisAdmissionregistrationK8sIoV1Validatingwebhookconfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations',
    'DELETE',
  ] as const
}

export function useDeleteApisAdmissionregistrationK8sIoV1Validatingwebhookconfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameKey(
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

export function useGetApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name',
    'PUT',
  ] as const
}

export function usePutApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations[
            ':name'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations[
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameKey() {
  return [
    'apis',
    '/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name',
    'PATCH',
  ] as const
}

export function usePatchApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisAdmissionregistrationK8sIoV1ValidatingwebhookconfigurationsNameKey()
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
            (typeof client.apis)['admissionregistration.k8s.io']['v1']['validatingwebhookconfigurations'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['admissionregistration.k8s.io'].v1.validatingwebhookconfigurations[
            ':name'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesKey(
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

export function useGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.mutatingadmissionpolicies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.mutatingadmissionpolicies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesNameKey(
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

export function useGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.mutatingadmissionpolicies[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpoliciesNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicies'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.mutatingadmissionpolicies[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsKey(
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

export function useGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.mutatingadmissionpolicybindings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.mutatingadmissionpolicybindings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsNameKey(
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

export function useGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.mutatingadmissionpolicybindings[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchMutatingadmissionpolicybindingsNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingadmissionpolicybindings'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.mutatingadmissionpolicybindings[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsKey(
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

export function useGetApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.mutatingwebhookconfigurations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.mutatingwebhookconfigurations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsNameKey(
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

export function useGetApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.mutatingwebhookconfigurations[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchMutatingwebhookconfigurationsNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['mutatingwebhookconfigurations'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.mutatingwebhookconfigurations[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesKey(
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

export function useGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.validatingadmissionpolicies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.validatingadmissionpolicies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesNameKey(
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

export function useGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.validatingadmissionpolicies[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpoliciesNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicies'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.validatingadmissionpolicies[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsKey(
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

export function useGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings']['$get']
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
          client.apis[
            'admissionregistration.k8s.io'
          ].v1.watch.validatingadmissionpolicybindings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings']['$get']
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
          client.apis[
            'admissionregistration.k8s.io'
          ].v1.watch.validatingadmissionpolicybindings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsNameKey(
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

export function useGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.validatingadmissionpolicybindings[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchValidatingadmissionpolicybindingsNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingadmissionpolicybindings'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.validatingadmissionpolicybindings[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsKey(
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

export function useGetApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.validatingwebhookconfigurations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.validatingwebhookconfigurations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsNameKey(
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

export function useGetApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.validatingwebhookconfigurations[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAdmissionregistrationK8sIoV1WatchValidatingwebhookconfigurationsNameKey(args)
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
                (typeof client.apis)['admissionregistration.k8s.io']['v1']['watch']['validatingwebhookconfigurations'][':name']['$get']
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
          client.apis['admissionregistration.k8s.io'].v1.watch.validatingwebhookconfigurations[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
