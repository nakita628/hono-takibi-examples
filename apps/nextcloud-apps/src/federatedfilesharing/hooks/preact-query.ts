import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getOcsKey() {
  return ['ocs'] as const
}

export function getPostIndexPhpAppsFederatedfilesharingCreateFederatedShareMutationKey() {
  return ['index.php', '/index.php/apps/federatedfilesharing/createFederatedShare', 'POST'] as const
}

export function getPostIndexPhpAppsFederatedfilesharingCreateFederatedShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['index.php']['apps']['federatedfilesharing']['createFederatedShare']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['index.php']['apps']['federatedfilesharing']['createFederatedShare']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostIndexPhpAppsFederatedfilesharingCreateFederatedShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['index.php']['apps']['federatedfilesharing']['createFederatedShare']['$post']
      >,
    ) {
      return parseResponse(
        client['index.php'].apps.federatedfilesharing.createFederatedShare.$post(args, options),
      )
    },
  })
}

export function usePostIndexPhpAppsFederatedfilesharingCreateFederatedShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['index.php']['apps']['federatedfilesharing']['createFederatedShare']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['index.php']['apps']['federatedfilesharing']['createFederatedShare']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostIndexPhpAppsFederatedfilesharingCreateFederatedShareMutationOptions<
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

export function getPostOcsV2PhpCloudSharesMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/shares', 'POST'] as const
}

export function getPostOcsV2PhpCloudSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['shares']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudSharesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares']['$post']>,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.shares.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCloudShares<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['shares']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpCloudSharesMutationOptions<TError, TOnMutateResult>(
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

export function getPostOcsV2PhpCloudSharesIdReshareMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/shares/:id/reshare', 'POST'] as const
}

export function getPostOcsV2PhpCloudSharesIdReshareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['reshare']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['reshare']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudSharesIdReshareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['reshare']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.shares[':id'].reshare.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCloudSharesIdReshare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['reshare']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['reshare']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpCloudSharesIdReshareMutationOptions<
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

export function getPostOcsV2PhpCloudSharesIdPermissionsMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/shares/:id/permissions', 'POST'] as const
}

export function getPostOcsV2PhpCloudSharesIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['permissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['permissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudSharesIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['permissions']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].cloud.shares[':id'].permissions.$post(args, options),
      )
    },
  })
}

export function usePostOcsV2PhpCloudSharesIdPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['permissions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['permissions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpCloudSharesIdPermissionsMutationOptions<
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

export function getPostOcsV2PhpCloudSharesIdAcceptMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/shares/:id/accept', 'POST'] as const
}

export function getPostOcsV2PhpCloudSharesIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['accept']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudSharesIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['accept']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.shares[':id'].accept.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCloudSharesIdAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['accept']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['accept']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpCloudSharesIdAcceptMutationOptions<
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

export function getPostOcsV2PhpCloudSharesIdDeclineMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/shares/:id/decline', 'POST'] as const
}

export function getPostOcsV2PhpCloudSharesIdDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['decline']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['decline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudSharesIdDeclineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['decline']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.shares[':id'].decline.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCloudSharesIdDecline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['decline']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['decline']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpCloudSharesIdDeclineMutationOptions<
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

export function getPostOcsV2PhpCloudSharesIdUnshareMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/shares/:id/unshare', 'POST'] as const
}

export function getPostOcsV2PhpCloudSharesIdUnshareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['unshare']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['unshare']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudSharesIdUnshareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['unshare']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.shares[':id'].unshare.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCloudSharesIdUnshare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['unshare']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['unshare']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpCloudSharesIdUnshareMutationOptions<
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

export function getPostOcsV2PhpCloudSharesIdRevokeMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/shares/:id/revoke', 'POST'] as const
}

export function getPostOcsV2PhpCloudSharesIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['revoke']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudSharesIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['revoke']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.shares[':id'].revoke.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCloudSharesIdRevoke<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['revoke']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['revoke']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpCloudSharesIdRevokeMutationOptions<
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

export function getPostOcsV2PhpCloudSharesIdMoveMutationKey() {
  return ['ocs', '/ocs/v2.php/cloud/shares/:id/move', 'POST'] as const
}

export function getPostOcsV2PhpCloudSharesIdMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['move']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['move']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpCloudSharesIdMoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['move']['$post']
      >,
    ) {
      return parseResponse(client.ocs['v2.php'].cloud.shares[':id'].move.$post(args, options))
    },
  })
}

export function usePostOcsV2PhpCloudSharesIdMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['move']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['move']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcsV2PhpCloudSharesIdMoveMutationOptions<TError, TOnMutateResult>(
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
