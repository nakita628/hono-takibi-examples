import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTenantIDKey() {
  return ['{tenantID}'] as const
}

export function getGetTenantIDApplicationsKey(
  args: InferRequestType<(typeof client)[':tenantID']['applications']['$get']>,
) {
  return [':tenantID', '/:tenantID/applications', args] as const
}

export function useGetTenantIDApplications<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['applications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['applications']['$get']>>
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
        ? getGetTenantIDApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['applications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDApplications<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['applications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['applications']['$get']>>
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
        ? getGetTenantIDApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['applications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTenantIDApplicationsKey() {
  return [':tenantID', '/:tenantID/applications', 'POST'] as const
}

export function usePostTenantIDApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['applications']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':tenantID']['applications']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenantIDApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':tenantID']['applications']['$post']> },
      ) => parseResponse(client[':tenantID'].applications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTenantIDApplicationsApplicationObjectIdKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/applications/:applicationObjectId', args] as const
}

export function useGetTenantIDApplicationsApplicationObjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']
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
        ? getGetTenantIDApplicationsApplicationObjectIdKey(args)
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
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']
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
          client[':tenantID'].applications[':applicationObjectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDApplicationsApplicationObjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']
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
        ? getGetTenantIDApplicationsApplicationObjectIdKey(args)
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
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['$get']
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
          client[':tenantID'].applications[':applicationObjectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteTenantIDApplicationsApplicationObjectIdKey() {
  return [':tenantID', '/:tenantID/applications/:applicationObjectId', 'DELETE'] as const
}

export function useDeleteTenantIDApplicationsApplicationObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTenantIDApplicationsApplicationObjectIdKey()
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
            (typeof client)[':tenantID']['applications'][':applicationObjectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].applications[':applicationObjectId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchTenantIDApplicationsApplicationObjectIdKey() {
  return [':tenantID', '/:tenantID/applications/:applicationObjectId', 'PATCH'] as const
}

export function usePatchTenantIDApplicationsApplicationObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':tenantID']['applications'][':applicationObjectId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTenantIDApplicationsApplicationObjectIdKey()
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
            (typeof client)[':tenantID']['applications'][':applicationObjectId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].applications[':applicationObjectId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTenantIDApplicationsApplicationObjectIdLinksOwnersKey() {
  return [
    ':tenantID',
    '/:tenantID/applications/:applicationObjectId/$links/owners',
    'POST',
  ] as const
}

export function usePostTenantIDApplicationsApplicationObjectIdLinksOwners<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenantIDApplicationsApplicationObjectIdLinksOwnersKey()
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
            (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].applications[':applicationObjectId'].$links.owners.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectIdKey() {
  return [
    ':tenantID',
    '/:tenantID/applications/:applicationObjectId/$links/owners/:ownerObjectId',
    'DELETE',
  ] as const
}

export function useDeleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners'][':ownerObjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners'][':ownerObjectId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectIdKey()
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
            (typeof client)[':tenantID']['applications'][':applicationObjectId']['$links']['owners'][':ownerObjectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].applications[':applicationObjectId'].$links.owners[
            ':ownerObjectId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTenantIDApplicationsApplicationObjectIdKeyCredentialsKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/applications/:applicationObjectId/keyCredentials', args] as const
}

export function useGetTenantIDApplicationsApplicationObjectIdKeyCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
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
        ? getGetTenantIDApplicationsApplicationObjectIdKeyCredentialsKey(args)
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
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
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
          client[':tenantID'].applications[':applicationObjectId'].keyCredentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDApplicationsApplicationObjectIdKeyCredentials<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
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
        ? getGetTenantIDApplicationsApplicationObjectIdKeyCredentialsKey(args)
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
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$get']
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
          client[':tenantID'].applications[':applicationObjectId'].keyCredentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchTenantIDApplicationsApplicationObjectIdKeyCredentialsKey() {
  return [
    ':tenantID',
    '/:tenantID/applications/:applicationObjectId/keyCredentials',
    'PATCH',
  ] as const
}

export function usePatchTenantIDApplicationsApplicationObjectIdKeyCredentials<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTenantIDApplicationsApplicationObjectIdKeyCredentialsKey()
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
            (typeof client)[':tenantID']['applications'][':applicationObjectId']['keyCredentials']['$patch']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].applications[':applicationObjectId'].keyCredentials.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTenantIDApplicationsApplicationObjectIdOwnersKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/applications/:applicationObjectId/owners', args] as const
}

