import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCapabilitiesV1FeatureFlagsServiceKey() {
  return ['capabilities.v1.FeatureFlagsService'] as const
}

export function getPostCapabilitiesV1FeatureFlagsServiceGetFeatureFlagsKey() {
  return [
    'capabilities.v1.FeatureFlagsService',
    '/capabilities.v1.FeatureFlagsService/GetFeatureFlags',
    'POST',
  ] as const
}

export function usePostCapabilitiesV1FeatureFlagsServiceGetFeatureFlags<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['capabilities.v1.FeatureFlagsService']['GetFeatureFlags']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['capabilities.v1.FeatureFlagsService']['GetFeatureFlags']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCapabilitiesV1FeatureFlagsServiceGetFeatureFlagsKey()
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
            (typeof client)['capabilities.v1.FeatureFlagsService']['GetFeatureFlags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['capabilities.v1.FeatureFlagsService'].GetFeatureFlags.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
