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

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV1CertificatesKey() {
  return ['v1', '/v1/certificates', 'POST'] as const
}

export function usePostV1Certificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.certificates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.certificates.$post> }) =>
        parseResponse(client.v1.certificates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CertificatesValidateKey() {
  return ['v1', '/v1/certificates/validate', 'POST'] as const
}

export function usePostV1CertificatesValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.certificates.validate.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.certificates.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CertificatesValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.certificates.validate.$post> },
      ) => parseResponse(client.v1.certificates.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CertificatesCertificateIdKey(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['$get']>,
) {
  return ['v1', '/v1/certificates/:certificateId', args] as const
}

export function useGetV1CertificatesCertificateId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['$get']>>
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
        ? getGetV1CertificatesCertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.certificates[':certificateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CertificatesCertificateId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['$get']>>
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
        ? getGetV1CertificatesCertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.certificates[':certificateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CertificatesCertificateIdActionsKey(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>,
) {
  return ['v1', '/v1/certificates/:certificateId/actions', args] as const
}

export function useGetV1CertificatesCertificateIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>
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
        ? getGetV1CertificatesCertificateIdActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.certificates[':certificateId'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CertificatesCertificateIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>
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
        ? getGetV1CertificatesCertificateIdActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['actions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.certificates[':certificateId'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CertificatesCertificateIdCallbackKey(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>,
) {
  return ['v1', '/v1/certificates/:certificateId/callback', args] as const
}

export function useGetV1CertificatesCertificateIdCallback<TError = unknown>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>
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
        ? getGetV1CertificatesCertificateIdCallbackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.certificates[':certificateId'].callback.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CertificatesCertificateIdCallback<TError = unknown>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>
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
        ? getGetV1CertificatesCertificateIdCallbackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['callback']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.certificates[':certificateId'].callback.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1CertificatesCertificateIdCallbackKey() {
  return ['v1', '/v1/certificates/:certificateId/callback', 'PUT'] as const
}

export function usePutV1CertificatesCertificateIdCallback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['callback']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1CertificatesCertificateIdCallbackKey()
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
            (typeof client.v1.certificates)[':certificateId']['callback']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.certificates[':certificateId'].callback.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CertificatesCertificateIdCallbackKey() {
  return ['v1', '/v1/certificates/:certificateId/callback', 'DELETE'] as const
}

export function useDeleteV1CertificatesCertificateIdCallback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['callback']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.certificates)[':certificateId']['callback']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CertificatesCertificateIdCallbackKey()
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
            (typeof client.v1.certificates)[':certificateId']['callback']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.certificates[':certificateId'].callback.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CertificatesCertificateIdCancelKey() {
  return ['v1', '/v1/certificates/:certificateId/cancel', 'POST'] as const
}

export function usePostV1CertificatesCertificateIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['cancel']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.certificates)[':certificateId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CertificatesCertificateIdCancelKey()
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
            (typeof client.v1.certificates)[':certificateId']['cancel']['$post']
          >
        },
      ) => parseResponse(client.v1.certificates[':certificateId'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CertificatesCertificateIdDownloadKey(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>,
) {
  return ['v1', '/v1/certificates/:certificateId/download', args] as const
}

export function useGetV1CertificatesCertificateIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>
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
        ? getGetV1CertificatesCertificateIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.certificates[':certificateId'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CertificatesCertificateIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>
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
        ? getGetV1CertificatesCertificateIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.certificates[':certificateId'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CertificatesCertificateIdEmailHistoryKey(
  args: InferRequestType<
    (typeof client.v1.certificates)[':certificateId']['email']['history']['$get']
  >,
) {
  return ['v1', '/v1/certificates/:certificateId/email/history', args] as const
}

export function useGetV1CertificatesCertificateIdEmailHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.certificates)[':certificateId']['email']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.certificates)[':certificateId']['email']['history']['$get']
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
        ? getGetV1CertificatesCertificateIdEmailHistoryKey(args)
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
                (typeof client.v1.certificates)[':certificateId']['email']['history']['$get']
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
          client.v1.certificates[':certificateId'].email.history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CertificatesCertificateIdEmailHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.certificates)[':certificateId']['email']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.certificates)[':certificateId']['email']['history']['$get']
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
        ? getGetV1CertificatesCertificateIdEmailHistoryKey(args)
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
                (typeof client.v1.certificates)[':certificateId']['email']['history']['$get']
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
          client.v1.certificates[':certificateId'].email.history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1CertificatesCertificateIdEmailResendEmailAddressKey() {
  return ['v1', '/v1/certificates/:certificateId/email/resend/:emailAddress', 'POST'] as const
}

