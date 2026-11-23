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

export function getBusinessUnitsKey() {
  return ['business-units'] as const
}

export function getBusinessUnitsPublic202609BusinessUnitsUserUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
    >
  >,
) {
  return [
    'business-units',
    '/business-units/public/2026-09/business-units/user/:userId',
    toValue(args),
  ] as const
}

export function getBusinessUnitsPublic202609BusinessUnitsUserUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessUnitsPublic202609BusinessUnitsUserUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['business-units'].public['2026-09']['business-units'].user[':userId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useBusinessUnitsPublic202609BusinessUnitsUserUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
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
                    (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
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
                    (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBusinessUnitsPublic202609BusinessUnitsUserUserIdQueryKey>
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
              (typeof client)['business-units']['public']['2026-09']['business-units']['user'][':userId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessUnitsPublic202609BusinessUnitsUserUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessUnitsPublic202609BusinessUnitsUserUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['business-units'].public['2026-09']['business-units'].user[':userId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}
