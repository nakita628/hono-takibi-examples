import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiClientAllKey(args: InferRequestType<typeof client.api.client.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/client/all', keyArgs] as const
}

export function useGetApiClientAll<TError = unknown>(
  args: InferRequestType<typeof client.api.client.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiClientAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.client.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiClientAll<TError = unknown>(
  args: InferRequestType<typeof client.api.client.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiClientAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.client.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiClientCandeleteKey(
  args: InferRequestType<typeof client.api.client.candelete.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/client/candelete', keyArgs] as const
}

export function useGetApiClientCandelete<TError = unknown>(
  args: InferRequestType<typeof client.api.client.candelete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>
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
        ? getGetApiClientCandeleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.client.candelete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiClientCandelete<TError = unknown>(
  args: InferRequestType<typeof client.api.client.candelete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>
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
        ? getGetApiClientCandeleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.client.candelete.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.client.candelete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiClientDeleteKey() {
  return ['api', '/api/client/delete', 'POST'] as const
}

export function usePostApiClientDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.client.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiClientDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.client.delete.$post> }) =>
        parseResponse(client.api.client.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiClientDetailsKey(
  args: InferRequestType<typeof client.api.client.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/client/details', keyArgs] as const
}

export function useGetApiClientDetails<TError = unknown>(
  args: InferRequestType<typeof client.api.client.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>>
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
        ? getGetApiClientDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.client.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiClientDetails<TError = unknown>(
  args: InferRequestType<typeof client.api.client.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>>
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
        ? getGetApiClientDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.details.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.client.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiClientNewKey() {
  return ['api', '/api/client/new', 'POST'] as const
}

export function usePostApiClientNew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.new.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.client.new.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiClientNewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.client.new.$post> }) =>
        parseResponse(client.api.client.new.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiClientUpdateKey() {
  return ['api', '/api/client/update', 'POST'] as const
}

export function usePostApiClientUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.update.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.client.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiClientUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.client.update.$post> }) =>
        parseResponse(client.api.client.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiEstimationAllKey(
  args: InferRequestType<typeof client.api.estimation.all.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/estimation/all', keyArgs] as const
}

export function useGetApiEstimationAll<TError = unknown>(
  args: InferRequestType<typeof client.api.estimation.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>>
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
        ? getGetApiEstimationAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.estimation.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEstimationAll<TError = unknown>(
  args: InferRequestType<typeof client.api.estimation.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>>
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
        ? getGetApiEstimationAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.estimation.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiEstimationChangestatusKey() {
  return ['api', '/api/estimation/changestatus', 'POST'] as const
}

export function usePostApiEstimationChangestatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.changestatus.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.estimation.changestatus.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEstimationChangestatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.estimation.changestatus.$post> },
      ) => parseResponse(client.api.estimation.changestatus.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiEstimationConvertKey() {
  return ['api', '/api/estimation/convert', 'POST'] as const
}

export function usePostApiEstimationConvert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.convert.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.estimation.convert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEstimationConvertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.estimation.convert.$post> },
      ) => parseResponse(client.api.estimation.convert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiEstimationDeleteKey() {
  return ['api', '/api/estimation/delete', 'POST'] as const
}

export function usePostApiEstimationDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.delete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.estimation.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEstimationDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.estimation.delete.$post> },
      ) => parseResponse(client.api.estimation.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiEstimationDetailsKey(
  args: InferRequestType<typeof client.api.estimation.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/estimation/details', keyArgs] as const
}

export function useGetApiEstimationDetails<TError = unknown>(
  args: InferRequestType<typeof client.api.estimation.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>
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
        ? getGetApiEstimationDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.estimation.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEstimationDetails<TError = unknown>(
  args: InferRequestType<typeof client.api.estimation.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>
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
        ? getGetApiEstimationDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.estimation.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiEstimationNewKey() {
  return ['api', '/api/estimation/new', 'POST'] as const
}

export function usePostApiEstimationNew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.new.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.estimation.new.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEstimationNewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.estimation.new.$post> }) =>
        parseResponse(client.api.estimation.new.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiEstimationSendtoclientKey() {
  return ['api', '/api/estimation/sendtoclient', 'POST'] as const
}

export function usePostApiEstimationSendtoclient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.sendtoclient.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.estimation.sendtoclient.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEstimationSendtoclientKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.estimation.sendtoclient.$post> },
      ) => parseResponse(client.api.estimation.sendtoclient.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiEstimationStatusKey(
  args: InferRequestType<typeof client.api.estimation.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/estimation/status', keyArgs] as const
}

export function useGetApiEstimationStatus<TError = unknown>(
  args: InferRequestType<typeof client.api.estimation.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>
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
        ? getGetApiEstimationStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.estimation.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEstimationStatus<TError = unknown>(
  args: InferRequestType<typeof client.api.estimation.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>
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
        ? getGetApiEstimationStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.estimation.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiEstimationUpdateKey() {
  return ['api', '/api/estimation/update', 'POST'] as const
}

export function usePostApiEstimationUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.update.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.estimation.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEstimationUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.estimation.update.$post> },
      ) => parseResponse(client.api.estimation.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiEstimationUriKey(
  args: InferRequestType<typeof client.api.estimation.uri.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/estimation/uri', keyArgs] as const
}

export function useGetApiEstimationUri<TError = unknown>(
  args: InferRequestType<typeof client.api.estimation.uri.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>>
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
        ? getGetApiEstimationUriKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.estimation.uri.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEstimationUri<TError = unknown>(
  args: InferRequestType<typeof client.api.estimation.uri.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>>
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
        ? getGetApiEstimationUriKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.estimation.uri.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.estimation.uri.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiGeneralCountriesKey(
  args: InferRequestType<typeof client.api.general.countries.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/general/countries', keyArgs] as const
}

export function useGetApiGeneralCountries<TError = unknown>(
  args: InferRequestType<typeof client.api.general.countries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>
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
        ? getGetApiGeneralCountriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.general.countries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGeneralCountries<TError = unknown>(
  args: InferRequestType<typeof client.api.general.countries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>
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
        ? getGetApiGeneralCountriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.general.countries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.general.countries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiGeneralCurrenciesKey(
  args: InferRequestType<typeof client.api.general.currencies.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/general/currencies', keyArgs] as const
}

export function useGetApiGeneralCurrencies<TError = unknown>(
  args: InferRequestType<typeof client.api.general.currencies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>
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
        ? getGetApiGeneralCurrenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.general.currencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGeneralCurrencies<TError = unknown>(
  args: InferRequestType<typeof client.api.general.currencies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>
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
        ? getGetApiGeneralCurrenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.general.currencies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.general.currencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiGeneralDateformatsKey(
  args: InferRequestType<typeof client.api.general.dateformats.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/general/dateformats', keyArgs] as const
}

export function useGetApiGeneralDateformats<TError = unknown>(
  args: InferRequestType<typeof client.api.general.dateformats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
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
        ? getGetApiGeneralDateformatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.general.dateformats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGeneralDateformats<TError = unknown>(
  args: InferRequestType<typeof client.api.general.dateformats.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
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
        ? getGetApiGeneralDateformatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.general.dateformats.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.general.dateformats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiGeneralUilanguagesKey(
  args: InferRequestType<typeof client.api.general.uilanguages.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/general/uilanguages', keyArgs] as const
}

export function useGetApiGeneralUilanguages<TError = unknown>(
  args: InferRequestType<typeof client.api.general.uilanguages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
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
        ? getGetApiGeneralUilanguagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.general.uilanguages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGeneralUilanguages<TError = unknown>(
  args: InferRequestType<typeof client.api.general.uilanguages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
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
        ? getGetApiGeneralUilanguagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.general.uilanguages.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.general.uilanguages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiInvoiceAllKey(args: InferRequestType<typeof client.api.invoice.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/all', keyArgs] as const
}

export function useGetApiInvoiceAll<TError = unknown>(
  args: InferRequestType<typeof client.api.invoice.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiInvoiceAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.invoice.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiInvoiceAll<TError = unknown>(
  args: InferRequestType<typeof client.api.invoice.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiInvoiceAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.invoice.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiInvoiceAllcategoriesKey(
  args: InferRequestType<typeof client.api.invoice.allcategories.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/allcategories', keyArgs] as const
}

export function useGetApiInvoiceAllcategories<TError = unknown>(
  args: InferRequestType<typeof client.api.invoice.allcategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>>
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
        ? getGetApiInvoiceAllcategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.invoice.allcategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiInvoiceAllcategories<TError = unknown>(
  args: InferRequestType<typeof client.api.invoice.allcategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>>
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
        ? getGetApiInvoiceAllcategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.allcategories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.invoice.allcategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiInvoiceChangestatusKey() {
  return ['api', '/api/invoice/changestatus', 'POST'] as const
}

export function usePostApiInvoiceChangestatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.changestatus.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.invoice.changestatus.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInvoiceChangestatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.invoice.changestatus.$post> },
      ) => parseResponse(client.api.invoice.changestatus.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiInvoiceDeleteKey() {
  return ['api', '/api/invoice/delete', 'POST'] as const
}

export function usePostApiInvoiceDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.invoice.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInvoiceDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.invoice.delete.$post> }) =>
        parseResponse(client.api.invoice.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiInvoiceDeletecategoryKey() {
  return ['api', '/api/invoice/deletecategory', 'POST'] as const
}

export function usePostApiInvoiceDeletecategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.deletecategory.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.invoice.deletecategory.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInvoiceDeletecategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.invoice.deletecategory.$post> },
      ) => parseResponse(client.api.invoice.deletecategory.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiInvoiceDetailsKey(
  args: InferRequestType<typeof client.api.invoice.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/details', keyArgs] as const
}

export function useGetApiInvoiceDetails<TError = unknown>(
  args: InferRequestType<typeof client.api.invoice.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>
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
        ? getGetApiInvoiceDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.invoice.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiInvoiceDetails<TError = unknown>(
  args: InferRequestType<typeof client.api.invoice.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>
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
        ? getGetApiInvoiceDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.invoice.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiInvoiceNewKey() {
  return ['api', '/api/invoice/new', 'POST'] as const
}

export function usePostApiInvoiceNew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.new.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.invoice.new.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInvoiceNewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.invoice.new.$post> }) =>
        parseResponse(client.api.invoice.new.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiInvoiceNewcategoryKey() {
  return ['api', '/api/invoice/newcategory', 'POST'] as const
}

export function usePostApiInvoiceNewcategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.newcategory.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.invoice.newcategory.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInvoiceNewcategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.invoice.newcategory.$post> },
      ) => parseResponse(client.api.invoice.newcategory.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiInvoicePdfKey(args: InferRequestType<typeof client.api.invoice.pdf.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/pdf', keyArgs] as const
}

export function useGetApiInvoicePdf<TError = unknown>(
  args: InferRequestType<typeof client.api.invoice.pdf.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiInvoicePdfKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.invoice.pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiInvoicePdf<TError = unknown>(
  args: InferRequestType<typeof client.api.invoice.pdf.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiInvoicePdfKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.pdf.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.invoice.pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiInvoiceSendtoaccountantKey() {
  return ['api', '/api/invoice/sendtoaccountant', 'POST'] as const
}

export function usePostApiInvoiceSendtoaccountant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.sendtoaccountant.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.invoice.sendtoaccountant.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInvoiceSendtoaccountantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.invoice.sendtoaccountant.$post> },
      ) => parseResponse(client.api.invoice.sendtoaccountant.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiInvoiceSendtoclientKey() {
  return ['api', '/api/invoice/sendtoclient', 'POST'] as const
}

export function usePostApiInvoiceSendtoclient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.sendtoclient.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.invoice.sendtoclient.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInvoiceSendtoclientKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.invoice.sendtoclient.$post> },
      ) => parseResponse(client.api.invoice.sendtoclient.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiInvoiceStatusKey(
  args: InferRequestType<typeof client.api.invoice.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/status', keyArgs] as const
}

export function useGetApiInvoiceStatus<TError = unknown>(
  args: InferRequestType<typeof client.api.invoice.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>>
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
        ? getGetApiInvoiceStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.invoice.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiInvoiceStatus<TError = unknown>(
  args: InferRequestType<typeof client.api.invoice.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>>
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
        ? getGetApiInvoiceStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.invoice.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiInvoiceUpdateKey() {
  return ['api', '/api/invoice/update', 'POST'] as const
}

export function usePostApiInvoiceUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.update.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.invoice.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInvoiceUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.invoice.update.$post> }) =>
        parseResponse(client.api.invoice.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiInvoiceUpdatecategoryKey() {
  return ['api', '/api/invoice/updatecategory', 'POST'] as const
}

export function usePostApiInvoiceUpdatecategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.updatecategory.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.invoice.updatecategory.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInvoiceUpdatecategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.invoice.updatecategory.$post> },
      ) => parseResponse(client.api.invoice.updatecategory.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiInvoiceUriKey(args: InferRequestType<typeof client.api.invoice.uri.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/invoice/uri', keyArgs] as const
}

export function useGetApiInvoiceUri<TError = unknown>(
  args: InferRequestType<typeof client.api.invoice.uri.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiInvoiceUriKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.invoice.uri.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiInvoiceUri<TError = unknown>(
  args: InferRequestType<typeof client.api.invoice.uri.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiInvoiceUriKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoice.uri.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.invoice.uri.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrderAllKey(args: InferRequestType<typeof client.api.order.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/order/all', keyArgs] as const
}

export function useGetApiOrderAll<TError = unknown>(
  args: InferRequestType<typeof client.api.order.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiOrderAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.order.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrderAll<TError = unknown>(
  args: InferRequestType<typeof client.api.order.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiOrderAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.order.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrderChangeshippingdetailsKey() {
  return ['api', '/api/order/changeshippingdetails', 'POST'] as const
}

export function usePostApiOrderChangeshippingdetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.order.changeshippingdetails.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.order.changeshippingdetails.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrderChangeshippingdetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.order.changeshippingdetails.$post> },
      ) => parseResponse(client.api.order.changeshippingdetails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiOrderChangestatusKey() {
  return ['api', '/api/order/changestatus', 'POST'] as const
}

export function usePostApiOrderChangestatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.order.changestatus.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.order.changestatus.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrderChangestatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.order.changestatus.$post> },
      ) => parseResponse(client.api.order.changestatus.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiOrderDeleteKey() {
  return ['api', '/api/order/delete', 'POST'] as const
}

export function usePostApiOrderDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.order.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrderDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.order.delete.$post> }) =>
        parseResponse(client.api.order.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrderDetailsKey(
  args: InferRequestType<typeof client.api.order.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/order/details', keyArgs] as const
}

export function useGetApiOrderDetails<TError = unknown>(
  args: InferRequestType<typeof client.api.order.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>>
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
        ? getGetApiOrderDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.order.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrderDetails<TError = unknown>(
  args: InferRequestType<typeof client.api.order.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>>
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
        ? getGetApiOrderDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.details.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.order.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrderNewKey() {
  return ['api', '/api/order/new', 'POST'] as const
}

export function usePostApiOrderNew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.order.new.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.order.new.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrderNewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.order.new.$post> }) =>
        parseResponse(client.api.order.new.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPaymentSupportedKey(
  args: InferRequestType<typeof client.api.payment.supported.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/payment/supported', keyArgs] as const
}

export function useGetApiPaymentSupported<TError = unknown>(
  args: InferRequestType<typeof client.api.payment.supported.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>
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
        ? getGetApiPaymentSupportedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment.supported.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPaymentSupported<TError = unknown>(
  args: InferRequestType<typeof client.api.payment.supported.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>
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
        ? getGetApiPaymentSupportedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.payment.supported.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment.supported.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPaymentlinkAllKey(
  args: InferRequestType<typeof client.api.paymentlink.all.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/paymentlink/all', keyArgs] as const
}

export function useGetApiPaymentlinkAll<TError = unknown>(
  args: InferRequestType<typeof client.api.paymentlink.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>
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
        ? getGetApiPaymentlinkAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.paymentlink.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPaymentlinkAll<TError = unknown>(
  args: InferRequestType<typeof client.api.paymentlink.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>
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
        ? getGetApiPaymentlinkAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.all.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.paymentlink.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPaymentlinkDeleteKey() {
  return ['api', '/api/paymentlink/delete', 'POST'] as const
}

export function usePostApiPaymentlinkDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.delete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.paymentlink.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPaymentlinkDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.paymentlink.delete.$post> },
      ) => parseResponse(client.api.paymentlink.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPaymentlinkNewKey() {
  return ['api', '/api/paymentlink/new', 'POST'] as const
}

export function usePostApiPaymentlinkNew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.new.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.paymentlink.new.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPaymentlinkNewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.paymentlink.new.$post> }) =>
        parseResponse(client.api.paymentlink.new.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPaymentlinkUriKey(
  args: InferRequestType<typeof client.api.paymentlink.uri.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/paymentlink/uri', keyArgs] as const
}

export function useGetApiPaymentlinkUri<TError = unknown>(
  args: InferRequestType<typeof client.api.paymentlink.uri.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>
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
        ? getGetApiPaymentlinkUriKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.paymentlink.uri.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPaymentlinkUri<TError = unknown>(
  args: InferRequestType<typeof client.api.paymentlink.uri.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>
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
        ? getGetApiPaymentlinkUriKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.paymentlink.uri.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.paymentlink.uri.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiProductAllKey(args: InferRequestType<typeof client.api.product.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/product/all', keyArgs] as const
}

export function useGetApiProductAll<TError = unknown>(
  args: InferRequestType<typeof client.api.product.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiProductAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.product.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProductAll<TError = unknown>(
  args: InferRequestType<typeof client.api.product.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiProductAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.product.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiProductDeleteKey() {
  return ['api', '/api/product/delete', 'POST'] as const
}

export function usePostApiProductDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.product.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiProductDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.product.delete.$post> }) =>
        parseResponse(client.api.product.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiProductDetailsKey(
  args: InferRequestType<typeof client.api.product.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/product/details', keyArgs] as const
}

export function useGetApiProductDetails<TError = unknown>(
  args: InferRequestType<typeof client.api.product.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>
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
        ? getGetApiProductDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.product.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProductDetails<TError = unknown>(
  args: InferRequestType<typeof client.api.product.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>
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
        ? getGetApiProductDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.product.details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.product.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiProductNewKey() {
  return ['api', '/api/product/new', 'POST'] as const
}

export function usePostApiProductNew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.product.new.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.product.new.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiProductNewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.product.new.$post> }) =>
        parseResponse(client.api.product.new.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiProductUpdateKey() {
  return ['api', '/api/product/update', 'POST'] as const
}

export function usePostApiProductUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.product.update.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.product.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiProductUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.product.update.$post> }) =>
        parseResponse(client.api.product.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiTaxAllKey(args: InferRequestType<typeof client.api.tax.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/tax/all', keyArgs] as const
}

export function useGetApiTaxAll<TError = unknown>(
  args: InferRequestType<typeof client.api.tax.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTaxAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tax.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTaxAll<TError = unknown>(
  args: InferRequestType<typeof client.api.tax.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTaxAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.tax.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiTaxDeleteKey() {
  return ['api', '/api/tax/delete', 'POST'] as const
}

export function usePostApiTaxDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.tax.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTaxDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.tax.delete.$post> }) =>
        parseResponse(client.api.tax.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiTaxNewKey() {
  return ['api', '/api/tax/new', 'POST'] as const
}

export function usePostApiTaxNew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.new.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.tax.new.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTaxNewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.tax.new.$post> }) =>
        parseResponse(client.api.tax.new.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiTaxUpdateKey() {
  return ['api', '/api/tax/update', 'POST'] as const
}

export function usePostApiTaxUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tax.update.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.tax.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTaxUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.tax.update.$post> }) =>
        parseResponse(client.api.tax.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiWorktypeAllKey(
  args: InferRequestType<typeof client.api.worktype.all.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/worktype/all', keyArgs] as const
}

export function useGetApiWorktypeAll<TError = unknown>(
  args: InferRequestType<typeof client.api.worktype.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiWorktypeAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.worktype.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiWorktypeAll<TError = unknown>(
  args: InferRequestType<typeof client.api.worktype.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiWorktypeAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.worktype.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiWorktypeDeleteKey() {
  return ['api', '/api/worktype/delete', 'POST'] as const
}

export function usePostApiWorktypeDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.worktype.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWorktypeDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.worktype.delete.$post> }) =>
        parseResponse(client.api.worktype.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiWorktypeDetailsKey(
  args: InferRequestType<typeof client.api.worktype.details.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/worktype/details', keyArgs] as const
}

export function useGetApiWorktypeDetails<TError = unknown>(
  args: InferRequestType<typeof client.api.worktype.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>
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
        ? getGetApiWorktypeDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.worktype.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiWorktypeDetails<TError = unknown>(
  args: InferRequestType<typeof client.api.worktype.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>
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
        ? getGetApiWorktypeDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.worktype.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiWorktypeNewKey() {
  return ['api', '/api/worktype/new', 'POST'] as const
}

export function usePostApiWorktypeNew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.new.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.worktype.new.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWorktypeNewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.worktype.new.$post> }) =>
        parseResponse(client.api.worktype.new.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiWorktypeSearchKey(
  args: InferRequestType<typeof client.api.worktype.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/worktype/search', keyArgs] as const
}

export function useGetApiWorktypeSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.worktype.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>
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
        ? getGetApiWorktypeSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.worktype.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiWorktypeSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.worktype.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>
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
        ? getGetApiWorktypeSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.worktype.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiWorktypeUpdateKey() {
  return ['api', '/api/worktype/update', 'POST'] as const
}

export function usePostApiWorktypeUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.worktype.update.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.worktype.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWorktypeUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.worktype.update.$post> }) =>
        parseResponse(client.api.worktype.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