export function usePostV1CertificatesCertificateIdEmailResendEmailAddress<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.certificates)[':certificateId']['email']['resend'][':emailAddress']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.certificates)[':certificateId']['email']['resend'][':emailAddress']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CertificatesCertificateIdEmailResendEmailAddressKey()
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
            (typeof client.v1.certificates)[':certificateId']['email']['resend'][':emailAddress']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.certificates[':certificateId'].email.resend[':emailAddress'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CertificatesCertificateIdEmailEmailIdResendKey() {
  return ['v1', '/v1/certificates/:certificateId/email/:emailId/resend', 'POST'] as const
}

export function usePostV1CertificatesCertificateIdEmailEmailIdResend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CertificatesCertificateIdEmailEmailIdResendKey()
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
            (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.certificates[':certificateId'].email[':emailId'].resend.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CertificatesCertificateIdEmailEmailIdResendEmailAddressKey() {
  return [
    'v1',
    '/v1/certificates/:certificateId/email/:emailId/resend/:emailAddress',
    'POST',
  ] as const
}

export function usePostV1CertificatesCertificateIdEmailEmailIdResendEmailAddress<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend'][':emailAddress']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend'][':emailAddress']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CertificatesCertificateIdEmailEmailIdResendEmailAddressKey()
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
            (typeof client.v1.certificates)[':certificateId']['email'][':emailId']['resend'][':emailAddress']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.certificates[':certificateId'].email[':emailId'].resend[':emailAddress'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CertificatesCertificateIdReissueKey() {
  return ['v1', '/v1/certificates/:certificateId/reissue', 'POST'] as const
}

export function usePostV1CertificatesCertificateIdReissue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['reissue']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.certificates)[':certificateId']['reissue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CertificatesCertificateIdReissueKey()
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
            (typeof client.v1.certificates)[':certificateId']['reissue']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.certificates[':certificateId'].reissue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CertificatesCertificateIdRenewKey() {
  return ['v1', '/v1/certificates/:certificateId/renew', 'POST'] as const
}

export function usePostV1CertificatesCertificateIdRenew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.certificates)[':certificateId']['renew']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.certificates)[':certificateId']['renew']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CertificatesCertificateIdRenewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.certificates)[':certificateId']['renew']['$post']>
        },
      ) => parseResponse(client.v1.certificates[':certificateId'].renew.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CertificatesCertificateIdRevokeKey() {
  return ['v1', '/v1/certificates/:certificateId/revoke', 'POST'] as const
}

export function usePostV1CertificatesCertificateIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['revoke']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.certificates)[':certificateId']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CertificatesCertificateIdRevokeKey()
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
            (typeof client.v1.certificates)[':certificateId']['revoke']['$post']
          >
        },
      ) => parseResponse(client.v1.certificates[':certificateId'].revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CertificatesCertificateIdSiteSealKey(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>,
) {
  return ['v1', '/v1/certificates/:certificateId/siteSeal', args] as const
}

export function useGetV1CertificatesCertificateIdSiteSeal<TError = unknown>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>
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
        ? getGetV1CertificatesCertificateIdSiteSealKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.certificates[':certificateId'].siteSeal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CertificatesCertificateIdSiteSeal<TError = unknown>(
  args: InferRequestType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>
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
        ? getGetV1CertificatesCertificateIdSiteSealKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.certificates)[':certificateId']['siteSeal']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.certificates[':certificateId'].siteSeal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CertificatesCertificateIdVerifyDomainControlKey() {
  return ['v1', '/v1/certificates/:certificateId/verifyDomainControl', 'POST'] as const
}

export function usePostV1CertificatesCertificateIdVerifyDomainControl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.certificates)[':certificateId']['verifyDomainControl']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.certificates)[':certificateId']['verifyDomainControl']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CertificatesCertificateIdVerifyDomainControlKey()
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
            (typeof client.v1.certificates)[':certificateId']['verifyDomainControl']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.certificates[':certificateId'].verifyDomainControl.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CertificatesKey(
  args: InferRequestType<typeof client.v2.certificates.$get>,
) {
  return ['v2', '/v2/certificates', args] as const
}

