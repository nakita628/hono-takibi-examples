import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSeldonKey() {
  return ['seldon'] as const
}

export function getPostSeldonNamespaceDeploymentApiV10FeedbackKey() {
  return ['seldon', '/seldon/:namespace/:deployment/api/v1.0/feedback', 'POST'] as const
}

export function usePostSeldonNamespaceDeploymentApiV10Feedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.seldon)[':namespace'][':deployment']['api']['v1.0']['feedback']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSeldonNamespaceDeploymentApiV10FeedbackKey()
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
            (typeof client.seldon)[':namespace'][':deployment']['api']['v1.0']['feedback']['$post']
          >
        },
      ) =>
        parseResponse(
          client.seldon[':namespace'][':deployment'].api['v1.0'].feedback.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSeldonNamespaceDeploymentApiV10PredictionsKey() {
  return ['seldon', '/seldon/:namespace/:deployment/api/v1.0/predictions', 'POST'] as const
}

export function usePostSeldonNamespaceDeploymentApiV10Predictions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.seldon)[':namespace'][':deployment']['api']['v1.0']['predictions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSeldonNamespaceDeploymentApiV10PredictionsKey()
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
            (typeof client.seldon)[':namespace'][':deployment']['api']['v1.0']['predictions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.seldon[':namespace'][':deployment'].api['v1.0'].predictions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
