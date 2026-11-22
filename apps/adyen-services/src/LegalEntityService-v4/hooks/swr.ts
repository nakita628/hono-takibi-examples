import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBusinessLinesKey() {
  return ['businessLines'] as const
}

export function getDocumentsKey() {
  return ['documents'] as const
}

export function getLegalEntitiesKey() {
  return ['legalEntities'] as const
}

export function getThemesKey() {
  return ['themes'] as const
}

export function getTransferInstrumentsKey() {
  return ['transferInstruments'] as const
}

export function getPostBusinessLinesKey() {
  return ['businessLines', '/businessLines', 'POST'] as const
}

export function usePostBusinessLines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businessLines.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.businessLines.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBusinessLinesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.businessLines.$post> }) =>
        parseResponse(client.businessLines.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessLinesIdKey(
  args: InferRequestType<(typeof client.businessLines)[':id']['$get']>,
) {
  return ['businessLines', '/businessLines/:id', args] as const
}

export function useGetBusinessLinesId<TError = unknown>(
  args: InferRequestType<(typeof client.businessLines)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.businessLines)[':id']['$get']>>>
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
        ? getGetBusinessLinesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.businessLines)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.businessLines[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessLinesId<TError = unknown>(
  args: InferRequestType<(typeof client.businessLines)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.businessLines)[':id']['$get']>>>
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
        ? getGetBusinessLinesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.businessLines)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.businessLines[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBusinessLinesIdKey() {
  return ['businessLines', '/businessLines/:id', 'DELETE'] as const
}

export function useDeleteBusinessLinesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.businessLines)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.businessLines)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBusinessLinesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.businessLines)[':id']['$delete']> },
      ) => parseResponse(client.businessLines[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBusinessLinesIdKey() {
  return ['businessLines', '/businessLines/:id', 'PATCH'] as const
}

export function usePatchBusinessLinesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.businessLines)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.businessLines)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBusinessLinesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.businessLines)[':id']['$patch']> },
      ) => parseResponse(client.businessLines[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsKey() {
  return ['documents', '/documents', 'POST'] as const
}

export function usePostDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.documents.$post> }) =>
        parseResponse(client.documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocumentsIdKey(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
) {
  return ['documents', '/documents/:id', args] as const
}

export function useGetDocumentsId<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDocumentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsId<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDocumentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDocumentsIdKey() {
  return ['documents', '/documents/:id', 'DELETE'] as const
}

export function useDeleteDocumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDocumentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.documents)[':id']['$delete']> },
      ) => parseResponse(client.documents[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDocumentsIdKey() {
  return ['documents', '/documents/:id', 'PATCH'] as const
}

export function usePatchDocumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDocumentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.documents)[':id']['$patch']> },
      ) => parseResponse(client.documents[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLegalEntitiesKey() {
  return ['legalEntities', '/legalEntities', 'POST'] as const
}

export function usePostLegalEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.legalEntities.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.legalEntities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.legalEntities.$post> }) =>
        parseResponse(client.legalEntities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLegalEntitiesIdKey(
  args: InferRequestType<(typeof client.legalEntities)[':id']['$get']>,
) {
  return ['legalEntities', '/legalEntities/:id', args] as const
}

export function useGetLegalEntitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.legalEntities)[':id']['$get']>>>
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
        ? getGetLegalEntitiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.legalEntities)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.legalEntities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalEntitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.legalEntities)[':id']['$get']>>>
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
        ? getGetLegalEntitiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.legalEntities)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.legalEntities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchLegalEntitiesIdKey() {
  return ['legalEntities', '/legalEntities/:id', 'PATCH'] as const
}

