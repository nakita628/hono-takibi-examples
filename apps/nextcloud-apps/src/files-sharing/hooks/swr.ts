import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
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

export function getGetIndexPhpSTokenPreviewKey(
  args: InferRequestType<(typeof client)['index.php']['s'][':token']['preview']['$get']>,
) {
  return ['index.php', '/index.php/s/:token/preview', args] as const
}

export function useGetIndexPhpSTokenPreview<TError = unknown>(
  args: InferRequestType<(typeof client)['index.php']['s'][':token']['preview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['index.php']['s'][':token']['preview']['$get']>>
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
        ? getGetIndexPhpSTokenPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['index.php']['s'][':token']['preview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['index.php'].s[':token'].preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexPhpSTokenPreview<TError = unknown>(
  args: InferRequestType<(typeof client)['index.php']['s'][':token']['preview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['index.php']['s'][':token']['preview']['$get']>>
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
        ? getGetIndexPhpSTokenPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['index.php']['s'][':token']['preview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['index.php'].s[':token'].preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIndexPhpAppsFilesSharingPublicpreviewTokenKey(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['files_sharing']['publicpreview'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['index.php', '/index.php/apps/files_sharing/publicpreview/:token', keyArgs] as const
}

export function useGetIndexPhpAppsFilesSharingPublicpreviewToken<TError = unknown>(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['files_sharing']['publicpreview'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['index.php']['apps']['files_sharing']['publicpreview'][':token']['$get']
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
        ? getGetIndexPhpAppsFilesSharingPublicpreviewTokenKey(args)
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
                (typeof client)['index.php']['apps']['files_sharing']['publicpreview'][':token']['$get']
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
          client['index.php'].apps.files_sharing.publicpreview[':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexPhpAppsFilesSharingPublicpreviewToken<TError = unknown>(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['files_sharing']['publicpreview'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['index.php']['apps']['files_sharing']['publicpreview'][':token']['$get']
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
        ? getGetIndexPhpAppsFilesSharingPublicpreviewTokenKey(args)
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
                (typeof client)['index.php']['apps']['files_sharing']['publicpreview'][':token']['$get']
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
          client['index.php'].apps.files_sharing.publicpreview[':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostIndexPhpAppsFilesSharingShareinfoKey() {
  return ['index.php', '/index.php/apps/files_sharing/shareinfo', 'POST'] as const
}

export function usePostIndexPhpAppsFilesSharingShareinfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['index.php']['apps']['files_sharing']['shareinfo']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['index.php']['apps']['files_sharing']['shareinfo']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIndexPhpAppsFilesSharingShareinfoKey()
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
            (typeof client)['index.php']['apps']['files_sharing']['shareinfo']['$post']
          >
        },
      ) =>
        parseResponse(client['index.php'].apps.files_sharing.shareinfo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsFilesSharingApiV1SharesKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/shares', keyArgs] as const
}

export function useGetOcsV2PhpAppsFilesSharingApiV1Shares<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1SharesKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.shares.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesSharingApiV1Shares<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1SharesKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.shares.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsFilesSharingApiV1SharesKey() {
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/shares', 'POST'] as const
}

export function usePostOcsV2PhpAppsFilesSharingApiV1Shares<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsFilesSharingApiV1SharesKey()
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
            (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files_sharing.api.v1.shares.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsFilesSharingApiV1SharesInheritedKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['inherited']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/shares/inherited', keyArgs] as const
}

export function useGetOcsV2PhpAppsFilesSharingApiV1SharesInherited<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['inherited']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['inherited']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1SharesInheritedKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['inherited']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.shares.inherited.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesSharingApiV1SharesInherited<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['inherited']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['inherited']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1SharesInheritedKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['inherited']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.shares.inherited.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsFilesSharingApiV1SharesPendingKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['pending']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/shares/pending', keyArgs] as const
}

export function useGetOcsV2PhpAppsFilesSharingApiV1SharesPending<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['pending']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['pending']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1SharesPendingKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['pending']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.shares.pending.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesSharingApiV1SharesPending<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['pending']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['pending']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1SharesPendingKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['pending']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.shares.pending.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsFilesSharingApiV1SharesIdKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/shares/:id', keyArgs] as const
}

export function useGetOcsV2PhpAppsFilesSharingApiV1SharesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1SharesIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.shares[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesSharingApiV1SharesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1SharesIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.shares[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsFilesSharingApiV1SharesIdKey() {
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/shares/:id', 'PUT'] as const
}

export function usePutOcsV2PhpAppsFilesSharingApiV1SharesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsFilesSharingApiV1SharesIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files_sharing.api.v1.shares[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsFilesSharingApiV1SharesIdKey() {
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/shares/:id', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsFilesSharingApiV1SharesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsFilesSharingApiV1SharesIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files_sharing.api.v1.shares[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsFilesSharingApiV1SharesIdSendEmailKey() {
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/shares/:id/send-email', 'POST'] as const
}

export function usePostOcsV2PhpAppsFilesSharingApiV1SharesIdSendEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['send-email']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['send-email']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsFilesSharingApiV1SharesIdSendEmailKey()
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
            (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares'][':id']['send-email']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files_sharing.api.v1.shares[':id']['send-email'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsFilesSharingApiV1SharesPendingIdKey() {
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/shares/pending/:id', 'POST'] as const
}

export function usePostOcsV2PhpAppsFilesSharingApiV1SharesPendingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['pending'][':id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['pending'][':id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsFilesSharingApiV1SharesPendingIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['shares']['pending'][':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files_sharing.api.v1.shares.pending[':id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsFilesSharingApiV1DeletedsharesKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['deletedshares']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/deletedshares', keyArgs] as const
}

export function useGetOcsV2PhpAppsFilesSharingApiV1Deletedshares<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['deletedshares']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['deletedshares']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1DeletedsharesKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['deletedshares']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.deletedshares.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesSharingApiV1Deletedshares<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['deletedshares']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['deletedshares']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1DeletedsharesKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['deletedshares']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.deletedshares.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsFilesSharingApiV1DeletedsharesIdKey() {
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/deletedshares/:id', 'POST'] as const
}

export function usePostOcsV2PhpAppsFilesSharingApiV1DeletedsharesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['deletedshares'][':id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['deletedshares'][':id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsFilesSharingApiV1DeletedsharesIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['deletedshares'][':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files_sharing.api.v1.deletedshares[':id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsFilesSharingApiV1ShareesKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['sharees']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/sharees', keyArgs] as const
}

export function useGetOcsV2PhpAppsFilesSharingApiV1Sharees<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['sharees']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['sharees']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1ShareesKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['sharees']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.sharees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesSharingApiV1Sharees<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['sharees']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['sharees']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1ShareesKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['sharees']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.sharees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsFilesSharingApiV1ShareesRecommendedKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['sharees_recommended']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/sharees_recommended', keyArgs] as const
}

export function useGetOcsV2PhpAppsFilesSharingApiV1ShareesRecommended<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['sharees_recommended']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['sharees_recommended']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1ShareesRecommendedKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['sharees_recommended']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.sharees_recommended.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesSharingApiV1ShareesRecommended<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['sharees_recommended']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['sharees_recommended']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1ShareesRecommendedKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['sharees_recommended']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.sharees_recommended.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsFilesSharingApiV1RemoteSharesKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/remote_shares', keyArgs] as const
}

export function useGetOcsV2PhpAppsFilesSharingApiV1RemoteShares<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1RemoteSharesKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.remote_shares.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesSharingApiV1RemoteShares<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1RemoteSharesKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.remote_shares.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['pending']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/pending', keyArgs] as const
}

export function useGetOcsV2PhpAppsFilesSharingApiV1RemoteSharesPending<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['pending']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['pending']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['pending']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.remote_shares.pending.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesSharingApiV1RemoteSharesPending<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['pending']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['pending']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['pending']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.remote_shares.pending.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingIdKey() {
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/pending/:id', 'POST'] as const
}

export function usePostOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['pending'][':id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['pending'][':id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['pending'][':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files_sharing.api.v1.remote_shares.pending[':id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/pending/:id',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['pending'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['pending'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsFilesSharingApiV1RemoteSharesPendingIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares']['pending'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files_sharing.api.v1.remote_shares.pending[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsFilesSharingApiV1RemoteSharesIdKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/:id', keyArgs] as const
}

export function useGetOcsV2PhpAppsFilesSharingApiV1RemoteSharesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares'][':id']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1RemoteSharesIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares'][':id']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.remote_shares[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesSharingApiV1RemoteSharesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares'][':id']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1RemoteSharesIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares'][':id']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.remote_shares[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsFilesSharingApiV1RemoteSharesIdKey() {
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/:id', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsFilesSharingApiV1RemoteSharesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsFilesSharingApiV1RemoteSharesIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['remote_shares'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.files_sharing.api.v1.remote_shares[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsFilesSharingApiV1TokenKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/files_sharing/api/v1/token', keyArgs] as const
}

export function useGetOcsV2PhpAppsFilesSharingApiV1Token<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['token']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1TokenKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['token']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.token.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsFilesSharingApiV1Token<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['token']['$get']
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
        ? getGetOcsV2PhpAppsFilesSharingApiV1TokenKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['files_sharing']['api']['v1']['token']['$get']
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
          client.ocs['v2.php'].apps.files_sharing.api.v1.token.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
