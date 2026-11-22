import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIndexPhpKey() {
  return ['index.php'] as const
}

export function getIndexPhpAppsFilesTrashbinPreviewQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>
  >,
) {
  return ['index.php', '/index.php/apps/files_trashbin/preview', toValue(args)] as const
}

export function getIndexPhpAppsFilesTrashbinPreviewQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexPhpAppsFilesTrashbinPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['index.php'].apps.files_trashbin.preview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexPhpAppsFilesTrashbinPreview<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getIndexPhpAppsFilesTrashbinPreviewQueryKey>
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
          Awaited<
            ReturnType<(typeof client)['index.php']['apps']['files_trashbin']['preview']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexPhpAppsFilesTrashbinPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexPhpAppsFilesTrashbinPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['index.php'].apps.files_trashbin.preview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
