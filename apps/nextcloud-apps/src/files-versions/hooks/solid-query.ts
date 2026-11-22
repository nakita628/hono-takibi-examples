import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getIndexPhpAppsFilesVersionsPreviewQueryKey(
  args: InferRequestType<(typeof client)['index.php']['apps']['files_versions']['preview']['$get']>,
) {
  return ['index.php', '/index.php/apps/files_versions/preview', args] as const
}

export function getIndexPhpAppsFilesVersionsPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['apps']['files_versions']['preview']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['index.php']['apps']['files_versions']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['index.php']['apps']['files_versions']['preview']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsFilesVersionsPreviewQueryKey>
  >({
    queryKey: getIndexPhpAppsFilesVersionsPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].apps.files_versions.preview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIndexPhpAppsFilesVersionsPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['apps']['files_versions']['preview']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['index.php']['apps']['files_versions']['preview']['$get']
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
                    (typeof client)['index.php']['apps']['files_versions']['preview']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIndexPhpAppsFilesVersionsPreviewQueryKey>
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
      ...getIndexPhpAppsFilesVersionsPreviewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
