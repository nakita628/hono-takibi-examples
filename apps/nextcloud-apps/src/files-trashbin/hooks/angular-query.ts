import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getIndexPhpAppsFilesTrashbinPreviewQueryKey(
  args: InferRequestType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>,
) {
  return ['index.php', '/index.php/apps/files_trashbin/preview', args] as const
}

export function getIndexPhpAppsFilesTrashbinPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsFilesTrashbinPreviewQueryKey>
  >({
    queryKey: getIndexPhpAppsFilesTrashbinPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['index.php'].apps.files_trashbin.preview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIndexPhpAppsFilesTrashbinPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexPhpAppsFilesTrashbinPreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIndexPhpAppsFilesTrashbinPreviewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