export function useGetTenantIDApplicationsApplicationObjectIdOwners<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
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
        ? getGetTenantIDApplicationsApplicationObjectIdOwnersKey(args)
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
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
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
          client[':tenantID'].applications[':applicationObjectId'].owners.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDApplicationsApplicationObjectIdOwners<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
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
        ? getGetTenantIDApplicationsApplicationObjectIdOwnersKey(args)
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
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['owners']['$get']
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
          client[':tenantID'].applications[':applicationObjectId'].owners.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTenantIDApplicationsApplicationObjectIdPasswordCredentialsKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
  >,
) {
  return [
    ':tenantID',
    '/:tenantID/applications/:applicationObjectId/passwordCredentials',
    args,
  ] as const
}

export function useGetTenantIDApplicationsApplicationObjectIdPasswordCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
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
        ? getGetTenantIDApplicationsApplicationObjectIdPasswordCredentialsKey(args)
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
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
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
          client[':tenantID'].applications[':applicationObjectId'].passwordCredentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDApplicationsApplicationObjectIdPasswordCredentials<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
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
        ? getGetTenantIDApplicationsApplicationObjectIdPasswordCredentialsKey(args)
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
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$get']
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
          client[':tenantID'].applications[':applicationObjectId'].passwordCredentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchTenantIDApplicationsApplicationObjectIdPasswordCredentialsKey() {
  return [
    ':tenantID',
    '/:tenantID/applications/:applicationObjectId/passwordCredentials',
    'PATCH',
  ] as const
}

export function usePatchTenantIDApplicationsApplicationObjectIdPasswordCredentials<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchTenantIDApplicationsApplicationObjectIdPasswordCredentialsKey()
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
            (typeof client)[':tenantID']['applications'][':applicationObjectId']['passwordCredentials']['$patch']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].applications[':applicationObjectId'].passwordCredentials.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTenantIDDeletedApplicationsKey(
  args: InferRequestType<(typeof client)[':tenantID']['deletedApplications']['$get']>,
) {
  return [':tenantID', '/:tenantID/deletedApplications', args] as const
}

