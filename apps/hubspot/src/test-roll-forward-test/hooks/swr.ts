import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPublicKey() {
  return ['public'] as const
}

export function getGetPublicApiVersioningTest202609WidgetsKey() {
  return ['public', '/public/api/versioning/test/2026-09/widgets'] as const
}

export function useGetPublicApiVersioningTest202609Widgets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.public.api.versioning.test)['2026-09']['widgets']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicApiVersioningTest202609WidgetsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.public.api.versioning.test)['2026-09']['widgets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.public.api.versioning.test['2026-09'].widgets.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicApiVersioningTest202609Widgets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.public.api.versioning.test)['2026-09']['widgets']['$get']>
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicApiVersioningTest202609WidgetsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.public.api.versioning.test)['2026-09']['widgets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.public.api.versioning.test['2026-09'].widgets.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPublicApiVersioningTest202609WidgetsKey() {
  return ['public', '/public/api/versioning/test/2026-09/widgets', 'POST'] as const
}

export function usePostPublicApiVersioningTest202609Widgets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.public.api.versioning.test)['2026-09']['widgets']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.public.api.versioning.test)['2026-09']['widgets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicApiVersioningTest202609WidgetsKey()
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
            (typeof client.public.api.versioning.test)['2026-09']['widgets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.public.api.versioning.test['2026-09'].widgets.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPublicApiVersioningTest202609WidgetsWidgetIdKey(
  args: InferRequestType<
    (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
  >,
) {
  return ['public', '/public/api/versioning/test/2026-09/widgets/:widgetId', args] as const
}

export function useGetPublicApiVersioningTest202609WidgetsWidgetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
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
        ? getGetPublicApiVersioningTest202609WidgetsWidgetIdKey(args)
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
                (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
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
          client.public.api.versioning.test['2026-09'].widgets[':widgetId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicApiVersioningTest202609WidgetsWidgetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
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
        ? getGetPublicApiVersioningTest202609WidgetsWidgetIdKey(args)
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
                (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$get']
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
          client.public.api.versioning.test['2026-09'].widgets[':widgetId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutPublicApiVersioningTest202609WidgetsWidgetIdKey() {
  return ['public', '/public/api/versioning/test/2026-09/widgets/:widgetId', 'PUT'] as const
}

export function usePutPublicApiVersioningTest202609WidgetsWidgetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPublicApiVersioningTest202609WidgetsWidgetIdKey()
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
            (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.public.api.versioning.test['2026-09'].widgets[':widgetId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePublicApiVersioningTest202609WidgetsWidgetIdKey() {
  return ['public', '/public/api/versioning/test/2026-09/widgets/:widgetId', 'DELETE'] as const
}

export function useDeletePublicApiVersioningTest202609WidgetsWidgetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePublicApiVersioningTest202609WidgetsWidgetIdKey()
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
            (typeof client.public.api.versioning.test)['2026-09']['widgets'][':widgetId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.public.api.versioning.test['2026-09'].widgets[':widgetId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
