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

export function getOcsKey() {
  return ['ocs'] as const
}

export function getOcsV2PhpAppsFilesExternalApiV1MountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_external']['api']['v1']['mounts']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/apps/files_external/api/v1/mounts', keyArgs] as const
}

export function getOcsV2PhpAppsFilesExternalApiV1MountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_external']['api']['v1']['mounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpAppsFilesExternalApiV1MountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].apps.files_external.api.v1.mounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpAppsFilesExternalApiV1Mounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['files_external']['api']['v1']['mounts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['files_external']['api']['v1']['mounts']['$get']
    >
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
                    (typeof client.ocs)['v2.php']['apps']['files_external']['api']['v1']['mounts']['$get']
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
                    (typeof client.ocs)['v2.php']['apps']['files_external']['api']['v1']['mounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpAppsFilesExternalApiV1MountsQueryKey>
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
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['files_external']['api']['v1']['mounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsFilesExternalApiV1MountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpAppsFilesExternalApiV1MountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].apps.files_external.api.v1.mounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