export function useGetTenantIDDeletedApplications<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['deletedApplications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['deletedApplications']['$get']>>
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
        ? getGetTenantIDDeletedApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['deletedApplications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].deletedApplications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDDeletedApplications<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['deletedApplications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['deletedApplications']['$get']>>
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
        ? getGetTenantIDDeletedApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['deletedApplications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].deletedApplications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTenantIDDeletedApplicationsApplicationObjectIdKey() {
  return [':tenantID', '/:tenantID/deletedApplications/:applicationObjectId', 'DELETE'] as const
}

export function useDeleteTenantIDDeletedApplicationsApplicationObjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['deletedApplications'][':applicationObjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':tenantID']['deletedApplications'][':applicationObjectId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTenantIDDeletedApplicationsApplicationObjectIdKey()
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
            (typeof client)[':tenantID']['deletedApplications'][':applicationObjectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].deletedApplications[':applicationObjectId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTenantIDDeletedApplicationsObjectIdRestoreKey() {
  return [':tenantID', '/:tenantID/deletedApplications/:objectId/restore', 'POST'] as const
}

export function usePostTenantIDDeletedApplicationsObjectIdRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenantID']['deletedApplications'][':objectId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':tenantID']['deletedApplications'][':objectId']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenantIDDeletedApplicationsObjectIdRestoreKey()
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
            (typeof client)[':tenantID']['deletedApplications'][':objectId']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].deletedApplications[':objectId'].restore.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTenantIDDomainsKey(
  args: InferRequestType<(typeof client)[':tenantID']['domains']['$get']>,
) {
  return [':tenantID', '/:tenantID/domains', args] as const
}

export function useGetTenantIDDomains<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['domains']['$get']>>>
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
        ? getGetTenantIDDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['domains']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDDomains<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['domains']['$get']>>>
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
        ? getGetTenantIDDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['domains']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTenantIDDomainsDomainNameKey(
  args: InferRequestType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>,
) {
  return [':tenantID', '/:tenantID/domains/:domainName', args] as const
}

export function useGetTenantIDDomainsDomainName<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>>
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
        ? getGetTenantIDDomainsDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':tenantID'].domains[':domainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDDomainsDomainName<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>>
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
        ? getGetTenantIDDomainsDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['domains'][':domainName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':tenantID'].domains[':domainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTenantIDGetObjectsByObjectIdsKey() {
  return [':tenantID', '/:tenantID/getObjectsByObjectIds', 'POST'] as const
}

export function usePostTenantIDGetObjectsByObjectIds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['getObjectsByObjectIds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':tenantID']['getObjectsByObjectIds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenantIDGetObjectsByObjectIdsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':tenantID']['getObjectsByObjectIds']['$post']>
        },
      ) => parseResponse(client[':tenantID'].getObjectsByObjectIds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTenantIDGroupsKey(
  args: InferRequestType<(typeof client)[':tenantID']['groups']['$get']>,
) {
  return [':tenantID', '/:tenantID/groups', args] as const
}

export function useGetTenantIDGroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['groups']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTenantIDGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDGroups<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['groups']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTenantIDGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTenantIDGroupsKey() {
  return [':tenantID', '/:tenantID/groups', 'POST'] as const
}

export function usePostTenantIDGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['groups']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':tenantID']['groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenantIDGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':tenantID']['groups']['$post']> },
      ) => parseResponse(client[':tenantID'].groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTenantIDGroupsGroupObjectIdLinksMembersKey() {
  return [':tenantID', '/:tenantID/groups/:groupObjectId/$links/members', 'POST'] as const
}

export function usePostTenantIDGroupsGroupObjectIdLinksMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenantIDGroupsGroupObjectIdLinksMembersKey()
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
            (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].groups[':groupObjectId'].$links.members.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectIdKey() {
  return [
    ':tenantID',
    '/:tenantID/groups/:groupObjectId/$links/members/:memberObjectId',
    'DELETE',
  ] as const
}

export function useDeleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members'][':memberObjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members'][':memberObjectId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectIdKey()
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
            (typeof client)[':tenantID']['groups'][':groupObjectId']['$links']['members'][':memberObjectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].groups[':groupObjectId'].$links.members[':memberObjectId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTenantIDGroupsObjectIdKey(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>,
) {
  return [':tenantID', '/:tenantID/groups/:objectId', args] as const
}

export function useGetTenantIDGroupsObjectId<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>>
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
        ? getGetTenantIDGroupsObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].groups[':objectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDGroupsObjectId<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>>
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
        ? getGetTenantIDGroupsObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].groups[':objectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTenantIDGroupsObjectIdKey() {
  return [':tenantID', '/:tenantID/groups/:objectId', 'DELETE'] as const
}

export function useDeleteTenantIDGroupsObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTenantIDGroupsObjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['$delete']>
        },
      ) => parseResponse(client[':tenantID'].groups[':objectId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTenantIDGroupsObjectIdLinksOwnersKey() {
  return [':tenantID', '/:tenantID/groups/:objectId/$links/owners', 'POST'] as const
}

export function usePostTenantIDGroupsObjectIdLinksOwners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenantIDGroupsObjectIdLinksOwnersKey()
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
            (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].groups[':objectId'].$links.owners.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectIdKey() {
  return [
    ':tenantID',
    '/:tenantID/groups/:objectId/$links/owners/:ownerObjectId',
    'DELETE',
  ] as const
}

export function useDeleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectIdKey()
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
            (typeof client)[':tenantID']['groups'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].groups[':objectId'].$links.owners[':ownerObjectId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTenantIDGroupsObjectIdGetMemberGroupsKey() {
  return [':tenantID', '/:tenantID/groups/:objectId/getMemberGroups', 'POST'] as const
}

export function usePostTenantIDGroupsObjectIdGetMemberGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenantID']['groups'][':objectId']['getMemberGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':tenantID']['groups'][':objectId']['getMemberGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenantIDGroupsObjectIdGetMemberGroupsKey()
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
            (typeof client)[':tenantID']['groups'][':objectId']['getMemberGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].groups[':objectId'].getMemberGroups.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTenantIDGroupsObjectIdMembersKey(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>,
) {
  return [':tenantID', '/:tenantID/groups/:objectId/members', args] as const
}

export function useGetTenantIDGroupsObjectIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>
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
        ? getGetTenantIDGroupsObjectIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':tenantID'].groups[':objectId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDGroupsObjectIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>
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
        ? getGetTenantIDGroupsObjectIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['members']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':tenantID'].groups[':objectId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTenantIDGroupsObjectIdOwnersKey(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>,
) {
  return [':tenantID', '/:tenantID/groups/:objectId/owners', args] as const
}

