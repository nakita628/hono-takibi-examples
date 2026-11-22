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

export function getGetV1CustomerDisputesKey(
  args: InferRequestType<typeof client.v1.customer.disputes.$get>,
) {
  return ['v1', '/v1/customer/disputes', args] as const
}

export function useGetV1CustomerDisputes<TError = unknown>(
  args: InferRequestType<typeof client.v1.customer.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.customer.disputes.$get>>>
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
        ? getGetV1CustomerDisputesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.customer.disputes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customer.disputes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerDisputes<TError = unknown>(
  args: InferRequestType<typeof client.v1.customer.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.customer.disputes.$get>>>
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
        ? getGetV1CustomerDisputesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.customer.disputes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customer.disputes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomerDisputesIdKey(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['$get']>,
) {
  return ['v1', '/v1/customer/disputes/:id', args] as const
}

export function useGetV1CustomerDisputesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['$get']>>
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
        ? getGetV1CustomerDisputesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customer.disputes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerDisputesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['$get']>>
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
        ? getGetV1CustomerDisputesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customer.disputes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1CustomerDisputesIdKey() {
  return ['v1', '/v1/customer/disputes/:id', 'PATCH'] as const
}

export function usePatchV1CustomerDisputesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1CustomerDisputesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.customer.disputes)[':id']['$patch']> },
      ) => parseResponse(client.v1.customer.disputes[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomerDisputesIdProvideEvidenceKey() {
  return ['v1', '/v1/customer/disputes/:id/provide-evidence', 'POST'] as const
}

export function usePostV1CustomerDisputesIdProvideEvidence<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.customer.disputes)[':id']['provide-evidence']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['provide-evidence']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomerDisputesIdProvideEvidenceKey()
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
            (typeof client.v1.customer.disputes)[':id']['provide-evidence']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.customer.disputes[':id']['provide-evidence'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomerDisputesIdAppealKey() {
  return ['v1', '/v1/customer/disputes/:id/appeal', 'POST'] as const
}

export function usePostV1CustomerDisputesIdAppeal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['appeal']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['appeal']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomerDisputesIdAppealKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.customer.disputes)[':id']['appeal']['$post']>
        },
      ) => parseResponse(client.v1.customer.disputes[':id'].appeal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomerDisputesIdAcceptClaimKey() {
  return ['v1', '/v1/customer/disputes/:id/accept-claim', 'POST'] as const
}

export function usePostV1CustomerDisputesIdAcceptClaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['accept-claim']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['accept-claim']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomerDisputesIdAcceptClaimKey()
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
            (typeof client.v1.customer.disputes)[':id']['accept-claim']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.customer.disputes[':id']['accept-claim'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomerDisputesIdAdjudicateKey() {
  return ['v1', '/v1/customer/disputes/:id/adjudicate', 'POST'] as const
}

export function usePostV1CustomerDisputesIdAdjudicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['adjudicate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['adjudicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomerDisputesIdAdjudicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.customer.disputes)[':id']['adjudicate']['$post']>
        },
      ) => parseResponse(client.v1.customer.disputes[':id'].adjudicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomerDisputesIdRequireEvidenceKey() {
  return ['v1', '/v1/customer/disputes/:id/require-evidence', 'POST'] as const
}

export function usePostV1CustomerDisputesIdRequireEvidence<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.customer.disputes)[':id']['require-evidence']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['require-evidence']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomerDisputesIdRequireEvidenceKey()
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
            (typeof client.v1.customer.disputes)[':id']['require-evidence']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.customer.disputes[':id']['require-evidence'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomerDisputesIdEscalateKey() {
  return ['v1', '/v1/customer/disputes/:id/escalate', 'POST'] as const
}

export function usePostV1CustomerDisputesIdEscalate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['escalate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['escalate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomerDisputesIdEscalateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.customer.disputes)[':id']['escalate']['$post']>
        },
      ) => parseResponse(client.v1.customer.disputes[':id'].escalate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomerDisputesIdSendMessageKey() {
  return ['v1', '/v1/customer/disputes/:id/send-message', 'POST'] as const
}

export function usePostV1CustomerDisputesIdSendMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['send-message']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['send-message']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomerDisputesIdSendMessageKey()
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
            (typeof client.v1.customer.disputes)[':id']['send-message']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.customer.disputes[':id']['send-message'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomerDisputesIdMakeOfferKey() {
  return ['v1', '/v1/customer/disputes/:id/make-offer', 'POST'] as const
}

export function usePostV1CustomerDisputesIdMakeOffer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['make-offer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['make-offer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomerDisputesIdMakeOfferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.customer.disputes)[':id']['make-offer']['$post']>
        },
      ) =>
        parseResponse(client.v1.customer.disputes[':id']['make-offer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomerDisputesIdAcceptOfferKey() {
  return ['v1', '/v1/customer/disputes/:id/accept-offer', 'POST'] as const
}

export function usePostV1CustomerDisputesIdAcceptOffer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['accept-offer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['accept-offer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomerDisputesIdAcceptOfferKey()
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
            (typeof client.v1.customer.disputes)[':id']['accept-offer']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.customer.disputes[':id']['accept-offer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomerDisputesIdDenyOfferKey() {
  return ['v1', '/v1/customer/disputes/:id/deny-offer', 'POST'] as const
}

export function usePostV1CustomerDisputesIdDenyOffer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['deny-offer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['deny-offer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomerDisputesIdDenyOfferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.customer.disputes)[':id']['deny-offer']['$post']>
        },
      ) =>
        parseResponse(client.v1.customer.disputes[':id']['deny-offer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomerDisputesIdAcknowledgeReturnItemKey() {
  return ['v1', '/v1/customer/disputes/:id/acknowledge-return-item', 'POST'] as const
}

export function usePostV1CustomerDisputesIdAcknowledgeReturnItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.customer.disputes)[':id']['acknowledge-return-item']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.customer.disputes)[':id']['acknowledge-return-item']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomerDisputesIdAcknowledgeReturnItemKey()
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
            (typeof client.v1.customer.disputes)[':id']['acknowledge-return-item']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.customer.disputes[':id']['acknowledge-return-item'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomerDisputesIdProvideSupportingInfoKey() {
  return ['v1', '/v1/customer/disputes/:id/provide-supporting-info', 'POST'] as const
}

export function usePostV1CustomerDisputesIdProvideSupportingInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.customer.disputes)[':id']['provide-supporting-info']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.customer.disputes)[':id']['provide-supporting-info']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomerDisputesIdProvideSupportingInfoKey()
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
            (typeof client.v1.customer.disputes)[':id']['provide-supporting-info']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.customer.disputes[':id']['provide-supporting-info'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
