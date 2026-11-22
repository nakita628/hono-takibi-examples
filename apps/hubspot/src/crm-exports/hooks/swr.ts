import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrmKey() {
  return ['crm'] as const
}

export function getPostCrmExports202609ExportAsyncKey() {
  return ['crm', '/crm/exports/2026-09/export/async', 'POST'] as const
}

export function usePostCrmExports202609ExportAsync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.exports)['2026-09']['export']['async']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.crm.exports)['2026-09']['export']['async']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCrmExports202609ExportAsyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.crm.exports)['2026-09']['export']['async']['$post']>
        },
      ) => parseResponse(client.crm.exports['2026-09'].export.async.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCrmExports202609ExportAsyncTasksTaskIdStatusKey(
  args: InferRequestType<
    (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
  >,
) {
  return ['crm', '/crm/exports/2026-09/export/async/tasks/:taskId/status', args] as const
}

export function useGetCrmExports202609ExportAsyncTasksTaskIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
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
        ? getGetCrmExports202609ExportAsyncTasksTaskIdStatusKey(args)
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
                (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
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
          client.crm.exports['2026-09'].export.async.tasks[':taskId'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmExports202609ExportAsyncTasksTaskIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
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
        ? getGetCrmExports202609ExportAsyncTasksTaskIdStatusKey(args)
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
                (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
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
          client.crm.exports['2026-09'].export.async.tasks[':taskId'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCrmExports202609ExportExportIdKey(
  args: InferRequestType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>,
) {
  return ['crm', '/crm/exports/2026-09/export/:exportId', args] as const
}

export function useGetCrmExports202609ExportExportId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>
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
        ? getGetCrmExports202609ExportExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.exports['2026-09'].export[':exportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrmExports202609ExportExportId<TError = unknown>(
  args: InferRequestType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>
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
        ? getGetCrmExports202609ExportExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.crm.exports['2026-09'].export[':exportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
