import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDeploymentsKey() {
  return ['deployments'] as const
}

export function getPostDeploymentsDeploymentIdChatCompletionsMutationKey() {
  return ['deployments', '/deployments/:deployment-id/chat/completions', 'POST'] as const
}

export function getPostDeploymentsDeploymentIdChatCompletionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deployments)[':deployment-id']['chat']['completions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.deployments)[':deployment-id']['chat']['completions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeploymentsDeploymentIdChatCompletionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deployments)[':deployment-id']['chat']['completions']['$post']
      >,
    ) {
      return parseResponse(
        client.deployments[':deployment-id'].chat.completions.$post(args, options),
      )
    },
  })
}

export function usePostDeploymentsDeploymentIdChatCompletions<
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
                  (typeof client.deployments)[':deployment-id']['chat']['completions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.deployments)[':deployment-id']['chat']['completions']['$post']
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
  const mutationDefaults = getPostDeploymentsDeploymentIdChatCompletionsMutationOptions<
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
