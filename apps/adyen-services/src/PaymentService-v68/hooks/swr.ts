import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdjustAuthorisationKey() {
  return ['adjustAuthorisation'] as const
}

export function getAuthoriseKey() {
  return ['authorise'] as const
}

export function getAuthorise3dKey() {
  return ['authorise3d'] as const
}

export function getAuthorise3ds2Key() {
  return ['authorise3ds2'] as const
}

export function getCancelKey() {
  return ['cancel'] as const
}

export function getCancelOrRefundKey() {
  return ['cancelOrRefund'] as const
}

export function getCaptureKey() {
  return ['capture'] as const
}

export function getDonateKey() {
  return ['donate'] as const
}

export function getGetAuthenticationResultKey() {
  return ['getAuthenticationResult'] as const
}

export function getRefundKey() {
  return ['refund'] as const
}

export function getRetrieve3ds2ResultKey() {
  return ['retrieve3ds2Result'] as const
}

export function getTechnicalCancelKey() {
  return ['technicalCancel'] as const
}

export function getVoidPendingRefundKey() {
  return ['voidPendingRefund'] as const
}

export function getPostAdjustAuthorisationKey() {
  return ['adjustAuthorisation', '/adjustAuthorisation', 'POST'] as const
}

export function usePostAdjustAuthorisation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adjustAuthorisation.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.adjustAuthorisation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdjustAuthorisationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.adjustAuthorisation.$post> }) =>
        parseResponse(client.adjustAuthorisation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthoriseKey() {
  return ['authorise', '/authorise', 'POST'] as const
}

export function usePostAuthorise<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorise.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.authorise.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthoriseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.authorise.$post> }) =>
        parseResponse(client.authorise.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthorise3dKey() {
  return ['authorise3d', '/authorise3d', 'POST'] as const
}

export function usePostAuthorise3d<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorise3d.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.authorise3d.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorise3dKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.authorise3d.$post> }) =>
        parseResponse(client.authorise3d.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthorise3ds2Key() {
  return ['authorise3ds2', '/authorise3ds2', 'POST'] as const
}

export function usePostAuthorise3ds2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorise3ds2.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.authorise3ds2.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorise3ds2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.authorise3ds2.$post> }) =>
        parseResponse(client.authorise3ds2.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCancelKey() {
  return ['cancel', '/cancel', 'POST'] as const
}

export function usePostCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cancel.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cancel.$post> }) =>
        parseResponse(client.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCancelOrRefundKey() {
  return ['cancelOrRefund', '/cancelOrRefund', 'POST'] as const
}

export function usePostCancelOrRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cancelOrRefund.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cancelOrRefund.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCancelOrRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cancelOrRefund.$post> }) =>
        parseResponse(client.cancelOrRefund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCaptureKey() {
  return ['capture', '/capture', 'POST'] as const
}

export function usePostCapture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capture.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.capture.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCaptureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.capture.$post> }) =>
        parseResponse(client.capture.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDonateKey() {
  return ['donate', '/donate', 'POST'] as const
}

export function usePostDonate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.donate.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.donate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDonateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.donate.$post> }) =>
        parseResponse(client.donate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetAuthenticationResultKey() {
  return ['getAuthenticationResult', '/getAuthenticationResult', 'POST'] as const
}

export function usePostGetAuthenticationResult<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getAuthenticationResult.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getAuthenticationResult.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetAuthenticationResultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getAuthenticationResult.$post> },
      ) => parseResponse(client.getAuthenticationResult.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRefundKey() {
  return ['refund', '/refund', 'POST'] as const
}

export function usePostRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refund.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.refund.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.refund.$post> }) =>
        parseResponse(client.refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRetrieve3ds2ResultKey() {
  return ['retrieve3ds2Result', '/retrieve3ds2Result', 'POST'] as const
}

export function usePostRetrieve3ds2Result<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retrieve3ds2Result.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.retrieve3ds2Result.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRetrieve3ds2ResultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.retrieve3ds2Result.$post> }) =>
        parseResponse(client.retrieve3ds2Result.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTechnicalCancelKey() {
  return ['technicalCancel', '/technicalCancel', 'POST'] as const
}

export function usePostTechnicalCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technicalCancel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.technicalCancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTechnicalCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.technicalCancel.$post> }) =>
        parseResponse(client.technicalCancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVoidPendingRefundKey() {
  return ['voidPendingRefund', '/voidPendingRefund', 'POST'] as const
}

export function usePostVoidPendingRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voidPendingRefund.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.voidPendingRefund.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVoidPendingRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.voidPendingRefund.$post> }) =>
        parseResponse(client.voidPendingRefund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
