import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSeldonKey() {
  return ['seldon'] as const
}

export function getPostSeldonNamespaceDeploymentApiV10FeedbackMutationKey() {
  return ['seldon', '/seldon/:namespace/:deployment/api/v1.0/feedback', 'POST'] as const
}

export function getPostSeldonNamespaceDeploymentApiV10FeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.seldon)[':namespace'][':deployment']['api']['v1.0']['feedback']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.seldon)[':namespace'][':deployment']['api']['v1.0']['feedback']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSeldonNamespaceDeploymentApiV10FeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.seldon)[':namespace'][':deployment']['api']['v1.0']['feedback']['$post']
      >,
    ) {
      return parseResponse(
        client.seldon[':namespace'][':deployment'].api['v1.0'].feedback.$post(args, options),
      )
    },
  })
}

export function usePostSeldonNamespaceDeploymentApiV10Feedback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.seldon)[':namespace'][':deployment']['api']['v1.0']['feedback']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.seldon)[':namespace'][':deployment']['api']['v1.0']['feedback']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSeldonNamespaceDeploymentApiV10FeedbackMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSeldonNamespaceDeploymentApiV10PredictionsMutationKey() {
  return ['seldon', '/seldon/:namespace/:deployment/api/v1.0/predictions', 'POST'] as const
}

export function getPostSeldonNamespaceDeploymentApiV10PredictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.seldon)[':namespace'][':deployment']['api']['v1.0']['predictions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.seldon)[':namespace'][':deployment']['api']['v1.0']['predictions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSeldonNamespaceDeploymentApiV10PredictionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.seldon)[':namespace'][':deployment']['api']['v1.0']['predictions']['$post']
      >,
    ) {
      return parseResponse(
        client.seldon[':namespace'][':deployment'].api['v1.0'].predictions.$post(args, options),
      )
    },
  })
}

export function usePostSeldonNamespaceDeploymentApiV10Predictions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.seldon)[':namespace'][':deployment']['api']['v1.0']['predictions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.seldon)[':namespace'][':deployment']['api']['v1.0']['predictions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSeldonNamespaceDeploymentApiV10PredictionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