export function useGetTenantIDGroupsObjectIdOwners<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>
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
        ? getGetTenantIDGroupsObjectIdOwnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':tenantID'].groups[':objectId'].owners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDGroupsObjectIdOwners<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>
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
        ? getGetTenantIDGroupsObjectIdOwnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':tenantID']['groups'][':objectId']['owners']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':tenantID'].groups[':objectId'].owners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTenantIDIsMemberOfKey() {
  return [':tenantID', '/:tenantID/isMemberOf', 'POST'] as const
}

export function usePostTenantIDIsMemberOf<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['isMemberOf']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':tenantID']['isMemberOf']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenantIDIsMemberOfKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':tenantID']['isMemberOf']['$post']> },
      ) => parseResponse(client[':tenantID'].isMemberOf.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTenantIDMeKey(
  args: InferRequestType<(typeof client)[':tenantID']['me']['$get']>,
) {
  return [':tenantID', '/:tenantID/me', args] as const
}

export function useGetTenantIDMe<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['me']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['me']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTenantIDMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['me']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDMe<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['me']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['me']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTenantIDMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['me']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTenantIDMeOwnedObjectsKey(
  args: InferRequestType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>,
) {
  return [':tenantID', '/:tenantID/me/ownedObjects', args] as const
}

export function useGetTenantIDMeOwnedObjects<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>>
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
        ? getGetTenantIDMeOwnedObjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].me.ownedObjects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDMeOwnedObjects<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>>
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
        ? getGetTenantIDMeOwnedObjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['me']['ownedObjects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].me.ownedObjects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTenantIDOauth2PermissionGrantsKey(
  args: InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>,
) {
  return [':tenantID', '/:tenantID/oauth2PermissionGrants', args] as const
}

export function useGetTenantIDOauth2PermissionGrants<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>>
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
        ? getGetTenantIDOauth2PermissionGrantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':tenantID'].oauth2PermissionGrants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDOauth2PermissionGrants<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>>
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
        ? getGetTenantIDOauth2PermissionGrantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':tenantID'].oauth2PermissionGrants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTenantIDOauth2PermissionGrantsKey() {
  return [':tenantID', '/:tenantID/oauth2PermissionGrants', 'POST'] as const
}

export function usePostTenantIDOauth2PermissionGrants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenantIDOauth2PermissionGrantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants']['$post']>
        },
      ) => parseResponse(client[':tenantID'].oauth2PermissionGrants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTenantIDOauth2PermissionGrantsObjectIdKey() {
  return [':tenantID', '/:tenantID/oauth2PermissionGrants/:objectId', 'DELETE'] as const
}

export function useDeleteTenantIDOauth2PermissionGrantsObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['oauth2PermissionGrants'][':objectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':tenantID']['oauth2PermissionGrants'][':objectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTenantIDOauth2PermissionGrantsObjectIdKey()
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
            (typeof client)[':tenantID']['oauth2PermissionGrants'][':objectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].oauth2PermissionGrants[':objectId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTenantIDServicePrincipalsKey(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$get']>,
) {
  return [':tenantID', '/:tenantID/servicePrincipals', args] as const
}

export function useGetTenantIDServicePrincipals<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals']['$get']>>
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
        ? getGetTenantIDServicePrincipalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].servicePrincipals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDServicePrincipals<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals']['$get']>>
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
        ? getGetTenantIDServicePrincipalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].servicePrincipals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTenantIDServicePrincipalsKey() {
  return [':tenantID', '/:tenantID/servicePrincipals', 'POST'] as const
}

export function usePostTenantIDServicePrincipals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':tenantID']['servicePrincipals']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenantIDServicePrincipalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':tenantID']['servicePrincipals']['$post']> },
      ) => parseResponse(client[':tenantID'].servicePrincipals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTenantIDServicePrincipalsObjectIdKey(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>,
) {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId', args] as const
}

export function useGetTenantIDServicePrincipalsObjectId<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>
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
        ? getGetTenantIDServicePrincipalsObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':tenantID'].servicePrincipals[':objectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDServicePrincipalsObjectId<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>
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
        ? getGetTenantIDServicePrincipalsObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':tenantID'].servicePrincipals[':objectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTenantIDServicePrincipalsObjectIdKey() {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId', 'DELETE'] as const
}

export function useDeleteTenantIDServicePrincipalsObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTenantIDServicePrincipalsObjectIdKey()
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
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].servicePrincipals[':objectId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchTenantIDServicePrincipalsObjectIdKey() {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId', 'PATCH'] as const
}

export function usePatchTenantIDServicePrincipalsObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':tenantID']['servicePrincipals'][':objectId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTenantIDServicePrincipalsObjectIdKey()
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
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].servicePrincipals[':objectId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTenantIDServicePrincipalsObjectIdLinksOwnersKey() {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId/$links/owners', 'POST'] as const
}

export function usePostTenantIDServicePrincipalsObjectIdLinksOwners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenantIDServicePrincipalsObjectIdLinksOwnersKey()
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
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].servicePrincipals[':objectId'].$links.owners.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectIdKey() {
  return [
    ':tenantID',
    '/:tenantID/servicePrincipals/:objectId/$links/owners/:ownerObjectId',
    'DELETE',
  ] as const
}

export function useDeleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteTenantIDServicePrincipalsObjectIdLinksOwnersOwnerObjectIdKey()
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
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['$links']['owners'][':ownerObjectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].servicePrincipals[':objectId'].$links.owners[
            ':ownerObjectId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTenantIDServicePrincipalsObjectIdAppRoleAssignedToKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId/appRoleAssignedTo', args] as const
}

export function useGetTenantIDServicePrincipalsObjectIdAppRoleAssignedTo<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
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
        ? getGetTenantIDServicePrincipalsObjectIdAppRoleAssignedToKey(args)
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
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
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
          client[':tenantID'].servicePrincipals[':objectId'].appRoleAssignedTo.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDServicePrincipalsObjectIdAppRoleAssignedTo<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
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
        ? getGetTenantIDServicePrincipalsObjectIdAppRoleAssignedToKey(args)
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
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignedTo']['$get']
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
          client[':tenantID'].servicePrincipals[':objectId'].appRoleAssignedTo.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTenantIDServicePrincipalsObjectIdAppRoleAssignmentsKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId/appRoleAssignments', args] as const
}

export function useGetTenantIDServicePrincipalsObjectIdAppRoleAssignments<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
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
        ? getGetTenantIDServicePrincipalsObjectIdAppRoleAssignmentsKey(args)
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
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
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
          client[':tenantID'].servicePrincipals[':objectId'].appRoleAssignments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDServicePrincipalsObjectIdAppRoleAssignments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
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
        ? getGetTenantIDServicePrincipalsObjectIdAppRoleAssignmentsKey(args)
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
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['appRoleAssignments']['$get']
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
          client[':tenantID'].servicePrincipals[':objectId'].appRoleAssignments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTenantIDServicePrincipalsObjectIdKeyCredentialsKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId/keyCredentials', args] as const
}

export function useGetTenantIDServicePrincipalsObjectIdKeyCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
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
        ? getGetTenantIDServicePrincipalsObjectIdKeyCredentialsKey(args)
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
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
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
          client[':tenantID'].servicePrincipals[':objectId'].keyCredentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDServicePrincipalsObjectIdKeyCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
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
        ? getGetTenantIDServicePrincipalsObjectIdKeyCredentialsKey(args)
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
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$get']
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
          client[':tenantID'].servicePrincipals[':objectId'].keyCredentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchTenantIDServicePrincipalsObjectIdKeyCredentialsKey() {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId/keyCredentials', 'PATCH'] as const
}

export function usePatchTenantIDServicePrincipalsObjectIdKeyCredentials<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTenantIDServicePrincipalsObjectIdKeyCredentialsKey()
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
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['keyCredentials']['$patch']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].servicePrincipals[':objectId'].keyCredentials.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTenantIDServicePrincipalsObjectIdOwnersKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId/owners', args] as const
}

export function useGetTenantIDServicePrincipalsObjectIdOwners<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
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
        ? getGetTenantIDServicePrincipalsObjectIdOwnersKey(args)
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
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
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
          client[':tenantID'].servicePrincipals[':objectId'].owners.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDServicePrincipalsObjectIdOwners<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
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
        ? getGetTenantIDServicePrincipalsObjectIdOwnersKey(args)
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
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['owners']['$get']
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
          client[':tenantID'].servicePrincipals[':objectId'].owners.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTenantIDServicePrincipalsObjectIdPasswordCredentialsKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/servicePrincipals/:objectId/passwordCredentials', args] as const
}

