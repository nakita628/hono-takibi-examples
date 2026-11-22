import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getGetIndexPhpAppsFilesTrashbinPreviewKey(
  args: InferRequestType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>,
) {
  return ['index.php', '/index.php/apps/files_trashbin/preview', args] as const
}

export function useGetIndexPhpAppsFilesTrashbinPreview<TError = unknown>(
  args: InferRequestType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>
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
        ? getGetIndexPhpAppsFilesTrashbinPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['index.php'].apps.files_trashbin.preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexPhpAppsFilesTrashbinPreview<TError = unknown>(
  args: InferRequestType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>
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
        ? getGetIndexPhpAppsFilesTrashbinPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['index.php'].apps.files_trashbin.preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
