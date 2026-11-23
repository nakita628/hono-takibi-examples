import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDeploymentsKey() {
  return ['deployments'] as const
}

export function getPostDeploymentsDeploymentIdChatCompletionsKey() {
  return ['deployments', '/deployments/:deployment-id/chat/completions', 'POST'] as const
}

export function usePostDeploymentsDeploymentIdChatCompletions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.deployments)[':deployment-id']['chat']['completions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeploymentsDeploymentIdChatCompletionsKey()
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
            (typeof client.deployments)[':deployment-id']['chat']['completions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.deployments[':deployment-id'].chat.completions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