export function useGetTenantIDServicePrincipalsObjectIdPasswordCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
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
        ? getGetTenantIDServicePrincipalsObjectIdPasswordCredentialsKey(args)
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
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
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
          client[':tenantID'].servicePrincipals[':objectId'].passwordCredentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDServicePrincipalsObjectIdPasswordCredentials<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
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
        ? getGetTenantIDServicePrincipalsObjectIdPasswordCredentialsKey(args)
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
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$get']
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
          client[':tenantID'].servicePrincipals[':objectId'].passwordCredentials.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchTenantIDServicePrincipalsObjectIdPasswordCredentialsKey() {
  return [
    ':tenantID',
    '/:tenantID/servicePrincipals/:objectId/passwordCredentials',
    'PATCH',
  ] as const
}

export function usePatchTenantIDServicePrincipalsObjectIdPasswordCredentials<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTenantIDServicePrincipalsObjectIdPasswordCredentialsKey()
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
            (typeof client)[':tenantID']['servicePrincipals'][':objectId']['passwordCredentials']['$patch']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].servicePrincipals[':objectId'].passwordCredentials.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTenantIDServicePrincipalsByAppIdApplicationIDObjectIdKey(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
  >,
) {
  return [':tenantID', '/:tenantID/servicePrincipalsByAppId/:applicationID/objectId', args] as const
}

export function useGetTenantIDServicePrincipalsByAppIdApplicationIDObjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
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
        ? getGetTenantIDServicePrincipalsByAppIdApplicationIDObjectIdKey(args)
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
                (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
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
          client[':tenantID'].servicePrincipalsByAppId[':applicationID'].objectId.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDServicePrincipalsByAppIdApplicationIDObjectId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
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
        ? getGetTenantIDServicePrincipalsByAppIdApplicationIDObjectIdKey(args)
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
                (typeof client)[':tenantID']['servicePrincipalsByAppId'][':applicationID']['objectId']['$get']
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
          client[':tenantID'].servicePrincipalsByAppId[':applicationID'].objectId.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTenantIDUsersKey(
  args: InferRequestType<(typeof client)[':tenantID']['users']['$get']>,
) {
  return [':tenantID', '/:tenantID/users', args] as const
}

export function useGetTenantIDUsers<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['users']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTenantIDUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['users']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDUsers<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['users']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTenantIDUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['users']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':tenantID'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTenantIDUsersKey() {
  return [':tenantID', '/:tenantID/users', 'POST'] as const
}

export function usePostTenantIDUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':tenantID']['users']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':tenantID']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenantIDUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':tenantID']['users']['$post']> },
      ) => parseResponse(client[':tenantID'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTenantIDUsersObjectIdGetMemberGroupsKey() {
  return [':tenantID', '/:tenantID/users/:objectId/getMemberGroups', 'POST'] as const
}

export function usePostTenantIDUsersObjectIdGetMemberGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':tenantID']['users'][':objectId']['getMemberGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':tenantID']['users'][':objectId']['getMemberGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenantIDUsersObjectIdGetMemberGroupsKey()
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
            (typeof client)[':tenantID']['users'][':objectId']['getMemberGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':tenantID'].users[':objectId'].getMemberGroups.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTenantIDUsersUpnOrObjectIdKey(
  args: InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>,
) {
  return [':tenantID', '/:tenantID/users/:upnOrObjectId', args] as const
}

export function useGetTenantIDUsersUpnOrObjectId<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>>
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
        ? getGetTenantIDUsersUpnOrObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':tenantID'].users[':upnOrObjectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTenantIDUsersUpnOrObjectId<TError = unknown>(
  args: InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>>
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
        ? getGetTenantIDUsersUpnOrObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':tenantID'].users[':upnOrObjectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTenantIDUsersUpnOrObjectIdKey() {
  return [':tenantID', '/:tenantID/users/:upnOrObjectId', 'DELETE'] as const
}

export function useDeleteTenantIDUsersUpnOrObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTenantIDUsersUpnOrObjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$delete']>
        },
      ) => parseResponse(client[':tenantID'].users[':upnOrObjectId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTenantIDUsersUpnOrObjectIdKey() {
  return [':tenantID', '/:tenantID/users/:upnOrObjectId', 'PATCH'] as const
}

export function usePatchTenantIDUsersUpnOrObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTenantIDUsersUpnOrObjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':tenantID']['users'][':upnOrObjectId']['$patch']>
        },
      ) => parseResponse(client[':tenantID'].users[':upnOrObjectId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