export function useGetV2Certificates<TError = unknown>(
  args: InferRequestType<typeof client.v2.certificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CertificatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Certificates<TError = unknown>(
  args: InferRequestType<typeof client.v2.certificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CertificatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CertificatesDownloadKey(
  args: InferRequestType<typeof client.v2.certificates.download.$get>,
) {
  return ['v2', '/v2/certificates/download', args] as const
}

export function useGetV2CertificatesDownload<TError = unknown>(
  args: InferRequestType<typeof client.v2.certificates.download.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.download.$get>>>
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
        ? getGetV2CertificatesDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.download.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.certificates.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CertificatesDownload<TError = unknown>(
  args: InferRequestType<typeof client.v2.certificates.download.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.download.$get>>>
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
        ? getGetV2CertificatesDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.download.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.certificates.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdCertificatesKey(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>,
) {
  return ['v2', '/v2/customers/:customerId/certificates', args] as const
}

export function useGetV2CustomersCustomerIdCertificates<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>>
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
        ? getGetV2CustomersCustomerIdCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customers[':customerId'].certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdCertificates<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>>
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
        ? getGetV2CustomersCustomerIdCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['certificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customers[':customerId'].certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
  >,
) {
  return ['v2', '/v2/customers/:customerId/certificates/acme/externalAccountBinding', args] as const
}

export function useGetV2CustomersCustomerIdCertificatesAcmeExternalAccountBinding<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
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
        ? getGetV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingKey(args)
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
                (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
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
          client.v2.customers[':customerId'].certificates.acme.externalAccountBinding.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdCertificatesAcmeExternalAccountBinding<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
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
        ? getGetV2CustomersCustomerIdCertificatesAcmeExternalAccountBindingKey(args)
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
                (typeof client.v2.customers)[':customerId']['certificates']['acme']['externalAccountBinding']['$get']
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
          client.v2.customers[':customerId'].certificates.acme.externalAccountBinding.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdCertificatesCertificateIdKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
  >,
) {
  return ['v2', '/v2/customers/:customerId/certificates/:certificateId', args] as const
}

export function useGetV2CustomersCustomerIdCertificatesCertificateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
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
        ? getGetV2CustomersCustomerIdCertificatesCertificateIdKey(args)
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
                (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
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
          client.v2.customers[':customerId'].certificates[':certificateId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdCertificatesCertificateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
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
        ? getGetV2CustomersCustomerIdCertificatesCertificateIdKey(args)
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
                (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['$get']
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
          client.v2.customers[':customerId'].certificates[':certificateId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
  >,
) {
  return [
    'v2',
    '/v2/customers/:customerId/certificates/:certificateId/domainVerifications',
    args,
  ] as const
}

export function useGetV2CustomersCustomerIdCertificatesCertificateIdDomainVerifications<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
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
        ? getGetV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsKey(args)
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
                (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
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
          client.v2.customers[':customerId'].certificates[
            ':certificateId'
          ].domainVerifications.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdCertificatesCertificateIdDomainVerifications<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
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
        ? getGetV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsKey(args)
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
                (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications']['$get']
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
          client.v2.customers[':customerId'].certificates[
            ':certificateId'
          ].domainVerifications.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
  >,
) {
  return [
    'v2',
    '/v2/customers/:customerId/certificates/:certificateId/domainVerifications/:domain',
    args,
  ] as const
}

export function useGetV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomain<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
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
        ? getGetV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainKey(args)
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
                (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
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
          client.v2.customers[':customerId'].certificates[':certificateId'].domainVerifications[
            ':domain'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomain<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
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
        ? getGetV2CustomersCustomerIdCertificatesCertificateIdDomainVerificationsDomainKey(args)
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
                (typeof client.v2.customers)[':customerId']['certificates'][':certificateId']['domainVerifications'][':domain']['$get']
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
          client.v2.customers[':customerId'].certificates[':certificateId'].domainVerifications[
            ':domain'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
