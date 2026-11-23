import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function useIndexPhpAppsFilesVersionsPreview<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getIndexPhpAppsFilesVersionsPreviewQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIndexPhpAppsFilesVersionsPreview<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getIndexPhpAppsFilesVersionsPreviewQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
