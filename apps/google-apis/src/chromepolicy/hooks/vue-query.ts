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

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1CustomerPoliciesFilesUploadPolicyFileMutationKey() {
  return ['v1', '/v1/:customer/policies/files:uploadPolicyFile', 'POST'] as const
}

export function getPostV1CustomerPoliciesFilesUploadPolicyFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':customer']['policies']['files:uploadPolicyFile']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':customer']['policies']['files:uploadPolicyFile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerPoliciesFilesUploadPolicyFileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':customer']['policies']['files:uploadPolicyFile']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':customer'].policies['files:uploadPolicyFile'].$post(args, options),
      )
    },
  })
}

export function usePostV1CustomerPoliciesFilesUploadPolicyFile<
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
                    (typeof client.v1)[':customer']['policies']['files:uploadPolicyFile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':customer']['policies']['files:uploadPolicyFile']['$post']
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
  const mutationDefaults = getPostV1CustomerPoliciesFilesUploadPolicyFileMutationOptions<
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

export function getPostV1CustomerPoliciesGroupsBatchDeleteMutationKey() {
  return ['v1', '/v1/:customer/policies/groups:batchDelete', 'POST'] as const
}

export function getPostV1CustomerPoliciesGroupsBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)[':customer']['policies']['groups:batchDelete']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':customer']['policies']['groups:batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerPoliciesGroupsBatchDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':customer']['policies']['groups:batchDelete']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':customer'].policies['groups:batchDelete'].$post(args, options),
      )
    },
  })
}

export function usePostV1CustomerPoliciesGroupsBatchDelete<
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
                    (typeof client.v1)[':customer']['policies']['groups:batchDelete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':customer']['policies']['groups:batchDelete']['$post']
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
  const mutationDefaults = getPostV1CustomerPoliciesGroupsBatchDeleteMutationOptions<
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

export function getPostV1CustomerPoliciesGroupsBatchModifyMutationKey() {
  return ['v1', '/v1/:customer/policies/groups:batchModify', 'POST'] as const
}

export function getPostV1CustomerPoliciesGroupsBatchModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)[':customer']['policies']['groups:batchModify']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':customer']['policies']['groups:batchModify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerPoliciesGroupsBatchModifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':customer']['policies']['groups:batchModify']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':customer'].policies['groups:batchModify'].$post(args, options),
      )
    },
  })
}

export function usePostV1CustomerPoliciesGroupsBatchModify<
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
                    (typeof client.v1)[':customer']['policies']['groups:batchModify']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':customer']['policies']['groups:batchModify']['$post']
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
  const mutationDefaults = getPostV1CustomerPoliciesGroupsBatchModifyMutationOptions<
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

export function getPostV1CustomerPoliciesGroupsListGroupPriorityOrderingMutationKey() {
  return ['v1', '/v1/:customer/policies/groups:listGroupPriorityOrdering', 'POST'] as const
}

export function getPostV1CustomerPoliciesGroupsListGroupPriorityOrderingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':customer']['policies']['groups:listGroupPriorityOrdering']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':customer']['policies']['groups:listGroupPriorityOrdering']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerPoliciesGroupsListGroupPriorityOrderingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':customer']['policies']['groups:listGroupPriorityOrdering']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':customer'].policies['groups:listGroupPriorityOrdering'].$post(args, options),
      )
    },
  })
}

export function usePostV1CustomerPoliciesGroupsListGroupPriorityOrdering<
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
                    (typeof client.v1)[':customer']['policies']['groups:listGroupPriorityOrdering']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':customer']['policies']['groups:listGroupPriorityOrdering']['$post']
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
  const mutationDefaults = getPostV1CustomerPoliciesGroupsListGroupPriorityOrderingMutationOptions<
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

export function getPostV1CustomerPoliciesGroupsUpdateGroupPriorityOrderingMutationKey() {
  return ['v1', '/v1/:customer/policies/groups:updateGroupPriorityOrdering', 'POST'] as const
}

export function getPostV1CustomerPoliciesGroupsUpdateGroupPriorityOrderingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':customer']['policies']['groups:updateGroupPriorityOrdering']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':customer']['policies']['groups:updateGroupPriorityOrdering']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerPoliciesGroupsUpdateGroupPriorityOrderingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':customer']['policies']['groups:updateGroupPriorityOrdering']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':customer'].policies['groups:updateGroupPriorityOrdering'].$post(args, options),
      )
    },
  })
}

export function usePostV1CustomerPoliciesGroupsUpdateGroupPriorityOrdering<
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
                    (typeof client.v1)[':customer']['policies']['groups:updateGroupPriorityOrdering']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':customer']['policies']['groups:updateGroupPriorityOrdering']['$post']
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
    getPostV1CustomerPoliciesGroupsUpdateGroupPriorityOrderingMutationOptions<
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

export function getPostV1CustomerPoliciesNetworksDefineCertificateMutationKey() {
  return ['v1', '/v1/:customer/policies/networks:defineCertificate', 'POST'] as const
}

export function getPostV1CustomerPoliciesNetworksDefineCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':customer']['policies']['networks:defineCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':customer']['policies']['networks:defineCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerPoliciesNetworksDefineCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':customer']['policies']['networks:defineCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':customer'].policies['networks:defineCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostV1CustomerPoliciesNetworksDefineCertificate<
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
                    (typeof client.v1)[':customer']['policies']['networks:defineCertificate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':customer']['policies']['networks:defineCertificate']['$post']
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
  const mutationDefaults = getPostV1CustomerPoliciesNetworksDefineCertificateMutationOptions<
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

export function getPostV1CustomerPoliciesNetworksDefineNetworkMutationKey() {
  return ['v1', '/v1/:customer/policies/networks:defineNetwork', 'POST'] as const
}

export function getPostV1CustomerPoliciesNetworksDefineNetworkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':customer']['policies']['networks:defineNetwork']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':customer']['policies']['networks:defineNetwork']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerPoliciesNetworksDefineNetworkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':customer']['policies']['networks:defineNetwork']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':customer'].policies['networks:defineNetwork'].$post(args, options),
      )
    },
  })
}

