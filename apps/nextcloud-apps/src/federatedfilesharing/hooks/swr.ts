import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getOcsKey() {
  return ['ocs'] as const
}

export function getPostIndexPhpAppsFederatedfilesharingCreateFederatedShareKey() {
  return ['index.php', '/index.php/apps/federatedfilesharing/createFederatedShare', 'POST'] as const
}

export function usePostIndexPhpAppsFederatedfilesharingCreateFederatedShare<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['index.php']['apps']['federatedfilesharing']['createFederatedShare']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexPhpAppsFederatedfilesharingCreateFederatedShareKey()
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
            (typeof client)['index.php']['apps']['federatedfilesharing']['createFederatedShare']['$post']
          >
        },
      ) =>
        parseResponse(
          client['index.php'].apps.federatedfilesharing.createFederatedShare.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpCloudSharesKey() {
  return ['ocs', '/ocs/v2.php/cloud/shares', 'POST'] as const
}

export function usePostOcsV2PhpCloudShares<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocs)['v2.php']['cloud']['shares']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpCloudSharesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares']['$post']> },
      ) => parseResponse(client.ocs['v2.php'].cloud.shares.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpCloudSharesIdReshareKey() {
  return ['ocs', '/ocs/v2.php/cloud/shares/:id/reshare', 'POST'] as const
}

export function usePostOcsV2PhpCloudSharesIdReshare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['reshare']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpCloudSharesIdReshareKey()
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
            (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['reshare']['$post']
          >
        },
      ) =>
        parseResponse(client.ocs['v2.php'].cloud.shares[':id'].reshare.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpCloudSharesIdPermissionsKey() {
  return ['ocs', '/ocs/v2.php/cloud/shares/:id/permissions', 'POST'] as const
}

export function usePostOcsV2PhpCloudSharesIdPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['permissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpCloudSharesIdPermissionsKey()
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
            (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['permissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].cloud.shares[':id'].permissions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpCloudSharesIdAcceptKey() {
  return ['ocs', '/ocs/v2.php/cloud/shares/:id/accept', 'POST'] as const
}

export function usePostOcsV2PhpCloudSharesIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpCloudSharesIdAcceptKey()
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
            (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['accept']['$post']
          >
        },
      ) => parseResponse(client.ocs['v2.php'].cloud.shares[':id'].accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpCloudSharesIdDeclineKey() {
  return ['ocs', '/ocs/v2.php/cloud/shares/:id/decline', 'POST'] as const
}

export function usePostOcsV2PhpCloudSharesIdDecline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['decline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpCloudSharesIdDeclineKey()
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
            (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['decline']['$post']
          >
        },
      ) =>
        parseResponse(client.ocs['v2.php'].cloud.shares[':id'].decline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpCloudSharesIdUnshareKey() {
  return ['ocs', '/ocs/v2.php/cloud/shares/:id/unshare', 'POST'] as const
}

export function usePostOcsV2PhpCloudSharesIdUnshare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['unshare']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpCloudSharesIdUnshareKey()
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
            (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['unshare']['$post']
          >
        },
      ) =>
        parseResponse(client.ocs['v2.php'].cloud.shares[':id'].unshare.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpCloudSharesIdRevokeKey() {
  return ['ocs', '/ocs/v2.php/cloud/shares/:id/revoke', 'POST'] as const
}

export function usePostOcsV2PhpCloudSharesIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpCloudSharesIdRevokeKey()
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
            (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['revoke']['$post']
          >
        },
      ) => parseResponse(client.ocs['v2.php'].cloud.shares[':id'].revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpCloudSharesIdMoveKey() {
  return ['ocs', '/ocs/v2.php/cloud/shares/:id/move', 'POST'] as const
}

export function usePostOcsV2PhpCloudSharesIdMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['cloud']['shares'][':id']['move']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpCloudSharesIdMoveKey()
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
            (typeof client.ocs)['v2.php']['cloud']['shares'][':id']['move']['$post']
          >
        },
      ) => parseResponse(client.ocs['v2.php'].cloud.shares[':id'].move.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