export function usePatchLegalEntitiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.legalEntities)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.legalEntities)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLegalEntitiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.legalEntities)[':id']['$patch']> },
      ) => parseResponse(client.legalEntities[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceKey(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
  >,
) {
  return [
    'legalEntities',
    '/legalEntities/:id/acceptedTermsOfServiceDocument/:termsofserviceacceptancereference',
    args,
  ] as const
}

export function useGetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
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
        ? getGetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceKey(
            args,
          )
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
                (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
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
          client.legalEntities[':id'].acceptedTermsOfServiceDocument[
            ':termsofserviceacceptancereference'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
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
        ? getGetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceKey(
            args,
          )
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
                (typeof client.legalEntities)[':id']['acceptedTermsOfServiceDocument'][':termsofserviceacceptancereference']['$get']
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
          client.legalEntities[':id'].acceptedTermsOfServiceDocument[
            ':termsofserviceacceptancereference'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLegalEntitiesIdBusinessLinesKey(
  args: InferRequestType<(typeof client.legalEntities)[':id']['businessLines']['$get']>,
) {
  return ['legalEntities', '/legalEntities/:id/businessLines', args] as const
}

export function useGetLegalEntitiesIdBusinessLines<TError = unknown>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['businessLines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.legalEntities)[':id']['businessLines']['$get']>>
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
        ? getGetLegalEntitiesIdBusinessLinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.legalEntities)[':id']['businessLines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.legalEntities[':id'].businessLines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalEntitiesIdBusinessLines<TError = unknown>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['businessLines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.legalEntities)[':id']['businessLines']['$get']>>
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
        ? getGetLegalEntitiesIdBusinessLinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.legalEntities)[':id']['businessLines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.legalEntities[':id'].businessLines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLegalEntitiesIdCheckTaxElectronicDeliveryConsentKey() {
  return ['legalEntities', '/legalEntities/:id/checkTaxElectronicDeliveryConsent', 'POST'] as const
}

export function usePostLegalEntitiesIdCheckTaxElectronicDeliveryConsent<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legalEntities)[':id']['checkTaxElectronicDeliveryConsent']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.legalEntities)[':id']['checkTaxElectronicDeliveryConsent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalEntitiesIdCheckTaxElectronicDeliveryConsentKey()
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
            (typeof client.legalEntities)[':id']['checkTaxElectronicDeliveryConsent']['$post']
          >
        },
      ) =>
        parseResponse(
          client.legalEntities[':id'].checkTaxElectronicDeliveryConsent.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLegalEntitiesIdCheckVerificationErrorsKey() {
  return ['legalEntities', '/legalEntities/:id/checkVerificationErrors', 'POST'] as const
}

export function usePostLegalEntitiesIdCheckVerificationErrors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.legalEntities)[':id']['checkVerificationErrors']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.legalEntities)[':id']['checkVerificationErrors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalEntitiesIdCheckVerificationErrorsKey()
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
            (typeof client.legalEntities)[':id']['checkVerificationErrors']['$post']
          >
        },
      ) =>
        parseResponse(
          client.legalEntities[':id'].checkVerificationErrors.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLegalEntitiesIdConfirmDataReviewKey() {
  return ['legalEntities', '/legalEntities/:id/confirmDataReview', 'POST'] as const
}

export function usePostLegalEntitiesIdConfirmDataReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.legalEntities)[':id']['confirmDataReview']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.legalEntities)[':id']['confirmDataReview']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalEntitiesIdConfirmDataReviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.legalEntities)[':id']['confirmDataReview']['$post']>
        },
      ) => parseResponse(client.legalEntities[':id'].confirmDataReview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLegalEntitiesIdOnboardingLinksKey() {
  return ['legalEntities', '/legalEntities/:id/onboardingLinks', 'POST'] as const
}

export function usePostLegalEntitiesIdOnboardingLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.legalEntities)[':id']['onboardingLinks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.legalEntities)[':id']['onboardingLinks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalEntitiesIdOnboardingLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.legalEntities)[':id']['onboardingLinks']['$post']>
        },
      ) => parseResponse(client.legalEntities[':id'].onboardingLinks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLegalEntitiesIdPciQuestionnairesKey(
  args: InferRequestType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>,
) {
  return ['legalEntities', '/legalEntities/:id/pciQuestionnaires', args] as const
}

export function useGetLegalEntitiesIdPciQuestionnaires<TError = unknown>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>>
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
        ? getGetLegalEntitiesIdPciQuestionnairesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.legalEntities[':id'].pciQuestionnaires.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalEntitiesIdPciQuestionnaires<TError = unknown>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>>
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
        ? getGetLegalEntitiesIdPciQuestionnairesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.legalEntities)[':id']['pciQuestionnaires']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.legalEntities[':id'].pciQuestionnaires.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesKey() {
  return [
    'legalEntities',
    '/legalEntities/:id/pciQuestionnaires/generatePciTemplates',
    'POST',
  ] as const
}