export function usePostV1CustomerPoliciesNetworksDefineNetwork<
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
                    (typeof client.v1)[':customer']['policies']['networks:defineNetwork']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':customer']['policies']['networks:defineNetwork']['$post']
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
  const mutationDefaults = getPostV1CustomerPoliciesNetworksDefineNetworkMutationOptions<
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

export function getPostV1CustomerPoliciesNetworksRemoveCertificateMutationKey() {
  return ['v1', '/v1/:customer/policies/networks:removeCertificate', 'POST'] as const
}

export function getPostV1CustomerPoliciesNetworksRemoveCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':customer']['policies']['networks:removeCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':customer']['policies']['networks:removeCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerPoliciesNetworksRemoveCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':customer']['policies']['networks:removeCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':customer'].policies['networks:removeCertificate'].$post(args, options),
      )
    },
  })
}

export function usePostV1CustomerPoliciesNetworksRemoveCertificate<
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
                    (typeof client.v1)[':customer']['policies']['networks:removeCertificate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':customer']['policies']['networks:removeCertificate']['$post']
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
  const mutationDefaults = getPostV1CustomerPoliciesNetworksRemoveCertificateMutationOptions<
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

export function getPostV1CustomerPoliciesNetworksRemoveNetworkMutationKey() {
  return ['v1', '/v1/:customer/policies/networks:removeNetwork', 'POST'] as const
}

export function getPostV1CustomerPoliciesNetworksRemoveNetworkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':customer']['policies']['networks:removeNetwork']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':customer']['policies']['networks:removeNetwork']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerPoliciesNetworksRemoveNetworkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':customer']['policies']['networks:removeNetwork']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':customer'].policies['networks:removeNetwork'].$post(args, options),
      )
    },
  })
}

export function usePostV1CustomerPoliciesNetworksRemoveNetwork<
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
                    (typeof client.v1)[':customer']['policies']['networks:removeNetwork']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':customer']['policies']['networks:removeNetwork']['$post']
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
  const mutationDefaults = getPostV1CustomerPoliciesNetworksRemoveNetworkMutationOptions<
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

export function getPostV1CustomerPoliciesOrgunitsBatchInheritMutationKey() {
  return ['v1', '/v1/:customer/policies/orgunits:batchInherit', 'POST'] as const
}

export function getPostV1CustomerPoliciesOrgunitsBatchInheritMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':customer']['policies']['orgunits:batchInherit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':customer']['policies']['orgunits:batchInherit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerPoliciesOrgunitsBatchInheritMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':customer']['policies']['orgunits:batchInherit']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':customer'].policies['orgunits:batchInherit'].$post(args, options),
      )
    },
  })
}

export function usePostV1CustomerPoliciesOrgunitsBatchInherit<
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
                    (typeof client.v1)[':customer']['policies']['orgunits:batchInherit']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':customer']['policies']['orgunits:batchInherit']['$post']
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
  const mutationDefaults = getPostV1CustomerPoliciesOrgunitsBatchInheritMutationOptions<
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

export function getPostV1CustomerPoliciesOrgunitsBatchModifyMutationKey() {
  return ['v1', '/v1/:customer/policies/orgunits:batchModify', 'POST'] as const
}

export function getPostV1CustomerPoliciesOrgunitsBatchModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)[':customer']['policies']['orgunits:batchModify']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':customer']['policies']['orgunits:batchModify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerPoliciesOrgunitsBatchModifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':customer']['policies']['orgunits:batchModify']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':customer'].policies['orgunits:batchModify'].$post(args, options),
      )
    },
  })
}

export function usePostV1CustomerPoliciesOrgunitsBatchModify<
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
                    (typeof client.v1)[':customer']['policies']['orgunits:batchModify']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':customer']['policies']['orgunits:batchModify']['$post']
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
  const mutationDefaults = getPostV1CustomerPoliciesOrgunitsBatchModifyMutationOptions<
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

export function getPostV1CustomerPoliciesResolveMutationKey() {
  return ['v1', '/v1/:customer/policies:resolve', 'POST'] as const
}

export function getPostV1CustomerPoliciesResolveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':customer']['policies:resolve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':customer']['policies:resolve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerPoliciesResolveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':customer']['policies:resolve']['$post']>,
    ) {
      return parseResponse(client.v1[':customer']['policies:resolve'].$post(args, options))
    },
  })
}

export function usePostV1CustomerPoliciesResolve<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':customer']['policies:resolve']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':customer']['policies:resolve']['$post']>,
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
  const mutationDefaults = getPostV1CustomerPoliciesResolveMutationOptions<TError, TOnMutateResult>(
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

export function getV1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
) {
  return ['v1', '/v1/:name', toValue(args)] as const
}

export function getV1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1NameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ParentPolicySchemasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['policySchemas']['$get']>>,
) {
  return ['v1', '/v1/:parent/policySchemas', toValue(args)] as const
}

export function getV1ParentPolicySchemasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['policySchemas']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentPolicySchemasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].policySchemas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentPolicySchemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['policySchemas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['policySchemas']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['policySchemas']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['policySchemas']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentPolicySchemasQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':parent']['policySchemas']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentPolicySchemasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentPolicySchemasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].policySchemas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
