import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCvcerKey() {
  return ['cvcer'] as const
}

export function getPostCvcerCertificateKey() {
  return ['cvcer', '/cvcer/certificate', 'POST'] as const
}

export function usePostCvcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cvcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cvcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCvcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cvcer.certificate.$post> }) =>
        parseResponse(client.cvcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
