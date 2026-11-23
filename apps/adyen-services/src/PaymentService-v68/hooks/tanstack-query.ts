import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
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

export function getPostAdjustAuthorisationMutationKey() {
  return ['adjustAuthorisation', '/adjustAuthorisation', 'POST'] as const
}

export function getPostAdjustAuthorisationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adjustAuthorisation.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.adjustAuthorisation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdjustAuthorisationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.adjustAuthorisation.$post>) {
      return parseResponse(client.adjustAuthorisation.$post(args, options))
    },
  })
}

export function usePostAdjustAuthorisation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.adjustAuthorisation.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.adjustAuthorisation.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdjustAuthorisationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthoriseMutationKey() {
  return ['authorise', '/authorise', 'POST'] as const
}

export function getPostAuthoriseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorise.$post>>>>>,
    TError,
    InferRequestType<typeof client.authorise.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthoriseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authorise.$post>) {
      return parseResponse(client.authorise.$post(args, options))
    },
  })
}

export function usePostAuthorise<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorise.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.authorise.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthoriseMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthorise3dMutationKey() {
  return ['authorise3d', '/authorise3d', 'POST'] as const
}

export function getPostAuthorise3dMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorise3d.$post>>>>>,
    TError,
    InferRequestType<typeof client.authorise3d.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorise3dMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authorise3d.$post>) {
      return parseResponse(client.authorise3d.$post(args, options))
    },
  })
}

export function usePostAuthorise3d<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorise3d.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.authorise3d.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthorise3dMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthorise3ds2MutationKey() {
  return ['authorise3ds2', '/authorise3ds2', 'POST'] as const
}

export function getPostAuthorise3ds2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorise3ds2.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.authorise3ds2.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorise3ds2MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authorise3ds2.$post>) {
      return parseResponse(client.authorise3ds2.$post(args, options))
    },
  })
}

export function usePostAuthorise3ds2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorise3ds2.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.authorise3ds2.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthorise3ds2MutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCancelMutationKey() {
  return ['cancel', '/cancel', 'POST'] as const
}

export function getPostCancelMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cancel.$post>>>>>,
    TError,
    InferRequestType<typeof client.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cancel.$post>) {
      return parseResponse(client.cancel.$post(args, options))
    },
  })
}

export function usePostCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cancel.$post>>>>>,
        TError,
        InferRequestType<typeof client.cancel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCancelMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCancelOrRefundMutationKey() {
  return ['cancelOrRefund', '/cancelOrRefund', 'POST'] as const
}

export function getPostCancelOrRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cancelOrRefund.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cancelOrRefund.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCancelOrRefundMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cancelOrRefund.$post>) {
      return parseResponse(client.cancelOrRefund.$post(args, options))
    },
  })
}

export function usePostCancelOrRefund<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cancelOrRefund.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.cancelOrRefund.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCancelOrRefundMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCaptureMutationKey() {
  return ['capture', '/capture', 'POST'] as const
}

export function getPostCaptureMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capture.$post>>>>>,
    TError,
    InferRequestType<typeof client.capture.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCaptureMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.capture.$post>) {
      return parseResponse(client.capture.$post(args, options))
    },
  })
}

export function usePostCapture<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.capture.$post>>>>>,
        TError,
        InferRequestType<typeof client.capture.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCaptureMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDonateMutationKey() {
  return ['donate', '/donate', 'POST'] as const
}

export function getPostDonateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.donate.$post>>>>>,
    TError,
    InferRequestType<typeof client.donate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDonateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.donate.$post>) {
      return parseResponse(client.donate.$post(args, options))
    },
  })
}

export function usePostDonate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.donate.$post>>>>>,
        TError,
        InferRequestType<typeof client.donate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDonateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetAuthenticationResultMutationKey() {
  return ['getAuthenticationResult', '/getAuthenticationResult', 'POST'] as const
}

export function getPostGetAuthenticationResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getAuthenticationResult.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getAuthenticationResult.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetAuthenticationResultMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getAuthenticationResult.$post>) {
      return parseResponse(client.getAuthenticationResult.$post(args, options))
    },
  })
}

export function usePostGetAuthenticationResult<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getAuthenticationResult.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getAuthenticationResult.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetAuthenticationResultMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRefundMutationKey() {
  return ['refund', '/refund', 'POST'] as const
}

export function getPostRefundMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refund.$post>>>>>,
    TError,
    InferRequestType<typeof client.refund.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRefundMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.refund.$post>) {
      return parseResponse(client.refund.$post(args, options))
    },
  })
}

export function usePostRefund<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refund.$post>>>>>,
        TError,
        InferRequestType<typeof client.refund.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRefundMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRetrieve3ds2ResultMutationKey() {
  return ['retrieve3ds2Result', '/retrieve3ds2Result', 'POST'] as const
}

export function getPostRetrieve3ds2ResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retrieve3ds2Result.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.retrieve3ds2Result.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRetrieve3ds2ResultMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.retrieve3ds2Result.$post>) {
      return parseResponse(client.retrieve3ds2Result.$post(args, options))
    },
  })
}

export function usePostRetrieve3ds2Result<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.retrieve3ds2Result.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.retrieve3ds2Result.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRetrieve3ds2ResultMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTechnicalCancelMutationKey() {
  return ['technicalCancel', '/technicalCancel', 'POST'] as const
}

export function getPostTechnicalCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technicalCancel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.technicalCancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTechnicalCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.technicalCancel.$post>) {
      return parseResponse(client.technicalCancel.$post(args, options))
    },
  })
}

export function usePostTechnicalCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technicalCancel.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.technicalCancel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTechnicalCancelMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostVoidPendingRefundMutationKey() {
  return ['voidPendingRefund', '/voidPendingRefund', 'POST'] as const
}

export function getPostVoidPendingRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voidPendingRefund.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.voidPendingRefund.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVoidPendingRefundMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.voidPendingRefund.$post>) {
      return parseResponse(client.voidPendingRefund.$post(args, options))
    },
  })
}

export function usePostVoidPendingRefund<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.voidPendingRefund.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.voidPendingRefund.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVoidPendingRefundMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
