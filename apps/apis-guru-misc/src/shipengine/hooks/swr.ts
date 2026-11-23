import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPutV1AddressesRecognizeKey() {
  return ['v1', '/v1/addresses/recognize', 'PUT'] as const
}

export function usePutV1AddressesRecognize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.addresses.recognize.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.addresses.recognize.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AddressesRecognizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.addresses.recognize.$put> },
      ) => parseResponse(client.v1.addresses.recognize.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AddressesValidateKey() {
  return ['v1', '/v1/addresses/validate', 'POST'] as const
}

export function usePostV1AddressesValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.addresses.validate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.addresses.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AddressesValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.addresses.validate.$post> },
      ) => parseResponse(client.v1.addresses.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BatchesKey(args: InferRequestType<typeof client.v1.batches.$get>) {
  return ['v1', '/v1/batches', args] as const
}

export function useGetV1Batches<TError = unknown>(
  args: InferRequestType<typeof client.v1.batches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.batches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Batches<TError = unknown>(
  args: InferRequestType<typeof client.v1.batches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BatchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.batches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BatchesKey() {
  return ['v1', '/v1/batches', 'POST'] as const
}

export function usePostV1Batches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.batches.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.batches.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BatchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.batches.$post> }) =>
        parseResponse(client.v1.batches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BatchesExternalBatchIdExternalBatchIdKey(
  args: InferRequestType<
    (typeof client.v1.batches.external_batch_id)[':external_batch_id']['$get']
  >,
) {
  return ['v1', '/v1/batches/external_batch_id/:external_batch_id', args] as const
}

export function useGetV1BatchesExternalBatchIdExternalBatchId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.batches.external_batch_id)[':external_batch_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.batches.external_batch_id)[':external_batch_id']['$get']>
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
        ? getGetV1BatchesExternalBatchIdExternalBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.batches.external_batch_id)[':external_batch_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.batches.external_batch_id[':external_batch_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BatchesExternalBatchIdExternalBatchId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.batches.external_batch_id)[':external_batch_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.batches.external_batch_id)[':external_batch_id']['$get']>
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
        ? getGetV1BatchesExternalBatchIdExternalBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.batches.external_batch_id)[':external_batch_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.batches.external_batch_id[':external_batch_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1BatchesBatchIdKey(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['$get']>,
) {
  return ['v1', '/v1/batches/:batch_id', args] as const
}

export function useGetV1BatchesBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['$get']>>>
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
        ? getGetV1BatchesBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.batches[':batch_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BatchesBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['$get']>>>
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
        ? getGetV1BatchesBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.batches[':batch_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1BatchesBatchIdKey() {
  return ['v1', '/v1/batches/:batch_id', 'PUT'] as const
}

export function usePutV1BatchesBatchId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.batches)[':batch_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1BatchesBatchIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.batches)[':batch_id']['$put']> },
      ) => parseResponse(client.v1.batches[':batch_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1BatchesBatchIdKey() {
  return ['v1', '/v1/batches/:batch_id', 'DELETE'] as const
}

export function useDeleteV1BatchesBatchId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.batches)[':batch_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BatchesBatchIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.batches)[':batch_id']['$delete']> },
      ) => parseResponse(client.v1.batches[':batch_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BatchesBatchIdAddKey() {
  return ['v1', '/v1/batches/:batch_id/add', 'POST'] as const
}

export function usePostV1BatchesBatchIdAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['add']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.batches)[':batch_id']['add']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BatchesBatchIdAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.batches)[':batch_id']['add']['$post']> },
      ) => parseResponse(client.v1.batches[':batch_id'].add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BatchesBatchIdErrorsKey(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['errors']['$get']>,
) {
  return ['v1', '/v1/batches/:batch_id/errors', args] as const
}

export function useGetV1BatchesBatchIdErrors<TError = unknown>(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['errors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['errors']['$get']>>
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
        ? getGetV1BatchesBatchIdErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['errors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.batches[':batch_id'].errors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BatchesBatchIdErrors<TError = unknown>(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['errors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['errors']['$get']>>
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
        ? getGetV1BatchesBatchIdErrorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['errors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.batches[':batch_id'].errors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BatchesBatchIdProcessLabelsKey() {
  return ['v1', '/v1/batches/:batch_id/process/labels', 'POST'] as const
}

export function usePostV1BatchesBatchIdProcessLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.batches)[':batch_id']['process']['labels']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.batches)[':batch_id']['process']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BatchesBatchIdProcessLabelsKey()
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
            (typeof client.v1.batches)[':batch_id']['process']['labels']['$post']
          >
        },
      ) => parseResponse(client.v1.batches[':batch_id'].process.labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BatchesBatchIdRemoveKey() {
  return ['v1', '/v1/batches/:batch_id/remove', 'POST'] as const
}

export function usePostV1BatchesBatchIdRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.batches)[':batch_id']['remove']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.batches)[':batch_id']['remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BatchesBatchIdRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.batches)[':batch_id']['remove']['$post']> },
      ) => parseResponse(client.v1.batches[':batch_id'].remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CarriersKey() {
  return ['v1', '/v1/carriers'] as const
}

export function useGetV1Carriers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.carriers.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CarriersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.carriers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.carriers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Carriers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.carriers.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CarriersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.carriers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.carriers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CarriersCarrierIdKey(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['$get']>,
) {
  return ['v1', '/v1/carriers/:carrier_id', args] as const
}

export function useGetV1CarriersCarrierId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['$get']>>
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
        ? getGetV1CarriersCarrierIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.carriers[':carrier_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CarriersCarrierId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['$get']>>
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
        ? getGetV1CarriersCarrierIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.carriers[':carrier_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CarriersCarrierIdAddFundsKey() {
  return ['v1', '/v1/carriers/:carrier_id/add_funds', 'PUT'] as const
}

export function usePutV1CarriersCarrierIdAddFunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['add_funds']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.carriers)[':carrier_id']['add_funds']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CarriersCarrierIdAddFundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['add_funds']['$put']>
        },
      ) => parseResponse(client.v1.carriers[':carrier_id'].add_funds.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CarriersCarrierIdOptionsKey(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['options']['$get']>,
) {
  return ['v1', '/v1/carriers/:carrier_id/options', args] as const
}

export function useGetV1CarriersCarrierIdOptions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['options']['$get']>>
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
        ? getGetV1CarriersCarrierIdOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.carriers[':carrier_id'].options.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CarriersCarrierIdOptions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['options']['$get']>>
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
        ? getGetV1CarriersCarrierIdOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.carriers[':carrier_id'].options.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CarriersCarrierIdPackagesKey(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['packages']['$get']>,
) {
  return ['v1', '/v1/carriers/:carrier_id/packages', args] as const
}

export function useGetV1CarriersCarrierIdPackages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['packages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['packages']['$get']>>
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
        ? getGetV1CarriersCarrierIdPackagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['packages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.carriers[':carrier_id'].packages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CarriersCarrierIdPackages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['packages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['packages']['$get']>>
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
        ? getGetV1CarriersCarrierIdPackagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['packages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.carriers[':carrier_id'].packages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CarriersCarrierIdServicesKey(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['services']['$get']>,
) {
  return ['v1', '/v1/carriers/:carrier_id/services', args] as const
}

export function useGetV1CarriersCarrierIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['services']['$get']>>
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
        ? getGetV1CarriersCarrierIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.carriers[':carrier_id'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CarriersCarrierIdServices<TError = unknown>(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['services']['$get']>>
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
        ? getGetV1CarriersCarrierIdServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.carriers)[':carrier_id']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.carriers[':carrier_id'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConnectionsCarriersCarrierNameKey() {
  return ['v1', '/v1/connections/carriers/:carrier_name', 'POST'] as const
}

export function usePostV1ConnectionsCarriersCarrierName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connections.carriers)[':carrier_name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connections.carriers)[':carrier_name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsCarriersCarrierNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.connections.carriers)[':carrier_name']['$post']>
        },
      ) => parseResponse(client.v1.connections.carriers[':carrier_name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConnectionsCarriersCarrierNameCarrierIdKey() {
  return ['v1', '/v1/connections/carriers/:carrier_name/:carrier_id', 'DELETE'] as const
}

export function useDeleteV1ConnectionsCarriersCarrierNameCarrierId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConnectionsCarriersCarrierNameCarrierIdKey()
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
            (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.connections.carriers[':carrier_name'][':carrier_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConnectionsCarriersCarrierNameCarrierIdSettingsKey(
  args: InferRequestType<
    (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$get']
  >,
) {
  return ['v1', '/v1/connections/carriers/:carrier_name/:carrier_id/settings', args] as const
}

export function useGetV1ConnectionsCarriersCarrierNameCarrierIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$get']
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
        ? getGetV1ConnectionsCarriersCarrierNameCarrierIdSettingsKey(args)
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
                (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$get']
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
          client.v1.connections.carriers[':carrier_name'][':carrier_id'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConnectionsCarriersCarrierNameCarrierIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$get']
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
        ? getGetV1ConnectionsCarriersCarrierNameCarrierIdSettingsKey(args)
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
                (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$get']
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
          client.v1.connections.carriers[':carrier_name'][':carrier_id'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ConnectionsCarriersCarrierNameCarrierIdSettingsKey() {
  return ['v1', '/v1/connections/carriers/:carrier_name/:carrier_id/settings', 'PUT'] as const
}

export function usePutV1ConnectionsCarriersCarrierNameCarrierIdSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConnectionsCarriersCarrierNameCarrierIdSettingsKey()
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
            (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.connections.carriers[':carrier_name'][':carrier_id'].settings.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectionsInsuranceShipsuranceKey() {
  return ['v1', '/v1/connections/insurance/shipsurance', 'POST'] as const
}

export function usePostV1ConnectionsInsuranceShipsurance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.insurance.shipsurance.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connections.insurance.shipsurance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectionsInsuranceShipsuranceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.connections.insurance.shipsurance.$post> },
      ) => parseResponse(client.v1.connections.insurance.shipsurance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConnectionsInsuranceShipsuranceKey() {
  return ['v1', '/v1/connections/insurance/shipsurance', 'DELETE'] as const
}

export function useDeleteV1ConnectionsInsuranceShipsurance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.connections.insurance.shipsurance.$delete>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConnectionsInsuranceShipsuranceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.connections.insurance.shipsurance.$delete(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1DownloadsDirSubdirFilenameKey(
  args: InferRequestType<(typeof client.v1.downloads)[':dir'][':subdir'][':filename']['$get']>,
) {
  return ['v1', '/v1/downloads/:dir/:subdir/:filename', args] as const
}

export function useGetV1DownloadsDirSubdirFilename<TError = unknown>(
  args: InferRequestType<(typeof client.v1.downloads)[':dir'][':subdir'][':filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.downloads)[':dir'][':subdir'][':filename']['$get']>
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
        ? getGetV1DownloadsDirSubdirFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.downloads)[':dir'][':subdir'][':filename']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.downloads[':dir'][':subdir'][':filename'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DownloadsDirSubdirFilename<TError = unknown>(
  args: InferRequestType<(typeof client.v1.downloads)[':dir'][':subdir'][':filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.downloads)[':dir'][':subdir'][':filename']['$get']>
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
        ? getGetV1DownloadsDirSubdirFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.downloads)[':dir'][':subdir'][':filename']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.downloads[':dir'][':subdir'][':filename'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1EnvironmentWebhooksKey() {
  return ['v1', '/v1/environment/webhooks'] as const
}

export function useGetV1EnvironmentWebhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.environment.webhooks.$get>>>
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
        ? getGetV1EnvironmentWebhooksKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.environment.webhooks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.environment.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EnvironmentWebhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.environment.webhooks.$get>>>
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
        ? getGetV1EnvironmentWebhooksKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.environment.webhooks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.environment.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EnvironmentWebhooksKey() {
  return ['v1', '/v1/environment/webhooks', 'POST'] as const
}

export function usePostV1EnvironmentWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.environment.webhooks.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.environment.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EnvironmentWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.environment.webhooks.$post> },
      ) => parseResponse(client.v1.environment.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EnvironmentWebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$get']>,
) {
  return ['v1', '/v1/environment/webhooks/:webhook_id', args] as const
}

export function useGetV1EnvironmentWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environment.webhooks)[':webhook_id']['$get']>>
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
        ? getGetV1EnvironmentWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environment.webhooks)[':webhook_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.environment.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EnvironmentWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environment.webhooks)[':webhook_id']['$get']>>
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
        ? getGetV1EnvironmentWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environment.webhooks)[':webhook_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.environment.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1EnvironmentWebhooksWebhookIdKey() {
  return ['v1', '/v1/environment/webhooks/:webhook_id', 'PUT'] as const
}

export function usePutV1EnvironmentWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environment.webhooks)[':webhook_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EnvironmentWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$put']>
        },
      ) => parseResponse(client.v1.environment.webhooks[':webhook_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1EnvironmentWebhooksWebhookIdKey() {
  return ['v1', '/v1/environment/webhooks/:webhook_id', 'DELETE'] as const
}

export function useDeleteV1EnvironmentWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.environment.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EnvironmentWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$delete']>
        },
      ) => parseResponse(client.v1.environment.webhooks[':webhook_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1InsuranceShipsuranceAddFundsKey() {
  return ['v1', '/v1/insurance/shipsurance/add_funds', 'PATCH'] as const
}

export function usePatchV1InsuranceShipsuranceAddFunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.insurance.shipsurance.add_funds.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.insurance.shipsurance.add_funds.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1InsuranceShipsuranceAddFundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.insurance.shipsurance.add_funds.$patch> },
      ) => parseResponse(client.v1.insurance.shipsurance.add_funds.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InsuranceShipsuranceBalanceKey() {
  return ['v1', '/v1/insurance/shipsurance/balance'] as const
}

export function useGetV1InsuranceShipsuranceBalance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.insurance.shipsurance.balance.$get>>
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
        ? getGetV1InsuranceShipsuranceBalanceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.insurance.shipsurance.balance.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.insurance.shipsurance.balance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InsuranceShipsuranceBalance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.insurance.shipsurance.balance.$get>>
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
        ? getGetV1InsuranceShipsuranceBalanceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.insurance.shipsurance.balance.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.insurance.shipsurance.balance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1LabelsKey(args: InferRequestType<typeof client.v1.labels.$get>) {
  return ['v1', '/v1/labels', args] as const
}

export function useGetV1Labels<TError = unknown>(
  args: InferRequestType<typeof client.v1.labels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.labels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1LabelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.labels.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Labels<TError = unknown>(
  args: InferRequestType<typeof client.v1.labels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.labels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1LabelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.labels.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1LabelsKey() {
  return ['v1', '/v1/labels', 'POST'] as const
}

export function usePostV1Labels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.labels.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.labels.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.labels.$post> }) =>
        parseResponse(client.v1.labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LabelsExternalShipmentIdExternalShipmentIdKey(
  args: InferRequestType<
    (typeof client.v1.labels.external_shipment_id)[':external_shipment_id']['$get']
  >,
) {
  return ['v1', '/v1/labels/external_shipment_id/:external_shipment_id', args] as const
}

export function useGetV1LabelsExternalShipmentIdExternalShipmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.labels.external_shipment_id)[':external_shipment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.labels.external_shipment_id)[':external_shipment_id']['$get']
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
        ? getGetV1LabelsExternalShipmentIdExternalShipmentIdKey(args)
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
                (typeof client.v1.labels.external_shipment_id)[':external_shipment_id']['$get']
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
          client.v1.labels.external_shipment_id[':external_shipment_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LabelsExternalShipmentIdExternalShipmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.labels.external_shipment_id)[':external_shipment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.labels.external_shipment_id)[':external_shipment_id']['$get']
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
        ? getGetV1LabelsExternalShipmentIdExternalShipmentIdKey(args)
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
                (typeof client.v1.labels.external_shipment_id)[':external_shipment_id']['$get']
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
          client.v1.labels.external_shipment_id[':external_shipment_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1LabelsRatesRateIdKey() {
  return ['v1', '/v1/labels/rates/:rate_id', 'POST'] as const
}

export function usePostV1LabelsRatesRateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.labels.rates)[':rate_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.labels.rates)[':rate_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LabelsRatesRateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.labels.rates)[':rate_id']['$post']> },
      ) => parseResponse(client.v1.labels.rates[':rate_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1LabelsShipmentShipmentIdKey() {
  return ['v1', '/v1/labels/shipment/:shipment_id', 'POST'] as const
}

export function usePostV1LabelsShipmentShipmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.labels.shipment)[':shipment_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.labels.shipment)[':shipment_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LabelsShipmentShipmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.labels.shipment)[':shipment_id']['$post']> },
      ) => parseResponse(client.v1.labels.shipment[':shipment_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LabelsLabelIdKey(
  args: InferRequestType<(typeof client.v1.labels)[':label_id']['$get']>,
) {
  return ['v1', '/v1/labels/:label_id', args] as const
}

export function useGetV1LabelsLabelId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.labels)[':label_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['$get']>>>
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
        ? getGetV1LabelsLabelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.labels[':label_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LabelsLabelId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.labels)[':label_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['$get']>>>
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
        ? getGetV1LabelsLabelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.labels[':label_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1LabelsLabelIdReturnKey() {
  return ['v1', '/v1/labels/:label_id/return', 'POST'] as const
}

export function usePostV1LabelsLabelIdReturn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['return']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.labels)[':label_id']['return']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LabelsLabelIdReturnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.labels)[':label_id']['return']['$post']> },
      ) => parseResponse(client.v1.labels[':label_id'].return.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LabelsLabelIdTrackKey(
  args: InferRequestType<(typeof client.v1.labels)[':label_id']['track']['$get']>,
) {
  return ['v1', '/v1/labels/:label_id/track', args] as const
}

export function useGetV1LabelsLabelIdTrack<TError = unknown>(
  args: InferRequestType<(typeof client.v1.labels)[':label_id']['track']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['track']['$get']>>
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
        ? getGetV1LabelsLabelIdTrackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['track']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.labels[':label_id'].track.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LabelsLabelIdTrack<TError = unknown>(
  args: InferRequestType<(typeof client.v1.labels)[':label_id']['track']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['track']['$get']>>
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
        ? getGetV1LabelsLabelIdTrackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['track']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.labels[':label_id'].track.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1LabelsLabelIdVoidKey() {
  return ['v1', '/v1/labels/:label_id/void', 'PUT'] as const
}

export function usePutV1LabelsLabelIdVoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.labels)[':label_id']['void']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.labels)[':label_id']['void']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1LabelsLabelIdVoidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.labels)[':label_id']['void']['$put']> },
      ) => parseResponse(client.v1.labels[':label_id'].void.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ManifestsKey(args: InferRequestType<typeof client.v1.manifests.$get>) {
  return ['v1', '/v1/manifests', args] as const
}

export function useGetV1Manifests<TError = unknown>(
  args: InferRequestType<typeof client.v1.manifests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.manifests.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ManifestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.manifests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.manifests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Manifests<TError = unknown>(
  args: InferRequestType<typeof client.v1.manifests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.manifests.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ManifestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.manifests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.manifests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ManifestsKey() {
  return ['v1', '/v1/manifests', 'POST'] as const
}

export function usePostV1Manifests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.manifests.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.manifests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ManifestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.manifests.$post> }) =>
        parseResponse(client.v1.manifests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ManifestsRequestsManifestRequestIdKey(
  args: InferRequestType<(typeof client.v1.manifests.requests)[':manifest_request_id']['$get']>,
) {
  return ['v1', '/v1/manifests/requests/:manifest_request_id', args] as const
}

export function useGetV1ManifestsRequestsManifestRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.manifests.requests)[':manifest_request_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.manifests.requests)[':manifest_request_id']['$get']>
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
        ? getGetV1ManifestsRequestsManifestRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.manifests.requests)[':manifest_request_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.manifests.requests[':manifest_request_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ManifestsRequestsManifestRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.manifests.requests)[':manifest_request_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.manifests.requests)[':manifest_request_id']['$get']>
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
        ? getGetV1ManifestsRequestsManifestRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.manifests.requests)[':manifest_request_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.manifests.requests[':manifest_request_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ManifestsManifestIdKey(
  args: InferRequestType<(typeof client.v1.manifests)[':manifest_id']['$get']>,
) {
  return ['v1', '/v1/manifests/:manifest_id', args] as const
}

export function useGetV1ManifestsManifestId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.manifests)[':manifest_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.manifests)[':manifest_id']['$get']>>
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
        ? getGetV1ManifestsManifestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.manifests)[':manifest_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.manifests[':manifest_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ManifestsManifestId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.manifests)[':manifest_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.manifests)[':manifest_id']['$get']>>
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
        ? getGetV1ManifestsManifestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.manifests)[':manifest_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.manifests[':manifest_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PackagesKey() {
  return ['v1', '/v1/packages'] as const
}

export function useGetV1Packages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.packages.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PackagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.packages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.packages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Packages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.packages.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PackagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.packages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.packages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PackagesKey() {
  return ['v1', '/v1/packages', 'POST'] as const
}

export function usePostV1Packages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.packages.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.packages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PackagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.packages.$post> }) =>
        parseResponse(client.v1.packages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PackagesPackageIdKey(
  args: InferRequestType<(typeof client.v1.packages)[':package_id']['$get']>,
) {
  return ['v1', '/v1/packages/:package_id', args] as const
}

export function useGetV1PackagesPackageId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.packages)[':package_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.packages)[':package_id']['$get']>>
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
        ? getGetV1PackagesPackageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.packages)[':package_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.packages[':package_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PackagesPackageId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.packages)[':package_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.packages)[':package_id']['$get']>>
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
        ? getGetV1PackagesPackageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.packages)[':package_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.packages[':package_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1PackagesPackageIdKey() {
  return ['v1', '/v1/packages/:package_id', 'PUT'] as const
}

export function usePutV1PackagesPackageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.packages)[':package_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.packages)[':package_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1PackagesPackageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.packages)[':package_id']['$put']> },
      ) => parseResponse(client.v1.packages[':package_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PackagesPackageIdKey() {
  return ['v1', '/v1/packages/:package_id', 'DELETE'] as const
}

export function useDeleteV1PackagesPackageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.packages)[':package_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.packages)[':package_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PackagesPackageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.packages)[':package_id']['$delete']> },
      ) => parseResponse(client.v1.packages[':package_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PickupsKey(args: InferRequestType<typeof client.v1.pickups.$get>) {
  return ['v1', '/v1/pickups', args] as const
}

export function useGetV1Pickups<TError = unknown>(
  args: InferRequestType<typeof client.v1.pickups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.pickups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PickupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.pickups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.pickups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Pickups<TError = unknown>(
  args: InferRequestType<typeof client.v1.pickups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.pickups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PickupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.pickups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.pickups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PickupsKey() {
  return ['v1', '/v1/pickups', 'POST'] as const
}

export function usePostV1Pickups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.pickups.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.pickups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PickupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.pickups.$post> }) =>
        parseResponse(client.v1.pickups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PickupsPickupIdKey(
  args: InferRequestType<(typeof client.v1.pickups)[':pickup_id']['$get']>,
) {
  return ['v1', '/v1/pickups/:pickup_id', args] as const
}

export function useGetV1PickupsPickupId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.pickups)[':pickup_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.pickups)[':pickup_id']['$get']>>
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
        ? getGetV1PickupsPickupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.pickups)[':pickup_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.pickups[':pickup_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PickupsPickupId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.pickups)[':pickup_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.pickups)[':pickup_id']['$get']>>
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
        ? getGetV1PickupsPickupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.pickups)[':pickup_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.pickups[':pickup_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1PickupsPickupIdKey() {
  return ['v1', '/v1/pickups/:pickup_id', 'DELETE'] as const
}

export function useDeleteV1PickupsPickupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.pickups)[':pickup_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.pickups)[':pickup_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PickupsPickupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.pickups)[':pickup_id']['$delete']> },
      ) => parseResponse(client.v1.pickups[':pickup_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RatesKey() {
  return ['v1', '/v1/rates', 'POST'] as const
}

export function usePostV1Rates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rates.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.rates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.rates.$post> }) =>
        parseResponse(client.v1.rates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RatesBulkKey() {
  return ['v1', '/v1/rates/bulk', 'POST'] as const
}

export function usePostV1RatesBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rates.bulk.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.rates.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RatesBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.rates.bulk.$post> }) =>
        parseResponse(client.v1.rates.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RatesEstimateKey() {
  return ['v1', '/v1/rates/estimate', 'POST'] as const
}

export function usePostV1RatesEstimate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rates.estimate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.rates.estimate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RatesEstimateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.rates.estimate.$post> }) =>
        parseResponse(client.v1.rates.estimate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RatesRateIdKey(
  args: InferRequestType<(typeof client.v1.rates)[':rate_id']['$get']>,
) {
  return ['v1', '/v1/rates/:rate_id', args] as const
}

export function useGetV1RatesRateId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.rates)[':rate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.rates)[':rate_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1RatesRateIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.rates)[':rate_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.rates[':rate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RatesRateId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.rates)[':rate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.rates)[':rate_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1RatesRateIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.rates)[':rate_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.rates[':rate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ServicePointsListKey() {
  return ['v1', '/v1/service_points/list', 'POST'] as const
}

export function usePostV1ServicePointsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.service_points.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.service_points.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ServicePointsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.service_points.list.$post> },
      ) => parseResponse(client.v1.service_points.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ServicePointsCarrierCodeCountryCodeServicePointIdKey(
  args: InferRequestType<
    (typeof client.v1.service_points)[':carrier_code'][':country_code'][':service_point_id']['$get']
  >,
) {
  return ['v1', '/v1/service_points/:carrier_code/:country_code/:service_point_id', args] as const
}

export function useGetV1ServicePointsCarrierCodeCountryCodeServicePointId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.service_points)[':carrier_code'][':country_code'][':service_point_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.service_points)[':carrier_code'][':country_code'][':service_point_id']['$get']
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
        ? getGetV1ServicePointsCarrierCodeCountryCodeServicePointIdKey(args)
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
                (typeof client.v1.service_points)[':carrier_code'][':country_code'][':service_point_id']['$get']
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
          client.v1.service_points[':carrier_code'][':country_code'][':service_point_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ServicePointsCarrierCodeCountryCodeServicePointId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.service_points)[':carrier_code'][':country_code'][':service_point_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.service_points)[':carrier_code'][':country_code'][':service_point_id']['$get']
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
        ? getGetV1ServicePointsCarrierCodeCountryCodeServicePointIdKey(args)
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
                (typeof client.v1.service_points)[':carrier_code'][':country_code'][':service_point_id']['$get']
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
          client.v1.service_points[':carrier_code'][':country_code'][':service_point_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ShipmentsKey(args: InferRequestType<typeof client.v1.shipments.$get>) {
  return ['v1', '/v1/shipments', args] as const
}

export function useGetV1Shipments<TError = unknown>(
  args: InferRequestType<typeof client.v1.shipments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ShipmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.shipments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Shipments<TError = unknown>(
  args: InferRequestType<typeof client.v1.shipments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ShipmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.shipments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ShipmentsKey() {
  return ['v1', '/v1/shipments', 'POST'] as const
}

export function usePostV1Shipments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.shipments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ShipmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.shipments.$post> }) =>
        parseResponse(client.v1.shipments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ShipmentsExternalShipmentIdExternalShipmentIdKey(
  args: InferRequestType<
    (typeof client.v1.shipments.external_shipment_id)[':external_shipment_id']['$get']
  >,
) {
  return ['v1', '/v1/shipments/external_shipment_id/:external_shipment_id', args] as const
}

export function useGetV1ShipmentsExternalShipmentIdExternalShipmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.shipments.external_shipment_id)[':external_shipment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.shipments.external_shipment_id)[':external_shipment_id']['$get']
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
        ? getGetV1ShipmentsExternalShipmentIdExternalShipmentIdKey(args)
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
                (typeof client.v1.shipments.external_shipment_id)[':external_shipment_id']['$get']
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
          client.v1.shipments.external_shipment_id[':external_shipment_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ShipmentsExternalShipmentIdExternalShipmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.shipments.external_shipment_id)[':external_shipment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.shipments.external_shipment_id)[':external_shipment_id']['$get']
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
        ? getGetV1ShipmentsExternalShipmentIdExternalShipmentIdKey(args)
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
                (typeof client.v1.shipments.external_shipment_id)[':external_shipment_id']['$get']
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
          client.v1.shipments.external_shipment_id[':external_shipment_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ShipmentsRecognizeKey() {
  return ['v1', '/v1/shipments/recognize', 'PUT'] as const
}

export function usePutV1ShipmentsRecognize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipments.recognize.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.shipments.recognize.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ShipmentsRecognizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.shipments.recognize.$put> },
      ) => parseResponse(client.v1.shipments.recognize.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ShipmentsShipmentIdKey(
  args: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['$get']>,
) {
  return ['v1', '/v1/shipments/:shipment_id', args] as const
}

export function useGetV1ShipmentsShipmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['$get']>>
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
        ? getGetV1ShipmentsShipmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.shipments[':shipment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ShipmentsShipmentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['$get']>>
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
        ? getGetV1ShipmentsShipmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.shipments[':shipment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ShipmentsShipmentIdKey() {
  return ['v1', '/v1/shipments/:shipment_id', 'PUT'] as const
}

export function usePutV1ShipmentsShipmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.shipments)[':shipment_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ShipmentsShipmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['$put']> },
      ) => parseResponse(client.v1.shipments[':shipment_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ShipmentsShipmentIdCancelKey() {
  return ['v1', '/v1/shipments/:shipment_id/cancel', 'PUT'] as const
}

export function usePutV1ShipmentsShipmentIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['cancel']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.shipments)[':shipment_id']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ShipmentsShipmentIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['cancel']['$put']>
        },
      ) => parseResponse(client.v1.shipments[':shipment_id'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ShipmentsShipmentIdRatesKey(
  args: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['rates']['$get']>,
) {
  return ['v1', '/v1/shipments/:shipment_id/rates', args] as const
}

export function useGetV1ShipmentsShipmentIdRates<TError = unknown>(
  args: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['rates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['rates']['$get']>>
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
        ? getGetV1ShipmentsShipmentIdRatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['rates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.shipments[':shipment_id'].rates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ShipmentsShipmentIdRates<TError = unknown>(
  args: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['rates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['rates']['$get']>>
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
        ? getGetV1ShipmentsShipmentIdRatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.shipments)[':shipment_id']['rates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.shipments[':shipment_id'].rates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ShipmentsShipmentIdTagsTagNameKey() {
  return ['v1', '/v1/shipments/:shipment_id/tags/:tag_name', 'POST'] as const
}

export function usePostV1ShipmentsShipmentIdTagsTagName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ShipmentsShipmentIdTagsTagNameKey()
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
            (typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.shipments[':shipment_id'].tags[':tag_name'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ShipmentsShipmentIdTagsTagNameKey() {
  return ['v1', '/v1/shipments/:shipment_id/tags/:tag_name', 'DELETE'] as const
}

export function useDeleteV1ShipmentsShipmentIdTagsTagName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ShipmentsShipmentIdTagsTagNameKey()
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
            (typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.shipments[':shipment_id'].tags[':tag_name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TagsKey() {
  return ['v1', '/v1/tags'] as const
}

export function useGetV1Tags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Tags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TagsTagNameKey() {
  return ['v1', '/v1/tags/:tag_name', 'POST'] as const
}

export function usePostV1TagsTagName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tag_name']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tags)[':tag_name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TagsTagNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.tags)[':tag_name']['$post']> },
      ) => parseResponse(client.v1.tags[':tag_name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TagsTagNameKey() {
  return ['v1', '/v1/tags/:tag_name', 'DELETE'] as const
}

export function useDeleteV1TagsTagName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':tag_name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tags)[':tag_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TagsTagNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.tags)[':tag_name']['$delete']> },
      ) => parseResponse(client.v1.tags[':tag_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1TagsTagNameNewTagNameKey() {
  return ['v1', '/v1/tags/:tag_name/:new_tag_name', 'PUT'] as const
}

export function usePutV1TagsTagNameNewTagName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':tag_name'][':new_tag_name']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tags)[':tag_name'][':new_tag_name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TagsTagNameNewTagNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.tags)[':tag_name'][':new_tag_name']['$put']> },
      ) => parseResponse(client.v1.tags[':tag_name'][':new_tag_name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TokensEphemeralKey() {
  return ['v1', '/v1/tokens/ephemeral', 'POST'] as const
}

export function usePostV1TokensEphemeral<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.ephemeral.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.tokens.ephemeral.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TokensEphemeralKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.tokens.ephemeral.$post> }) =>
        parseResponse(client.v1.tokens.ephemeral.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TrackingKey(args: InferRequestType<typeof client.v1.tracking.$get>) {
  return ['v1', '/v1/tracking', args] as const
}

export function useGetV1Tracking<TError = unknown>(
  args: InferRequestType<typeof client.v1.tracking.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tracking.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TrackingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tracking.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tracking.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Tracking<TError = unknown>(
  args: InferRequestType<typeof client.v1.tracking.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tracking.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TrackingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tracking.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tracking.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TrackingStartKey() {
  return ['v1', '/v1/tracking/start', 'POST'] as const
}

export function usePostV1TrackingStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tracking.start.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.tracking.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TrackingStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.tracking.start.$post> }) =>
        parseResponse(client.v1.tracking.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TrackingStopKey() {
  return ['v1', '/v1/tracking/stop', 'POST'] as const
}

export function usePostV1TrackingStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tracking.stop.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.tracking.stop.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TrackingStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.tracking.stop.$post> }) =>
        parseResponse(client.v1.tracking.stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WarehousesKey() {
  return ['v1', '/v1/warehouses'] as const
}

export function useGetV1Warehouses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WarehousesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.warehouses.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Warehouses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WarehousesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.warehouses.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WarehousesKey() {
  return ['v1', '/v1/warehouses', 'POST'] as const
}

export function usePostV1Warehouses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.warehouses.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.warehouses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WarehousesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.warehouses.$post> }) =>
        parseResponse(client.v1.warehouses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WarehousesWarehouseIdKey(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$get']>,
) {
  return ['v1', '/v1/warehouses/:warehouse_id', args] as const
}

export function useGetV1WarehousesWarehouseId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['$get']>>
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
        ? getGetV1WarehousesWarehouseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.warehouses[':warehouse_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WarehousesWarehouseId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['$get']>>
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
        ? getGetV1WarehousesWarehouseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.warehouses[':warehouse_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1WarehousesWarehouseIdKey() {
  return ['v1', '/v1/warehouses/:warehouse_id', 'PUT'] as const
}

export function usePutV1WarehousesWarehouseId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WarehousesWarehouseIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$put']> },
      ) => parseResponse(client.v1.warehouses[':warehouse_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1WarehousesWarehouseIdKey() {
  return ['v1', '/v1/warehouses/:warehouse_id', 'DELETE'] as const
}

export function useDeleteV1WarehousesWarehouseId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1WarehousesWarehouseIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$delete']> },
      ) => parseResponse(client.v1.warehouses[':warehouse_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1WarehousesWarehouseIdSettingsKey() {
  return ['v1', '/v1/warehouses/:warehouse_id/settings', 'PUT'] as const
}

export function usePutV1WarehousesWarehouseIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.warehouses)[':warehouse_id']['settings']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1WarehousesWarehouseIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['settings']['$put']>
        },
      ) => parseResponse(client.v1.warehouses[':warehouse_id'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
