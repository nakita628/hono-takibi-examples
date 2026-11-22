import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSkmstKey() {
  return ['skmst'] as const
}

export function getPostSkmstCertificateKey() {
  return ['skmst', '/skmst/certificate', 'POST'] as const
}

export function usePostSkmstCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skmst.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.skmst.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSkmstCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.skmst.certificate.$post> }) =>
        parseResponse(client.skmst.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
