import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApmclKey() {
  return ['apmcl'] as const
}

export function getPostApmclCertificateKey() {
  return ['apmcl', '/apmcl/certificate', 'POST'] as const
}

export function usePostApmclCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apmcl.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.apmcl.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApmclCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.apmcl.certificate.$post> }) =>
        parseResponse(client.apmcl.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