export function usePostLegalEntitiesIdPciQuestionnairesGeneratePciTemplates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legalEntities)[':id']['pciQuestionnaires']['generatePciTemplates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.legalEntities)[':id']['pciQuestionnaires']['generatePciTemplates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesKey()
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
            (typeof client.legalEntities)[':id']['pciQuestionnaires']['generatePciTemplates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.legalEntities[':id'].pciQuestionnaires.generatePciTemplates.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLegalEntitiesIdPciQuestionnairesSignPciTemplatesKey() {
  return ['legalEntities', '/legalEntities/:id/pciQuestionnaires/signPciTemplates', 'POST'] as const
}

export function usePostLegalEntitiesIdPciQuestionnairesSignPciTemplates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legalEntities)[':id']['pciQuestionnaires']['signPciTemplates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.legalEntities)[':id']['pciQuestionnaires']['signPciTemplates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalEntitiesIdPciQuestionnairesSignPciTemplatesKey()
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
            (typeof client.legalEntities)[':id']['pciQuestionnaires']['signPciTemplates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.legalEntities[':id'].pciQuestionnaires.signPciTemplates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLegalEntitiesIdPciQuestionnairesSigningRequiredKey() {
  return ['legalEntities', '/legalEntities/:id/pciQuestionnaires/signingRequired', 'POST'] as const
}

export function usePostLegalEntitiesIdPciQuestionnairesSigningRequired<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legalEntities)[':id']['pciQuestionnaires']['signingRequired']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.legalEntities)[':id']['pciQuestionnaires']['signingRequired']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalEntitiesIdPciQuestionnairesSigningRequiredKey()
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
            (typeof client.legalEntities)[':id']['pciQuestionnaires']['signingRequired']['$post']
          >
        },
      ) =>
        parseResponse(
          client.legalEntities[':id'].pciQuestionnaires.signingRequired.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLegalEntitiesIdPciQuestionnairesPciidKey(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']
  >,
) {
  return ['legalEntities', '/legalEntities/:id/pciQuestionnaires/:pciid', args] as const
}

export function useGetLegalEntitiesIdPciQuestionnairesPciid<TError = unknown>(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']
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
        ? getGetLegalEntitiesIdPciQuestionnairesPciidKey(args)
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
                (typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']
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
          client.legalEntities[':id'].pciQuestionnaires[':pciid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalEntitiesIdPciQuestionnairesPciid<TError = unknown>(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']
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
        ? getGetLegalEntitiesIdPciQuestionnairesPciidKey(args)
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
                (typeof client.legalEntities)[':id']['pciQuestionnaires'][':pciid']['$get']
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
          client.legalEntities[':id'].pciQuestionnaires[':pciid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostLegalEntitiesIdSetTaxElectronicDeliveryConsentKey() {
  return ['legalEntities', '/legalEntities/:id/setTaxElectronicDeliveryConsent', 'POST'] as const
}

export function usePostLegalEntitiesIdSetTaxElectronicDeliveryConsent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legalEntities)[':id']['setTaxElectronicDeliveryConsent']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.legalEntities)[':id']['setTaxElectronicDeliveryConsent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalEntitiesIdSetTaxElectronicDeliveryConsentKey()
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
            (typeof client.legalEntities)[':id']['setTaxElectronicDeliveryConsent']['$post']
          >
        },
      ) =>
        parseResponse(
          client.legalEntities[':id'].setTaxElectronicDeliveryConsent.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLegalEntitiesIdTermsOfServiceKey() {
  return ['legalEntities', '/legalEntities/:id/termsOfService', 'POST'] as const
}

export function usePostLegalEntitiesIdTermsOfService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.legalEntities)[':id']['termsOfService']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.legalEntities)[':id']['termsOfService']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalEntitiesIdTermsOfServiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.legalEntities)[':id']['termsOfService']['$post']>
        },
      ) => parseResponse(client.legalEntities[':id'].termsOfService.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidKey() {
  return [
    'legalEntities',
    '/legalEntities/:id/termsOfService/:termsofservicedocumentid',
    'PATCH',
  ] as const
}

export function usePatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.legalEntities)[':id']['termsOfService'][':termsofservicedocumentid']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.legalEntities)[':id']['termsOfService'][':termsofservicedocumentid']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidKey()
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
            (typeof client.legalEntities)[':id']['termsOfService'][':termsofservicedocumentid']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.legalEntities[':id'].termsOfService[':termsofservicedocumentid'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLegalEntitiesIdTermsOfServiceAcceptanceInfosKey(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']
  >,
) {
  return ['legalEntities', '/legalEntities/:id/termsOfServiceAcceptanceInfos', args] as const
}

export function useGetLegalEntitiesIdTermsOfServiceAcceptanceInfos<TError = unknown>(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']
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
        ? getGetLegalEntitiesIdTermsOfServiceAcceptanceInfosKey(args)
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
                (typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']
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
          client.legalEntities[':id'].termsOfServiceAcceptanceInfos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalEntitiesIdTermsOfServiceAcceptanceInfos<TError = unknown>(
  args: InferRequestType<
    (typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']
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
        ? getGetLegalEntitiesIdTermsOfServiceAcceptanceInfosKey(args)
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
                (typeof client.legalEntities)[':id']['termsOfServiceAcceptanceInfos']['$get']
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
          client.legalEntities[':id'].termsOfServiceAcceptanceInfos.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLegalEntitiesIdTermsOfServiceStatusKey(
  args: InferRequestType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>,
) {
  return ['legalEntities', '/legalEntities/:id/termsOfServiceStatus', args] as const
}

export function useGetLegalEntitiesIdTermsOfServiceStatus<TError = unknown>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>
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
        ? getGetLegalEntitiesIdTermsOfServiceStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.legalEntities[':id'].termsOfServiceStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalEntitiesIdTermsOfServiceStatus<TError = unknown>(
  args: InferRequestType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>
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
        ? getGetLegalEntitiesIdTermsOfServiceStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.legalEntities)[':id']['termsOfServiceStatus']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.legalEntities[':id'].termsOfServiceStatus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetThemesKey() {
  return ['themes', '/themes'] as const
}

export function useGetThemes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.themes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetThemesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.themes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.themes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThemes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.themes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetThemesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.themes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.themes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetThemesIdKey(args: InferRequestType<(typeof client.themes)[':id']['$get']>) {
  return ['themes', '/themes/:id', args] as const
}

export function useGetThemesId<TError = unknown>(
  args: InferRequestType<(typeof client.themes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.themes)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetThemesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.themes)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.themes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThemesId<TError = unknown>(
  args: InferRequestType<(typeof client.themes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.themes)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetThemesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.themes)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.themes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTransferInstrumentsKey() {
  return ['transferInstruments', '/transferInstruments', 'POST'] as const
}

export function usePostTransferInstruments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transferInstruments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transferInstruments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferInstrumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transferInstruments.$post> }) =>
        parseResponse(client.transferInstruments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransferInstrumentsIdKey(
  args: InferRequestType<(typeof client.transferInstruments)[':id']['$get']>,
) {
  return ['transferInstruments', '/transferInstruments/:id', args] as const
}

export function useGetTransferInstrumentsId<TError = unknown>(
  args: InferRequestType<(typeof client.transferInstruments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transferInstruments)[':id']['$get']>>
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
        ? getGetTransferInstrumentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transferInstruments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transferInstruments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransferInstrumentsId<TError = unknown>(
  args: InferRequestType<(typeof client.transferInstruments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transferInstruments)[':id']['$get']>>
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
        ? getGetTransferInstrumentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transferInstruments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transferInstruments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTransferInstrumentsIdKey() {
  return ['transferInstruments', '/transferInstruments/:id', 'DELETE'] as const
}

export function useDeleteTransferInstrumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transferInstruments)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.transferInstruments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTransferInstrumentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.transferInstruments)[':id']['$delete']> },
      ) => parseResponse(client.transferInstruments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTransferInstrumentsIdKey() {
  return ['transferInstruments', '/transferInstruments/:id', 'PATCH'] as const
}

export function usePatchTransferInstrumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transferInstruments)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transferInstruments)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTransferInstrumentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.transferInstruments)[':id']['$patch']> },
      ) => parseResponse(client.transferInstruments[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLegalEntitiesIdRequestPeriodicReviewKey() {
  return ['legalEntities', '/legalEntities/:id/requestPeriodicReview', 'POST'] as const
}

export function usePostLegalEntitiesIdRequestPeriodicReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.legalEntities)[':id']['requestPeriodicReview']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.legalEntities)[':id']['requestPeriodicReview']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalEntitiesIdRequestPeriodicReviewKey()
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
            (typeof client.legalEntities)[':id']['requestPeriodicReview']['$post']
          >
        },
      ) =>
        parseResponse(client.legalEntities[':id'].requestPeriodicReview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
